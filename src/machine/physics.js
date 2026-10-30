// Ball physics: one steel ball on the playfield plane, in playfield millimetres (x from the left rail, y from the
// front toward the back), seconds and mm/s. Plain JS, no three.js. Ported in spirit from the Deadbounce engine
// (studio/src/engine: contact.js, flipper.js, devices.js, world.js) and cut down to two dimensions:
//
// - The ball carries spin: (wx, wy) roll it on the wood and wz turns it about the vertical. Floor friction turns a
//   skid into a roll (so a rolling ball runs down the slope at 5/7 g sin θ, and a ball leaving a flipper skids first);
//   wall friction trades tangential speed for wz, which carries into the next contact as english.
// - It steps at a fixed 1 ms, split into substeps so neither the ball nor a flipper's tip moves more than a fifth of
//   the ball's radius per substep: no tunnelling, no swept tests. Same inputs, same game.
// - Contacts push the ball out, then apply one normal impulse (restitution falling with speed, none under 40 mm/s so a
//   resting ball settles) and Coulomb friction. A flipper takes part in the impulse as a body turning about its pivot.
// - Colliders sit on layers. Layer 0 is the wood; a ramp is a track on its own layer, with a height along its centre
//   line that slows a ball climbing it. Colliders with layer '*' (a ramp's low walls) belong to every layer.

const DEG = Math.PI / 180;
const MAX_SUB = 24;
const REST_SPEED = 40; // mm/s: slower contacts don't bounce
const FALLOFF_SPEED = 1000; // e = e0 / (1 + falloff · v / 1000 mm/s)
const BOUNCE_W = 60 * DEG; // a flipper hitting a stop slower than this (rad/s) just stops

// Contact materials (elasticity, falloff, friction, scatter in degrees): the community VPX values in Deadbounce's
// native-physics.js PHYSICS_MATERIALS, its flipper rubber, and VPX's bumper scatter (2°) for the pop skirts.
export const MATERIALS = Object.freeze({
  rubber: { e: 0.9, falloff: 0.1, f: 0.9, scatter: 1 }, // PhysRubberPost: a ring on a post
  band: { e: 0.85, falloff: 0.13, f: 0.9, scatter: 0 }, // PhysRubberBand: a ring stretched between posts
  sling: { e: 0.85, falloff: 0, f: 0.8, scatter: 1 }, // PhysSling
  metal: { e: 0.4, falloff: 0, f: 0.2, scatter: 0 }, // PhysMetal: guides, rails, mini posts, gate
  pop: { e: 0.4, falloff: 0, f: 0.2, scatter: 2 }, // a pop's skirt: metal, as Deadbounce's Bumper, with VPX's bumper scatter
  plastic: { e: 0.42, falloff: 0, f: 0.3, scatter: 0 }, // PhysPlastic
  drop: { e: 0.625, falloff: 0.05, f: 0.3, scatter: 1 }, // PhysDropTarget
  ramp: { e: 0.5, falloff: 0.2, f: 0.15, scatter: 0 }, // PhysRamp: printed ramp walls
  wire: { e: 0.4, falloff: 0, f: 0.15, scatter: 0 }, // PhysMetalRamp
  flipper: { e: 0.88, falloff: 0.15, f: 0.9, scatter: 0 }, // flipper rubber (FLIPPER_COMMON)
});

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
function material(o, fallback) {
  const base = (typeof o.mat === 'string' ? MATERIALS[o.mat] : o.mat) || MATERIALS[fallback];
  return { e: o.e ?? base.e, falloff: o.falloff ?? base.falloff, f: o.f ?? base.f, scatter: o.scatter ?? base.scatter ?? 0 };
}
// mulberry32: a small seeded generator, so scatter replays exactly.
function nextRandom(p) {
  let t = (p.seed = (p.seed + 0x6d2b79f5) >>> 0);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const layerOk = (c, layer) => c.layer === '*' || c.layer === layer;
function insidePolygon(poly, x, y) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// --- Shapes --------------------------------------------------------------------------------------------------
// Each test returns null or { nx, ny (unit, from the shape toward the ball), depth, px, py (the contact point) }.

function segTest(c, x, y, R) {
  const t = c.len2 > 0 ? clamp(((x - c.ax) * c.ex + (y - c.ay) * c.ey) / c.len2, 0, 1) : 0;
  const qx = c.ax + c.ex * t, qy = c.ay + c.ey * t, dx = x - qx, dy = y - qy, d = Math.hypot(dx, dy), reach = R + c.r;
  if (d >= reach) return null;
  let nx, ny;
  if (d > 1e-9) { nx = dx / d; ny = dy / d; } else { const l = Math.sqrt(c.len2) || 1; nx = -c.ey / l; ny = c.ex / l; }
  return { nx, ny, depth: reach - d, px: qx + nx * c.r, py: qy + ny * c.r, t };
}
function circleTest(c, x, y, R) {
  const dx = x - c.x, dy = y - c.y, d = Math.hypot(dx, dy), reach = R + c.r;
  if (d >= reach) return null;
  const nx = d > 1e-9 ? dx / d : 0, ny = d > 1e-9 ? dy / d : 1;
  return { nx, ny, depth: reach - d, px: c.x + nx * c.r, py: c.y + ny * c.r };
}

// --- The ball ------------------------------------------------------------------------------------------------

class Ball {
  constructor(p) {
    this.p = p;
    Object.assign(this, { x: 0, y: 0, z: p.R, vx: 0, vy: 0, vz: 0, wx: 0, wy: 0, wz: 0, layer: 0, active: false, serial: 0 });
    this.q = [0, 0, 0, 1]; // orientation in the playfield frame (x right, y up the table, z up off the wood)
    this.view = { x: 0, y: 0, z: p.R }; // interpolated to the caller's clock: draw from this
    this.ox = 0; this.oy = 0; this.oz = p.R;
  }
  // Spin in rad/s, playfield frame.
  get spin() { return { x: this.wx, y: this.wy, z: this.wz }; }
  get speed() { return Math.hypot(this.vx, this.vy); }
  // Puts the ball in play at (x, y) moving at (vx, vy), already rolling. `layer` puts it on a ramp's track.
  place(x, y, vx = 0, vy = 0, { layer = 0 } = {}) {
    const p = this.p, R = p.R;
    Object.assign(this, { x, y, vx, vy, vz: 0, wx: -vy / R, wy: vx / R, wz: 0, layer, active: true });
    this.serial++;
    const tr = layer !== 0 ? p.trackOf(layer) : null;
    if (tr) { tr.cursor = -1; this.z = p.locate(tr, x, y).z; } else this.z = R;
    this.ox = x; this.oy = y; this.oz = this.z;
    Object.assign(this.view, { x, y, z: this.z });
    for (const t of p.triggers) t.inside = false;
    return this;
  }
  remove() {
    this.active = false;
    this.serial++;
    for (const t of this.p.triggers) t.inside = false;
  }
}

// --- Flippers ------------------------------------------------------------------------------------------------

// A bat: a base circle on the pivot and a tip circle `length` along it, joined by their outer tangents. The coil is
// show.js's: a constant torque that would swing the bare bat through its stroke in `strokeTime`; over the last 6° the
// hold winding gives 0.375 of it; released, the return spring gives 0.055 of it. The stops throw the bat back at a
// fifth (end of stroke) and a tenth (rest) of its speed. The ball and bat trade impulses through `inertia`.
class Flipper {
  constructor(o) {
    Object.assign(this, { baseR: 11.28, tipR: 6.64, length: 62.8, strokeTime: 0.028, hold: 0.375, holdAngle: 6, ret: 0.055, eosBounce: 0.2, restBounce: 0.1, inertia: 2200 }, o);
    this.id = o.id || 'flipper-' + o.side;
    this.kind = 'flipper';
    this.dir = Math.sign(o.up - o.rest) || 1;
    this.restRad = o.rest * DEG;
    this.stroke = Math.abs(o.up - o.rest) * DEG;
    this.holdAngle *= DEG;
    this.alpha = (2 * this.stroke) / this.strokeTime ** 2; // rad/s²
    this.mat = material(o, 'flipper');
    const cosPhi = (this.baseR - this.tipR) / this.length;
    this.cotPhi = cosPhi / Math.sqrt(1 - cosPhi * cosPhi);
    this.a = 0; this.w = 0; this.oa = 0; // travel from rest (rad), its rate, and travel at the last step (for drawing)
    this.on = false;
    this.queue = [];
  }
  get theta() { return this.restRad + this.dir * this.a; }
  get omega() { return this.w * this.dir; } // rad/s, counter-clockwise positive
  surfaceSpeed() { return Math.abs(this.w) * (this.length + this.tipR); }
  update(h) {
    const acc = this.on ? this.alpha * (this.a > this.stroke - this.holdAngle ? this.hold : 1) : -this.alpha * this.ret;
    this.w += acc * h;
    this.a += this.w * h;
    if (this.a >= this.stroke) {
      this.a = this.stroke;
      if (this.w > 0) this.w = this.w > BOUNCE_W ? -this.eosBounce * this.w : 0;
    } else if (this.a <= 0) {
      this.a = 0;
      if (this.w < 0) this.w = this.w < -BOUNCE_W ? -this.restBounce * this.w : 0;
    }
  }
  test(x, y, R) {
    const th = this.theta, c = Math.cos(th), s = Math.sin(th), dx = x - this.x, dy = y - this.y;
    const qx = dx * c + dy * s, qyr = -dx * s + dy * c, qy = Math.abs(qyr);
    if (qx < -this.baseR - R || qx > this.length + this.tipR + R || qy > this.baseR + R) return null;
    // The nearest axis point: where the surface normal through the ball centre meets the axis.
    const u = clamp(qx - qy * this.cotPhi, 0, this.length);
    const r = this.baseR + ((this.tipR - this.baseR) * u) / this.length;
    const ex = qx - u, d = Math.hypot(ex, qy);
    if (d >= r + R) return null;
    const sg = qyr < 0 ? -1 : 1, lx = d > 1e-9 ? ex / d : 0, ly = d > 1e-9 ? (qy / d) * sg : sg;
    const nx = lx * c - ly * s, ny = lx * s + ly * c;
    const px = this.x + u * c + nx * r, py = this.y + u * s + ny * r, om = this.omega;
    return { nx, ny, depth: r + R - d, px, py, u, svx: -om * (py - this.y), svy: om * (px - this.x), body: this };
  }
  // A bat against its stop can't be pushed further into it.
  locked(lever) {
    const dw = -Math.sign(lever) * this.dir;
    return (dw < 0 && this.a <= 1e-9) || (dw > 0 && this.a >= this.stroke - 1e-9);
  }
  push(dOmega) { this.w += dOmega * this.dir; }
}

// --- The world -----------------------------------------------------------------------------------------------

export class Physics {
  constructor(options = {}) {
    const o = { pitch: 6.5, g: 9810, radius: 13.5, mass: 0.0806, step: 0.001, floorFriction: 0.2, rolling: 0.0035, spinDecay: 1.5, hitMin: 50, cell: 32, seed: 1, ...options };
    this.o = o;
    this.seed = o.seed >>> 0 || 1;
    this.R = o.radius;
    this.mass = o.mass;
    this.dt = o.step;
    this.gy = -o.g * Math.sin(o.pitch * DEG); // along the playfield, toward the player
    this.gN = o.g * Math.cos(o.pitch * DEG); // into the wood
    this.maxTravel = 0.2 * this.R;
    this.bounds = o.bounds || null; // [x0, y0, x1, y1]: a ball outside it has left the machine
    this.colliders = [];
    this.flippers = [];
    this.triggers = [];
    this.tracks = [];
    this.handlers = {};
    this.muted = false;
    this.grid = null;
    this.steps = 0;
    this.time = 0;
    this.acc = 0;
    this.ball = new Ball(this);
  }

  // --- Building ----------------------------------------------------------------------------------------------

  collider(c, o, fallback) {
    Object.assign(c, { id: o.id ?? null, kind: o.kind || c.kind, layer: o.layer ?? 0, enabled: true, mat: material(o, fallback), lastKick: -1e9, solid: true });
    this.colliders.push(c);
    this.grid = null;
    return c.id;
  }
  // A capsule from (ax, ay) to (bx, by) of radius r (0: a line the ball's surface can't cross). oneWay: [nx, ny], the
  // way a ball may pass; the wall only stops a ball that is on that side of it (a gate).
  addWall(ax, ay, bx, by, o = {}) {
    const r = o.r || 0, ex = bx - ax, ey = by - ay;
    const c = { type: 'seg', kind: 'wall', ax, ay, bx, by, r, ex, ey, len2: ex * ex + ey * ey, box: [Math.min(ax, bx) - r, Math.min(ay, by) - r, Math.max(ax, bx) + r, Math.max(ay, by) + r] };
    if (o.oneWay) { const l = Math.hypot(...o.oneWay); c.oneWay = [o.oneWay[0] / l, o.oneWay[1] / l]; }
    if (o.kick) Object.assign(c, { kick: o.kick, minSpeed: o.minSpeed ?? 120, recycle: o.recycle ?? 0.06, normal: o.normal });
    return this.collider(c, o, 'metal');
  }
  // A round post, rubber or pop skirt. kick: the outward speed (mm/s) a strike of at least minSpeed throws the ball
  // out at, as a pop's ring does; it can fire again after `recycle` seconds.
  addCircle(x, y, r, o = {}) {
    const c = { type: 'circle', kind: o.kick ? 'pop' : 'post', x, y, r, box: [x - r, y - r, x + r, y + r] };
    if (o.kick) Object.assign(c, { kick: o.kick, minSpeed: o.minSpeed ?? 50, recycle: o.recycle ?? 0.03 });
    return this.collider(c, o, o.kick ? 'pop' : 'rubber');
  }
  // A sling's active face: a capsule (opts.r) that, struck at minSpeed or more along its middle, kicks the ball out
  // along its normal at `kick` mm/s. normal: the outward normal, or `away`: a point it faces away from.
  addKicker(ax, ay, bx, by, o = {}) {
    const l = Math.hypot(bx - ax, by - ay);
    let n = o.normal || [-(by - ay) / l, (bx - ax) / l];
    if (o.away && (o.away[0] - ax) * n[0] + (o.away[1] - ay) * n[1] > 0) n = [-n[0], -n[1]];
    return this.addWall(ax, ay, bx, by, { kind: 'sling', mat: 'sling', kick: 2200, minSpeed: 120, recycle: 0.06, ...o, normal: n });
  }
  // o: { side, x, y, rest, up (degrees, counter-clockwise from +x), baseR, tipR, length, strokeTime?, inertia? (kg·mm²) }
  addFlipper(o) {
    const f = new Flipper(o);
    this.flippers.push(f);
    return f.id;
  }
  // shape: { x, y, r } or a polygon [[x, y], ...]. o: { kind, layer (0; '*' any), drain (true: the ball leaves play) }
  addTrigger(shape, id, o = {}) {
    const t = { id, kind: o.kind || (o.drain ? 'drain' : 'trigger'), layer: o.layer ?? 0, drain: !!o.drain, enabled: true, inside: false };
    if (Array.isArray(shape)) {
      t.poly = shape.map(p => [p[0], p[1]]);
      const xs = t.poly.map(p => p[0]), ys = t.poly.map(p => p[1]);
      t.box = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
    } else {
      Object.assign(t, { x: shape.x, y: shape.y, r: shape.r });
      t.box = [shape.x - shape.r, shape.y - shape.r, shape.x + shape.r, shape.y + shape.r];
    }
    this.triggers.push(t);
    return id;
  }
  // A ramp or wireform: a centre line [[x, y, z, halfWidth], ...] on its own layer (default: its id). z is the ball
  // centre's height above the wood there; the slope between points slows a climbing ball and speeds a falling one, and
  // the ball is held within halfWidth − R of the line by walls of `mat`. A ball on the wood moving onto the line
  // between s = entry[0] and entry[1] (mm along it in plan) climbs on; a ball on it that falls back past entry[0], or
  // runs past `exit`, drops back onto the wood, keeping `exitDamp` of its speed off the end (a wireform's stop rail).
  addTrack(points, o = {}) {
    const id = o.id || 'track' + this.tracks.length;
    const tr = { id, layer: o.layer ?? id, kind: o.kind || 'ramp', mat: material(o, 'ramp'), entry: o.entry || [0, 0], exit: o.exit ?? Infinity, exitDamp: o.exitDamp ?? 1, cursor: -1 };
    tr.pts = points.map(p => ({ x: p[0], y: p[1], z: p[2], hw: p[3] ?? 21 }));
    tr.seg = [];
    let s = 0;
    for (let i = 0; i + 1 < tr.pts.length; i++) {
      const a = tr.pts[i], b = tr.pts[i + 1], ex = b.x - a.x, ey = b.y - a.y, len = Math.hypot(ex, ey) || 1e-6;
      tr.seg.push({ a, b, ex, ey, len, len2: len * len, s, tx: ex / len, ty: ey / len, slope: (b.z - a.z) / len });
      s += len;
    }
    tr.length = s;
    let k = tr.seg.findIndex(g => g.s + g.len >= tr.entry[1]);
    tr.entrySegs = k < 0 ? tr.seg.length : k + 1;
    const ep = tr.pts.slice(0, tr.entrySegs + 1), pad = Math.max(...ep.map(p => p.hw)) + 40;
    tr.entryBox = [Math.min(...ep.map(p => p.x)) - pad, Math.min(...ep.map(p => p.y)) - pad, Math.max(...ep.map(p => p.x)) + pad, Math.max(...ep.map(p => p.y)) + pad];
    tr.wall = { test: (x, y, R) => this.trackWall(tr, x, y, R), mat: tr.mat, id, kind: tr.kind };
    this.tracks.push(tr);
    return id;
  }
  // Drop targets that have dropped, a trigger that should stop reporting...: every collider and trigger with this id.
  setEnabled(id, on) {
    for (const c of this.colliders) if (c.id === id) c.enabled = !!on;
    for (const t of this.triggers) if (t.id === id) t.enabled = !!on;
  }
  isEnabled(id) {
    const c = this.colliders.find(x => x.id === id) || this.triggers.find(x => x.id === id);
    return c ? c.enabled : false;
  }

  // --- Inputs ------------------------------------------------------------------------------------------------

  flipper(side) { return this.flippers.find(f => f.side === side || f.id === side); }
  // Energise or release a flipper now, or `delay` seconds from now (in step time, so a scheduled flip lands on the
  // exact millisecond). A command for now cancels anything scheduled for that flipper.
  setFlipper(side, energised, delay = 0) {
    const f = this.flipper(side);
    if (!f) return;
    if (delay > 0) {
      f.queue.push({ at: this.time + delay, on: !!energised });
      f.queue.sort((a, b) => a.at - b.at);
    } else {
      f.queue.length = 0;
      f.on = !!energised;
    }
  }
  // Degrees, interpolated to the caller's clock like ball.view.
  flipperAngle(side) {
    const f = this.flipper(side);
    if (!f) return 0;
    const k = this.acc / this.dt, a = f.oa + (f.a - f.oa) * k;
    return f.rest + (f.dir * a) / DEG;
  }

  // --- Events ------------------------------------------------------------------------------------------------
  // 'hit' { id, kind, speed, x, y, nx, ny }, 'kick' { id, kind, speed, x, y, nx, ny }, 'enter' / 'exit' { id, kind,
  // x, y, vx, vy, speed }, 'drain' { id }. Handlers run inside the step; they may call place(), remove(), setEnabled()
  // or setFlipper(). on() returns a function that unsubscribes.

  on(type, fn) {
    (this.handlers[type] ||= []).push(fn);
    return () => { this.handlers[type] = this.handlers[type].filter(h => h !== fn); };
  }
  emit(type, e) {
    if (this.muted) return;
    const list = this.handlers[type];
    if (list) for (const fn of list) fn(e);
  }

  // --- Stepping ----------------------------------------------------------------------------------------------

  step(dt) {
    this.acc += clamp(dt || 0, 0, 0.1);
    while (this.acc >= this.dt) {
      this.acc -= this.dt;
      this.fixedStep();
    }
    const b = this.ball, k = this.acc / this.dt;
    b.view.x = b.ox + (b.x - b.ox) * k;
    b.view.y = b.oy + (b.y - b.oy) * k;
    b.view.z = b.oz + (b.z - b.oz) * k;
  }
  // Exactly n fixed steps (tests, prediction).
  run(seconds) { for (let i = Math.round(seconds / this.dt); i > 0; i--) this.fixedStep(); }

  fixedStep() {
    if (!this.grid) this.buildGrid();
    const b = this.ball;
    for (const f of this.flippers) {
      while (f.queue.length && f.queue[0].at <= this.time + 1e-9) f.on = f.queue.shift().on;
      f.oa = f.a;
    }
    b.ox = b.x; b.oy = b.y; b.oz = b.z;
    let fastest = b.active ? Math.hypot(b.vx, b.vy) : 0;
    for (const f of this.flippers) fastest = Math.max(fastest, f.surfaceSpeed());
    const n = Math.min(MAX_SUB, Math.max(1, Math.ceil((fastest * this.dt) / this.maxTravel)));
    const h = this.dt / n;
    for (let k = 0; k < n; k++) this.substep(h, this.time + k * h);
    this.steps++;
    this.time = this.steps * this.dt;
  }

  substep(h, now) {
    for (const f of this.flippers) f.update(h);
    const b = this.ball;
    if (!b.active) return;
    const serial = b.serial, R = this.R;
    const tr = b.layer !== 0 ? this.trackOf(b.layer) : null;
    let ay = this.gy, ax = 0;
    if (tr) {
      const loc = this.locate(tr, b.x, b.y), k = (-this.gN * loc.slope) / (1 + loc.slope * loc.slope);
      ax += k * loc.tx; ay += k * loc.ty;
    }
    b.vx += ax * h; b.vy += ay * h;
    if (tr || b.z <= R + 0.5) this.roll(b, h);
    b.x += b.vx * h; b.y += b.vy * h;
    this.turn(b, h);
    this.collide(b, now, tr);
    if (b.serial !== serial) return;
    this.layers(b, h, tr);
    this.sense(b);
    if (b.serial !== serial || !this.bounds) return;
    const [x0, y0, x1, y1] = this.bounds;
    if (b.x < x0 || b.x > x1 || b.y < y0 || b.y > y1) { b.remove(); this.emit('drain', { id: 'out' }); }
  }

  // Floor friction: the slip at the contact under the ball is taken out at up to μ·gN, 2/7 of it from the ball's speed
  // and 5/7 into its roll (a solid sphere). Then a little rolling resistance, and the spin about the vertical decays.
  roll(b, h) {
    this.floorImpulse(b, this.o.floorFriction * this.gN * h);
    const v = Math.hypot(b.vx, b.vy);
    if (v > 1e-9) {
      const k = (v - Math.min(v, this.o.rolling * this.gN * h)) / v;
      b.vx *= k; b.vy *= k; b.wx *= k; b.wy *= k;
    }
    b.wz *= Math.exp(-this.o.spinDecay * h);
  }
  // The wood's friction on the skid (the slip under the ball), up to `budget` mm/s of the ball's speed.
  floorImpulse(b, budget) {
    const R = this.R, ux = b.vx - b.wy * R, uy = b.vy + b.wx * R, slip = Math.hypot(ux, uy);
    if (slip <= 1e-9) return;
    const dv = Math.min((slip * 2) / 7, budget), px = (-dv * ux) / slip, py = (-dv * uy) / slip;
    b.vx += px; b.vy += py;
    b.wx += (py * 2.5) / R; b.wy -= (px * 2.5) / R;
  }
  // Turn the ball's orientation by its spin (for drawing).
  turn(b, h) {
    const [qx, qy, qz, qw] = b.q, wx = (b.wx * h) / 2, wy = (b.wy * h) / 2, wz = (b.wz * h) / 2;
    const x = qx + wx * qw + wy * qz - wz * qy, y = qy + wy * qw + wz * qx - wx * qz;
    const z = qz + wz * qw + wx * qy - wy * qx, w = qw - wx * qx - wy * qy - wz * qz, l = Math.hypot(x, y, z, w) || 1;
    b.q[0] = x / l; b.q[1] = y / l; b.q[2] = z / l; b.q[3] = w / l;
  }

  testCollider(c, x, y, R) {
    const k = c.type === 'seg' ? segTest(c, x, y, R) : circleTest(c, x, y, R);
    if (c.oneWay) {
      // Solid only for a ball that arrived from the side it may leave by; decided while the ball is clear of it.
      if (!k) { c.solid = (x - c.ax) * c.oneWay[0] + (y - c.ay) * c.oneWay[1] > 0; return null; }
      if (!c.solid) return null;
    }
    return k;
  }

  collide(b, now, tr) {
    const R = this.R, found = [];
    for (const c of this.cellAt(b.x, b.y)) {
      if (!c.enabled || !layerOk(c, b.layer)) continue;
      const k = this.testCollider(c, b.x, b.y, R);
      if (k) { k.src = c; found.push(k); }
    }
    if (b.layer === 0) for (const f of this.flippers) { const k = f.test(b.x, b.y, R); if (k) { k.src = f; found.push(k); } }
    if (tr) { const k = tr.wall.test(b.x, b.y, R); if (k) { k.src = tr.wall; found.push(k); } }
    if (!found.length) return;
    if (found.length > 1) found.sort((p, q) => q.depth - p.depth);
    for (let i = 0; i < found.length; i++) {
      const src = found[i].src;
      // Earlier contacts may have moved the ball clear of this one.
      const k = i === 0 ? found[0] : src instanceof Flipper ? src.test(b.x, b.y, R) : src.type ? this.testCollider(src, b.x, b.y, R) : src.test(b.x, b.y, R);
      if (!k) continue;
      const speed = this.resolve(b, k, src.mat);
      if (speed <= 0) continue;
      if (src.kick) this.kick(b, src, k, speed, now);
      if (speed >= this.o.hitMin) this.emit('hit', { id: src.id, kind: src.kind, speed, x: k.px, y: k.py, nx: k.nx, ny: k.ny });
    }
  }

  // The contact law. Returns the normal impact speed, or 0 when the ball was already leaving.
  resolve(b, k, mat) {
    const R = this.R, nx = k.nx, ny = k.ny;
    b.x += nx * k.depth; b.y += ny * k.depth;
    // The ball's surface velocity at the contact point (r = −R n), relative to the surface: v + ω × r − v_surface.
    let ux = b.vx + b.wz * R * ny - (k.svx || 0), uy = b.vy - b.wz * R * nx - (k.svy || 0);
    const un = ux * nx + uy * ny;
    if (un >= 0) return 0;
    const speed = -un, e = speed < REST_SPEED ? 0 : mat.e / (1 + (mat.falloff * speed) / FALLOFF_SPEED);
    // A flipper takes its share of the impulse about its pivot.
    const body = k.body;
    let inv = 1, lever = 0;
    if (body) {
      lever = (k.px - body.x) * ny - (k.py - body.y) * nx;
      if (body.locked(lever)) lever = 0;
      else inv += (this.mass * lever * lever) / body.inertia;
    }
    const jn = ((1 + e) * speed) / inv; // mm/s given to the ball along n
    b.vx += jn * nx; b.vy += jn * ny;
    if (lever) body.push((-jn * this.mass * lever) / body.inertia);
    // Friction against the slip at the contact, as Deadbounce's 3D law: one impulse along it, capped by μ·jn, with
    // 1/m + R²/I = 3.5/m for a solid sphere. The slip has a part along the face (the ball's speed and its spin about
    // the vertical) and a vertical part (its roll sweeping its face up or down the wall).
    ux -= un * nx; uy -= un * ny;
    const uz = R * (b.wy * nx - b.wx * ny), slip = Math.hypot(ux, uy, uz);
    if (slip > 1e-9 && mat.f > 0) {
      const j = Math.min(slip / 3.5, mat.f * jn), px = (-j * ux) / slip, py = (-j * uy) / slip, pz = (-j * uz) / slip;
      b.vx += px; b.vy += py;
      b.wz += (ny * px - nx * py) / (0.4 * R);
      b.wx -= (ny * pz) / (0.4 * R);
      b.wy += (nx * pz) / (0.4 * R);
      // The vertical push presses the ball into the wood or hops it off and back down onto it; either way the wood
      // answers with about (1 + its restitution) of it, and its friction acts on the skid with that.
      if (pz && b.z <= R + 0.5) this.floorImpulse(b, this.o.floorFriction * 1.25 * Math.abs(pz));
    }
    if (mat.scatter && speed > 4 * REST_SPEED) this.scatter(b, mat.scatter, k.svx || 0, k.svy || 0);
    return speed;
  }
  // Turn the rebound a little, as an imperfect real surface does.
  scatter(b, degrees, svx = 0, svy = 0) {
    const a = (nextRandom(this) * 2 - 1) * degrees * DEG, c = Math.cos(a), s = Math.sin(a), vx = b.vx - svx, vy = b.vy - svy;
    b.vx = svx + vx * c - vy * s;
    b.vy = svy + vx * s + vy * c;
  }

  // Pops and slings: a strike hard enough throws the ball out at `kick` along the normal (a pop's normal is the
  // contact's; a sling's is its face's, and only along the face's middle, where the leaf switches are).
  kick(b, c, k, speed, now) {
    if (speed < c.minSpeed || now - c.lastKick < c.recycle) return;
    let nx = k.nx, ny = k.ny;
    if (c.normal) {
      if (k.t < 0.08 || k.t > 0.92 || nx * c.normal[0] + ny * c.normal[1] < 0.5) return;
      [nx, ny] = c.normal;
    }
    const out = b.vx * nx + b.vy * ny;
    if (out < c.kick) { b.vx += (c.kick - out) * nx; b.vy += (c.kick - out) * ny; }
    if (c.mat.scatter) this.scatter(b, c.mat.scatter);
    c.lastKick = now;
    this.emit('kick', { id: c.id, kind: c.kind, speed: Math.hypot(b.vx, b.vy), x: k.px, y: k.py, nx, ny });
  }

  // --- Tracks (ramps) ----------------------------------------------------------------------------------------

  trackOf(layer) { return this.tracks.find(t => t.layer === layer) || null; }
  // The nearest point on a track's centre line to (x, y): s along it (mm, extended past either end), the height
  // and half-width there, the tangent, slope and distance. Searches near the last hit, so it follows the ball.
  locate(tr, x, y, upto) {
    const segs = tr.seg, n = upto ?? segs.length;
    const full = tr.cursor < 0 || upto !== undefined;
    const i0 = full ? 0 : Math.max(0, tr.cursor - 6), i1 = full ? n - 1 : Math.min(n - 1, tr.cursor + 6);
    let best = Infinity, bi = 0;
    for (let i = i0; i <= i1; i++) {
      const g = segs[i], t = clamp(((x - g.a.x) * g.ex + (y - g.a.y) * g.ey) / g.len2, 0, 1);
      const d2 = (x - g.a.x - g.ex * t) ** 2 + (y - g.a.y - g.ey * t) ** 2;
      if (d2 < best) { best = d2; bi = i; }
    }
    if (upto === undefined) tr.cursor = bi;
    const g = segs[bi], raw = ((x - g.a.x) * g.ex + (y - g.a.y) * g.ey) / g.len2;
    const t = bi === 0 && raw < 0 ? raw : bi === segs.length - 1 && raw > 1 ? raw : clamp(raw, 0, 1), tc = clamp(t, 0, 1);
    const qx = g.a.x + g.ex * tc, qy = g.a.y + g.ey * tc;
    return {
      s: g.s + t * g.len, z: g.a.z + (g.b.z - g.a.z) * tc, hw: g.a.hw + (g.b.hw - g.a.hw) * tc,
      tx: g.tx, ty: g.ty, slope: g.slope, qx, qy, d: Math.hypot(x - qx, y - qy),
    };
  }
  // The track's side walls: the ball centre stays within halfWidth − R of the centre line.
  trackWall(tr, x, y, R) {
    const loc = this.locate(tr, x, y), lim = loc.hw - R;
    if (loc.d <= lim || loc.d < 1e-9) return null;
    const nx = (loc.qx - x) / loc.d, ny = (loc.qy - y) / loc.d;
    return { nx, ny, depth: loc.d - lim, px: x - nx * R, py: y - ny * R };
  }
  // Climbing onto a ramp, falling back off its mouth, dropping off its end; and the ball's height.
  layers(b, h, tr) {
    const R = this.R;
    if (tr) {
      const loc = this.locate(tr, b.x, b.y);
      if (loc.s < tr.entry[0] || loc.s > tr.exit) {
        b.layer = 0;
        if (loc.s > tr.exit) { b.vx *= tr.exitDamp; b.vy *= tr.exitDamp; b.wx *= tr.exitDamp; b.wy *= tr.exitDamp; }
        this.emit('exit', { id: tr.id, kind: 'track', end: loc.s > tr.exit ? 'end' : 'mouth', x: b.x, y: b.y, vx: b.vx, vy: b.vy, speed: b.speed });
      } else { b.vz = (loc.z - b.z) / h; b.z = loc.z; return; }
    } else if (b.layer === 0 && b.z <= R + 0.5) {
      for (const t of this.tracks) {
        const e = t.entryBox;
        if (t.entry[1] <= t.entry[0] || b.x < e[0] || b.x > e[2] || b.y < e[1] || b.y > e[3]) continue;
        const loc = this.locate(t, b.x, b.y, t.entrySegs);
        if (loc.s > t.entry[0] && loc.s < t.entry[1] && loc.d < loc.hw) {
          b.layer = t.layer;
          t.cursor = -1;
          b.z = this.locate(t, b.x, b.y).z;
          this.emit('enter', { id: t.id, kind: 'track', x: b.x, y: b.y, vx: b.vx, vy: b.vy, speed: b.speed });
          return;
        }
      }
    }
    // Off a track: fall to the wood (a ball dropping off a wireform), with a small bounce.
    if (b.z > R || b.vz) {
      b.vz -= this.gN * h;
      b.z += b.vz * h;
      if (b.z <= R) { b.z = R; b.vz = b.vz < -300 ? -0.3 * b.vz : 0; }
    }
  }

  // --- Triggers ----------------------------------------------------------------------------------------------

  sense(b) {
    const serial = b.serial;
    for (const t of this.triggers) {
      const [x0, y0, x1, y1] = t.box;
      const inside = b.active && t.enabled && (t.layer === '*' || t.layer === b.layer) && b.x >= x0 && b.x <= x1 && b.y >= y0 && b.y <= y1 &&
        (t.poly ? insidePolygon(t.poly, b.x, b.y) : (b.x - t.x) ** 2 + (b.y - t.y) ** 2 < t.r * t.r);
      if (inside === t.inside) continue;
      t.inside = inside;
      this.emit(inside ? 'enter' : 'exit', { id: t.id, kind: t.kind, x: b.x, y: b.y, vx: b.vx, vy: b.vy, speed: b.speed });
      if (b.serial !== serial) return;
      if (inside && t.drain) { b.remove(); this.emit('drain', { id: t.id }); return; }
    }
  }

  // --- Broad phase -------------------------------------------------------------------------------------------

  buildGrid() {
    const C = this.o.cell, m = this.R + 4;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const c of this.colliders) { x0 = Math.min(x0, c.box[0]); y0 = Math.min(y0, c.box[1]); x1 = Math.max(x1, c.box[2]); y1 = Math.max(y1, c.box[3]); }
    if (!this.colliders.length) { x0 = y0 = 0; x1 = y1 = C; }
    this.gx0 = Math.floor((x0 - m) / C); this.gy0 = Math.floor((y0 - m) / C);
    this.gnx = Math.floor((x1 + m) / C) - this.gx0 + 1; this.gny = Math.floor((y1 + m) / C) - this.gy0 + 1;
    this.grid = Array.from({ length: this.gnx * this.gny }, () => []);
    for (const c of this.colliders) {
      const ix0 = Math.floor((c.box[0] - m) / C) - this.gx0, ix1 = Math.floor((c.box[2] + m) / C) - this.gx0;
      const iy0 = Math.floor((c.box[1] - m) / C) - this.gy0, iy1 = Math.floor((c.box[3] + m) / C) - this.gy0;
      for (let ix = ix0; ix <= ix1; ix++) for (let iy = iy0; iy <= iy1; iy++) this.grid[iy * this.gnx + ix].push(c);
    }
  }
  cellAt(x, y) {
    const ix = Math.floor(x / this.o.cell) - this.gx0, iy = Math.floor(y / this.o.cell) - this.gy0;
    return ix < 0 || iy < 0 || ix >= this.gnx || iy >= this.gny ? [] : this.grid[iy * this.gnx + ix];
  }

  // --- State -------------------------------------------------------------------------------------------------
  // Everything that changes as the game runs, for replays and for trying a flip ahead of time.

  saveState() {
    const b = this.ball;
    return {
      steps: this.steps, acc: this.acc, seed: this.seed,
      ball: [b.x, b.y, b.z, b.vx, b.vy, b.vz, b.wx, b.wy, b.wz, b.layer, b.active, b.serial, b.ox, b.oy, b.oz, ...b.q],
      flippers: this.flippers.map(f => [f.a, f.w, f.oa, f.on, f.queue.map(q => ({ ...q }))]),
      colliders: this.colliders.map(c => [c.enabled, c.lastKick, c.solid]),
      triggers: this.triggers.map(t => [t.enabled, t.inside]),
      tracks: this.tracks.map(t => t.cursor),
    };
  }
  loadState(s) {
    const b = this.ball;
    this.steps = s.steps; this.time = s.steps * this.dt; this.acc = s.acc; this.seed = s.seed;
    [b.x, b.y, b.z, b.vx, b.vy, b.vz, b.wx, b.wy, b.wz, b.layer, b.active, b.serial, b.ox, b.oy, b.oz] = s.ball;
    b.q = s.ball.slice(15, 19);
    s.flippers.forEach(([a, w, oa, on, queue], i) => Object.assign(this.flippers[i], { a, w, oa, on, queue: queue.map(q => ({ ...q })) }));
    s.colliders.forEach(([enabled, lastKick, solid], i) => Object.assign(this.colliders[i], { enabled, lastKick, solid }));
    s.triggers.forEach(([enabled, inside], i) => Object.assign(this.triggers[i], { enabled, inside }));
    s.tracks.forEach((cursor, i) => { this.tracks[i].cursor = cursor; });
  }

  // --- Aiming ------------------------------------------------------------------------------------------------

  // When to flip `side` so the ball passes closest to (tx, ty). It tries the real engine ahead of time and puts
  // everything back: the flipper is released now (if held) and energised `delay` seconds later, for every delay up to
  // `horizon` in steps of `coarse` at which the ball is within reach of the bat, then to the millisecond around the
  // best. Each try follows the ball until it is clearly past its closest point to the target (or `follow` seconds).
  // `minArrive` (mm/s): a try that passes slower counts as missing by a tenth of the shortfall too, so a shot that
  // rattles into a ramp's mouth loses to one that goes in clean.
  // Returns null with no ball or no reachable flip, else { delay, miss (mm), arrive (mm/s as it passes closest), speed
  // (mm/s) and angle (degrees) as the ball leaves the bat, x, y and u (mm from the pivot along the bat) of the ball when
  // the flip starts }. A ramp needs `arrive` of about 1900 mm/s from a flipper (the ball still skids; 1400 rolling).
  // Use: setFlipper(side, false); setFlipper(side, true, r.delay); setFlipper(side, false, r.delay + 0.25).
  aimFlip(side, tx, ty, { horizon = 1.2, coarse = 0.008, follow = 0.6, hold = 0.3, reach = 12, minArrive = 0 } = {}) {
    const f = this.flipper(side), b = this.ball;
    if (!f || !b.active || b.layer !== 0) return null;
    const start = this.saveState(), muted = this.muted;
    this.muted = true;
    const fi = this.flippers.indexOf(f), every = Math.max(1, Math.round(coarse / this.dt));
    const onBat = () => b.active && b.layer === 0 && !!this.flippers[fi].test(b.x, b.y, this.R + reach);
    // The ball's run with the flipper let down, kept every `coarse` seconds while it is within reach of the bat.
    f.queue = []; f.on = false;
    const marks = [];
    for (let k = 0; k * every * this.dt <= horizon + 1e-9 && b.active; k++) {
      if (onBat()) marks.push({ st: this.saveState(), delay: k * every * this.dt, k });
      this.run(every * this.dt);
    }
    const trial = (st, delay) => {
      this.loadState(st);
      const fl = this.flippers[fi], c = Math.cos(fl.theta), s = Math.sin(fl.theta);
      const r = { delay, miss: Math.hypot(b.x - tx, b.y - ty), arrive: b.speed, speed: 0, angle: 0, x: b.x, y: b.y, u: (b.x - fl.x) * c + (b.y - fl.y) * s };
      fl.queue = [{ at: this.time + hold, on: false }]; fl.on = true;
      let left = false;
      for (let i = Math.round(follow / this.dt); i > 0 && b.active; i--) {
        this.fixedStep();
        const d = Math.hypot(b.x - tx, b.y - ty);
        if (d < r.miss) { r.miss = d; r.arrive = b.speed; }
        else if (left && d > r.miss + 40) break;
        if (!left && Math.hypot(b.x - fl.x, b.y - fl.y) > fl.length + fl.tipR + this.R + 12) {
          left = true; r.speed = b.speed; r.angle = Math.atan2(b.vy, b.vx) / DEG;
        }
      }
      r.score = r.miss + Math.max(0, minArrive - r.arrive) * 0.1;
      return r;
    };
    let best = null;
    for (const m of marks) { const r = trial(m.st, m.delay); if (!best || r.score < best.score) { best = r; best.k = m.k; } }
    // Refine to the millisecond either side of the best coarse try.
    if (best && every > 1) {
      for (const m of marks.filter(x => x.k === best.k - 1 || x.k === best.k)) {
        let st = m.st;
        for (let j = 1; j < every; j++) {
          this.loadState(st);
          this.fixedStep();
          if (!onBat()) break;
          st = this.saveState();
          const r = trial(st, m.delay + j * this.dt);
          if (r.score < best.score) best = { ...r, k: best.k };
        }
      }
    }
    this.loadState(start);
    this.muted = muted;
    if (best) { delete best.k; delete best.score; }
    return best;
  }
}
