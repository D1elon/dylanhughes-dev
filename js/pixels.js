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
    const start = fixed || (width >= 900 ? 12 : 9);
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

  // A full-screen canvas over everything, in CSS pixels on a dot grid of `pitch` from the top left.
  function surface(pitch) {
    const c = document.createElement('canvas');
    c.className = 'px-canvas';
    c.setAttribute('aria-hidden', 'true');
    const dpr = Math.min(2, devicePixelRatio || 1), w = innerWidth, h = innerHeight;
    c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
    c.style.width = w + 'px'; c.style.height = h + 'px';
    const g = c.getContext('2d');
    g.scale(dpr, dpr);
    const cols = Math.ceil(w / pitch), rows = Math.ceil(h / pitch), r = pitch * 0.36;
    return { c, g, w, h, cols, rows, r, pitch };
  }
  // Batches circles by colour so a frame is a handful of fills, not thousands.
  function dots(g, list, color, radius) {
    if (!list.length) return;
    g.fillStyle = color;
    g.beginPath();
    for (const [x, y, k] of list) { const rr = radius * (k || 1); g.moveTo(x + rr, y); g.arc(x, y, rr, 0, Math.PI * 2); }
    g.fill();
  }
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
    const ox = x ?? S.w / 2, oy = y ?? S.h / 2;
    const far = Math.max(Math.hypot(ox, oy), Math.hypot(S.w - ox, oy), Math.hypot(ox, S.h - oy), Math.hypot(S.w - ox, S.h - oy));
    const cells = [];
    for (let j = 0; j < S.rows; j++) for (let i = 0; i < S.cols; i++) {
      const cx = i * pitch + pitch / 2, cy = j * pitch + pitch / 2;
      cells.push({ i, j, cx, cy, delay: (Math.hypot(cx - ox, cy - oy) / far) * 0.74 + hash(i, j) * 0.1 });
    }
    const DUR = 560, FLASH = 0.24, t0 = performance.now();
    let done = false;
    const frame = now => {
      const p = (now - t0) / DUR, g = S.g;
      g.clearRect(0, 0, S.w, S.h);
      const backing = [], unlit = [], lit = Array.from({ length: LEVELS }, () => []), glow = [];
      let all = true;
      for (const c of cells) {
        const tau = (p - c.delay) / FLASH;
        if (tau <= 0) { all = false; continue; }
        backing.push(c);
        const b = tau < 0.3 ? tau / 0.3 : Math.max(0, 1 - (tau - 0.3) / 0.7);
        if (b > 0.04) { lit[level(b)].push([c.cx, c.cy, 1 + 0.22 * b]); if (b > 0.5) glow.push([c.cx, c.cy, 1.9]); }
        else unlit.push([c.cx, c.cy]);
        if (tau < 1) all = false;
      }
      g.fillStyle = ROOM;
      g.beginPath();
      for (const c of backing) g.rect(c.i * pitch, c.j * pitch, pitch + 0.5, pitch + 0.5);
      g.fill();
      dots(g, unlit, UNLIT, S.r);
      dots(g, glow, rgba(LIT, 0.16), S.r);
      lit.forEach((list, k) => dots(g, list, levelColor(k), S.r));
      if (all && !done) {
        done = true;
        // Stamped again as the page goes, so a slow exit doesn't age the hand-over out.
        try { const k = JSON.parse(sessionStorage.getItem(KEY)); k.t = Date.now(); sessionStorage.setItem(KEY, JSON.stringify(k)); } catch { /* plain navigation */ }
        location.href = url.href;
        return;
      }
      if (!done) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    // Coming back to this page from the browser's cache, or if the navigation never happens, clear the screen.
    const reset = () => { glass.remove(); S.c.remove(); leaving = false; };
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
  window.__pixelsIntro = new Promise(resolve => { startIntro = resolve; });
  if (!arrival) { root.classList.remove('px-in'); startIntro(); return; }
  arrive(arrival);

  function arrive(info) {
    const { pitch, rows: titleCells } = layout(info.title, innerWidth, innerHeight, info.pitch);
    const S = surface(pitch);
    const P = S.pitch;
    document.body.append(S.c);
    root.classList.add('px-arriving', 'px-glass-in');
    root.classList.remove('px-in');
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
        i, j, cx, cy, inTitle,
        // Title dots light left to right, like the display drawing its text in.
        on: inTitle ? 70 + ((i - minI) / Math.max(1, maxI - minI)) * 240 : 0,
        open: 430 + (Math.hypot(cx - ox, cy - oy) / far) * 560 + hash(i, j) * 110,
      });
    }
    const OPEN = 260, t0 = performance.now();
    let introStarted = false, glassCleared = false;
    const frame = now => {
      const t = now - t0, g = S.g;
      if (!glassCleared && t > 520) { glassCleared = true; root.classList.remove('px-glass-in'); }
      if (!introStarted && t > 600) { introStarted = true; startIntro(); }
      g.clearRect(0, 0, S.w, S.h);
      // The black field, with a hole for every cell that has opened onto the page.
      g.fillStyle = ROOM;
      g.fillRect(0, 0, S.w, S.h);
      g.globalCompositeOperation = 'destination-out';
      g.beginPath();
      const unlit = [], lit = Array.from({ length: LEVELS }, () => []), glow = [], rings = [];
      let all = true;
      for (const c of cells) {
        const o = (t - c.open) / OPEN;
        if (o >= 1) { g.rect(c.i * P - 0.5, c.j * P - 0.5, P + 1, P + 1); continue; }
        all = false;
        if (o > 0.35) {
          // The dot opens into a window on the page, a rounded square growing to the whole cell.
          const k = ease((o - 0.35) / 0.65), s = S.r * 2 + (P + 1 - S.r * 2) * k, rr = (s / 2) * (1 - k);
          if (g.roundRect) g.roundRect(c.cx - s / 2, c.cy - s / 2, s, s, rr); else g.rect(c.cx - s / 2, c.cy - s / 2, s, s);
          if (k < 0.7) rings.push([c.cx, c.cy, (s / 2) / S.r]);
          continue;
        }
        // Not yet open: the dot, lit if it's in the title or flashing as the wave reaches it.
        let b = 0;
        if (c.inTitle && t > c.on) { const e = (t - c.on) / 120; b = e < 1 ? 1 : 0.72; }
        if (o > 0) b = Math.max(b, Math.min(1, o / 0.2));
        if (b > 0.04) { lit[level(b)].push([c.cx, c.cy, 1 + 0.25 * b]); if (b > 0.6) glow.push([c.cx, c.cy, 2]); }
        else unlit.push([c.cx, c.cy]);
      }
      g.fill();
      g.globalCompositeOperation = 'source-over';
      dots(g, unlit, UNLIT, S.r);
      dots(g, glow, rgba(LIT, 0.18), S.r);
      lit.forEach((list, k) => dots(g, list, levelColor(k), S.r));
      // A thin royal edge round each window as it opens.
      if (rings.length) {
        g.strokeStyle = rgba(LIT, 0.55);
        g.lineWidth = 1;
        g.beginPath();
        for (const [x, y, k] of rings) { const s = S.r * k; g.moveTo(x + s, y); g.arc(x, y, s, 0, Math.PI * 2); }
        g.stroke();
      }
      if (all) {
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
