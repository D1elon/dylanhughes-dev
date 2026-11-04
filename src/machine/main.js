// The home page as a pinball machine. Scrolling flies a camera from the backbox down the playfield; each stop
// frames a part of the machine full-screen, with the site's copy set over it and tied to the part by a callout.
// The page underneath is ordinary HTML, so it reads and navigates the same without any of this.
import * as THREE from 'three';
import { createStage, pickQuality } from './stage.js';
import { makeMaterials } from './materials.js';
import { buildMachine, BACKBOX, CABINET } from './machine.js';
import { drawPlayfield, drawBackglass, drawApronCard, drawTargetFace, drawCabinetSide, drawSlingPlastic, drawPlasticPrint, drawApron, drawPopDecal, drawScreenPhoto, drawPlayerCard, loadArtFonts } from './art.js';
import { Director } from './director.js';
import { Show } from './show.js';
import { Hud } from './hud.js';
import { Exploded } from './explode.js';
import { SLINGS, INLANE_GUIDES } from './layout.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = t => t * t * (3 - 2 * t);
const DEG = Math.PI / 180;

const ACTIONS = {
  'ramp-deadbounce': { label: 'Read the Deadbounce case study', href: '/work/deadbounce.html' },
  'ramp-tiptop': { label: 'Read the Tip Top case study', href: '/work/tip-top-pinball.html' },
  'pop-0': { label: 'Fire the pop bumper' },
  'pop-1': { label: 'Fire the pop bumper' },
  'pop-2': { label: 'Fire the pop bumper' },
  'target-0': { label: 'Hit the target' },
  'target-1': { label: 'Hit the target' },
  'target-2': { label: 'Hit the target' },
  'sling-left': { label: 'Kick the slingshot' },
  'sling-right': { label: 'Kick the slingshot' },
  'flip-left': { label: 'Flip' },
  'flip-right': { label: 'Flip' },
  plunger: { label: 'Launch a ball back to the top' },
  dmd: { label: 'Next display scene' },
  portrait: { label: 'Fire the pops' },
};

// Camera stops, in playfield millimetres. `side` is where the copy sits; the part is framed in the rest of the
// screen. `fit` is the box (metres) kept in frame: small numbers bring the camera close.
const STOPS = {
  hero: { az: -18, el: 5, fit: [0.84, 1.02], side: 'left', fov: 30 },
  // The case studies: the backbox's LCD showing the work, seen from over each ramp's side of the playfield, with the
  // top of that ramp, where it hands the ball to its wireform, along the bottom of the frame. `glass` places the
  // target from the glass's middle ([across, up] in metres).
  // On tall screens, where the scene has only the top of the screen, the screen fills it on its own.
  // `sharp` holds the whole screen in focus.
  deadbounce: { glass: [-0.05, -0.25], az: -18, el: 18, fit: [0.7, 0.96], side: 'right', lift: 6, sharp: 1, tall: { glass: [0, -0.03], az: -12, el: 8, fit: [0.64, 0.5] } },
  tiptop: { glass: [0.05, -0.25], az: 18, el: 18, fit: [0.7, 0.96], side: 'left', lift: 6, sharp: 1, tall: { glass: [0, -0.03], az: 12, el: 8, fit: [0.64, 0.5] } },
  // About: the back pop bumper, its parts lifting clear in front of the speaker panel, under the player card on the
  // LCD. A long lens keeps the bumper and the screen behind it close in size.
  about: { at: [236, 935, 350], az: 14, el: 13, fit: [0.62, 0.92], fov: 22, side: 'right', lift: 10, sharp: 1, tall: { at: [236, 960, 400], fit: [0.56, 0.74] } },
  // Skills: the four lane inserts across the field above the slings, Web to Fab. The camera arrives on all four, then
  // tours them (SKILL_TOUR).
  skills: { at: [237, 384, 0], az: 0, el: 50, fit: [0.47, 0.13], side: 'left', lift: 6 },
  // Experience: the five top lanes and their years, from the player's end over the pops.
  experience: { at: [235, 988, 8], az: -4, el: 52, fit: [0.38, 0.17], side: 'right', lift: 12 },
  // Contact: the flippers and the shoot-again shield between them.
  contact: { at: [237, 165, 22], az: -8, el: 47, fit: [0.27, 0.17], side: 'left', lift: 8 },
};

// The Skills tour. As the section scrolls by, the camera pushes in on each lane insert in turn as it lights (show.js
// lights insert i at 0.12 + 0.2i of the hold), holds on it, pulls back a little to cross the field between the
// inlanes, and after Fab pulls back out to all four before moving on. `stops` are each insert's [arrive, leave] in the
// station's hold progress. Each wireform drops its ball into an inlane over that lane's insert, so the close-ups look
// down steeply from the player's end: between the wireform's spreading rails and over its dead end, which frames the
// shot from below.
const SKILL_TOUR = {
  stops: [0.1, 0.3, 0.5, 0.7].map(a => [a, a + 0.1]),
  inserts: [[26, 386], [69.4, 386], [404.95, 386], [448.35, 386]],
  close: { el: 58, fit: [0.13, 0.07], side: 'left', fov: 30 },
  swing: 7,
};
// Where the tour is at hold progress p: `k` the insert in view (fractional while crossing), `zoom` 0 (all four) to
// 1 (close), and `cross` 0–1–0 over each crossing.
function skillTour(p) {
  const s = SKILL_TOUR.stops, last = s.length - 1;
  const zoom = smooth(clamp(p / s[0][0])) * (1 - smooth(clamp((p - s[last][1]) / (1 - s[last][1]))));
  let k = 0, cross = 0;
  for (let i = 0; i < last; i++) {
    const t = clamp((p - s[i][1]) / (s[i + 1][0] - s[i][1]));
    if (t > 0) { k = i + smooth(t); cross = Math.sin(Math.PI * t); }
  }
  return { k, zoom, cross };
}

// The backbox LCD's pictures, one per section that has one, each up while its section is on: a case study's
// screenshot, cropped to the screen and held on `focus`, or About's player card. A click on a case study's picture
// opens it.
const PICTURES = {
  deadbounce: { url: '/assets/img/deadbounce-origin.jpg', focus: [0.5, 0.5], action: 'ramp-deadbounce' },
  tiptop: { url: '/assets/img/tiptop.jpg', focus: [0.5, 0], action: 'ramp-tiptop' },
  about: { url: '/assets/img/dylan.jpg', card: true, action: 'portrait' },
};

async function start() {
  // The page's head script decides: without WebGL 2, with data saving on or at ?flat, the page stays plain.
  if (!root.classList.contains('machine')) return;
  const canvas = $('[data-stage]');
  const stations = $$('[data-station]');
  if (!canvas || !stations.length) throw new Error('No stage on this page');
  const quality = pickQuality();
  await loadArtFonts();
  performance.mark('machine:fonts');

  // Artwork.
  const art = {
    playfield: drawPlayfield(quality.playfieldScale),
    backglass: drawBackglass(quality.low ? 1320 : 2048),
    cabinetSide: drawCabinetSide(2048, 768, { frontBottom: (CABINET.top - CABINET.bottom) / (CABINET.top - CABINET.bottom + (CABINET.front - CABINET.back) * Math.tan(6.5 * DEG)) }),
    plastics: SLINGS.map(sl => drawSlingPlastic(sl)),
    inlane: INLANE_GUIDES.map(g => ({ plate: drawPlasticPrint(g.plate.outline), cover: drawPlasticPrint(g.cover.outline, { mark: true }) })),
    apron: drawApron(quality.low ? 1024 : 2048),
    popDecal: drawPopDecal(256),
    cards: { instructions: drawApronCard('instructions', 625), free: drawApronCard('free', 625) },
    target: drawTargetFace(160),
  };

  // The dot-matrix display draws into an offscreen canvas that becomes the backbox's texture.
  const dmdCanvas = document.createElement('canvas');
  const dmdLabel = $('[data-dmd-label]'), dmdCount = $('[data-dmd-count]');
  const dmd = new window.DMD(dmdCanvas, {
    reduced,
    width: quality.low ? 640 : 896, // 5 or 7 pixels a dot: the texture is re-uploaded on every paint
    onScene: (name, i, n) => { if (dmdLabel) dmdLabel.textContent = name; if (dmdCount && n > 1) dmdCount.textContent = `${i} / ${n}`; },
  });

  performance.mark('machine:art');
  const stage = createStage(canvas, quality);
  const M = makeMaterials(stage.envMap);
  const anisotropy = Math.min(quality.anisotropy, stage.renderer.capabilities.getMaxAnisotropy());
  const h = buildMachine({ M, art, dmdCanvas, anisotropy, maxAnisotropy: stage.renderer.capabilities.getMaxAnisotropy() });
  performance.mark('machine:built');
  stage.scene.add(h.root);
  if (stage.ao) stage.ao.setSceneClipBox(new THREE.Box3().setFromObject(h.root).expandByScalar(0.03));
  dmd.onPaint = () => { h.dmd.texture.needsUpdate = true; };
  const show = new Show(h, { reduced });

  // Camera stops, one per station in page order.
  const W = (x, y, hh = 0) => h.toWorld(x, y, hh);
  h.backbox.updateMatrixWorld(true);
  const heroTarget = h.backbox.localToWorld(new THREE.Vector3(0, (BACKBOX.dmdY - BACKBOX.dmdH / 2 + BACKBOX.glassY + BACKBOX.glassH) / 2, 0));
  const glassAt = ([x, y]) => h.backbox.localToWorld(new THREE.Vector3(x, BACKBOX.glassY + BACKBOX.glassH / 2 + y, 0));
  const pose = name => {
    const s = STOPS[name];
    const target = p => (p.at ? W(...p.at) : p.glass ? glassAt(p.glass) : heroTarget);
    return { ...s, target: target(s), ...(s.tall && { tall: { ...s.tall, target: target({ ...s, ...s.tall }) } }) };
  };
  const names = stations.map(el => el.dataset.station);
  const director = new Director(stage.camera);
  director.setPoses(names.map(pose));
  const establish = { target: W(237, 470, 60), az: -34, el: 15, fit: [1.5, 1.6], side: 'center', fov: 30 };
  const skillPoses = SKILL_TOUR.inserts.map(([x, y]) => ({ ...SKILL_TOUR.close, target: W(x, y + 6, 0), az: x < 237 ? SKILL_TOUR.swing : -SKILL_TOUR.swing }));
  let skillFocus = -1;

  // The LCD's pictures, drawn as each photo arrives.
  const lcd = h.backglass.lcd;
  for (const [name, cfg] of Object.entries(PICTURES)) {
    const img = new Image();
    img.decoding = 'async';
    img.src = cfg.url;
    img.decode().then(() => lcd.add(name, cfg.card ? drawPlayerCard(img, 1600) : drawScreenPhoto(img, quality.low ? 1280 : 1600, cfg.focus), cfg.action)).catch(() => {});
  }

  // Callouts from parts to copy.
  const hud = new Hud($('[data-hud]'), stations, W);

  // About ("I've always taken things apart"): the back pop bumper, pop_1, comes apart like a CAD drawing as the
  // section scrolls by, its parts lifting clear over the two in front, holds there, then goes back together.
  const iAbout = names.indexOf('about');
  const exploded = iAbout >= 0 ? new Exploded(h.pops[show.explodedPop], document.body) : null;
  const explodeAt = y => {
    const span = director.holds[iAbout] * 1.6, p = clamp((y - (director.anchors[iAbout] - span / 2)) / span);
    return p < 0.5 ? smooth(clamp(p / 0.36)) : smooth(clamp((1 - p) / 0.36));
  };

  // Scrolling: Lenis for smooth, inertial scroll, unless motion is reduced.
  let lenis = null;
  if (!reduced && window.Lenis) lenis = new window.Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
  const scrollY = () => (lenis ? lenis.animatedScroll : window.scrollY);
  const scrollTo = (y, opts = {}) => {
    if (lenis) lenis.scrollTo(y, { duration: opts.duration || 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
    else window.scrollTo({ top: y, behavior: 'auto' });
  };

  // Anchor links fly to their station.
  const stationIndex = id => {
    const el = $('#' + id);
    if (!el) return -1;
    const own = el.closest('[data-station]') || el.querySelector('[data-station]');
    return stations.indexOf(own);
  };
  for (const a of $$('a[href^="#"]')) {
    if (a.hasAttribute('data-launch')) continue;
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const i = id === 'main' || id === 'top' ? 0 : stationIndex(id);
      if (i < 0) return;
      e.preventDefault();
      scrollTo(director.anchors[i], { duration: 1.8 });
      history.replaceState(null, '', '#' + id);
      const target = stations[i].querySelector('h1, h2, h3');
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    });
  }
  // Keyboard focus inside a station brings it into view.
  stations.forEach((el, i) => el.addEventListener('focusin', () => {
    if (Math.abs(director.floatAt(scrollY()) - i) > 0.2) scrollTo(director.anchors[i], { duration: 1.1 });
  }));

  // Layout and size. On wide screens each placard sticks beside its part and the holds follow the sections. In the
  // panel layouts every placard sits in the same fixed panel, under the scene or beside it, so the copy never covers
  // the part: each section is as long as its copy needs to scroll through the panel, plus a pause to read, plus the
  // travel to the next.
  const header = $('[data-header]');
  const placards = stations.map(el => el.querySelector('.placard'));
  const sides = stations.map(el => el.dataset.side || 'hero');
  const overflow = placards.map(() => 0), scrolled = placards.map(() => 0);
  const strip = $('.dmd-strip'), stripHome = strip && strip.parentElement, stripNext = strip && strip.nextElementSibling;
  let width = 0, height = 0, panel = false;
  function layout(force = false) {
    const w = innerWidth, hgt = innerHeight;
    // A phone's address bar showing and hiding only resizes the canvas: the sections stay where they are.
    const minor = !force && panel && w === width && Math.abs(hgt - height) < 150;
    width = w; height = hgt;
    stage.resize(width, height);
    if (minor) return;
    director.setView(width, height, header ? header.offsetHeight : 64);
    const L = director.view.layout;
    panel = L !== 'wide';
    root.classList.toggle('tall', L === 'tall');
    root.classList.toggle('side', L === 'side');
    root.classList.toggle('panel', panel);
    root.style.setProperty('--panel-top', director.view.panelTop + 'px');
    root.style.setProperty('--panel-left', director.view.panelLeft + 'px');
    // The display's controls go with the hero's copy into its panel.
    if (strip && placards[0]) { if (panel) placards[0].append(strip); else stripHome.insertBefore(strip, stripNext); }
    if (!panel) {
      stations.forEach((el, i) => { el.style.height = ''; if (placards[i]) el.style.setProperty('--ph', placards[i].offsetHeight + 'px'); });
      director.measure(stations, height);
      return;
    }
    const holds = stations.map((el, i) => {
      const card = placards[i];
      if (!card) return height * 0.45;
      card.style.setProperty('--scroll', '0px');
      scrolled[i] = 0;
      const over = card.scrollHeight - card.clientHeight;
      overflow[i] = over > 2 ? Math.ceil(over + 16) : 0;
      return overflow[i] + height * 0.45 * (+el.dataset.hold || 1);
    });
    const travel = height * 0.8;
    stations.forEach((el, i) => { el.style.height = `${Math.round(holds[i] + (i < stations.length - 1 ? travel : height * 0.25))}px`; });
    director.setStops(stations, holds);
  }
  layout();
  let resizeTimer = 0;
  addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(layout, 120); });
  document.fonts.ready.then(() => layout(true));

  // Pointer: parallax, hover over parts and clicks on them.
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2(9, 9);
  let hovered = null;
  let pointerOverUI = false;
  const cursor = $('[data-cursor-label]');
  const uiTarget = el => el.closest('a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer');
  let pointerMoved = false, pickTick = 0;
  addEventListener('pointermove', e => {
    pointerMoved = true;
    ndc.set((e.clientX / width) * 2 - 1, -(e.clientY / height) * 2 + 1);
    if (finePointer) director.pointer(ndc.x, ndc.y);
    if (cursor) cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${hovered ? 1 : 0})`;
    pointerOverUI = !!uiTarget(e.target);
  }, { passive: true });
  function pick() {
    if (pointerOverUI || Math.abs(ndc.x) > 1) return null;
    raycaster.setFromCamera(ndc, stage.camera);
    const hit = raycaster.intersectObjects(h.interactive, false).find(x => x.object.visible && (!x.object.parent || x.object.parent.visible !== false));
    return hit ? hit.object.userData.action || null : null;
  }
  addEventListener('click', e => {
    if (uiTarget(e.target)) return;
    const action = pick();
    if (!action) return;
    const def = ACTIONS[action];
    if (def && def.href) { if (window.pixelsTo) window.pixelsTo(def.href, { x: e.clientX, y: e.clientY }); else location.href = def.href; return; }
    if (action.startsWith('pop-')) show.firePop(+action.slice(4));
    else if (action === 'portrait') [0, 1, 2].forEach((i, k) => setTimeout(() => show.firePop(i), k * 140));
    else if (action.startsWith('target-')) show.hitTarget(+action.slice(7));
    else if (action.startsWith('sling-')) show.kickSling(action.slice(6));
    else if (action === 'flip-left' || action === 'flip-right') playFlip(action.slice(5));
    else if (action === 'plunger') launch();
    else if (action === 'dmd') dmd.next();
  });

  // Flipper buttons: the Shift keys, as on a keyboard pinball setup.
  addEventListener('keydown', e => {
    if (e.repeat || (e.target.closest && e.target.closest('input, textarea'))) return;
    if (e.code === 'ShiftLeft') playFlip('left', true);
    if (e.code === 'ShiftRight') playFlip('right', true);
  });
  addEventListener('keyup', e => {
    if (e.code === 'ShiftLeft') show.hold('left', false);
    if (e.code === 'ShiftRight') show.hold('right', false);
  });
  function playFlip(side, held = false) {
    if (held) show.hold(side, true); else show.flip(side);
  }

  // Play again: pull the plunger, launch, and fly back to the backbox.
  function launch() {
    show.pull();
    setTimeout(() => { show.release(); scrollTo(0, { duration: 2.8 }); }, reduced ? 0 : 520);
  }
  for (const el of $$('[data-launch]')) el.addEventListener('click', e => { e.preventDefault(); launch(); });
  // The hero's "See the work" presses the cabinet's start button on its way down to the playfield.
  for (const el of $$('.station-hero a[href="#work"]')) el.addEventListener('click', () => show.pressStart());
  for (const el of $$('[data-flip]')) {
    el.addEventListener('pointerenter', () => show.flip(el.dataset.flip));
    el.addEventListener('focus', () => show.flip(el.dataset.flip));
  }

  // Display controls.
  const pauseKey = $('[data-dmd-pause]'), nextKey = $('[data-dmd-next]');
  let dmdPaused = reduced;
  if (pauseKey) {
    if (reduced) pauseKey.hidden = true;
    pauseKey.addEventListener('click', () => {
      dmdPaused = !dmdPaused;
      pauseKey.setAttribute('aria-pressed', String(dmdPaused));
      pauseKey.textContent = dmdPaused ? 'Play' : 'Pause';
      if (dmdPaused) dmd.stop(); else dmd.start();
    });
  }
  if (nextKey) nextKey.addEventListener('click', () => { dmd.next(); if (dmdPaused || reduced) dmd.still(); });

  // Copy arrives with its station: each station's reveal is 1 at its stop and falls to 0 half-way to the next.
  const shade = $('[data-shade]');
  const shadeState = { l: -1, r: -1, b: -1 };
  const shown = placards.map(() => -1);
  const reveal = placards.map(() => 0);
  const lens = $('[data-lens]');
  let lensShown = 0;
  const footer = $('.site-footer');
  function updateCopy(f, y) {
    // In the panel layouts, the last section's copy gives way as the footer comes up under it.
    let tail = 1;
    if (panel && footer && f > placards.length - 1.6) tail = clamp((footer.getBoundingClientRect().top - height * 0.55) / (height * 0.35));
    placards.forEach((p, i) => {
      let v = clamp(1 - Math.abs(f - i) * 2.4);
      if (reduced) v = Math.abs(f - i) < 0.5 ? 1 : 0;
      if (i === placards.length - 1) v *= tail;
      reveal[i] = v;
      if (!p) return;
      // Copy longer than the panel scrolls through it while the camera holds.
      if (panel) {
        const s = overflow[i] ? Math.round(-overflow[i] * director.holdProgress(i, y) * 2) / 2 : 0;
        if (s !== scrolled[i]) { scrolled[i] = s; p.style.setProperty('--scroll', s + 'px'); }
      }
      if (Math.abs(v - shown[i]) < 0.003) return;
      shown[i] = v;
      p.style.opacity = v.toFixed(3);
      p.style.transform = `translate3d(0, ${((1 - v) * 22).toFixed(1)}px, 0)`;
      p.classList.toggle('is-here', v > 0.55);
    });
    // The lens: a soft blur under the copy that's showing most.
    let best = 0;
    reveal.forEach((v, i) => { if (i > 0 && v > reveal[best]) best = i; });
    const lv = best > 0 ? reveal[best] : 0;
    if (lens && !panel && (lv > 0.01 || lensShown > 0.01)) {
      if (lv > 0.01) {
        const r = placards[best].getBoundingClientRect();
        const padX = 90, padY = 80;
        lens.style.transform = `translate(${(r.left - padX).toFixed(0)}px, ${(r.top - padY).toFixed(0)}px)`;
        lens.style.width = `${(r.width + padX * 2).toFixed(0)}px`;
        lens.style.height = `${(r.height + padY * 2).toFixed(0)}px`;
      }
      lens.style.opacity = lv.toFixed(3);
      lensShown = lv;
    }
    // Shade whichever side carries copy. The panel layouts' panel has a ground of its own (site.css).
    const side = s => Math.max(0, ...reveal.map((v, i) => (sides[i] === s ? v : 0)));
    const next = panel ? { l: 0, r: 0, b: 0 } : { l: side('left'), r: side('right'), b: 0 };
    for (const k of ['l', 'r', 'b']) {
      if (Math.abs(next[k] - shadeState[k]) < 0.004) continue;
      shadeState[k] = next[k];
      shade.style.setProperty('--' + k, next[k].toFixed(3));
    }
  }

  // The skill rows light with their lane inserts; the timeline with the top lanes' years.
  const skillRows = $$('[data-skill]'), rungs = $$('[data-rung]');
  let listState = '';
  function syncLists(station) {
    const state = show.skillsLit.join('') + '|' + (station === 'experience' ? show.rung : -1) + '|' + skillFocus;
    if (state === listState) return;
    listState = state;
    skillRows.forEach((li, i) => li.classList.toggle('lit', show.skillsLit[i] > 0.5));
    rungs.forEach((li, i) => li.classList.toggle('lit', station === 'experience' && i <= show.rung));
    // The current entry: the insert the camera is on (or, with reduced motion, the one lit last while the row is
    // part-way lit), and the year being lit.
    const lit = show.skillsLit.filter(g => g > 0.5).length;
    const skill = station !== 'skills' ? -1 : reduced ? (lit > 0 && lit < skillRows.length ? show.skillsLit.lastIndexOf(1) : -1) : skillFocus;
    const rung = station === 'experience' ? show.rung : -1;
    for (const [rows, current] of [[skillRows, skill], [rungs, rung]]) {
      rows.forEach((li, i) => li.classList.toggle('current', i === current));
      if (rows[0]) rows[0].parentElement.classList.toggle('has-current', current >= 0);
    }
  }

  // The intro: the machine powers on in the dark and the camera glides in to the backbox.
  const intro = { blend: reduced ? 1 : 0 };
  function powerOn() {
    root.classList.remove('booting');
    root.classList.add('machine-ready');
    if (reduced || !window.gsap) {
      show.power = 1;
      intro.blend = 1;
      dmd.boot();
      return;
    }
    const tl = window.gsap.timeline();
    tl.to(show, { power: 0.75, duration: 0.08, ease: 'none' }, 0.35)
      .to(show, { power: 0.08, duration: 0.07, ease: 'none' }, 0.45)
      .to(show, { power: 0.9, duration: 0.06, ease: 'none' }, 0.6)
      .to(show, { power: 0.3, duration: 0.05, ease: 'none' }, 0.68)
      .to(show, { power: 1, duration: 0.5, ease: 'power2.out' }, 0.78)
      .call(() => dmd.boot(), null, 0.85)
      .to(intro, { blend: 1, duration: 2.6, ease: 'power3.inOut' }, 0.2);
  }

  // Pauses when the page is hidden.
  let running = true;
  let last = performance.now();
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { last = performance.now(); requestAnimationFrame(frame); }
    if (document.hidden) dmd.stop(); else if (!dmdPaused) dmd.start();
  });

  let lastStation = null;
  function frame(now) {
    if (!running) return;
    const wall = Math.min(0.5, Math.max(0, (now - last) / 1000));
    const dt = Math.min(0.05, wall);
    last = now;
    if (lenis) lenis.raf(now);
    const y = scrollY();
    const f = director.floatAt(y);

    // Which station the camera is at, and progress through it.
    const at = Math.round(f);
    const station = Math.abs(f - at) < 0.36 ? names[at] : null;
    if (station !== lastStation) { lastStation = station; show.setStation(station || show.station); root.dataset.station = station || ''; }
    const iSkills = names.indexOf('skills'), iExp = names.indexOf('experience');
    if (iSkills >= 0) show.setSkills(station === 'skills' ? director.holdProgress(iSkills, y) : f > iSkills ? 1 : 0);
    if (iExp >= 0) show.setTimeline(director.holdProgress(iExp, y));

    // Camera.
    let goal = director.at(reduced ? at : f);
    skillFocus = -1;
    if (iSkills >= 0 && !reduced && Math.abs(f - iSkills) < 0.001) {
      const { k, zoom, cross } = skillTour(director.holdProgress(iSkills, y));
      if (zoom > 0.001) {
        const i0 = Math.floor(k), i1 = Math.min(skillPoses.length - 1, i0 + 1);
        const close = director.blend(director.resolve(skillPoses[i0]), director.resolve(skillPoses[i1]), k - i0, 0);
        // Crossing the field between the inlanes, the camera eases back so it doesn't whip across close up.
        const span = Math.abs(SKILL_TOUR.inserts[i1][0] - SKILL_TOUR.inserts[i0][0]) / 340;
        goal = director.blend(goal, close, zoom * (1 - 0.6 * cross * span), 0);
        if (zoom > 0.6 && cross < 0.5) skillFocus = Math.round(k);
      }
    }
    if (intro.blend < 1) goal = director.blend(director.resolve(establish), goal, intro.blend, 0);
    director.apply(goal, dt, { instant: reduced, damping: 6.5 });
    // Light and focus close in on the part as the camera settles at its station.
    const settled = at > 0 ? clamp(1 - Math.abs(f - at) * 2.4) : 0;
    stage.focusOn(director.current.target, director.current.d, settled * intro.blend, director.current.sharp);

    show.skillFocus = skillFocus;
    show.update(dt, { f });
    // The callouts read the copy's layout before this frame restyles it, so a frame costs one layout, not two.
    hud.update(stage.camera, width, height, reveal, director.view);
    updateCopy(f, y);
    syncLists(station);

    // The LCD shows the picture for the nearest section that has one, once the camera is past half-way to it, and the
    // translite's art otherwise; the one showing holds a little longer, so it doesn't flicker at the change.
    let want = 'art', near = lcd.showing === 'art' ? 0.46 : 0.54;
    for (const name of Object.keys(PICTURES)) {
      const d = Math.abs(f - names.indexOf(name)) - (name === lcd.showing ? 0.06 : 0);
      if (names.includes(name) && d < near) { near = d; want = name; }
    }
    lcd.show(want, reduced);
    lcd.update(wall);

    if (exploded) {
      const e = explodeAt(y);
      exploded.update(e, stage.camera, width, height, director.view.layout === 'tall' ? 'tall' : STOPS.about.side);
      show.exploded = e;
    }
    const scrolled = y > 40;
    if (scrolled !== root.classList.contains('scrolled')) root.classList.toggle('scrolled', scrolled);

    // Hover over parts: a raycast when the pointer has moved, and every few frames while the camera does.
    if (finePointer && (pointerMoved || ++pickTick % 6 === 0)) {
      pointerMoved = false;
      const action = pick();
      if (action !== hovered) {
        hovered = action;
        document.body.style.cursor = action ? 'pointer' : '';
        if (cursor) cursor.textContent = action && ACTIONS[action] ? ACTIONS[action].label : '';
      }
    }
    stage.render();
    stage.govern(now);
    requestAnimationFrame(frame);
  }

  // First frame, then reveal. The shaders compile first, in parallel where the browser can, so the first frame
  // doesn't stall the page while the boot light shows.
  director.apply(director.at(0), 0, { instant: true });
  try { await stage.renderer.compileAsync(stage.scene, stage.camera); } catch { /* they compile on first use */ }
  stage.render();
  performance.mark('machine:first-frame');
  requestAnimationFrame(t => { last = t; frame(t); powerOn(); });
  window.__machine = { stage, h, show, director, dmd, lenis, scrollTo, intro, lcd, exploded };
}

start().catch(err => {
  console.error(err);
  root.classList.remove('machine', 'booting', 'tall', 'side', 'panel');
  root.classList.add('machine-failed');
  window.dispatchEvent(new Event('machine:failed'));
});
