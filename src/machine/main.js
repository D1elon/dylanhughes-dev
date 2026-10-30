// The home page as a pinball machine. Scrolling flies a camera from the backbox down the playfield; each stop
// frames a part of the machine full-screen, with the site's copy set over it and tied to the part by a callout.
// The page underneath is ordinary HTML, so it reads and navigates the same without any of this.
import * as THREE from 'three';
import { createStage, pickQuality } from './stage.js';
import { makeMaterials } from './materials.js';
import { buildMachine, buildPlate, BACKBOX } from './machine.js';
import { drawPlayfield, drawBackglass, drawApronCard, drawTargetFace, drawCabinetSide, drawPlastic, drawApron, drawBankPlate, loadArtFonts } from './art.js';
import { Director } from './director.js';
import { Show } from './show.js';
import { SurfaceOverlay } from './overlay.js';
import { Hud } from './hud.js';
import { pf } from './geo.js';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const DEG = Math.PI / 180;

const ACTIONS = {
  'ramp-deadbounce': { label: 'Read the Deadbounce case study', href: '/work/deadbounce.html' },
  'ramp-tiptop': { label: 'Read the Tip Top case study', href: '/work/tip-top-pinball.html' },
  'pop-0': { label: 'Fire the pop bumper' },
  'pop-1': { label: 'Fire the pop bumper' },
  'pop-2': { label: 'Fire the pop bumper' },
  'drop-0': { label: 'Drop the target' },
  'drop-1': { label: 'Drop the target' },
  'drop-2': { label: 'Drop the target' },
  'drop-3': { label: 'Drop the target' },
  'flip-left': { label: 'Flip' },
  'flip-right': { label: 'Flip' },
  plunger: { label: 'Launch a ball back to the top' },
  dmd: { label: 'Next display scene' },
  portrait: { label: 'Fire the pops' },
};

// Camera stops, in playfield millimetres. `side` is where the copy sits; the part is framed in the rest of the
// screen. `fit` is the box (metres) kept in frame: small numbers bring the camera close.
const STOPS = {
  hero: { az: 0, el: 2, fit: [0.62, 0.72], side: 'hero', fov: 30 },
  deadbounce: { at: [104, 868, 64], az: 30, el: 28, fit: [0.24, 0.28], side: 'right', lift: 18 },
  tiptop: { at: [370, 868, 64], az: -30, el: 28, fit: [0.24, 0.28], side: 'left', lift: 10 },
  about: { at: [237, 900, 40], az: -6, el: 40, fit: [0.24, 0.27], side: 'right', lift: 10 },
  skills: { at: [237, 596, 17], az: 14, el: 19, fit: [0.15, 0.085], side: 'left', lift: 6 },
  experience: { at: [237, 400, 0], az: -12, el: 58, fit: [0.12, 0.17], side: 'right', lift: 12 },
  contact: { at: [248, 140, 26], az: -8, el: 47, fit: [0.3, 0.19], side: 'left', lift: 8 },
};

// Plates that rise out of the playfield at a stop, carrying the stop's picture.
const PLATES = {
  deadbounce: { url: '/assets/img/deadbounce-viewport.jpg', at: [96, 992], width: 0.13, aspect: 950 / 730, action: 'ramp-deadbounce' },
  tiptop: { url: '/assets/img/tiptop.jpg', at: [378, 992], width: 0.13, aspect: 1600 / 1027, action: 'ramp-tiptop' },
  about: { url: '/assets/img/dylan.jpg', at: [237, 1036], width: 0.07, aspect: 512 / 640, action: 'portrait' },
};

async function start() {
  const canvas = $('[data-stage]');
  const stations = $$('[data-station]');
  if (!canvas || !stations.length) throw new Error('No stage on this page');
  const quality = pickQuality();
  await loadArtFonts();

  // Artwork.
  const art = {
    playfield: drawPlayfield(quality.playfieldScale),
    backglass: drawBackglass(quality.low ? 1320 : 2048),
    cabinetSide: drawCabinetSide(2048, 768),
    plastic: drawPlastic(256, 256),
    apron: drawApron(quality.low ? 1024 : 2048),
    bankPlate: drawBankPlate(512, 160),
    cards: { instructions: drawApronCard('instructions', 625), free: drawApronCard('free', 625) },
    targets: ['Web', 'Game', 'Media', 'Fab'].map(n => drawTargetFace(n, 160)),
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
  const M = makeMaterials();
  const anisotropy = Math.min(quality.anisotropy, stage.renderer.capabilities.getMaxAnisotropy());
  const h = buildMachine({ M, art, dmdCanvas, anisotropy });
  stage.scene.add(h.root);
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

  // Plates: placed on the wood, turned to face their stop's camera and tilted back toward it.
  const plates = {};
  for (const [name, cfg] of Object.entries(PLATES)) {
    if (!names.includes(name)) continue;
    const plate = buildPlate({ M, url: cfg.url, width: cfg.width, aspect: cfg.aspect, action: cfg.action, anisotropy });
    plate.group.position.copy(pf(cfg.at[0], cfg.at[1], 0));
    plate.group.rotation.y = STOPS[name].az * DEG;
    plate.tilt = STOPS[name].el * 0.45 * DEG;
    h.playfield.add(plate.group);
    h.interactive.push(plate.face);
    plates[name] = plate;
  }

  // Hero copy on the backglass, when there is room to read it there.
  const glassCopy = $('[data-glass]');
  const overlay = glassCopy ? new SurfaceOverlay(glassCopy, h.heroAnchor, [BACKBOX.glassW, BACKBOX.glassH]) : null;

  // Callouts from parts to copy.
  const hud = new Hud($('[data-hud]'), stations, W);

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
    // The copy goes on the glass only where it reads at a comfortable size there.
    if (overlay) {
      director.apply(director.resolve(director.poses[0]), 0, { instant: true, still: true });
      overlay.attach();
      const fits = director.view.layout === 'wide' && overlay.scaleOn(stage.camera, width) * 33 >= 14.5;
      if (!fits) overlay.detach();
      root.classList.toggle('glass-on', fits);
      director.current = null;
    }
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
    else if (action.startsWith('drop-')) { const i = +action.slice(5); show.dropGoals[i] = show.dropGoals[i] ? 0 : 1; show.manualDrops = true; show.flash('drop' + i, 1.2); }
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
    if (show.mode === 'cradle' && side === 'left' && !show.released) { show.shoot(); return; }
    if (held) show.hold(side, true); else show.flip(side);
  }

  // Play again: pull the plunger, launch, and fly back to the backbox.
  function launch() {
    show.pull();
    setTimeout(() => { show.release(); scrollTo(0, { duration: 2.8 }); }, reduced ? 0 : 520);
  }
  for (const el of $$('[data-launch]')) el.addEventListener('click', e => { e.preventDefault(); launch(); });
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
  function updateCopy(f) {
    placards.forEach((p, i) => {
      let v = clamp(1 - Math.abs(f - i) * 2.4);
      if (reduced) v = Math.abs(f - i) < 0.5 ? 1 : 0;
      reveal[i] = i === 0 && root.classList.contains('glass-on') ? 0 : v;
      if (!p || (i === 0 && root.classList.contains('glass-on'))) return;
      if (Math.abs(v - shown[i]) < 0.003) return;
      shown[i] = v;
      p.style.opacity = v.toFixed(3);
      p.style.transform = `translate3d(0, ${((1 - v) * 22).toFixed(1)}px, 0)`;
      p.classList.toggle('is-here', v > 0.55);
    });
    // Shade whichever side carries copy; on tall screens, the bottom.
    const tall = director.view.layout === 'tall';
    const side = s => Math.max(0, ...reveal.map((v, i) => (sides[i] === s ? v : 0)));
    const next = { l: tall ? 0 : side('left'), r: tall ? 0 : side('right'), b: tall ? Math.max(...reveal.slice(1), root.classList.contains('glass-on') ? 0 : reveal[0]) : 0 };
    for (const k of ['l', 'r', 'b']) {
      if (Math.abs(next[k] - shadeState[k]) < 0.004) continue;
      shadeState[k] = next[k];
      shade.style.setProperty('--' + k, next[k].toFixed(3));
    }
  }

  // The skill rows light with their drop targets; the timeline lights with the insert ladder.
  const skillRows = $$('[data-skill]'), rungs = $$('[data-rung]');
  let listState = '';
  function syncLists(station) {
    const state = show.dropGoals.join('') + '|' + (station === 'experience' ? show.ladder : -1);
    if (state === listState) return;
    listState = state;
    skillRows.forEach((li, i) => li.classList.toggle('lit', show.dropGoals[i] > 0.5));
    rungs.forEach((li, i) => li.classList.toggle('lit', station === 'experience' && i <= show.ladder));
  }

  // The intro: the machine powers on in the dark and the camera glides in to the backbox.
  const intro = { blend: reduced ? 1 : 0, glass: reduced ? 1 : 0 };
  function powerOn() {
    root.classList.remove('booting');
    root.classList.add('machine-ready');
    if (reduced || !window.gsap) {
      show.power = 1;
      intro.blend = intro.glass = 1;
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
      .to(intro, { blend: 1, duration: 2.6, ease: 'power3.inOut' }, 0.2)
      .to(intro, { glass: 1, duration: 0.9, ease: 'power2.out' }, 2.0);
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
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (lenis) lenis.raf(now);
    const y = scrollY();
    const f = director.floatAt(y);

    // Which station the camera is at, and progress through it.
    const at = Math.round(f);
    const station = Math.abs(f - at) < 0.36 ? names[at] : null;
    if (station !== lastStation) { lastStation = station; show.setStation(station || show.station); root.dataset.station = station || ''; }
    const iSkills = names.indexOf('skills'), iExp = names.indexOf('experience');
    if (station === 'skills') { if (!show.manualDrops) show.setDrops(director.holdProgress(iSkills, y)); }
    else { show.manualDrops = false; show.setDrops(iSkills >= 0 && f > iSkills ? 1 : 0); }
    if (iExp >= 0) show.setLadder(director.holdProgress(iExp, y));

    // Camera.
    let goal = director.at(reduced ? at : f);
    if (intro.blend < 1) goal = director.blend(director.resolve(establish), goal, intro.blend, 0);
    director.apply(goal, dt, { instant: reduced, damping: 6.5 });

    show.update(dt, { f });
    updateCopy(f);
    syncLists(station);

    // Plates swing up as their station arrives.
    for (const [name, plate] of Object.entries(plates)) {
      const i = names.indexOf(name);
      plate.setReveal(clamp(1 - Math.abs(f - i) * 2), plate.tilt);
    }

    if (overlay && overlay.attached) overlay.update(stage.camera, width, height, clamp(1 - f * 2.6) * intro.glass);
    hud.update(stage.camera, width, height, reveal, director.view.layout === 'tall');
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
    requestAnimationFrame(frame);
  }

  // First frame, then reveal.
  director.apply(director.at(0), 0, { instant: true });
  stage.render();
  requestAnimationFrame(t => { last = t; frame(t); powerOn(); });
  window.__machine = { stage, h, show, director, dmd, lenis, scrollTo, intro, overlay, plates };
}

start().catch(err => {
  console.error(err);
  root.classList.remove('machine', 'booting', 'glass-on', 'tall');
  root.classList.add('machine-failed');
  window.dispatchEvent(new Event('machine:failed'));
});
