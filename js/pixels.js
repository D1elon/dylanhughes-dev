/* The page change into a case study, done as the machine's display would do it. Leaving, the page frosts over like
   glass and a wave of dot-matrix pixels flashes out from where you clicked, until the screen is a dark field of
   unlit dots. Arriving, the case study's name lights up across that field in the display's lettering, then the dots
   flash and open one by one, outward from the name, and the page is built out of them as the glass clears.

   The last frame of the exit and the first paint of the entry are the same field of dots (the entry's is drawn in
   CSS before any script runs), so the hand-over between the two pages doesn't show. Without motion, or without
   this file, links navigate as normal. */
(() => {
  'use strict';
  const KEY = 'dh-pixels';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Colours, matching the CSS cover (html.px-in::after in site.css).
  const ROOM = '#06070A';
  const UNLIT = 'rgba(110, 140, 255, 0.11)';
  const LIT = [43, 89, 255];
  const ICE = [232, 238, 255];
  const TITLES = { '/work/deadbounce.html': 'Deadbounce', '/work/tip-top-pinball.html': 'Tip Top Pinball' };

  const clamp = v => Math.min(1, Math.max(0, v));
  const ease = t => 1 - Math.pow(1 - t, 3);
  // A steady per-cell random number, so the sparkle in the wave is the same on both pages.
  const hash = (i, j) => { const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return s - Math.floor(s); };

  // The title set in the display's bitmap lettering on the dot grid: lines of words, the big face if it fits the
  // screen, else the small one, at the coarsest pitch that fits.
  // With `fixed`, only that pitch is tried (arriving, the grid is the one the cover was drawn on).
  function layout(title, width, height, fixed) {
    const fonts = window.DMD_FONTS;
    // The dots grow with the screen (about 120 across a desktop's width), so a large monitor draws no more of them
    // than a laptop does.
    const start = fixed || (width >= 900 ? Math.max(12, Math.round(width / 120)) : 9);
    if (!fonts || !title) return { pitch: start, rows: [] };
    const text = title.toUpperCase();
    const measure = (font, s) => [...s].reduce((a, c) => a + (font.glyphs[c] ? font.glyphs[c][0].length : 0) + font.spacing, -font.spacing);
    for (let pitch = start; pitch >= (fixed || 6); pitch--) {
      const cols = Math.floor(width / pitch) - 6, rowsAvail = Math.floor(height / pitch) - 6;
      for (const font of [fonts.big, fonts.small]) {
        const lines = [];
        for (const word of text.split(' ')) {
          const next = lines.length ? lines[lines.length - 1] + ' ' + word : word;
          if (lines.length && measure(font, next) <= cols) lines[lines.length - 1] = next;
          else lines.push(word);
        }
        if (lines.some(l => measure(font, l) > cols)) continue;
        const gap = Math.round(font.height / 3), tall = lines.length * font.height + (lines.length - 1) * gap;
        if (tall > rowsAvail) continue;
        // Lit cells, in grid coordinates centred on the screen.
        const gw = Math.floor(width / pitch), gh = Math.floor(height / pitch), cells = [];
        let y0 = Math.floor((gh - tall) / 2);
        for (const line of lines) {
          let x = Math.floor((gw - measure(font, line)) / 2);
          for (const c of line) {
            const g = font.glyphs[c];
            if (!g) continue;
            g.forEach((row, j) => [...row].forEach((on, i) => { if (on === '#') cells.push([x + i, y0 + j]); }));
            x += g[0].length + font.spacing;
          }
          y0 += font.height + gap;
        }
        return { pitch, rows: cells };
      }
    }
    return { pitch: fixed || 6, rows: [] };
  }

  // A full-screen canvas over everything, on a dot grid of `pitch` CSS pixels from the top left. It is drawn in its
  // own pixels, a whole number `C` of them to a cell, so every cell's edges fall on pixel boundaries and a cell can be
  // repainted or cleared by itself without leaving a seam. Its resolution follows the screen's up to about 2.4
  // megapixels: the dots are soft, and a 4K canvas would cost four times as much to fill for no visible gain.
  function surface(pitch) {
    const c = document.createElement('canvas');
    c.className = 'px-canvas';
    c.setAttribute('aria-hidden', 'true');
    const w = innerWidth, h = innerHeight;
    const scale = Math.min(devicePixelRatio || 1, 2, Math.sqrt(2.4e6 / (w * h)));
    const C = Math.max(6, Math.round((pitch * scale) / 2) * 2); // even, so a cell's middle is on a pixel boundary too
    const cols = Math.ceil(w / pitch), rows = Math.ceil(h / pitch);
    c.width = cols * C; c.height = rows * C;
    c.style.width = cols * pitch + 'px'; c.style.height = rows * pitch + 'px';
    return { c, g: c.getContext('2d'), w, h, cols, rows, C, r: C * 0.36, pitch, atlas: sprites(C, C * 0.36) };
  }
  // Every state a dot can be in is drawn once, as a tile of an atlas: tile 0 the unlit dot, tiles 1 to LEVELS the lit
  // dot from dim royal to ice white with its glow, each on the field's black. Painting a cell is then one copy of a
  // tile, the cheapest thing a canvas does, where drawing thousands of circles as paths every frame was the slowest.
  function sprites(C, r) {
    const atlas = document.createElement('canvas');
    atlas.width = C * (LEVELS + 1); atlas.height = C;
    const a = atlas.getContext('2d');
    a.fillStyle = ROOM;
    a.fillRect(0, 0, atlas.width, C);
    const disc = (tile, radius, color) => { a.fillStyle = color; a.beginPath(); a.arc(tile * C + C / 2, C / 2, radius, 0, Math.PI * 2); a.fill(); };
    disc(0, r, UNLIT);
    for (let k = 0; k < LEVELS; k++) {
      const b = (k + 0.5) / LEVELS;
      // Each tile is clipped to its cell, so a bright dot's glow never spills onto its neighbour's tile.
      a.save(); a.beginPath(); a.rect((k + 1) * C, 0, C, C); a.clip();
      if (b > 0.55) disc(k + 1, r * 1.36, rgba(LIT, 0.22));
      disc(k + 1, r * (1 + 0.24 * b), levelColor(k));
      a.restore();
    }
    return atlas;
  }
  // The animations run on a clock that advances at most 40 ms a frame, so after one slow frame the wave carries on
  // from where it was rather than jumping ahead. On a device that is slow throughout, it still keeps to at least
  // half speed, so the transition never drags.
  const tick = (clock, last, now, start) => Math.max(clock + (last ? Math.min(now - last, 40) : 0), (now - start) * 0.5);
  // The atlas tile for a dot of brightness b (0–1).
  const tile = b => (b > 0.04 ? 1 + level(b) : 0);
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const rgba = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
  // A lit dot's colour by its brightness 0–1: royal, going to ice at the peak.
  const LEVELS = 6;
  const level = b => Math.min(LEVELS - 1, Math.floor(b * LEVELS));
  const levelColor = k => { const t = (k + 0.5) / LEVELS; return rgba(mix(LIT, ICE, t * t), 0.35 + 0.65 * t); };

  // --- Leaving --------------------------------------------------------------------------------------------------
  let leaving = false;
  function leave(href, x, y) {
    if (leaving) return;
    leaving = true;
    const url = new URL(href, location.href);
    const title = TITLES[url.pathname] || '';
    const { pitch } = layout(title, innerWidth, innerHeight);
    try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), path: url.pathname, title, pitch, w: innerWidth, h: innerHeight })); } catch { /* private mode: plain navigation */ }
    // Start the request now, so the page is waiting by the time the screen is covered.
    fetch(url.href, { credentials: 'same-origin' }).catch(() => {});

    const glass = document.createElement('div');
    glass.className = 'px-glass';
    document.body.append(glass);
    const S = surface(pitch);
    document.body.append(S.c);
    requestAnimationFrame(() => glass.classList.add('on'));
    // The page under the dots stops animating (site.js stops the display; the 3D machine holds its scene), so the
    // frames go to the transition.
    dispatchEvent(new Event('pixels:leave'));
    const ox = x ?? S.w / 2, oy = y ?? S.h / 2;
    const far = Math.max(Math.hypot(ox, oy), Math.hypot(S.w - ox, oy), Math.hypot(ox, S.h - oy), Math.hypot(S.w - ox, S.h - oy));
    const C = S.C, cells = [];
    for (let j = 0; j < S.rows; j++) for (let i = 0; i < S.cols; i++) {
      const cx = i * pitch + pitch / 2, cy = j * pitch + pitch / 2;
      cells.push({ x: i * C, y: j * C, shown: -1, delay: (Math.hypot(cx - ox, cy - oy) / far) * 0.74 + hash(i, j) * 0.1 });
    }
    // In the order the wave reaches them. Each frame paints only the cells the wave is passing: a cell that has
    // finished its flash is painted once more, as an unlit dot, and then left alone.
    cells.sort((a, b) => a.delay - b.delay);
    const DUR = 560, FLASH = 0.24, start = performance.now();
    let clock = 0, last = 0, first = 0, done = false;
    const frame = now => {
      clock = tick(clock, last, now, start);
      last = now;
      const p = clock / DUR, g = S.g;
      for (let n = first; n < cells.length; n++) {
        const c = cells[n], tau = (p - c.delay) / FLASH;
        if (tau <= 0) break;
        if (tau >= 1) { g.drawImage(S.atlas, 0, 0, C, C, c.x, c.y, C, C); first = n + 1; continue; }
        const k = tile(tau < 0.3 ? tau / 0.3 : Math.max(0, 1 - (tau - 0.3) / 0.7));
        if (k !== c.shown) { c.shown = k; g.drawImage(S.atlas, k * C, 0, C, C, c.x, c.y, C, C); }
      }
      if (first >= cells.length && !done) {
        done = true;
        // Stamped again as the page goes, so a slow exit doesn't age the hand-over out.
        try { const k = JSON.parse(sessionStorage.getItem(KEY)); k.t = Date.now(); sessionStorage.setItem(KEY, JSON.stringify(k)); } catch { /* plain navigation */ }
        location.href = url.href;
        return;
      }
      if (!done) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    // Coming back to this page    requestAnimationFrame(frame);
    // Coming back to this page from the browser's cache, or if the navigation never happens, clear the screen.
    const reset = () => { glass.remove(); S.c.remove(); leaving = false; dispatchEvent(new Event('pixels:reset')); };
    addEventListener('pageshow', e => { if (e.persisted) reset(); }, { once: true });
    setTimeout(() => { if (leaving && document.visibilityState === 'visible') reset(); }, 6000);
    // The browser's own cross-fade would slide the two identical frames apart: this change draws its own.
    addEventListener('pageswap', e => { if (e.viewTransition) e.viewTransition.skipTransition(); }, { once: true });
  }

  // Links into a case study take the pixel transition; the machine's ramp and screen clicks call it directly.
  window.pixelsTo = (href, opts = {}) => {
    const url = new URL(href, location.href);
    if (reduced || url.origin !== location.origin || !(url.pathname in TITLES) || url.pathname === location.pathname) { location.href = url.href; return; }
    leave(url.href, opts.x, opts.y);
  };
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !(url.pathname in TITLES) || url.pathname === location.pathname || reduced) return;
    e.preventDefault();
    // A keyboard press has no pointer position: the wave starts from the link.
    let x = e.clientX, y = e.clientY;
    if (!e.detail) { const r = a.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
    leave(url.href, x, y);
  });

  // --- Arriving -------------------------------------------------------------------------------------------------
  // The head script set html.px-in and the cover's pitch when this page was reached through the transition.
  let arrival = null;
  try { arrival = root.classList.contains('px-in') ? JSON.parse(sessionStorage.getItem(KEY) || 'null') : null; sessionStorage.removeItem(KEY); } catch { arrival = null; }
  let startIntro;
  window.__pixelsIntro = new Promise(resolve => { startIntro = () => { root.classList.remove('px-hold'); resolve(); }; });
  if (!arrival) { root.classList.remove('px-in'); startIntro(); return; }
  arrive(arrival);

  function arrive(info) {
    const { pitch, rows: titleCells } = layout(info.title, innerWidth, innerHeight, info.pitch);
    const S = surface(pitch);
    const P = S.pitch, C = S.C, half = C / 2, g = S.g;
    const title = new Set(titleCells.map(([i, j]) => i + ',' + j));
    // The reveal spreads from the title's middle.
    let mx = 0, my = 0;
    titleCells.forEach(([i, j]) => { mx += i; my += j; });
    const ox = titleCells.length ? (mx / titleCells.length) * P + P / 2 : S.w / 2;
    const oy = titleCells.length ? (my / titleCells.length) * P + P / 2 : S.h / 2;
    const far = Math.max(Math.hypot(ox, oy), Math.hypot(S.w - ox, oy), Math.hypot(ox, S.h - oy), Math.hypot(S.w - ox, S.h - oy));
    let minI = Infinity, maxI = -Infinity;
    titleCells.forEach(([i]) => { minI = Math.min(minI, i); maxI = Math.max(maxI, i); });
    const cells = [];
    for (let j = 0; j < S.rows; j++) for (let i = 0; i < S.cols; i++) {
      const cx = i * P + P / 2, cy = j * P + P / 2, inTitle = title.has(i + ',' + j);
      cells.push({
        x: i * C, y: j * C, inTitle, shown: 0, tile: 0, q: 0,
        // Title dots light left to right, like the display drawing its text in.
        on: inTitle ? 70 + ((i - minI) / Math.max(1, maxI - minI)) * 240 : 0,
        open: 430 + (Math.hypot(cx - ox, cy - oy) / far) * 560 + hash(i, j) * 110,
      });
    }
    // The canvas starts as the cover it replaces: the black field of unlit dots, laid down once from the unlit tile.
    // After that a frame paints only what changes: the title's dots as they light, and the cells the opening wave is
    // passing. A cell that has opened is cleared once and never touched again.
    const unlit = document.createElement('canvas');
    unlit.width = unlit.height = C;
    unlit.getContext('2d').drawImage(S.atlas, 0, 0, C, C, 0, 0, C, C);
    g.fillStyle = g.createPattern(unlit, 'repeat');
    g.fillRect(0, 0, S.c.width, S.c.height);
    document.body.append(S.c);
    root.classList.add('px-arriving', 'px-arrived', 'px-glass-in');
    root.classList.remove('px-in');
    const order = [...cells].sort((a, b) => a.open - b.open);
    const letters = cells.filter(c => c.inTitle).sort((a, b) => a.on - b.on);
    const OPEN = 260, DIM = 0.72, edge = Math.max(1, Math.round(C / 12)), start = performance.now();
    // The window's edge, royal over the field's black, as one opaque colour: painted over itself it doesn't build up.
    const EDGE = `rgb(${mix([6, 7, 10], LIT, 0.6).join(', ')})`;
    let clock = 0, last = 0, first = 0, firstLetter = 0, introStarted = false, glassCleared = false;
    const frame = now => {
      clock = tick(clock, last, now, start);
      last = now;
      const t = clock;
      if (!glassCleared && t > 520) { glassCleared = true; root.classList.remove('px-glass-in'); }
      if (!introStarted && t > 600) { introStarted = true; startIntro(); }
      // The title: each dot flashes as it lights, then settles; it's repainted only when that changes.
      for (let n = firstLetter; n < letters.length; n++) {
        const c = letters[n];
        if (t <= c.on) break;
        if (t > c.open) continue;
        const b = t - c.on < 120 ? 1 : DIM;
        if (b !== c.shown) { c.shown = b; c.tile = tile(b); g.drawImage(S.atlas, c.tile * C, 0, C, C, c.x, c.y, C, C); }
      }
      while (firstLetter < letters.length && (letters[firstLetter].shown === DIM || t > letters[firstLetter].open)) firstLetter++;
      // The wave: a dot flashes, then opens into a window on the page, a square pixel growing to the whole cell with
      // a royal edge, and is cleared. Squares on whole pixels, so each is a plain rectangle fill or clear. A window
      // only ever grows, so each frame paints its new edge and clears its new inside over what is already there.
      const windows = [];
      for (let n = first; n < order.length; n++) {
        const c = order[n], o = (t - c.open) / OPEN;
        if (o <= 0) break;
        if (o >= 1) { g.clearRect(c.x, c.y, C, C); first = n + 1; continue; }
        if (o > 0.35) {
          const q = Math.min(half, Math.round(S.r + (half - S.r) * ease((o - 0.35) / 0.65)));
          if (q === c.q) continue;
          // Entering this phase, the flashing dot is wiped once.
          if (!c.q) { g.fillStyle = ROOM; g.fillRect(c.x, c.y, C, C); }
          c.q = q;
          windows.push(c);
          continue;
        }
        const lettered = c.inTitle && t > c.on ? (t - c.on < 120 ? 1 : DIM) : 0;
        const k = tile(Math.max(lettered, Math.min(1, o / 0.2)));
        if (k !== c.tile) { c.tile = k; g.drawImage(S.atlas, k * C, 0, C, C, c.x, c.y, C, C); }
      }
      if (windows.length) {
        g.fillStyle = EDGE;
        for (const c of windows) { const q = Math.min(half, c.q + edge); g.fillRect(c.x + half - q, c.y + half - q, q * 2, q * 2); }
        for (const c of windows) g.clearRect(c.x + half - c.q, c.y + half - c.q, c.q * 2, c.q * 2);
      }
      if (first >= order.length) {
        S.c.remove();
        root.classList.remove('px-glass-in');
        if (!introStarted) startIntro();
        setTimeout(() => root.classList.remove('px-arriving'), 900);
        return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
})();
