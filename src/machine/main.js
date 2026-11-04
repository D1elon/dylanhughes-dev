// The home page as a pinball machine. Scrolling flies a camera from the backbox down the playfield; each stop
// frames a part of the machine full-screen, with the site's copy set over it and tied to the part by a callout.
// The page underneath is ordinary HTML, so it reads and navigates the same without any of this.
import * as THREE from 'three';
import { createStage, pickQuality } from './stage.js';
import { makeMaterials } from './materials.js';
import { buildMachine, buildScreen, BACKBOX, CABINET } from './machine.js';
import { drawPlayfield, drawBackglass, drawApronCard, drawTargetFace, drawCabinetSide, drawSlingPlastic, drawPlasticPrint, drawApron, drawPopDecal, loadArtFonts } from './art.js';
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
  // The case studies: each ramp's turn at the back, where it hands the ball to its wireform, with its screen on the
  // back panel above it. High enough that the ramp's flasher drops below the screen, low enough that the backbox's
  // overhang stays above it.
  deadbounce: { at: [120, 950, 70], az: 30, el: 34, fit: [0.25, 0.24], side: 'right', lift: 18 },
  tiptop: { at: [368, 950, 70], az: -30, el: 34, fit: [0.25, 0.24], side: 'left', lift: 10 },
  // About: the back pop bumper, its parts lifting clear over the two in front, seen from the right so the stack stands
  // in the gap between the Deadbounce screen and the portrait.
  about: { at: [240, 852, 92], az: 14, el: 30, fit: [0.32, 0.38], side: 'right', lift: 10 },
  // Skills: the four lane inserts across the field above the slings, Web to Fab.
  skills: { at: [237, 384, 0], az: 0, el: 50, fit: [0.47, 0.13], side: 'left', lift: 6 },
  // Experience: the five top lanes and their years, from the player's end over the pops.
  experience: { at: [235, 988, 8], az: -4, el: 52, fit: [0.38, 0.17], side: 'right', lift: 12 },
  // Contact: the flippers and the shoot-again shield between them.
  contact: { at: [237, 165, 22], az: -8, el: 47, fit: [0.27, 0.17], side: 'left', lift: 8 },
};

// Displays set into the back panel (machine.js), behind every playfield part, each lit as its station arrives: the
// case studies' 16:10 screens at either side, behind their ramps, and the portrait in the middle. `x`, `h`: each
// picture's middle across the board and above the wood, in millimetres; `width`, `height`: the picture. They're laid
// out symmetrically about the cabinet's middle (x = 257.2, right of the play area's centre line, since the shooter
// lane is on the right), and kept between the top arch rail and the backbox's overhang as the stations' cameras see
// the panel (24 to 106 mm up). From About, the exploded bumper stands in the gap between the Deadbounce screen and the
// portrait.
const SCREEN_H = 62, SCREEN_AT = 65, PANEL_MID = 257.175, SPREAD = 209.4;
const SCREENS = {
  deadbounce: { url: '/assets/img/deadbounce-viewport.jpg', x: PANEL_MID - SPREAD, h: SCREEN_AT, width: SCREEN_H * 1.6, height: SCREEN_H, focus: [0.5, 0.55], action: 'ramp-deadbounce' },
  about: { url: '/assets/img/dylan.jpg', x: PANEL_MID, h: SCREEN_AT, width: SCREEN_H * 0.8, height: SCREEN_H, focus: [0.5, 0.3], action: 'portrait' },
  tiptop: { url: '/assets/img/tiptop.jpg', x: PANEL_MID + SPREAD, h: SCREEN_AT, width: SCREEN_H * 1.6, height: SCREEN_H, focus: [0.5, 0], action: 'ramp-tiptop' },
};

async function start() {
  // The page's head script decides: without WebGL 2, with data saving on or at ?flat, the page stays plain.
  if (!root.classList.contains('machine')) return;
  const canvas = $('[data-stage]');
  const stations = $$('[data-station]');
  if (!canvas || !stations.length) throw new Error('No stage on this page');
  const quality = pickQuality();
  await loadArtFonts();

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
    width: 1024,
    onScene: (name, i, n) => { if (dmdLabel) dmdLabel.textContent = name; if (dmdCount && n > 1) dmdCount.textContent = `${i} / ${n}`; },
  });

  const stage = createStage(canvas, quality);
  const M = makeMaterials(stage.envMap);
  const anisotropy = Math.min(quality.anisotropy, stage.renderer.capabilities.getMaxAnisotropy());
  const h = buildMachine({ M, art, dmdCanvas, anisotropy });
  stage.scene.add(h.root);
  if (stage.ao) stage.ao.setSceneClipBox(new THREE.Box3().setFromObject(h.root).expandByScalar(0.03));
  dmd.onPaint = () => { h.dmd.texture.needsUpdate = true; };
  const show = new Show(h, { reduced });

  // Camera stops, one per station in page order.
  const W = (x, y, hh = 0) => h.toWorld(x, y, hh);
  h.backbox.updateMatrixWorld(true);
  const heroTarget = h.backbox.localToWorld(new THREE.Vector3(0, (BACKBOX.dmdY - BACKBOX.dmdH / 2 + BACKBOX.glassY + BACKBOX.glassH) / 2, 0));
  const pose = name => {
    const s = STOPS[name];
    return { ...s, target: s.at ? W(...s.at) : heroTarget };
  };
  const names = stations.map(el => el.dataset.station);
  const director = new Director(stage.camera);
  director.setPoses(names.map(pose));
  const establish = { target: W(237, 470, 60), az: -34, el: 15, fit: [1.5, 1.6], side: 'center', fov: 30 };

  // The back panel's displays.
  const screens = {};
  for (const [name, cfg] of Object.entries(SCREENS)) {
    const screen = buildScreen({ M, anisotropy, ...cfg });
    h.playfield.add(screen.group);
    h.interactive.push(screen.face);
    screens[name] = screen;
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

  // Layout and size.
  const header = $('[data-header]');
  let width = 0, height = 0;
  function layout() {
    width = innerWidth; height = innerHeight;
    stage.resize(width, height);
    director.setView(width, height, header ? header.offsetHeight : 64);
    root.classList.toggle('tall', director.view.layout === 'tall');
    stations.forEach(el => { const card = el.querySelector('.placard'); if (card) el.style.setProperty('--ph', card.offsetHeight + 'px'); });
    director.measure(stations, height, director.view.layout === 'tall');
  }
  layout();
  let resizeTimer = 0;
  addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(layout, 120); });
  document.fonts.ready.then(layout);

  // Pointer: parallax, hover over parts and clicks on them.
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2(9, 9);
  let hovered = null;
  let pointerOverUI = false;
  const cursor = $('[data-cursor-label]');
  const uiTarget = el => el.closest('a, button, input, label, .placard, [data-glass], .site-header, .dmd-strip, .site-footer');
  addEventListener('pointermove', e => {
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
    if (def && def.href) { location.href = def.href; return; }
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
  const placards = stations.map(el => el.querySelector('.placard'));
  const sides = stations.map(el => el.dataset.side || 'hero');
  const shade = $('[data-shade]');
  const shadeState = { l: -1, r: -1, b: -1 };
  const shown = placards.map(() => -1);
  const reveal = placards.map(() => 0);
  const lens = $('[data-lens]');
  let lensShown = 0;
  function updateCopy(f) {
    placards.forEach((p, i) => {
      let v = clamp(1 - Math.abs(f - i) * 2.4);
      if (reduced) v = Math.abs(f - i) < 0.5 ? 1 : 0;
      reveal[i] = v;
      if (!p) return;
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
    if (lens && (lv > 0.01 || lensShown > 0.01)) {
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
    // Shade whichever side carries copy; on tall screens, the bottom.
    const tall = director.view.layout === 'tall';
    const side = s => Math.max(0, ...reveal.map((v, i) => (sides[i] === s ? v : 0)));
    const next = { l: tall ? 0 : side('left'), r: tall ? 0 : side('right'), b: tall ? Math.max(...reveal) : 0 };
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
    const state = show.skillsLit.join('') + '|' + (station === 'experience' ? show.rung : -1);
    if (state === listState) return;
    listState = state;
    skillRows.forEach((li, i) => li.classList.toggle('lit', show.skillsLit[i] > 0.5));
    rungs.forEach((li, i) => li.classList.toggle('lit', station === 'experience' && i <= show.rung));
    // The current entry: the insert lit last while the row is part-way lit, and the year being lit.
    const lit = show.skillsLit.filter(g => g > 0.5).length;
    const skill = station === 'skills' && lit > 0 && lit < skillRows.length ? show.skillsLit.lastIndexOf(1) : -1;
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
    if (intro.blend < 1) goal = director.blend(director.resolve(establish), goal, intro.blend, 0);
    director.apply(goal, dt, { instant: reduced, damping: 6.5 });
    // Light and focus close in on the part as the camera settles at its station.
    const settled = at > 0 ? clamp(1 - Math.abs(f - at) * 2.4) : 0;
    stage.focusOn(director.current.target, director.current.d, settled * intro.blend);

    show.update(dt, { f });
    updateCopy(f);
    syncLists(station);

    // Each display powers on as its station arrives, and goes dark as the camera leaves.
    for (const [name, screen] of Object.entries(screens)) {
      const d = Math.abs(f - names.indexOf(name));
      screen.update(wall, screen.on ? d < 0.42 : d < 0.3, reduced);
    }

    hud.update(stage.camera, width, height, reveal, director.view.layout === 'tall');
    if (exploded) {
      const e = explodeAt(y);
      exploded.update(e, stage.camera, width, height, director.view.layout === 'tall' ? 'tall' : STOPS.about.side);
      show.exploded = e;
    }
    const scrolled = y > 40;
    if (scrolled !== root.classList.contains('scrolled')) root.classList.toggle('scrolled', scrolled);

    // Hover over parts.
    if (finePointer) {
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

  // First frame, then reveal.
  director.apply(director.at(0), 0, { instant: true });
  stage.render();
  requestAnimationFrame(t => { last = t; frame(t); powerOn(); });
  window.__machine = { stage, h, show, director, dmd, lenis, scrollTo, intro, screens, exploded };
}

start().catch(err => {
  console.error(err);
  root.classList.remove('machine', 'booting', 'tall');
  root.classList.add('machine-failed');
  window.dispatchEvent(new Event('machine:failed'));
});
