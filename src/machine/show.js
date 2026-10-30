// Everything that moves: flippers, pops, slings, drop targets, inserts, the plunger and the ball's scripted runs.
import * as THREE from 'three';
import { BALL_R, FLIPPER, FLIPPERS, POPS, POP, TOP_LANES, PF, SHOOTER, ARCH, DROPS, WIRE, RETURN_LANES } from './layout.js';
import { MM, pf } from './geo.js';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = t => t * t * (3 - 2 * t);

// Flipper coil: a constant torque swings the bat through its 52° stroke in 28 ms. Over the last 6° the hold winding
// takes over at 0.375 of the torque; the return spring gives 0.055 of it, bringing the bat home in about 0.11 s.
// Both stops are hard: the end-of-stroke stop throws the bat back at a fifth of its speed, the rest stop at a tenth.
const STROKE = 52, ALPHA = (2 * STROKE) / 0.028 ** 2;

// Shooter: 44.45 mm of pull; released, the spring drives the tip home in about 16 ms and it overtravels 5 mm into
// its buffer before settling.
const PULL = 44.45, SPRING_W = 99;

// A path the ball follows: dense points with a speed at each, sampled by time. Events fire at given points.
class BallPath {
  constructor() { this.points = []; this.speeds = []; this.events = []; }
  add(point, speed) { this.points.push(point.clone()); this.speeds.push(speed); return this; }
  addCurve(curve, from, to, v0, v1, lift, steps = 80) {
    for (let i = 0; i <= steps; i++) {
      const u = from + (to - from) * (i / steps);
      this.add(curve.getPointAt(u).add(new THREE.Vector3(0, lift, 0)), v0 + (v1 - v0) * (i / steps));
    }
    return this;
  }
  line(to, v0, v1, steps = 24) {
    const from = this.points.at(-1);
    for (let i = 1; i <= steps; i++) this.add(from.clone().lerp(to, i / steps), v0 + (v1 - v0) * (i / steps));
    return this;
  }
  event(name) { this.events.push({ at: this.points.length - 1, name }); return this; }
  build() {
    this.times = [0];
    for (let i = 1; i < this.points.length; i++) {
      const d = this.points[i].distanceTo(this.points[i - 1]);
      const v = Math.max(0.05, (this.speeds[i] + this.speeds[i - 1]) / 2);
      this.times.push(this.times[i - 1] + d / v);
    }
    this.duration = this.times.at(-1);
    for (const e of this.events) e.time = this.times[e.at];
    return this;
  }
  sample(t, out) {
    const ts = this.times;
    let lo = 0, hi = ts.length - 1;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (ts[mid] <= t) lo = mid; else hi = mid; }
    const span = ts[hi] - ts[lo] || 1;
    return out.copy(this.points[lo]).lerp(this.points[hi], clamp((t - ts[lo]) / span));
  }
}

export class Show {
  constructor(h, { reduced }) {
    this.h = h;
    this.reduced = reduced;
    this.time = 0;
    this.mode = 'rest';
    this.modeTime = 0;
    this.ballFade = 1;
    this.pendingMode = null;
    this.power = 0; // 0 → 1 as the machine powers on
    this.lastBall = new THREE.Vector3();
    this.ballSpin = new THREE.Quaternion();
    for (const b of [this.h.ball, this.h.shooterBall]) {
      b.material = b.material.clone();
      b.material.transparent = true;
    }
    this.paths = this.buildPaths();
    this.cradle = this.cradlePoint(0);
    this.h.ball.position.copy(this.cradle);
    this.lastBall.copy(this.cradle);
    this.dropGoals = [0, 0, 0, 0];
    this.ladder = -1;
    this.station = null;
    for (const d of h.drops) d.rest = d.holder.position.clone();
    for (const r of h.rollovers) r.pos = pf(r.x, r.y, BALL_R);
    this.plunge = null; // the shooter ball's run up the lane after a launch
    this.serve = null; // a new ball rolling into the shooter lane
  }

  // Where the ball rests when cradled on a raised flipper.
  cradlePoint(i) {
    const f = FLIPPERS[i];
    const a = f.up * DEG, s = 26;
    const half = FLIPPER.baseR + (FLIPPER.tipR - FLIPPER.baseR) * (s / FLIPPER.length) + 0.6;
    const dir = i === 0 ? 1 : -1;
    const nx = -Math.sin(a) * dir, ny = Math.cos(a) * dir;
    return pf(f.x + Math.cos(a) * s + nx * (half + BALL_R), f.y + Math.sin(a) * s + ny * (half + BALL_R), BALL_R);
  }

  // Point on a resting flipper's top edge where a returning ball meets it.
  batPoint(i, s) {
    const f = FLIPPERS[i];
    const a = f.rest * DEG;
    const half = FLIPPER.baseR + (FLIPPER.tipR - FLIPPER.baseR) * (s / FLIPPER.length);
    const nx = -Math.sin(a), ny = Math.cos(a);
    const sign = i === 0 ? 1 : -1;
    return pf(f.x + Math.cos(a) * s + nx * sign * (half + BALL_R), f.y + Math.sin(a) * s + ny * sign * (half + BALL_R), BALL_R);
  }

  buildPaths() {
    const [left, right] = this.h.ramps;
    const onRamp = BALL_R * MM, onWire = WIRE.ride * MM;
    // One shot: from a flipper, up the opposite ramp, down its wire, through the inlane onto the other flipper.
    const shot = (from, ramp, toFlipper) => {
      const p = new BallPath();
      p.add(this.batPoint(from, 50), 0.4).event('flip-' + (from === 0 ? 'left' : 'right'));
      p.line(ramp.curve.getPointAt(0).add(new THREE.Vector3(0, onRamp, 0)), 1.9, 1.6, 30);
      p.addCurve(ramp.curve, 0, 1, 1.5, 0.5, onRamp, 110);
      p.event('ramp-' + ramp.id);
      p.addCurve(ramp.wireCurve, 0, 1, 0.55, 1.15, onWire, 120);
      // Through the spread rails at the dead end, down onto the inlane, over its rollover, along the return lane
      // and onto the flipper.
      const end = ramp.wireCurve.getPointAt(1);
      const m = x => (toFlipper === 0 ? x : 2 * PF.cx - x);
      p.line(new THREE.Vector3(end.x, BALL_R * MM, end.z).add(new THREE.Vector3(0, 0, 0.006)), 0.9, 1.0, 10);
      p.line(pf(m(69.4), 330, BALL_R), 1.0, 1.1, 18);
      p.line(pf(m(68.4), 290, BALL_R), 1.1, 1.15, 8);
      p.line(pf(m(76), 262, BALL_R), 1.15, 1.1, 8);
      p.line(pf(m(92.6), 249.4, BALL_R), 1.1, 1.0, 8);
      p.line(this.batPoint(toFlipper, 22), 1.0, 0.7, 14);
      p.line(this.batPoint(toFlipper, 48), 0.7, 0.4, 10);
      return p;
    };
    const loop = new BallPath();
    for (const part of [shot(0, right, 1), shot(1, left, 0)]) {
      part.build();
      const offset = loop.points.length;
      part.points.forEach((pt, k) => { if (k || !offset) loop.add(pt, part.speeds[k]); });
      part.events.forEach(e => loop.events.push({ at: Math.max(0, e.at + offset - (offset ? 1 : 0)), name: e.name }));
    }
    loop.build();
    const single = shot(0, right, 1).build();

    // Pops: in from the top lanes, a run of bounces between the bumpers, out toward the drop targets.
    const pops = new BallPath();
    const ctr = POPS.map(p => new THREE.Vector2(p.x, p.y));
    let pos = new THREE.Vector2(TOP_LANES.centers[1], TOP_LANES.y + 8);
    pops.add(pf(pos.x, pos.y, BALL_R), 0.9);
    const order = [2, 0, 1, 2, 1, 0, 2, 0];
    const reach = POP.reach;
    for (const k of order) {
      const c = ctr[k];
      const dirv = pos.clone().sub(c).normalize();
      const hit = c.clone().add(dirv.multiplyScalar(reach));
      pops.line(pf(hit.x, hit.y, BALL_R), 1.25, 1.1, 14);
      pops.event('pop-' + k);
      pos = hit;
    }
    pops.line(pf(PF.cx + 30, 690, BALL_R), 1.1, 0.8, 22);
    pops.line(pf(PF.cx + 70, 640, BALL_R), 0.8, 0.5, 10);
    pops.build();

    // A soft plunge: up the shooter lane, through the gate, round the arch's right corner and into a top lane.
    const plunge = new BallPath();
    const lane = SHOOTER.ballRest[0];
    plunge.add(pf(lane, SHOOTER.ballRest[1], BALL_R), 2.6);
    plunge.line(pf(lane, ARCH.right.cy, BALL_R), 2.6, 2.35, 40);
    const rr = ARCH.right.r - BALL_R;
    for (let k = 1; k <= 24; k++) {
      const a = (k / 24) * (Math.PI / 2);
      plunge.add(pf(ARCH.right.cx + Math.cos(a) * rr, ARCH.right.cy + Math.sin(a) * rr, BALL_R), 2.3 - 0.5 * (k / 24));
    }
    const lx = TOP_LANES.centers[2];
    plunge.line(pf(lx + 30, ARCH.right.cy + rr - 4, BALL_R), 1.8, 1.5, 10);
    plunge.line(pf(lx + 4, TOP_LANES.guideTo + 8, BALL_R), 1.5, 1.2, 10);
    plunge.line(pf(lx, TOP_LANES.y, BALL_R), 1.2, 1.05, 10);
    plunge.line(pf(lx - 4, 900, BALL_R), 1.05, 0.95, 16);
    plunge.build();
    return { loop, pops, shot: single, plunge };
  }

  setStation(name) {
    if (name === this.station) return;
    this.station = name;
    const mode = { deadbounce: 'loop', tiptop: 'loop', about: 'pops' }[name] || 'cradle';
    if (mode !== this.mode && mode !== this.pendingMode) this.pendingMode = mode;
  }

  // From the cradle: flip the left flipper and send the ball round the right ramp, then back to the cradle.
  shoot() {
    if (this.mode !== 'cradle' || this.pendingMode) return;
    this.released = true;
    this.hold('left', false);
    this.mode = 'shot';
    this.modeTime = 0;
    this.eventCursor = 0;
    this.lap = 0;
  }

  // --- Part actions --------------------------------------------------------------------------------------

  flip(side, hold = 0.16) {
    const f = this.h.flippers.find(x => x.side === side);
    if (!f) return;
    f.target = f.up;
    f.release = this.time + hold;
  }
  hold(side, on) {
    const f = this.h.flippers.find(x => x.side === side);
    if (!f) return;
    f.held = on;
    f.target = on ? f.up : f.rest;
  }
  // `at`: where the ball struck, in playfield space. The skirt tilts toward it.
  firePop(i, at) {
    const p = this.h.pops[i];
    if (!p) return;
    p.fired = this.time;
    const c = p.group.position;
    const a = this.time * 7.3;
    const dx = at ? at.x - c.x : Math.cos(a), dz = at ? at.z - c.z : Math.sin(a);
    p.axis.set(dz, 0, -dx).normalize();
  }
  kickSling(side) {
    const s = this.h.slings.find(x => x.side === side);
    if (s) s.kicked = this.time;
  }
  // A flasher fires in a quick double strobe, as games do for a made shot.
  fireFlasher(id) {
    const f = this.h.flashers.find(x => x.id === id);
    if (f) f.fired = this.time;
  }
  flash(id, amount = 1) {
    const ins = this.h.inserts.get(id);
    if (ins) ins.flash = Math.max(ins.flash, amount);
  }
  // A drop target is knocked down; hitting one that's already down resets the bank.
  hitDrop(i) {
    const d = this.h.drops[i];
    if (!d) return;
    if (d.state === 'up') { d.state = 'falling'; d.since = this.time; this.flash('drop' + i, 1.2); }
    else if (d.state === 'down') this.resetBank();
  }
  // The reset coil lifts every dropped target at once.
  resetBank() {
    for (const d of this.h.drops) if (d.state !== 'up') { d.state = 'rising'; d.since = this.time; }
  }
  pull() {
    const pl = this.h.plunger;
    if (this.plunge || this.serve) return;
    pl.pulling = true;
    pl.releasedAt = -1;
  }
  release() {
    const pl = this.h.plunger;
    if (!pl.pulling) return;
    pl.pulling = false;
    pl.releasedAt = this.time;
    pl.from = pl.pull;
  }

  // --- Frame update --------------------------------------------------------------------------------------

  update(dt, ctx) {
    this.time += dt;
    const t = this.time;
    const h = this.h;
    const P = this.power;

    for (const f of h.flippers) {
      if (f.release && t >= f.release && !f.held) { f.target = f.rest; f.release = 0; }
      if (this.reduced) { f.angle = f.target; f.velocity = 0; f.pivot.rotation.y = f.angle * DEG; continue; }
      const on = f.target === f.up, dir = Math.sign(f.up - f.rest);
      let a = (f.angle - f.rest) * dir, w = f.velocity;
      const n = Math.min(60, Math.ceil(dt / 0.0005)), step = dt / n;
      for (let k = 0; k < n; k++) {
        w += (on ? ALPHA * (a > STROKE - 6 ? 0.375 : 1) : -0.055 * ALPHA) * step;
        a += w * step;
        if (a >= STROKE) { a = STROKE; w = w > 60 ? -0.2 * w : Math.min(w, 0); }
        if (a <= 0) { a = 0; w = w < -60 ? -0.1 * w : Math.max(w, 0); }
      }
      f.velocity = w;
      f.angle = f.rest + dir * a;
      f.pivot.rotation.y = f.angle * DEG;
    }

    // Pops: the skirt tilts toward the ball, the ring pulls down in 10 ms, holds through the pulse and springs back
    // by 75 ms; the cap and body flash with the lamp.
    for (const p of h.pops) {
      const e = p.fired < 0 ? 9 : t - p.fired;
      const ring = e < 0.004 ? 0 : e < 0.014 ? ((e - 0.004) / 0.01) ** 2 : e < 0.03 ? 1 : e < 0.075 ? 0.5 + 0.5 * Math.cos((Math.PI * (e - 0.03)) / 0.045) : 0;
      p.ring.position.y = (POP.ringRest - POP.ringTravel * (this.reduced ? 0 : ring)) * MM;
      const tilt = e < 0.006 ? e / 0.006 : Math.max(0, 1 - (e - 0.006) / 0.035);
      p.skirt.quaternion.setFromAxisAngle(p.axis, this.reduced ? 0 : tilt * 2.5 * DEG);
      const glow = e < 0.5 ? Math.exp(-e / 0.07) : 0;
      p.capMat.emissiveIntensity = (0.22 + 2.6 * glow) * P * p.capMat.userData.gain;
      p.bodyMat.emissiveIntensity = (0.06 + 1.4 * glow) * P * p.bodyMat.userData.gain;
    }

    // Slings: the arm swings out in 8 ms, holds through the pulse and is back by 65 ms; the rubber rings on a moment.
    for (const s of h.slings) {
      const e = s.kicked < 0 ? 9 : t - s.kicked;
      let arm = 0;
      if (e < 0.008) arm = Math.sin((e / 0.008) * (Math.PI / 2));
      else if (e < 0.025) arm = 1;
      else if (e < 0.065) arm = 0.5 + 0.5 * Math.cos((Math.PI * (e - 0.025)) / 0.04);
      const ring = e >= 0.065 && e < 0.35 ? -0.16 * Math.sin((e - 0.065) * Math.PI * 2 * 22) * Math.exp(-(e - 0.065) * 14) : 0;
      if (this.reduced) arm = 0;
      s.arm.position.copy(s.rest).addScaledVector(s.push, arm);
      const rub = this.reduced ? 0 : arm + ring;
      if (Math.abs(rub - s.shown) > 0.015 || (rub === 0 && s.shown !== 0)) {
        s.rubber.geometry.dispose();
        s.rubber.geometry = s.rubberGeo(rub * 9);
        s.shown = rub;
      }
    }

    // Drop targets: knocked back 1.5 mm off the latch, then down in about 30 ms. The bank resets together: up past
    // the latch, then settling back onto it.
    for (const d of h.drops) {
      const e = t - d.since;
      let down = 0, back = 0;
      if (d.state === 'falling') {
        back = Math.min(1, e / 0.005) * 1.5;
        const u = Math.max(0, (e - 0.005) / 0.03);
        down = -(DROPS.height + 1) * Math.min(1, u * u);
        if (u >= 1) d.state = 'down';
      } else if (d.state === 'down') {
        down = -(DROPS.height + 1); back = 1.5;
      } else if (d.state === 'rising') {
        const u = e / 0.03, v = (e - 0.03) / 0.045;
        if (u < 1) down = -(DROPS.height + 1) + (DROPS.height + 3) * (1 - (1 - u) ** 2);
        else if (v < 1) down = 2 * (0.5 + 0.5 * Math.cos(Math.PI * v));
        else d.state = 'up';
      }
      if (this.reduced) { down = d.state === 'up' || d.state === 'rising' ? 0 : -(DROPS.height + 1); back = 0; }
      d.holder.position.copy(d.rest);
      d.holder.position.y += down * MM;
      d.holder.position.z -= back * MM;
      this.dropGoals[d.index] = d.state === 'falling' || d.state === 'down' ? 1 : 0;
    }

    this.updateShooter(dt);
    this.updateBall(dt, ctx);
    this.updateRollovers(dt);
    this.updateInserts(dt, ctx);

    // Backglass and lights follow the power level.
    h.backglass.material.color.setScalar(P * (0.92 + 0.08 * Math.sin(t * 1.3)));
    for (const light of h.gi) light.intensity = light.userData.base * P;
    for (const m of h.bulbs) m.emissiveIntensity = 2.2 * P * m.userData.gain;
    for (const f of h.flashers) {
      const e = f.fired === undefined ? 9 : t - f.fired;
      const k = e < 0.09 ? 1 : e < 0.16 ? 0.15 : e < 0.25 ? 1 : Math.max(0, 1 - (e - 0.25) / 0.2);
      const level = this.reduced ? 0 : k * k;
      f.mat.emissiveIntensity = (0.08 + 3 * level) * P * f.mat.userData.gain;
      f.light.intensity = 0.05 * level * P;
    }
  }

  // The shooter: the ball rides back with the tip as it's pulled, is struck as the tip drives home, runs up the
  // lane and through the gate; a new ball then rolls in from the trough.
  updateShooter(dt) {
    const h = this.h, pl = h.plunger, t = this.time, ball = h.shooterBall;
    let mm = 0;
    if (pl.pulling) { pl.pull = Math.min(1, pl.pull + dt / 0.5); mm = pl.pull * PULL; }
    else if (pl.releasedAt >= 0) {
      const e = t - pl.releasedAt, home = Math.PI / 2 / SPRING_W;
      if (e < home) mm = pl.from * PULL * Math.cos(SPRING_W * e);
      else {
        if (!this.plunge && pl.from > 0.15) { this.plunge = { start: t, scale: 0.55 + 0.45 * pl.from }; }
        const u = (e - home) / 0.12;
        mm = u < 1 ? -5 * pl.from * Math.sin(Math.PI * u) : 0;
        if (u >= 1) { pl.releasedAt = -1; pl.pull = 0; }
      }
    }
    if (this.reduced) mm = 0;
    pl.group.position.copy(pl.rest);
    pl.group.position.z += mm * MM;
    pl.spring.scale.z = (pl.springLen - mm) / pl.springLen;
    if (this.plunge) {
      const path = this.paths.plunge, e = (t - this.plunge.start) * this.plunge.scale;
      path.sample(Math.min(e, path.duration), ball.position);
      ball.material.opacity = 1 - clamp((e - path.duration + 0.25) / 0.25);
      ball.visible = ball.material.opacity > 0.01;
      if (e > path.duration + 1.4) { this.plunge = null; this.serve = { start: t }; }
    } else if (this.serve) {
      const u = clamp((t - this.serve.start) / 0.35), k = 1 - (1 - u) ** 2;
      ball.visible = true;
      ball.material.opacity = clamp(u * 3);
      ball.position.copy(pf(SHOOTER.laneLeft - 22 + (SHOOTER.ballRest[0] - SHOOTER.laneLeft + 22) * k, SHOOTER.ballRest[1] + 4 * (1 - k), BALL_R));
      if (u >= 1) this.serve = null;
    } else {
      ball.visible = true;
      ball.material.opacity = 1;
      ball.position.copy(pf(SHOOTER.ballRest[0], SHOOTER.ballRest[1] - Math.max(0, mm), BALL_R));
    }
    // The gate swings open as the ball passes through, then falls shut and rings.
    const g = h.gate;
    const near = ball.visible && ball.position.distanceTo(g.at) < 30 * MM && this.plunge;
    if (near) { g.open = Math.max(g.open, 1.25); g.velocity = 0; }
    else {
      // It hangs like a pendulum and can only swing one way: closed, it rests against its stop.
      g.velocity += (-Math.sin(g.open) * 820 - g.velocity * 6) * dt;
      g.open += g.velocity * dt;
      if (g.open < 0) { g.open = 0; g.velocity = Math.abs(g.velocity) > 0.5 ? -g.velocity * 0.3 : 0; }
    }
    g.flap.rotation.x = this.reduced ? 0 : g.open;
  }

  // Rollover wires press flush under a passing ball and spring back; each lights its insert.
  updateRollovers(dt) {
    const balls = [this.h.ball, this.h.shooterBall];
    for (const r of this.h.rollovers) {
      let on = false;
      for (const b of balls) {
        if (!b.visible) continue;
        if (Math.abs(b.position.x - r.pos.x) < 9 * MM && Math.abs(b.position.z - r.pos.z) < 21 * MM && b.position.y < 20 * MM) on = true;
      }
      if (on && !r.on) this.flash(r.insert, 1.2);
      r.on = on;
      r.press = on ? Math.min(1, r.press + dt / 0.01) : Math.max(0, r.press - dt / 0.03);
      r.wire.scale.y = 1 - 0.75 * r.press;
    }
  }

  updateBall(dt, ctx) {
    const ball = this.h.ball;
    const prev = this.lastBall;
    // Mode changes fade the ball out, move it, and fade it back in.
    if (this.pendingMode) {
      this.ballFade = Math.max(0, this.ballFade - dt * 7);
      if (this.ballFade === 0) {
        if (this.mode === 'cradle') this.hold('left', false);
        this.mode = this.pendingMode;
        this.pendingMode = null;
        this.modeTime = 0;
        this.eventCursor = 0;
        this.lap = undefined;
        this.released = false;
        if (this.mode === 'cradle') ball.position.copy(this.cradle);
      }
    } else {
      this.ballFade = Math.min(1, this.ballFade + dt * 5);
    }
    ball.material.opacity = this.ballFade;
    ball.visible = this.ballFade > 0.01;

    this.modeTime += this.reduced ? 0 : dt;
    if (this.mode === 'loop' || this.mode === 'pops') {
      const path = this.paths[this.mode];
      const pause = this.mode === 'pops' ? 0.9 : 0;
      const cycle = path.duration + pause;
      const local = this.modeTime % cycle;
      const lap = Math.floor(this.modeTime / cycle);
      if (lap !== this.lap) { this.lap = lap; this.eventCursor = 0; }
      while (this.eventCursor < path.events.length && path.events[this.eventCursor].time <= local) {
        this.trigger(path.events[this.eventCursor].name, path.points[path.events[this.eventCursor].at]);
        this.eventCursor++;
      }
      path.sample(Math.min(local, path.duration), ball.position);
      if (this.mode === 'pops' && local > path.duration) this.ballFade = Math.max(0, 1 - (local - path.duration) * 4);
    } else if (this.mode === 'shot') {
      const path = this.paths.shot;
      while (this.eventCursor < path.events.length && path.events[this.eventCursor].time <= this.modeTime) {
        this.trigger(path.events[this.eventCursor].name, path.points[path.events[this.eventCursor].at]);
        this.eventCursor++;
      }
      path.sample(Math.min(this.modeTime, path.duration), ball.position);
      if (this.modeTime > path.duration + 0.25 && !this.pendingMode) this.pendingMode = 'cradle';
    } else if (this.mode === 'cradle') {
      if (!this.released) {
        this.hold('left', true);
        ball.position.lerp(this.cradle, 1 - Math.exp(-dt * 20));
      }
    }
    // Rolling: spin the ball by the distance travelled.
    const move = ball.position.clone().sub(prev);
    const dist = move.length();
    if (dist > 1e-6 && dist < 0.2) {
      const axis = new THREE.Vector3(move.z, 0, -move.x).normalize();
      this.ballSpin.setFromAxisAngle(axis, dist / (BALL_R * MM));
      ball.quaternion.premultiply(this.ballSpin);
    }
    prev.copy(ball.position);
  }

  trigger(name, at) {
    if (name.startsWith('flip-')) this.flip(name.slice(5));
    else if (name.startsWith('pop-')) this.firePop(+name.slice(4), at);
    else if (name === 'ramp-deadbounce') { this.flash('ramp0', 1.4); this.fireFlasher('deadbounce'); }
    else if (name === 'ramp-tiptop') { this.flash('ramp1', 1.4); this.fireFlasher('tiptop'); }
  }

  // Inserts: each lamp eases toward its goal; flashes decay on top.
  updateInserts(dt, ctx) {
    const t = this.time, P = this.power, s = this.station;
    const OFF = 0.05;
    for (const [id, ins] of this.h.inserts) {
      let goal = OFF;
      switch (ins.group) {
        case 'lanes': {
          // A chase across the three lanes, then all three together.
          const step = Math.floor(t * 3) % 5, lane = Number(id.slice(-1));
          goal = step === lane || step === 4 ? 1.1 : 0.12;
          break;
        }
        case 'ramp0': goal = s === 'deadbounce' ? (Math.floor(t * 4) % 2 ? 1.6 : 0.3) : 0.2; break;
        case 'ramp1': goal = s === 'tiptop' ? (Math.floor(t * 4) % 2 ? 1.6 : 0.3) : 0.2; break;
        case 'drops': goal = this.dropGoals[ins.index] > 0.5 ? 1.5 : 0.08; break;
        case 'ladder': {
          if (s === 'experience') goal = ins.index < this.ladder ? 1.1 : ins.index === this.ladder ? (Math.floor(t * 5) % 2 ? 1.7 : 0.8) : 0.08;
          else goal = (Math.floor(t * 4) % 6) === ins.index ? 0.9 : 0.12;
          break;
        }
        case 'again': goal = s === 'contact' ? (Math.floor(t * 2.5) % 2 ? 1.6 : 0.35) : 0.1; break;
        case 'orbit': goal = 0.1; break;
        case 'return': goal = (Math.floor(t * 1.5) + ins.index) % 4 === 0 ? 1.1 : 0.18; break;
      }
      ins.flash = Math.max(0, ins.flash - dt * 3);
      ins.level += (goal - ins.level) * (1 - Math.exp(-dt * 18));
      ins.mat.emissiveIntensity = (ins.level + ins.flash * 2) * P * ins.mat.userData.gain;
    }
  }

  // Scrolling through Skills knocks the targets down in turn; scrolling back above it resets the bank.
  setDrops(progress) {
    const goals = [0, 1, 2, 3].map(i => progress > 0.12 + i * 0.2);
    goals.forEach((goal, i) => { if (goal && this.h.drops[i].state === 'up') this.hitDrop(i); });
    if (!goals.some(Boolean) && this.h.drops.some(d => d.state === 'down' || d.state === 'falling')) this.resetBank();
  }
  setLadder(progress) { this.ladder = Math.min(4, Math.floor(progress * 5.2)); }
}
