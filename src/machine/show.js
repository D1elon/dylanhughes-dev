// Everything that moves: flippers, pops, slings, drop targets, inserts, the plunger and the ball's scripted runs.
import * as THREE from 'three';
import { BALL_R, FLIPPER, FLIPPERS, POPS, POP, TOP_LANES, PF } from './layout.js';
import { MM, pf } from './geo.js';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

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
    this.h.ball.material = this.h.ball.material.clone();
    this.h.ball.material.transparent = true;
    this.paths = this.buildPaths();
    this.cradle = this.cradlePoint(0);
    this.h.ball.position.copy(this.cradle);
    this.lastBall.copy(this.cradle);
    this.dropGoals = [0, 0, 0, 0];
    this.ladder = -1;
    this.station = null;
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
    const onRamp = BALL_R * MM, onWire = 7.5 * MM;
    // One shot: from a flipper, up the opposite ramp, down its wire, through the inlane onto the other flipper.
    const shot = (from, ramp, toFlipper) => {
      const p = new BallPath();
      p.add(this.batPoint(from, 50), 0.4).event('flip-' + (from === 0 ? 'left' : 'right'));
      p.line(ramp.curve.getPointAt(0).add(new THREE.Vector3(0, onRamp, 0)), 1.9, 1.6, 30);
      p.addCurve(ramp.curve, 0, 1, 1.5, 0.5, onRamp, 110);
      p.event('ramp-' + ramp.id);
      p.addCurve(ramp.wireCurve, 0, 1, 0.55, 1.15, onWire, 120);
      const end = ramp.wireCurve.getPointAt(1);
      const inlane = new THREE.Vector3(end.x, BALL_R * MM, end.z).add(new THREE.Vector3(0, 0, 0.018));
      p.line(inlane, 1.0, 0.9, 8);
      const side = toFlipper === 0 ? 1 : -1;
      const mid = pf(PF.cx - side * 150, 262, BALL_R);
      p.line(mid, 0.9, 0.8, 20);
      p.line(this.batPoint(toFlipper, 34), 0.8, 0.55, 16);
      p.line(this.batPoint(toFlipper, 50), 0.55, 0.4, 10);
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
    const reach = POP.cap / 2 + BALL_R - 1;
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
    return { loop, pops, shot: single };
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
  firePop(i) {
    const p = this.h.pops[i];
    if (p) p.fire = 1;
  }
  kickSling(side) {
    const s = this.h.slings.find(x => x.side === side);
    if (s) s.kick = 1;
  }
  flash(id, amount = 1) {
    const ins = this.h.inserts.get(id);
    if (ins) ins.flash = Math.max(ins.flash, amount);
  }
  pull() { this.h.plunger.pull = 1; this.h.plunger.pulling = true; }
  release() {
    const pl = this.h.plunger;
    pl.pulling = false;
    pl.released = this.time;
    this.launch = { start: this.time };
  }

  // --- Frame update --------------------------------------------------------------------------------------

  update(dt, ctx) {
    this.time += dt;
    const t = this.time;
    const h = this.h;
    const P = this.power;

    // Flippers: a fast, slightly overshooting swing like a real coil.
    for (const f of h.flippers) {
      if (f.release && t >= f.release && !f.held) { f.target = f.rest; f.release = 0; }
      const k = f.target === f.up ? 70 : 34;
      f.velocity += (f.target - f.angle) * k * k * dt - f.velocity * 2 * k * 0.55 * dt;
      f.angle += f.velocity * dt;
      if (this.reduced) f.angle = f.target;
      f.pivot.rotation.y = f.angle * DEG;
    }

    // Pops: the ring snaps down, the skirt wobbles and the cap flashes.
    for (const p of h.pops) {
      p.fire = Math.max(0, p.fire - dt * 6);
      const e = p.fire;
      p.ring.position.y = (27 - 17 * Math.pow(e, 0.6)) * MM;
      p.skirt.rotation.x = Math.sin(t * 60) * 0.06 * e;
      p.capMat.emissiveIntensity = (0.22 + 2.6 * e) * P;
    }

    // Slings.
    for (const s of h.slings) {
      s.kick = Math.max(0, s.kick - dt * 7);
      s.kicker.position.copy(s.rest).addScaledVector(s.push, Math.sin(s.kick * Math.PI));
    }

    // Drop targets drop fast and reset with a little bounce.
    for (const d of h.drops) {
      const goal = this.dropGoals[d.index];
      const speed = goal > d.down ? 14 : 5;
      d.down += clamp(goal - d.down, -dt * speed, dt * speed);
      const dip = d.down >= 0.999 ? 1 : d.down;
      d.holder.position.y = -dip * 35 * MM;
    }

    // Plunger.
    const pl = h.plunger;
    if (pl.pulling) pl.pull = Math.min(1, pl.pull + dt * 2.4);
    else pl.pull = Math.max(0, pl.pull - dt * 22);
    pl.group.position.copy(pl.rest).add(new THREE.Vector3(0, 0, pl.pull * 40 * MM));
    if (this.launch) {
      const u = (t - this.launch.start) / 0.55;
      const b = h.shooterBall;
      if (u < 1) b.position.copy(pf(491.35, 117.9 + u * u * 780, BALL_R));
      else if (u < 3) b.visible = false;
      else { b.visible = true; b.position.copy(pf(491.35, 117.9, BALL_R)); this.launch = null; }
    }

    this.updateBall(dt, ctx);
    this.updateInserts(dt, ctx);

    // Backglass and lights follow the power level.
    h.backglass.material.color.setScalar(P * (0.92 + 0.08 * Math.sin(t * 1.3)));
    for (const light of h.gi) light.intensity = light.userData.base * P;
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
        this.trigger(path.events[this.eventCursor].name);
        this.eventCursor++;
      }
      path.sample(Math.min(local, path.duration), ball.position);
      if (this.mode === 'pops' && local > path.duration) this.ballFade = Math.max(0, 1 - (local - path.duration) * 4);
    } else if (this.mode === 'shot') {
      const path = this.paths.shot;
      while (this.eventCursor < path.events.length && path.events[this.eventCursor].time <= this.modeTime) {
        this.trigger(path.events[this.eventCursor].name);
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

  trigger(name) {
    if (name.startsWith('flip-')) { this.flip(name.slice(5)); this.kickSling(name.slice(5) === 'left' ? 'right' : 'left'); }
    else if (name.startsWith('pop-')) this.firePop(+name.slice(4));
    else if (name === 'ramp-deadbounce') this.flash('ramp0', 1.4);
    else if (name === 'ramp-tiptop') this.flash('ramp1', 1.4);
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
          goal = step === lane || step === 4 ? 1.8 : 0.22;
          break;
        }
        case 'ramp0': goal = s === 'deadbounce' ? (Math.floor(t * 4) % 2 ? 2.2 : 0.4) : 0.3; break;
        case 'ramp1': goal = s === 'tiptop' ? (Math.floor(t * 4) % 2 ? 2.2 : 0.4) : 0.3; break;
        case 'drops': goal = this.dropGoals[ins.index] > 0.5 ? 2.2 : 0.12; break;
        case 'ladder': {
          if (s === 'experience') goal = ins.index < this.ladder ? 1.5 : ins.index === this.ladder ? (Math.floor(t * 5) % 2 ? 2.6 : 1.2) : 0.1;
          else goal = (Math.floor(t * 4) % 6) === ins.index ? 0.9 : 0.12;
          break;
        }
        case 'again': goal = s === 'contact' ? (Math.floor(t * 2.5) % 2 ? 2.4 : 0.5) : 0.15; break;
        case 'return': goal = (Math.floor(t * 1.5) + ins.index) % 4 === 0 ? 1.1 : 0.18; break;
      }
      ins.flash = Math.max(0, ins.flash - dt * 3);
      ins.level += (goal - ins.level) * (1 - Math.exp(-dt * 18));
      ins.mat.emissiveIntensity = (ins.level + ins.flash * 2) * P;
    }
  }

  setDrops(progress) {
    // Each target drops in turn across the station's hold.
    for (let i = 0; i < 4; i++) {
      const goal = progress > 0.12 + i * 0.2 ? 1 : 0;
      if (goal && !this.dropGoals[i]) this.flash('drop' + i, 1.2);
      this.dropGoals[i] = goal;
    }
  }
  setLadder(progress) { this.ladder = Math.min(4, Math.floor(progress * 5.2)); }
}
