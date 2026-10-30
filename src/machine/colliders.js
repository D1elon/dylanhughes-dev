// The machine's colliders for physics.js, built from layout.js's exports so the ball meets what machine.js draws.
// Everything is in playfield millimetres. buildColliders(physics, layout) adds it all and returns the ids the game
// needs (flippers, drops, ramps, drain, rollovers, pops, slings, gate...). polylineWalls turns any polyline export into
// walls, so a new guide is one call.

const DEG = Math.PI / 180;
const BAND_T = 1.6; // formed steel guides and the rail band
const STAR_R = 7.13 + 2.38; // a star post's rubber ring, outside
const ORBIT_POST_R = 7.1 + 2.38; // an orbit mouth post's ring, as machine.js draws it
const SLING_R = 4.76 + 6.35; // a sling post plus its rubber cord
const MINI_R = 4.76; // metal mini post (02-4036)
const HEX_R = 4.62; // 5/16 in hex standoff
const RAMP_LOW = 30; // under this floor height a ramp's walls carry on down to the wood
const ROLLOVER = [9, 21]; // half-width and half-length of a wire rollover's reach on the ball's centre

export const KICKS = { pop: 1400, sling: 2200 }; // mm/s out of a pop's skirt and off a sling's face

export function arcPoints(cx, cy, r, a0, a1, step = 3) {
  const n = Math.max(1, Math.ceil(Math.abs(a1 - a0) / step));
  return Array.from({ length: n + 1 }, (_, i) => {
    const a = (a0 + ((a1 - a0) * i) / n) * DEG;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });
}

// A polyline shifted sideways by d (positive: to the left of travel), each point along its neighbours' normal.
export function offsetLine(points, d) {
  return points.map((p, i) => {
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    return [p[0] - (dy / l) * d, p[1] + (dx / l) * d];
  });
}

// Capsule walls along a polyline [[x, y], ...], `thickness` centred on it: pass a steel's centre line with its
// thickness, or a ball face with 0 (the far side then doesn't matter). opts go to addWall (id, kind, mat, layer...);
// closed: true joins the last point to the first.
export function polylineWalls(physics, points, thickness = 0, opts = {}) {
  const { closed, ...o } = opts, pts = closed ? [...points, points[0]] : points;
  for (let i = 0; i + 1 < pts.length; i++) {
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
    if (Math.hypot(bx - ax, by - ay) < 1e-6) continue;
    physics.addWall(ax, ay, bx, by, { r: thickness / 2, ...o });
  }
  return o.id ?? null;
}

// A wall whose ball face is the polyline, thickened by t on the side away from the ball (side: +1 when the ball is to
// the left of travel, −1 to the right), so nothing can squeeze the ball through it.
export function faceWalls(physics, points, side, t = 4, opts = {}) {
  return polylineWalls(physics, offsetLine(points, -side * t), 2 * t, opts);
}

const rect = (x, y, hx, hy) => [[x - hx, y - hy], [x + hx, y - hy], [x + hx, y + hy], [x - hx, y + hy]];

// The orbit lanes: the inner guides and the throat wedges are formed 1.6 mm steel along their `line`s, each throat's
// mouth is capped by a rubber post, and each lane has a rollover. Returns { rollovers }.
export function buildOrbits(physics, layout) {
  const { ORBIT_GUIDES = [], ORBIT_WEDGES = [], ORBIT_POSTS = [], ORBIT_ROLLOVERS = [] } = layout;
  for (const g of ORBIT_GUIDES) polylineWalls(physics, g.line, BAND_T, { id: 'orbit-' + g.side, kind: 'guide', mat: 'metal' });
  for (const w of ORBIT_WEDGES) polylineWalls(physics, w.line, BAND_T, { id: 'wedge-' + w.side, kind: 'guide', mat: 'metal' });
  ORBIT_POSTS.forEach(([x, y], i) => physics.addCircle(x, y, ORBIT_POST_R, { id: 'orbit-post' + i, kind: 'post', mat: 'rubber' }));
  const rollovers = ORBIT_ROLLOVERS.map((r, i) => {
    const [x, y] = Array.isArray(r) ? r : [r.x, r.y];
    return physics.addTrigger(rect(x, y, ...ROLLOVER), 'orbit' + i, { kind: 'orbit' });
  });
  return { rollovers };
}

// A centripetal Catmull-Rom through [[x, y, h], ...], as THREE.CatmullRomCurve3(points, false, 'centripetal'), sampled
// `per` times a span, with 3D arc length (as THREE's getPointAt measures it) and plan arc length.
function catmullRom(P, per = 24) {
  const out = [], n = P.length, ext = (a, b) => a.map((v, k) => 2 * v - b[k]);
  const dt = (a, b) => Math.pow(a.reduce((s, v, k) => s + (v - b[k]) ** 2, 0), 0.25);
  for (let i = 0; i + 1 < n; i++) {
    const p0 = i > 0 ? P[i - 1] : ext(P[0], P[1]), p1 = P[i], p2 = P[i + 1], p3 = i + 2 < n ? P[i + 2] : ext(P[n - 1], P[n - 2]);
    let d1 = dt(p1, p2);
    if (d1 < 1e-4) d1 = 1;
    const d0 = dt(p0, p1) < 1e-4 ? d1 : dt(p0, p1), d2 = dt(p2, p3) < 1e-4 ? d1 : dt(p2, p3);
    const c = [0, 1, 2].map(k => {
      const t1 = ((p1[k] - p0[k]) / d0 - (p2[k] - p0[k]) / (d0 + d1) + (p2[k] - p1[k]) / d1) * d1;
      const t2 = ((p2[k] - p1[k]) / d1 - (p3[k] - p1[k]) / (d1 + d2) + (p3[k] - p2[k]) / d2) * d1;
      return [p1[k], t1, -3 * p1[k] + 3 * p2[k] - 2 * t1 - t2, 2 * p1[k] - 2 * p2[k] + t1 + t2];
    });
    for (let j = 0; j < per; j++) { const t = j / per; out.push({ p: c.map(q => q[0] + q[1] * t + q[2] * t * t + q[3] * t * t * t) }); }
  }
  out.push({ p: [...P[n - 1]] });
  let s3 = 0, s2 = 0;
  out.forEach((q, i) => {
    if (i) { const a = out[i - 1].p; s3 += Math.hypot(q.p[0] - a[0], q.p[1] - a[1], q.p[2] - a[2]); s2 += Math.hypot(q.p[0] - a[0], q.p[1] - a[1]); }
    q.s3 = s3; q.s2 = s2;
  });
  return out;
}
// Every `step` mm in plan, keeping both ends.
function resample(samples, step) {
  const out = [samples[0]];
  for (let i = 1; i < samples.length; i++) if (samples[i].s2 - out.at(-1).s2 >= step || i === samples.length - 1) out.push(samples[i]);
  return out;
}
// The point at plan length s (extended straight past either end), with its unit tangent.
function atPlan(samples, s) {
  let i = 1;
  while (i < samples.length - 1 && samples[i].s2 < s) i++;
  const a = samples[i - 1], b = samples[i], l = b.s2 - a.s2 || 1, k = (s - a.s2) / l;
  return { x: a.p[0] + (b.p[0] - a.p[0]) * k, y: a.p[1] + (b.p[1] - a.p[1]) * k, tx: (b.p[0] - a.p[0]) / l, ty: (b.p[1] - a.p[1]) / l };
}
// A quad across a channel: from s − half to s + half along it, hw either side.
function across(samples, s, half, hw) {
  const a = atPlan(samples, s - half), b = atPlan(samples, s + half);
  return [[a.x - a.ty * hw, a.y + a.tx * hw], [b.x - b.ty * hw, b.y + b.tx * hw], [b.x + b.ty * hw, b.y - b.tx * hw], [a.x + a.ty * hw, a.y - a.tx * hw]];
}

// A ramp and its wireform as one track on the ramp's own layer, plus the walls that stand on the wood, the wireform's
// posts and two triggers. The centre line is machine.js buildRamps': the path, 18 points round the turn, the exit.
function buildRamp(physics, layout, ramp) {
  const { RAMP, WIRE, BALL_R: R } = layout;
  const t = ramp.turn, dir = t.mirror ? -1 : 1, from = t.from ?? 0, to = t.to ?? 180;
  const turnPts = Array.from({ length: 18 }, (_, k) => {
    const a = (from + ((to - from) * (k + 1)) / 18) * DEG;
    return [t.cx + dir * Math.cos(a) * t.r, t.cy + Math.sin(a) * t.r, t.h0 + ((t.h1 - t.h0) * (k + 1)) / 18];
  });
  const body = catmullRom([...ramp.path, ...turnPts, ...(t.exit ? [t.exit] : [])]), wire = catmullRom(ramp.wire, 16);
  const rampEnd = body.at(-1).s2;
  const flare = s3 => (RAMP.width + (RAMP.mouth - RAMP.width) * Math.max(0, 1 - s3 / RAMP.flare)) / 2;
  // Between a wireform's side rails the ball has about 2.6 mm of play; the channel narrows to that over the last 40 mm
  // of the ramp, as its walls hand the ball to the rails.
  const wireHw = R + 2.6, taper = 40;
  const pts = [];
  for (const q of resample(body, 6)) {
    const k = Math.max(0, Math.min(1, (rampEnd - q.s2) / taper));
    pts.push([q.p[0], q.p[1], q.p[2] + R, wireHw + (flare(q.s3) - wireHw) * k]);
  }
  for (const q of resample(wire, 6).slice(1)) pts.push([q.p[0], q.p[1], q.p[2] + WIRE.ride, wireHw]);
  // Where the floor is under 30 mm the walls stand on the wood: 2.4 mm walls outside the channel, on every layer.
  const low = resample(body.filter(q => q.p[2] < RAMP_LOW), 4), lowEnd = low.at(-1).s2;
  const side = sgn => low.map((q, i) => {
    const a = low[Math.max(0, i - 1)].p, b = low[Math.min(low.length - 1, i + 1)].p, l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const off = sgn * (flare(q.s3) + RAMP.side / 2);
    return [q.p[0] - ((b[1] - a[1]) / l) * off, q.p[1] + ((b[0] - a[0]) / l) * off];
  });
  const [left, right] = [side(1), side(-1)], wallId = `ramp-${ramp.id}-wall`;
  for (const w of [left, right]) polylineWalls(physics, w, RAMP.side, { id: wallId, kind: 'ramp', mat: 'ramp', layer: '*' });
  // Beyond, the floor's underside is 27 mm off the wood, the top of the ball: a ball rolling down under the raised
  // ramp meets it there and can't get into the channel from behind.
  physics.addWall(...left.at(-1), ...right.at(-1), { r: RAMP.floor / 2, id: wallId, kind: 'ramp', mat: 'ramp' });
  // The track: on from the mouth while it's walled; off the far end where the wireform's rails spread (about 28 mm
  // short of its dead end), after the stop rail has taken most of the ball's speed.
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  physics.addTrack(pts, { id: ramp.id, layer: ramp.id, mat: 'ramp', entry: [0, lowEnd - 4], exit: len - 28, exitDamp: 0.4 });
  // The wireform's posts stand on the wood. (The ramp's own hex standoffs, RAMP.stations, aren't colliders.)
  for (const [x, y] of ramp.supports || []) physics.addCircle(x, y, HEX_R, { kind: 'post', mat: 'metal' });
  // Triggers: across the mouth (either layer), and where the ramp hands the ball to the wireform: the ramp is made.
  const mouth = `ramp-${ramp.id}-mouth`, made = `ramp-${ramp.id}-made`;
  physics.addTrigger(across(body, 2, 10, RAMP.mouth / 2), mouth, { kind: 'mouth', layer: '*' });
  physics.addTrigger(across(body, rampEnd - 8, 10, RAMP.width / 2 + 4), made, { kind: 'ramp', layer: ramp.id });
  const m = atPlan(body, 0);
  return { id: ramp.id, side: ramp.side, layer: ramp.id, mouth, made, at: [m.x, m.y], heading: Math.atan2(m.ty, m.tx) / DEG };
}

export function buildColliders(physics, layout) {
  const { PF, BALL_R: R, FLIPPERS, FLIPPER, SLINGS, APRON, SHOOTER, ARCH, GUIDES, STAR_POSTS, REBOUND = [], GATE, TOP_LANES, POPS, POP, RAMPS, DROPS, RETURN_LANES, RUBBER_POSTS = [] } = layout;
  const ids = {};
  physics.bounds = [-20, -80, PF.w + 20, PF.l + 20];

  // The rail band's ball face: up the left rail, round the arch's 130 and 150 mm corners, down the right side; made
  // thick outward so nothing can push the ball through it.
  const band = [
    [PF.rail, -10], [PF.rail, ARCH.left.cy],
    ...arcPoints(ARCH.left.cx, ARCH.left.cy, ARCH.left.r, 180, 90).slice(1),
    ...arcPoints(ARCH.right.cx, ARCH.right.cy, ARCH.right.r, 90, 0),
    [SHOOTER.laneRight, 90],
  ];
  faceWalls(physics, band, -1, 4, { id: 'rail', kind: 'rail', mat: 'metal' });

  // The shooter lane: the apron's lane wall, then the divider bar up to where the right orbit joins the lane; the
  // plunger's tip under the resting ball; the one-way gate across the lane's exit.
  const face = SHOOTER.dividerFace ?? SHOOTER.laneLeft - BAND_T, bar = SHOOTER.laneLeft - face;
  physics.addWall(SHOOTER.laneLeft - 0.65, 90, SHOOTER.laneLeft - 0.65, SHOOTER.apronTop, { r: 0.65, id: 'divider', kind: 'rail', mat: 'metal' });
  physics.addWall(face + bar / 2, SHOOTER.apronTop, face + bar / 2, SHOOTER.dividerTop, { r: bar / 2, id: 'divider', kind: 'rail', mat: 'metal' });
  const tipY = SHOOTER.ballRest[1] - R;
  physics.addWall(SHOOTER.laneLeft, tipY - 3, SHOOTER.laneRight, tipY - 3, { r: 3, id: 'plunger', kind: 'plunger', e: 0.3, f: 0.3 });
  const [gx0, gy0] = GATE.from, [gx1, gy1] = GATE.to, gl = Math.hypot(gx1 - gx0, gy1 - gy0);
  const gu = [(gx1 - gx0) / gl, (gy1 - gy0) / gl], gn = [-gu[1], gu[0]]; // gn: up and to the left, the way a plunge goes through
  physics.addWall(gx0, gy0, gx1, gy1, { r: 1, oneWay: gn, id: 'gate', kind: 'gate', mat: 'metal' });
  const gp = (p, s, k) => [p[0] + gn[0] * s * 6 + gu[0] * k * 4, p[1] + gn[1] * s * 6 + gu[1] * k * 4];
  physics.addTrigger([gp(GATE.from, -1, -1), gp(GATE.to, -1, 1), gp(GATE.to, 1, 1), gp(GATE.from, 1, -1)], 'gate', { kind: 'gate' });
  physics.addTrigger(rect((SHOOTER.laneLeft + SHOOTER.laneRight) / 2, SHOOTER.ballRest[1] + 10, (SHOOTER.laneRight - SHOOTER.laneLeft) / 2, 30), 'shooter', { kind: 'shooter' });
  Object.assign(ids, { gate: 'gate', shooter: 'shooter', plunger: { id: 'plunger', rest: [...SHOOTER.ballRest] } });

  // The apron: walls under its shoulders (their ball face 0.65 mm above each line). The ball drains under the lip;
  // it has drained once all of it is under there.
  // (As the 1.3 mm sheet itself: thickened, the right one's end would stand into the shooter lane.)
  for (const run of [[APRON.leftShoulder, APRON.lipLeft], [APRON.lipRight, APRON.rightShoulder]]) polylineWalls(physics, run, 1.3, { id: 'apron', kind: 'apron', mat: 'metal' });
  const a0 = Math.atan2(APRON.lipEndY - APRON.lipCy, APRON.lipRight[0] - PF.cx) / DEG, a1 = Math.atan2(APRON.lipEndY - APRON.lipCy, APRON.lipLeft[0] - PF.cx) / DEG;
  const lip = arcPoints(PF.cx, APRON.lipCy, APRON.lipR, a0, a1, 4).map(([x, y]) => [x, y - R]);
  ids.drain = physics.addTrigger([[PF.rail, -60], [SHOOTER.laneLeft, -60], [SHOOTER.laneLeft, APRON.lipEndY - R], ...lip, [PF.rail, APRON.lipEndY - R]], 'drain', { drain: true });

  // Inlane guides (their points are the steel's centre line), the star posts capping them, rubber posts, and a rebound
  // rubber round two posts if the layout has one.
  GUIDES.forEach((g, i) => polylineWalls(physics, g, BAND_T, { id: 'guide-' + (i ? 'right' : 'left'), kind: 'guide', mat: 'metal' }));
  for (const [x, y] of [...STAR_POSTS, ...RUBBER_POSTS]) physics.addCircle(x, y, STAR_R, { kind: 'post', mat: 'rubber' });
  if (REBOUND.length >= 2) physics.addWall(...REBOUND[0], ...REBOUND[1], { r: STAR_R, id: 'rebound', kind: 'rubber', mat: 'band' });

  // Orbit lanes.
  ids.orbits = buildOrbits(physics, layout).rollovers;

  // Slings: a rubber round three posts; the face between the first two kicks, away from the third.
  ids.slings = {};
  for (const s of SLINGS) {
    const [A, B, C] = s.posts, id = 'sling-' + s.side;
    physics.addKicker(...A, ...B, { r: SLING_R, away: C, id, kind: 'sling', mat: 'sling', kick: KICKS.sling, minSpeed: 120 });
    physics.addWall(...B, ...C, { r: SLING_R, id: id + '-rubber', kind: 'rubber', mat: 'sling' });
    physics.addWall(...C, ...A, { r: SLING_R, id: id + '-rubber', kind: 'rubber', mat: 'sling' });
    ids.slings[s.side] = id;
  }

  // Flippers.
  ids.flippers = {};
  for (const f of FLIPPERS) ids.flippers[f.side] = physics.addFlipper({ ...f, baseR: FLIPPER.baseR, tipR: FLIPPER.tipR, length: FLIPPER.length });

  // Top lanes: guides with a mini post at each end, a rollover in each lane. Return-lane rollovers.
  for (const x of TOP_LANES.guides) {
    physics.addWall(x, TOP_LANES.guideFrom, x, TOP_LANES.guideTo, { r: BAND_T / 2, kind: 'guide', mat: 'metal' });
    for (const y of [TOP_LANES.guideFrom, TOP_LANES.guideTo]) physics.addCircle(x, y, MINI_R, { kind: 'post', mat: 'metal' });
  }
  ids.lanes = TOP_LANES.centers.map((x, i) => physics.addTrigger(rect(x, TOP_LANES.y, ...ROLLOVER), 'lane' + i, { kind: 'rollover' }));
  ids.returns = RETURN_LANES.map((l, i) => physics.addTrigger(rect(l.x, l.y, ...ROLLOVER), 'return' + i, { kind: l.kind }));

  // Pops: the skirt is the contact, the ball's centre 34 mm from the axis.
  ids.pops = POPS.map((p, i) => physics.addCircle(p.x, p.y, POP.reach - R, { id: 'pop' + i, kind: 'pop', mat: 'pop', kick: KICKS.pop, minSpeed: 50, recycle: 0.03 }));

  // Drop targets: a 25.4 × 6.35 face each (a wall until dropped), and the bank's back plate behind them.
  ids.drops = Array.from({ length: DROPS.count }, (_, i) => {
    const x = DROPS.cx + (i - (DROPS.count - 1) / 2) * DROPS.pitch, h = DROPS.thick / 2;
    return physics.addWall(x - DROPS.width / 2 + h, DROPS.y, x + DROPS.width / 2 - h, DROPS.y, { r: h, id: 'drop' + i, kind: 'drop', mat: 'drop' });
  });
  const span = DROPS.count * DROPS.pitch + 8;
  physics.addWall(DROPS.cx - span / 2 + 1.5, DROPS.y + 9, DROPS.cx + span / 2 - 1.5, DROPS.y + 9, { r: 1.5, id: 'drop-plate', kind: 'wall', mat: 'metal' });

  // Ramps and wireforms.
  ids.ramps = RAMPS.map(r => buildRamp(physics, layout, r));

  // Where to aim: the centre of each ramp's mouth, the middle of the drop bank, and each orbit lane's rollover.
  ids.aim = {
    ...Object.fromEntries(ids.ramps.map(r => [r.id, r.at])),
    drops: [DROPS.cx, DROPS.y - DROPS.thick / 2 - R - 2],
    ...(layout.ORBIT_ROLLOVERS ? Object.fromEntries(layout.ORBIT_ROLLOVERS.map(r => ['orbit-' + r.side, [r.x, r.y]])) : {}),
  };
  return ids;
}
