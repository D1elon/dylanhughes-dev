/* A 128×32 dot-matrix display, the kind of screen pinball machines used from the 1990s on, in ice white on royal blue.
   Scenes draw brightness values into a buffer; the renderer adds the dots' persistence and glow. */
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
  // Shapes, with soft edges: a dot is lit by how much of it the shape covers, as a display's lettering artist would
  // shade the edge of a curve.
  function disc(buf, cx, cy, r, v = 1) {
    for (let y = Math.floor(cy - r - 1); y <= Math.ceil(cy + r + 1); y++) for (let x = Math.floor(cx - r - 1); x <= Math.ceil(cx + r + 1); x++) {
      const k = Math.min(1, Math.max(0, r + 0.5 - Math.hypot(x - cx, y - cy)));
      if (k > 0.05) set(buf, x, y, v * k);
    }
  }
  function ring(buf, cx, cy, r, v = 1) {
    for (let y = Math.floor(cy - r - 1); y <= Math.ceil(cy + r + 1); y++) for (let x = Math.floor(cx - r - 1); x <= Math.ceil(cx + r + 1); x++) {
      const k = Math.min(1, Math.max(0, 1 - Math.abs(Math.hypot(x - cx, y - cy) - r) * 1.4));
      if (k > 0.05) set(buf, x, y, v * k);
    }
  }
  // A flipper bat: a round end 4 dots across, round the pivot at (px, py), tapering along `len` to a rounded tip under 2 dots
  // across, pointing toward `dir` (1 right, -1 left) at `angle` below horizontal, with its pivot pin left dark.
  function bat(buf, px, py, dir, angle, len, v = 1) {
    const tx = px + dir * Math.cos(angle) * len, ty = py + Math.sin(angle) * len, r0 = 2.0, r1 = 0.85;
    const ex = tx - px, ey = ty - py, l2 = ex * ex + ey * ey;
    for (let y = Math.floor(Math.min(py, ty) - r0 - 1); y <= Math.ceil(Math.max(py, ty) + r0 + 1); y++) {
      for (let x = Math.floor(Math.min(px, tx) - r0 - 1); x <= Math.ceil(Math.max(px, tx) + r0 + 1); x++) {
        const k = Math.max(0, Math.min(1, ((x - px) * ex + (y - py) * ey) / l2));
        const d = Math.hypot(x - (px + ex * k), y - (py + ey * k)), r = r0 + (r1 - r0) * k;
        const c = Math.min(1, Math.max(0, r + 0.5 - d));
        if (c > 0.05) set(buf, x, y, v * c);
      }
    }
    const i = Math.round(py) * COLS + Math.round(px);
    if (i >= 0 && i < N) buf[i] = 0.18;
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
      // A little playfield, 44 dots wide: an arched top, two pop bumpers, inlane guides down to a pair of flippers
      // drawn as real bats (a round pivot end tapering to a rounded tip), and a ball that plays between them.
      field: {
        lo: 47, hi: 85, top: 10, guide: 20,
        pops: [{ x: 58, y: 15, r: 2.6 }, { x: 74, y: 15, r: 2.6 }],
        flippers: [{ x: 53.5, y: 25, dir: 1 }, { x: 78.5, y: 25, dir: -1 }],
        len: 9.5, rest: 0.5, up: -0.42,
      },
      reset(state) {
        Object.assign(state, { x: 66, y: 11, vx: 22, vy: 0, score: 0, left: 0, right: 0, pop: [0, 0], sim: 0, n: 0 });
      },
      // The flipper's angle below horizontal for a stroke `s` (1 at full lift, easing back to 0 at rest).
      angle(s) { const F = this.field; return F.rest + (F.up - F.rest) * Math.sin(Math.min(1, s) * Math.PI / 2); },
      step(state, dt) {
        const F = this.field, g = 64;
        state.vy += g * dt;
        state.x += state.vx * dt;
        state.y += state.vy * dt;
        // The walls, narrowing down the inlane guides toward the flippers.
        const inset = Math.max(0, state.y - F.guide) * 1.25;
        if (state.x < F.lo + inset) { state.x = F.lo + inset; state.vx = Math.abs(state.vx); }
        if (state.x > F.hi - inset) { state.x = F.hi - inset; state.vx = -Math.abs(state.vx); }
        if (state.y < F.top) { state.y = F.top; state.vy = Math.abs(state.vy) * 0.8; state.score += 500; }
        // The pops kick the ball away from their centre and light up.
        F.pops.forEach((p, i) => {
          const dx = state.x - p.x, dy = state.y - p.y, d = Math.hypot(dx, dy), reach = p.r + 1.5;
          if (d < reach && d > 0) {
            const nx = dx / d, ny = dy / d, dot = state.vx * nx + state.vy * ny;
            if (dot < 0) { state.vx -= 2 * dot * nx; state.vy -= 2 * dot * ny; }
            state.vx += nx * 12; state.vy += ny * 12;
            state.x = p.x + nx * reach; state.y = p.y + ny * reach;
            state.pop[i] = 1; state.score += 1000;
          }
          state.pop[i] = Math.max(0, state.pop[i] - dt * 4);
        });
        state.left = Math.max(0, state.left - dt * 5.5);
        state.right = Math.max(0, state.right - dt * 5.5);
        // Flip as the ball comes down onto a flipper (or, over the gap, just before it would drain).
        if (state.vy > 0 && state.y > 20) {
          const side = state.x < 66 ? 0 : 1, f = F.flippers[side];
          const along = (state.x - f.x) * f.dir, reach = Math.cos(F.rest) * F.len;
          const surface = f.y + Math.min(reach, Math.max(0, along)) * Math.tan(F.rest) - 2.2;
          if (state.y >= surface || state.y > 27) {
            state[side ? 'right' : 'left'] = 1;
            state.n += 1;
            state.vy = -(50 + (state.n % 3) * 5);
            state.vx = (side ? -1 : 1) * (12 + (state.n % 4) * 6);
            state.score += 25000;
          }
        }
      },
      draw(buf, t, state) {
        if (state.sim === undefined) this.reset(state);
        while (state.sim < t) { this.step(state, 1 / 120); state.sim += 1 / 120; }
        const F = this.field, dim = 0.36;
        // The arched top and the walls, then the inlane guides down to the flippers.
        for (let x = 50; x <= 82; x++) set(buf, x, 7, dim);
        line(buf, 50, 7, 45, 12, dim); line(buf, 82, 7, 87, 12, dim);
        for (let y = 12; y <= F.guide; y++) { set(buf, 45, y, dim); set(buf, 87, y, dim); }
        line(buf, 45, F.guide, 51, F.guide + 4.8, dim); line(buf, 87, F.guide, 81, F.guide + 4.8, dim);
        // The pops: rings that light up when hit.
        F.pops.forEach((p, i) => { ring(buf, p.x, p.y, p.r, 0.45 + 0.55 * state.pop[i]); if (state.pop[i] > 0.3) disc(buf, p.x, p.y, 1.1, state.pop[i]); });
        // The flippers.
        F.flippers.forEach((f, i) => bat(buf, f.x, f.y, f.dir, this.angle(i ? state.right : state.left), F.len));
        disc(buf, state.x, state.y, 1.55, 1);
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
    constructor(canvas, { scenes = ['name', 'build', 'play', 'marquee'], reduced = false, onScene, width } = {}) {
      // A fixed width draws offscreen, for use as a texture; otherwise the canvas follows its CSS size.
      this.fixedWidth = width || 0;
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
      if (!this.fixedWidth) new ResizeObserver(this.resize).observe(canvas);
      this.resize();
    }

    get scene() { return SCENES[this.current]; }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = this.fixedWidth || Math.round(this.canvas.clientWidth * dpr);
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
      x.fillStyle = '#06070a';
      x.fillRect(0, 0, c.width, c.height);
      // Unlit dots: a faint blue-grey.
      x.fillStyle = 'rgba(120, 136, 170, 0.085)';
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
        // A royal-blue glow round each lit dot, and the dot itself warming from royal to ice white as it brightens.
        const glow = x.createRadialGradient(mid, mid, 0, mid, mid, this.pitch * 1.4);
        glow.addColorStop(0, `rgba(43, 89, 255, ${0.5 * v})`);
        glow.addColorStop(1, 'rgba(43, 89, 255, 0)');
        x.fillStyle = glow;
        x.fillRect(0, 0, size, size);
        const r = Math.round(60 + 109 * v), g = Math.round(98 + 93 * v);
        x.fillStyle = `rgb(${r}, ${g}, 255)`;
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
      if (this.onPaint) this.onPaint();
    }
  }

  window.DMD = DMD;
})();
