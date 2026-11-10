// Everything that moves. The ball is simulated (physics.js): it rolls, bounces and is kicked by the parts it meets,
// and the flippers are coils in the same simulation. An autopilot plays the machine for each section of the page:
// ramp shots for the case studies, a soft plunge into the top lanes for the pop bumpers, the ball held on a flipper
// elsewhere. This file animates the parts in step with the simulation and lights the inserts: the lane inserts are
// the Skills list and the top lanes' the Experience timeline, lit in turn as those sections scroll by.
import * as THREE from 'three';
import { BALL_R, FLIPPERS, POP, SHOOTER, PF, RAMPS } from './layout.js';
import * as layout from './layout.js';
import { MM, pf } from './geo.js';
import { Physics } from './physics.js';
import { buildColliders, KICKS } from './colliders.js';
import { rolloverInsert } from './art.js';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Shooter: 44.45 mm of pull; released, the spring drives the tip home in about 16 ms and it overtravels 5 mm into
// its buffer before settling.
const PULL = 44.45, SPRING_W = 99;
// Launch speeds: a full plunge rounds the orbit; a soft one drops off the top into a top lane. At 1400 mm/s it drops
// through the middle lane into the saucer, which kicks it away from the pops; 1300 drops through the fourth lane onto
// them (every one of 12 seeded runs: 3 to 14 pop hits).
const PLUNGE = { soft: 1300, full: 2600 };

// What the machine plays at each section.
const PLAYS = { hero: 'play', deadbounce: 'ramp-deadbounce', tiptop: 'ramp-tiptop', about: 'pops', skills: 'hold', experience: 'hold', contact: 'hold' };
const ROTATION = ['ramp-deadbounce', 'orbit-left', 'ramp-tiptop', 'orbit-right'];

export class Show {
  constructor(h, { reduced }) {
    this.h = h;
    this.reduced = reduced;
    this.time = 0;
    this.power = 0; // 0 → 1 as the machine powers on
    this.skillsLit = [0, 0, 0, 0]; // the lane inserts, Web to Fab, lit as Skills scrolls by
    this.skillFocus = -1; // the one the camera is on, which pulses
    this.rung = -1; // the top lane lit last as Experience scrolls by, -1 before the first
    this.explodedPop = 0; // the pop the About section takes apart: pop_1, the back one
    this.station = null;
    this.play = 'play';
    this.exploded = 0;
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
    const P = this.physics, f = FLIPPERS.find(x => x.id === 'left');
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
      else if (e.kind === 'saucer') this.kickSaucer();
    });
    P.on('hit', e => {
      if (e.kind === 'target') this.hitTarget(+String(e.id).slice(6), e.speed);
    });
    P.on('enter', e => {
      const id = String(e.id);
      if (/^(lane|return)\d$/.test(id)) this.flash(rolloverInsert(id), 0.8);
      else if (/^orbit\d$/.test(id)) this.flash(rolloverInsert(id), 1.4);
      else if (id === 'saucer') { this.flash('saucer_arrow', 1.6); this.saucerAt = this.time; }
      else if (id === 'gate') this.swingGate();
      else if (id.endsWith('-made')) {
        const ramp = RAMPS.find(r => id === `ramp-${r.id}-made`);
        if (ramp) this.flash(`${ramp.side}_ramp_arrow`, 1.4);
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
  flash(id, amount = 1) {
    const ins = this.h.inserts.get(id);
    if (ins) ins.flash = Math.max(ins.flash, amount);
  }
  swingGate() {
    const g = this.h.gate;
    g.open = Math.max(g.open, 1.25);
    g.velocity = 0;
  }
  // A standup is struck: its face knocks back on its leaf a little and springs back, and its insert flashes. `speed`
  // (mm/s) sets how far it goes.
  hitTarget(i, speed = 1500) {
    const t = this.h.targets[i];
    if (!t) return;
    t.hit = this.time;
    t.kick = Math.min(1, 0.35 + speed / 2500);
    const ins = this.h.inserts.get(layout.TARGETS.list[i].insert);
    if (ins) ins.flash = Math.max(ins.flash, 1.3);
  }
  // The saucer's kicker finger swings out and the ball leaves.
  kickSaucer() {
    if (this.h.saucer) this.h.saucer.kicked = this.time;
    this.flash('saucer_arrow', 1);
  }
  // The cabinet's start button, pressed: it flashes, and a ball waiting in the shooter lane is launched.
  pressStart() {
    this.startAt = this.time;
    const pl = this.h.plunger;
    if (this.auto.state === 'shooter' && !pl.pulling && pl.releasedAt < 0) {
      pl.pull = 0.7;
      pl.pulling = true;
      this.release(PLUNGE.full);
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
    const b = this.physics.ball, f = FLIPPERS.find(x => x.id === side);
    if (!b.active || b.layer !== 0) return false;
    const onSide = side === 'left' ? b.x < PF.cx + 8 : b.x > PF.cx - 8;
    return onSide && b.y < f.y + 95 && Math.hypot(b.x - f.x, b.y - f.y) < f.length + 70;
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
      const other = FLIPPERS.find(x => x.id === (side === 'left' ? 'right' : 'left'));
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
    if (!b.active || P.held) return;
    const slow = b.speed < 30;
    for (const side of ['left', 'right']) {
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
    const apart = this.popColliders[this.explodedPop];
    if (apart) apart.kick = this.exploded > 0.05 ? 0 : KICKS.pop;
    if (!this.reduced) {
      this.autopilot(dt);
      sim.step(dt);
    }
    for (const f of h.flippers) f.pivot.rotation.y = sim.flipperAngle(f.id) * DEG;

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

    // Standups: the face knocks back up to 2 mm on its leaf in 4 ms and rings back over about 70 ms.
    for (const tg of h.targets) {
      const e = tg.hit < 0 ? 9 : t - tg.hit;
      let back = 0;
      if (e < 0.004) back = e / 0.004;
      else if (e < 0.09) back = Math.cos(((e - 0.004) / 0.086) * Math.PI * 1.5) * Math.exp(-(e - 0.004) * 30);
      tg.holder.position.copy(tg.rest).addScaledVector(tg.back, this.reduced ? 0 : 2 * (tg.kick || 1) * back);
    }
    // The saucer's finger: out 6 mm through its slot in 8 ms and back by 60 ms.
    if (h.saucer) {
      const sc = h.saucer, e = sc.kicked < 0 ? 9 : t - sc.kicked;
      const out = e < 0.008 ? e / 0.008 : e < 0.06 ? 1 - (e - 0.008) / 0.052 : 0;
      sc.finger.position.copy(sc.rest).addScaledVector(sc.out, this.reduced ? 0 : 6 * MM * out);
    }

    this.updateShooter(dt);
    this.updateBall();
    this.updateRollovers(dt);
    this.updateInserts(dt, ctx);

    // Backglass and lights follow the power level.
    // The translite's art breathes a little, as a light box does; a picture on the LCD holds steady.
    h.backglass.material.color.setScalar(P * (h.backglass.lcd.showing === 'art' ? 0.92 + 0.08 * Math.sin(t * 1.3) : 0.94));
    for (const light of h.gi) light.intensity = light.userData.base * P;
    for (const m of h.bulbs) m.emissiveIntensity = 2.2 * P * m.userData.gain;
    // The start button blinks while a ball waits, as in attract mode, and flashes when pressed.
    const pressed = this.startAt === undefined ? 9 : t - this.startAt;
    const waiting = this.auto.state === 'shooter' && Math.sin(t * 5) > 0;
    h.startButton.material.emissiveIntensity = (0.3 + (waiting ? 0.5 : 0) + 3 * Math.exp(-pressed * 5)) * P * (h.startButton.material.userData.gain || 1);
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
      if (on && !r.on) this.flash(r.insert, 0.8);
      r.on = on;
      r.press = on ? Math.min(1, r.press + dt / 0.01) : Math.max(0, r.press - dt / 0.03);
      r.wire.scale.y = 1 - 0.75 * r.press;
    }
  }

  // Inserts: each lamp eases toward its goal; flashes decay on top. Two shows run over them. When the machine powers
  // on, the lamps come up in a wave from the flippers to the top arch, the way the site's pages arrive dot by dot. And
  // away from the sections that read the lamps (Skills, Experience, Contact) the game runs its attract show: every
  // few seconds a ring of light runs out from the sun across the whole field.
  updateInserts(dt, ctx) {
    const t = this.time, P = this.power, s = this.station;
    const OFF = 0.05;
    if (P > 0.02 && this.litAt === undefined) this.litAt = t;
    const since = this.litAt === undefined || this.reduced ? 9 : t - this.litAt;
    const attract = !this.reduced && s !== 'skills' && s !== 'experience' && s !== 'contact';
    const beat = t % 6.5, ring = attract && beat < 1.5 ? (beat / 1.5) * 660 : -1;
    for (const [id, ins] of this.h.inserts) {
      let goal = OFF;
      switch (ins.group) {
        case 'years': {
          // Experience: the years light in turn, the latest blinking; elsewhere a chase across the five lanes, then
          // all five together.
          if (s === 'experience') goal = ins.index < this.rung ? 0.85 : ins.index === this.rung ? (Math.floor(t * 5) % 2 ? 1.15 : 0.7) : 0.08;
          else { const step = Math.floor(t * 3) % 7; goal = step === ins.index || step === 5 ? 0.85 : 0.12; }
          break;
        }
        case 'skills': {
          // Lit lane inserts sit well under the bloom: the camera's focus light is on them too, close up.
          if (s === 'skills') goal = this.skillsLit[ins.index] > 0.5 ? (ins.index === this.skillFocus ? 0.78 + 0.1 * Math.sin(t * 5) : 0.6) : 0.06;
          else goal = (Math.floor(t * 1.5) + ins.index) % 4 === 0 ? 0.75 : 0.14;
          break;
        }
        // The ramps' comets breathe, a beat apart, and blink when their case study is on.
        case 'ramp0': goal = s === 'deadbounce' ? (Math.floor(t * 4) % 2 ? 1.2 : 0.3) : 0.3 + 0.14 * Math.sin(t * 2.2); break;
        case 'ramp1': goal = s === 'tiptop' ? (Math.floor(t * 4) % 2 ? 1.2 : 0.3) : 0.3 + 0.14 * Math.sin(t * 2.2 + Math.PI); break;
        // The stack climbs: extra ball, lock, wizard, then all three.
        case 'ladder': { const step = Math.floor(t * 2.5) % 5; goal = step === ins.index || step === 3 ? 0.9 : 0.14; break; }
        // Design, build, ship: lit across in turn.
        case 'targets': goal = Math.floor(t * 1.6) % 4 === ins.index ? 0.7 : 0.16; break;
        case 'saucer': goal = this.physics.held ? (Math.floor(t * 8) % 2 ? 1.2 : 0.4) : s === 'about' ? 0.6 : 0.25; break;
        case 'again': goal = s === 'contact' ? (Math.floor(t * 2.5) % 2 ? 1.2 : 0.35) : 0.12; break;
        case 'orbit': goal = Math.floor(t * 1.2) % 2 === ins.index ? 0.5 : 0.14; break;
      }
      let show = 0;
      if (ring >= 0) show = Math.max(0, 1 - Math.abs(Math.hypot(ins.x - PF.cx, ins.y - 492) - ring) / 80) * 0.45;
      if (since < 2) show = Math.max(show, Math.max(0, 1 - Math.abs(ins.y - (since / 1.4) * 1100) / 130) * 0.8);
      ins.flash = Math.max(0, ins.flash - dt * 3);
      ins.level += (goal - ins.level) * (1 - Math.exp(-dt * 18));
      ins.mat.emissiveIntensity = (ins.level + ins.flash * 1.1 + show) * P * ins.mat.userData.gain;
      ins.side.emissiveIntensity = ins.mat.emissiveIntensity;
    }
  }

  // Scrolling through Skills lights the lane inserts in turn, Web to Fab, each flashing as it comes on; scrolling back
  // up puts them out again.
  setSkills(progress) {
    this.skillsLit.forEach((lit, i) => {
      const on = progress > 0.12 + i * 0.2 ? 1 : 0;
      if (on && !lit) this.flash(layout.RETURN_LANES[i].insert, 0.6);
      this.skillsLit[i] = on;
    });
  }
  // Scrolling through Experience lights the top lanes' years in turn, 2025 first.
  setTimeline(progress) { this.rung = Math.min(4, Math.floor(progress * 5.2)); }
}
