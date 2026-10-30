/* A 128×32 plasma dot-matrix display, the kind of screen pinball machines used from the 1990s on.
   Scenes draw brightness values into a buffer; the renderer adds plasma persistence and glow. */
(() => {
  'use strict';
  const COLS = 128, ROWS = 32, N = COLS * ROWS;
  const FONTS = window.DMD_FONTS;

  // Text ------------------------------------------------------------------------
  // Composes a string from a hand-drawn font into a bitmap: { w, h, px: rows of 0/1 }.
  const textCache = {};
  function text(str, fontName) {
    const key = fontName + '|' + str;
    if (textCache[key]) return textCache[key];
    const font = FONTS[fontName];
    const glyphs = [...str.toUpperCase()].map(ch => font.glyphs[ch] || font.glyphs[' ']);
    const w = Math.max(1, glyphs.reduce((sum, g) => sum + g[0].length + font.spacing, 0) - font.spacing);
    const px = Array.from({ length: font.height }, () => new Uint8Array(w));
    let x = 0;
    for (const g of glyphs) {
      g.forEach((row, y) => { for (let i = 0; i < row.length; i++) if (row[i] === '#') px[y][x + i] = 1; });
      x += g[0].length + font.spacing;
    }
    return (textCache[key] = { w, h: font.height, px });
  }
  const big = str => text(str, 'big');
  const small = str => text(str, 'small');

  // Drawing into a buffer -------------------------------------------------------
  const set = (buf, x, y, v) => {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return;
    const i = y * COLS + x;
    if (v > buf[i]) buf[i] = v;
  };
  function stamp(buf, bmp, x, y, v = 1, clip) {
    x = Math.round(x); y = Math.round(y);
    for (let r = 0; r < bmp.h; r++) {
      const yy = y + r;
      if (clip && (yy < clip.top || yy > clip.bottom)) continue;
      const row = bmp.px[r];
      for (let c = 0; c < bmp.w; c++) {
        if (!row[c] || (clip && clip.right !== undefined && x + c > clip.right)) continue;
        set(buf, x + c, yy, v);
      }
    }
  }
  function line(buf, x0, y0, x1, y1, v = 1) {
    const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0), 1);
    for (let s = 0; s <= steps; s++) set(buf, x0 + (x1 - x0) * s / steps, y0 + (y1 - y0) * s / steps, v);
  }
  const center = bmp => Math.round((COLS - bmp.w) / 2);
  const easeOut = p => 1 - Math.pow(1 - p, 3);
  const easeBack = p => { const c = 1.6; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); };
  const richmondTime = () => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' }).format(new Date());

  // Scenes ------------------------------------------------------------------------
  // Each scene draws frame `t` (seconds) into `buf`. `still` is the frame shown with reduced motion.
  const SCENES = {
    boot: {
      duration: 0.75,
      draw(buf, t) {
        const row = t / 0.55 * ROWS;
        for (let y = 0; y < ROWS; y++) {
          const age = row - y;
          if (age < 0) continue;
          const v = age < 1.5 ? 0.9 : Math.max(0, 0.32 - (age - 1.5) * 0.03);
          if (v > 0) for (let x = 0; x < COLS; x++) set(buf, x, y, v);
        }
      },
    },

    name: {
      label: 'Name',
      duration: 4.6,
      still: 4.6,
      draw(buf, t) {
        const name = big('DYLAN HUGHES');
        const role = small('CREATIVE TECHNOLOGIST');
        const nx = center(name), sweep = nx + easeOut(Math.min(1, t / 0.9)) * (name.w + 4);
        stamp(buf, name, nx, 4, 1, { top: 0, bottom: ROWS, right: sweep });
        if (t < 0.95) for (let y = 3; y < 17; y++) set(buf, sweep, y, 0.85);
        const typed = Math.floor(Math.max(0, t - 1.1) * 26);
        const text = 'CREATIVE TECHNOLOGIST'.slice(0, typed);
        if (text) stamp(buf, small(text), center(role), 21, 0.78);
        if (typed > 0 && typed < 21 && Math.floor(t * 8) % 2) {
          const cx = center(role) + small(text).w + 2;
          for (let y = 21; y < 28; y++) set(buf, cx, y, 0.6);
        }
      },
    },

    build: {
      label: 'What I build',
      duration: 6.4,
      still: 1.2,
      draw(buf, t) {
        const head = small('I DESIGN AND BUILD');
        stamp(buf, head, center(head), 1, 0.7);
        for (let x = 6; x < COLS - 6; x += 2) { set(buf, x, 10, 0.28); set(buf, x, 30, 0.28); }
        const words = ['WEBSITES', 'GAME SOFTWARE', 'PRINTED PARTS'];
        const hold = 1.75, roll = 0.38, pitch = 19;
        const step = Math.min(words.length - 1, Math.floor(t / (hold + roll)));
        const local = t - step * (hold + roll);
        let offset = 0;
        if (local > hold && step < words.length - 1) offset = easeBack(Math.min(1, (local - hold) / roll)) * pitch;
        const clip = { top: 12, bottom: 28 };
        stamp(buf, big(words[step]), center(big(words[step])), 14 - offset, 1, clip);
        if (step + 1 < words.length) stamp(buf, big(words[step + 1]), center(big(words[step + 1])), 14 + pitch - offset, 1, clip);
      },
    },

    play: {
      label: 'Pinball',
      duration: 7.5,
      still: 2.6,
      reset(state) {
        Object.assign(state, { x: 66, y: 10, vx: 28, vy: 0, score: 0, left: 0, right: 0, sim: 0 });
      },
      step(state, dt) {
        const g = 70, lo = 47, hi = 85;
        state.vy += g * dt;
        state.x += state.vx * dt;
        state.y += state.vy * dt;
        if (state.x < lo) { state.x = lo; state.vx = Math.abs(state.vx); state.score += 1250; }
        if (state.x > hi) { state.x = hi; state.vx = -Math.abs(state.vx); state.score += 1250; }
        if (state.y < 10) { state.y = 10; state.vy = Math.abs(state.vy); state.score += 5000; }
        const flipping = state.y > 22 && state.vy > 0;
        state.left = Math.max(0, state.left - dt * 6);
        state.right = Math.max(0, state.right - dt * 6);
        if (flipping && state.y > 25) {
          const fromLeft = state.x < 66;
          if (fromLeft) state.left = 1; else state.right = 1;
          state.vy = -Math.min(64, 46 + Math.abs(state.vx) * 0.4);
          state.vx = (fromLeft ? 1 : -1) * (14 + ((state.score / 1250) % 5) * 7);
          state.score += 25000;
        }
      },
      draw(buf, t, state) {
        if (state.sim === undefined) this.reset(state);
        while (state.sim < t) { this.step(state, 1 / 120); state.sim += 1 / 120; }
        for (let y = 9; y < 32; y++) { set(buf, 44, y, 0.38); set(buf, 88, y, 0.38); }
        for (let x = 44; x <= 88; x++) set(buf, x, 8, 0.38);
        const lift = s => -0.55 + (1 - s) * 0.95;
        const flip = (px, dir, s) => line(buf, px, 27, px + dir * Math.cos(lift(s)) * 8, 27 + Math.sin(lift(s)) * 8, 1);
        flip(57, 1, state.left); flip(57, 1, state.left * 0.85);
        flip(75, -1, state.right); flip(75, -1, state.right * 0.85);
        const bx = Math.round(state.x), by = Math.round(state.y);
        set(buf, bx, by, 1); set(buf, bx + 1, by, 1); set(buf, bx, by + 1, 1); set(buf, bx + 1, by + 1, 1);
        stamp(buf, small('SCORE'), 4, 2, 0.6);
        stamp(buf, small(String(state.score)), 4, 11, 1);
        stamp(buf, small('BALL 1'), 92, 2, 0.6);
        if (Math.floor(t * 2.2) % 2 === 0) { stamp(buf, small('PRESS'), 95, 13, 0.9); stamp(buf, small('START'), 95, 22, 0.9); }
      },
    },

    marquee: {
      label: 'Richmond',
      duration: 0,
      still: 0,
      reset(state) { state.text = this.text(); },
      text: () => 'BASED IN RICHMOND, VIRGINIA  *  LOCAL TIME ' + richmondTime() + '  *  WEBSITES, GAME SOFTWARE AND PRINTED PARTS',
      draw(buf, t, state, reduced) {
        const bmp = small(state.text);
        // Real displays scroll a whole dot per refresh, so the marquee steps instead of gliding.
        const x = COLS - Math.floor(t * 40);
        const msg = reduced ? small('RICHMOND, VIRGINIA') : bmp;
        stamp(buf, msg, reduced ? center(msg) : x, 12, 1);
        const chase = Math.floor(t * 12);
        for (let i = 0; i < COLS; i++) {
          set(buf, i, 3, (i + chase) % 4 === 0 ? 0.95 : 0.12);
          set(buf, i, 28, (i - chase + 1000) % 4 === 0 ? 0.95 : 0.12);
        }
      },
      length: state => (small(state.text || 'X').w + COLS) / 40,
    },

    tilt: {
      label: 'Tilt',
      duration: 4,
      still: 0.2,
      draw(buf, t) {
        const on = Math.floor(t * 3) % 2 === 0;
        const word = big('TILT');
        if (on) stamp(buf, word, center(word), 4, 1);
        const msg = small('PAGE NOT FOUND');
        stamp(buf, msg, center(msg), 21, 0.7);
      },
    },
  };

  // Renderer ------------------------------------------------------------------------
  class DMD {
    constructor(canvas, { scenes = ['name', 'build', 'play', 'marquee'], reduced = false, onScene } = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.order = scenes;
      this.reduced = reduced;
      this.onScene = onScene;
      this.target = new Float32Array(N);
      this.prevBuf = new Float32Array(N);
      this.display = new Float32Array(N);
      this.noise = Float32Array.from({ length: N }, () => Math.random());
      this.index = 0;
      this.time = 0;
      this.state = {};
      this.prev = null;
      this.fade = 1;
      this.running = false;
      this.visible = true;
      this.resize = this.resize.bind(this);
      this.frame = this.frame.bind(this);
      new ResizeObserver(this.resize).observe(canvas);
      this.resize();
    }

    get scene() { return SCENES[this.current]; }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(this.canvas.clientWidth * dpr);
      if (!w) return;
      this.pitch = w / COLS;
      this.canvas.width = w;
      this.canvas.height = Math.round(this.pitch * ROWS);
      this.sprites = this.makeSprites();
      this.base = this.makeBase();
      this.paint();
    }

    makeBase() {
      const c = document.createElement('canvas');
      c.width = this.canvas.width; c.height = this.canvas.height;
      const x = c.getContext('2d');
      x.fillStyle = '#0a0908';
      x.fillRect(0, 0, c.width, c.height);
      x.fillStyle = 'rgba(255, 106, 19, 0.075)';
      const r = this.pitch * 0.36;
      for (let row = 0; row < ROWS; row++) for (let col = 0; col < COLS; col++) {
        x.beginPath();
        x.arc((col + 0.5) * this.pitch, (row + 0.5) * this.pitch, r, 0, Math.PI * 2);
        x.fill();
      }
      return c;
    }

    makeSprites() {
      const size = Math.ceil(this.pitch * 3), mid = size / 2, out = [];
      for (let level = 1; level <= 15; level++) {
        const v = level / 15;
        const c = document.createElement('canvas');
        c.width = c.height = size;
        const x = c.getContext('2d');
        const glow = x.createRadialGradient(mid, mid, 0, mid, mid, this.pitch * 1.4);
        glow.addColorStop(0, `rgba(255, 110, 25, ${0.34 * v})`);
        glow.addColorStop(1, 'rgba(255, 110, 25, 0)');
        x.fillStyle = glow;
        x.fillRect(0, 0, size, size);
        const g = Math.round(70 + 110 * v), b = Math.round(10 + 70 * Math.max(0, v - 0.6));
        x.fillStyle = `rgb(255, ${g}, ${b})`;
        x.globalAlpha = 0.25 + 0.75 * v;
        x.beginPath();
        x.arc(mid, mid, this.pitch * (0.33 + 0.05 * v), 0, Math.PI * 2);
        x.fill();
        out.push(c);
      }
      return out;
    }

    show(name) {
      this.current = name;
      this.time = 0;
      this.state = {};
      const scene = SCENES[name];
      if (scene.reset) scene.reset(this.state);
      if (this.onScene && scene.label) this.onScene(scene.label, this.order.indexOf(name) + 1, this.order.length);
    }

    render(buf, name, t, state) {
      buf.fill(0);
      SCENES[name].draw(buf, t, state, this.reduced);
    }

    sceneLength(name, state) {
      const s = SCENES[name];
      return s.length ? s.length(state) : s.duration;
    }

    boot() {
      this.show(this.reduced ? this.order[0] : 'boot');
      if (this.reduced) { this.still(); return; }
      this.start();
    }

    still() {
      this.render(this.target, this.current, SCENES[this.current].still, this.state);
      this.display.set(this.target);
      this.paint();
    }

    next() {
      const at = this.current === 'boot' ? -1 : this.order.indexOf(this.current);
      const name = this.order[(at + 1) % this.order.length];
      if (this.reduced) { this.show(name); this.still(); return; }
      this.prev = { name: this.current, t: this.time, state: this.state };
      this.fade = 0;
      this.show(name);
    }

    start() {
      if (this.running || this.reduced || !this.current) return;
      this.running = true;
      this.last = performance.now();
      requestAnimationFrame(this.frame);
    }

    stop() { this.running = false; }

    frame(now) {
      if (!this.running) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.time += dt;
      if (this.time >= this.sceneLength(this.current, this.state)) this.next();

      this.render(this.target, this.current, this.time, this.state);
      if (this.fade < 1 && this.prev) {
        this.fade = Math.min(1, this.fade + dt / 0.55);
        this.render(this.prevBuf, this.prev.name, this.prev.t, this.prev.state);
        for (let i = 0; i < N; i++) if (this.noise[i] > this.fade) this.target[i] = this.prevBuf[i];
      }

      const rise = 1 - Math.exp(-dt * 45), fall = 1 - Math.exp(-dt * 26);
      for (let i = 0; i < N; i++) {
        const d = this.target[i] - this.display[i];
        this.display[i] += d * (d > 0 ? rise : fall);
      }
      this.paint();
      requestAnimationFrame(this.frame);
    }

    paint() {
      if (!this.base) return;
      const { ctx, pitch, sprites } = this;
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(this.base, 0, 0);
      ctx.globalCompositeOperation = 'lighter';
      const size = sprites[0].width, off = size / 2;
      for (let i = 0; i < N; i++) {
        const level = Math.round(this.display[i] * 15);
        if (level < 1) continue;
        ctx.drawImage(sprites[level - 1], (i % COLS + 0.5) * pitch - off, ((i / COLS | 0) + 0.5) * pitch - off);
      }
    }
  }

  window.DMD = DMD;
})();
