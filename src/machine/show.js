// Everything that moves. The ball is simulated (physics.js): it rolls, bounces and is kicked by the parts it meets,
// and the flippers are coils in the same simulation. An autopilot plays the machine for each section of the page:
// ramp shots for the case studies, a soft plunge into the top lanes for the pop bumpers, the ball held on a flipper
// elsewhere. This file animates the parts in step with the simulation and lights the inserts.
import * as THREE from 'three';
import { BALL_R, FLIPPERS, FLIPPER, POP, SHOOTER, DROPS, PF } from './layout.js';
import * as layout from './layout.js';
import { MM, pf } from './geo.js';
import { Physics } from './physics.js';
import { buildColliders, KICKS } from './colliders.js';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Shooter: 44.45 mm of pull; released, the spring drives the tip home in about 16 ms and it overtravels 5 mm into
// its buffer before settling.
const PULL = 44.45, SPRING_W = 99;
// Launch speeds: a soft plunge drops into a top lane; a full one rounds the orbit.
const PLUNGE = { soft: 1400, full: 2600 };

// What the machine plays at each section.
const PLAYS = { hero: 'play', deadbounce: 'ramp-deadbounce', tiptop: 'ramp-tiptop', about: 'pops', skills: 'hold', experience: 'hold', contact: 'hold' };
const ROTATION = ['ramp-deadbounce', 'orbit-left', 'ramp-tiptop', 'orbit-right'];

export class Show {
  constructor(h, { reduced }) {
    this.h = h;
    this.reduced = reduced;
    this.time = 0;
    this.power = 0; // 0 → 1 as the machine powers on
    this.dropGoals = [0, 0, 0, 0];
    this.ladder = -1;
    this.station = null;
    this.play = 'play';
    this.exploded = 0;
    for (const d of h.drops) d.rest = d.holder.position.clone();
    for (const r of h.rollovers) r.pos = pf(r.x, r.y, BALL_R);
    h.shooterBall.visible = false; // one ball, as in a real game
    h.ball.material = h.ball.material.clone();

    // The simulation, built from the same layout as the parts.
    this.physics = new Physics({ seed: 7 });
    this.ids = buildColliders(this.physics, layout);
    this.popColliders = this.physics.colliders.filter(c => c.kind === 'pop');
    this.events();
    // The autopilot's state: where the ball is in its cycle, and what each flipper is doing.
    this.auto = { state: 'serve', at: 0, side: null, still: 0, shotUntil: 0, next: 0, user: -1e9, cache: new Map() };
    h.plunger.releasedAt = -1;
    this.serveAt = 0.2;
    this.plungeSpeed = PLUNGE.full;
    this.aim = new THREE.Vector3();
    if (reduced) this.settleForStill();
  }

  // Reduced motion: no play. The ball is set on the left flipper's cradle once and the scene stays still.
  settleForStill() {
    const P = this.physics, f = FLIPPERS[0];
    P.setFlipper('left', true);
    P.ball.place(f.x + 20, f.y + 70, 0, -200);
    P.run(2.5);
    this.auto.state = 'still';
  }

  events() {
    const P = this.physics;
    P.on('kick', e => {
      if (e.kind === 'pop') this.firePop(+String(e.id).slice(3), pf(e.x, e.y));
      else if (e.kind === 'sling') this.kickSling(String(e.id).replace('sling-', ''));
    });
    P.on('hit', e => {
      if (e.kind === 'drop') this.hitDrop(+String(e.id).slice(4));
    });
    P.on('enter', e => {
      const id = String(e.id);
      if (/^(lane|return)\d$/.test(id)) this.flash(id, 1.2);
      else if (/^orbit\d$/.test(id)) this.flash(id, 1.4);
      else if (id === 'gate') this.swingGate();
      else if (id.endsWith('-made')) {
        const ramp = id.slice(5, -5);
        this.flash(ramp === 'deadbounce' ? 'ramp0' : 'ramp1', 1.4);
        this.fireFlasher(ramp);
      }
    });
    P.on('drain', () => {
      // Into the trough; a new ball comes out to the shooter lane shortly.
      this.auto.state = 'serve';
      this.serveAt = this.time + 0.9;
      for (const f of FLIPPERS) P.setFlipper(f.side, false);
    });
  }

  setStation(name) {
    if (name === this.station) return;
    this.station = name;
    this.play = PLAYS[name] || this.play;
    // Holding the ball when the pops need it: let it go, so it drains and comes back by the plunger.
    if (this.play === 'pops' && this.auto.state === 'cradled') this.letGo();
  }

  // --- Part actions --------------------------------------------------------------------------------------

  // A visitor's flip: it takes over from the autopilot for a few seconds.
  flip(side, hold = 0.16) {
    const P = this.physics;
    this.auto.user = this.time;
    P.setFlipper(side, true);
    P.setFlipper(side, false, hold);
  }
  hold(side, on) {
    this.auto.user = this.time;
    this.physics.setFlipper(side, on);
  }
  // From a held ball: shoot it now (clicking the flipper at Contact does this).
  shoot() {
    if (this.auto.state !== 'cradled') return false;
    this.auto.forceShot = true;
    return true;
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
  swingGate() {
    const g = this.h.gate;
    g.open = Math.max(g.open, 1.25);
    g.velocity = 0;
  }
  // A drop target is knocked down; hitting one that's already down resets the bank.
  hitDrop(i) {
    const d = this.h.drops[i];
    if (!d) return;
    if (d.state === 'up') {
      d.state = 'falling';
      d.since = this.time;
      this.flash('drop' + i, 1.2);
      this.physics.setEnabled('drop' + i, false);
    } else if (d.state === 'down') this.resetBank();
  }
  // The reset coil lifts every dropped target at once.
  resetBank() {
    for (const d of this.h.drops) {
      if (d.state === 'up') continue;
      d.state = 'rising';
      d.since = this.time;
      this.physics.setEnabled('drop' + d.index, true);
    }
  }
  // The plunger, worked by hand: pull, then release. With a ball in the lane, the release launches it.
  pull() {
    const pl = this.h.plunger;
    pl.pulling = true;
    pl.releasedAt = -1;
    this.auto.user = this.time;
  }
  release(speed) {
    const pl = this.h.plunger;
    if (!pl.pulling) return;
    pl.pulling = false;
    pl.releasedAt = this.time;
    pl.from = pl.pull;
    pl.limit = 1;
    this.plungeSpeed = speed ?? PLUNGE.soft + (PLUNGE.full - PLUNGE.soft) * pl.from;
  }

  // --- The autopilot ---------------------------------------------------------------------------------------

  near(side) {
    const b = this.physics.ball, f = FLIPPERS[side === 'left' ? 0 : 1];
    if (!b.active || b.layer !== 0) return false;
    const onSide = side === 'left' ? b.x < PF.cx + 8 : b.x > PF.cx - 8;
    return onSide && b.y < f.y + 95 && Math.hypot(b.x - f.x, b.y - f.y) < FLIPPER.length + 70;
  }
  letGo() {
    for (const f of FLIPPERS) this.physics.setFlipper(f.side, false);
    this.auto.state = 'play';
    this.auto.side = null;
  }
  // Where to aim for a shot, and the timing from a cradle, worked out once per flipper and target in the simulation.
  shotFor(side, target) {
    const key = side + ':' + target;
    if (this.auto.cache.has(key)) return this.auto.cache.get(key);
    let point = this.ids.aim[target.replace(/^ramp-/, '')];
    if (target === 'pass') {
      const other = FLIPPERS[side === 'left' ? 1 : 0];
      point = [other.x + (side === 'left' ? 14 : -14), other.y + 150];
    }
    const r = point ? this.physics.aimFlip(side, point[0], point[1], { minArrive: target.startsWith('ramp') ? 2000 : 0 }) : null;
    this.auto.cache.set(key, r);
    return r;
  }

  autopilot(dt) {
    const P = this.physics, b = P.ball, A = this.auto, t = this.time;
    if (A.state === 'still') return;
    if (t - A.user < 4) return; // a visitor is playing

    if (A.state === 'serve') {
      if (t < this.serveAt) return;
      // The trough kicks a ball out from under the apron into the shooter lane.
      A.state = 'serving';
      A.at = t;
      return;
    }
    if (A.state === 'serving') {
      if (t - A.at < 0.38) return;
      P.ball.place(SHOOTER.ballRest[0], SHOOTER.ballRest[1], 0, 0);
      A.state = 'shooter';
      A.at = t;
      return;
    }
    if (A.state === 'shooter') {
      // The autopilot's own plunge: soft for the pops, full otherwise.
      const pl = this.h.plunger;
      if (!pl.pulling && pl.releasedAt < 0 && t - A.at > 0.8) {
        this.pull();
        A.user = -1e9;
        pl.limit = this.play === 'pops' ? 0.25 : 1;
      }
      if (pl.pulling && pl.pull >= pl.limit - 0.001 && t - A.at > 1.4) {
        this.release(this.play === 'pops' ? PLUNGE.soft : PLUNGE.full);
        A.user = -1e9;
      }
      return;
    }

    // In play.
    if (!b.active) return;
    const slow = b.speed < 30;
    for (const f of FLIPPERS) {
      const side = f.side;
      const close = this.near(side);
      if (A.state === 'play' && close && this.play !== 'pops' && t > A.shotUntil && b.vy < 40) {
        // Catch: hold the flipper up and let the ball roll into the cradle.
        P.setFlipper(side, true);
        A.state = 'catching';
        A.side = side;
        A.at = t;
      }
    }
    if (A.state === 'catching') {
      if (!this.near(A.side)) { if (t - A.at > 0.4) this.letGo(); return; }
      A.still = slow ? A.still + dt : 0;
      if (A.still > 0.25) { A.state = 'cradled'; A.at = t; }
      else if (t - A.at > 2.5) this.letGo();
      return;
    }
    if (A.state === 'cradled') {
      if (!this.near(A.side)) { this.letGo(); return; }
      if (this.play === 'pops') { this.letGo(); return; }
      const wait = A.forceShot ? 0 : this.play === 'hold' ? Infinity : 0.7;
      if (t - A.at < wait) return;
      A.forceShot = false;
      let target = this.play;
      if (target === 'play' || target === 'hold') { target = ROTATION[A.next % ROTATION.length]; A.next++; }
      let shot = this.shotFor(A.side, target);
      if (!shot || shot.miss > 14) { target = 'pass'; shot = this.shotFor(A.side, 'pass'); }
      if (!shot) { this.letGo(); return; }
      P.setFlipper(A.side, false);
      P.setFlipper(A.side, true, shot.delay);
      P.setFlipper(A.side, false, shot.delay + 0.25);
      A.shotUntil = t + shot.delay + 0.5;
      A.state = 'play';
      A.side = null;
    }
  }

  // --- Frame update --------------------------------------------------------------------------------------

  update(dt, ctx) {
    this.time += dt;
    const t = this.time;
    const h = this.h;
    const P = this.power;
    const sim = this.physics;

    // The exploded bumper (About) doesn't kick while it's apart.
    if (this.popColliders[2]) this.popColliders[2].kick = this.exploded > 0.05 ? 0 : KICKS.pop;
    if (!this.reduced) {
      this.autopilot(dt);
      sim.step(dt);
    }
    for (const f of h.flippers) f.pivot.rotation.y = sim.flipperAngle(f.side) * DEG;

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
    this.updateBall();
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

  // The ball, drawn where the simulation has it (on a ramp or wire it carries its height), turning as it rolls.
  updateBall() {
    const b = this.physics.ball, ball = this.h.ball, A = this.auto;
    if (A.state === 'serving') {
      // Rolling out from under the apron into the lane.
      const u = clamp((this.time - A.at) / 0.38), k = 1 - (1 - u) ** 2;
      ball.visible = true;
      ball.position.copy(pf(SHOOTER.laneLeft - 24 + (SHOOTER.ballRest[0] - SHOOTER.laneLeft + 24) * k, SHOOTER.ballRest[1] + 4 * (1 - k), BALL_R));
      return;
    }
    ball.visible = b.active;
    if (!b.active) return;
    // Pulling the plunger lets the ball roll back with its tip.
    const back = A.state === 'shooter' ? this.h.plunger.shown || 0 : 0;
    ball.position.copy(pf(b.view.x, b.view.y - back, b.view.z));
    ball.quaternion.set(b.q[0], b.q[2], -b.q[1], b.q[3]);
  }

  // The shooter: the tip comes back as it's pulled, drives home on release and overtravels into its buffer. If the
  // ball is waiting in the lane, it's launched as the tip reaches home.
  updateShooter(dt) {
    const h = this.h, pl = h.plunger, t = this.time, A = this.auto;
    let mm = 0;
    if (pl.pulling) { pl.pull = Math.min(pl.limit ?? 1, pl.pull + dt / 0.5); mm = pl.pull * PULL; }
    else if (pl.releasedAt >= 0) {
      const e = t - pl.releasedAt, home = Math.PI / 2 / SPRING_W;
      if (e < home) mm = pl.from * PULL * Math.cos(SPRING_W * e);
      else {
        if (A.state === 'shooter') {
          this.physics.ball.place(SHOOTER.ballRest[0], SHOOTER.ballRest[1] + 1, 0, this.plungeSpeed);
          A.state = 'play';
        }
        const u = (e - home) / 0.12;
        mm = u < 1 ? -5 * pl.from * Math.sin(Math.PI * u) : 0;
        if (u >= 1) { pl.releasedAt = -1; pl.pull = 0; }
      }
    }
    if (this.reduced) mm = 0;
    pl.shown = Math.max(0, mm);
    pl.group.position.copy(pl.rest);
    pl.group.position.z += mm * MM;
    pl.spring.scale.z = (pl.springLen - mm) / pl.springLen;
    // The gate hangs like a pendulum and can only swing one way: closed, it rests against its stop.
    const g = h.gate;
    g.velocity += (-Math.sin(g.open) * 820 - g.velocity * 6) * dt;
    g.open += g.velocity * dt;
    if (g.open < 0) { g.open = 0; g.velocity = Math.abs(g.velocity) > 0.5 ? -g.velocity * 0.3 : 0; }
    g.flap.rotation.x = this.reduced ? 0 : g.open;
  }
  // Rollover wires press flush under a passing ball and spring back; each lights its insert.
  updateRollovers(dt) {
    const balls = [this.h.ball];
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
