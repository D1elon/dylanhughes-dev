// The machine's colliders for physics.js, built from layout.js's exports so the ball meets what machine.js draws.
// Everything is in playfield millimetres. buildColliders(physics, layout) adds it all and returns the ids the game
// needs (flippers, targets, ramps, drain, rollovers, pops, slings, saucer, gate...). polylineWalls turns any polyline
// export into walls, so a new guide is one call.

const DEG = Math.PI / 180;
const BAND_T = 1.6; // formed steel guides and the rail band
const STAR_R = 7.13 + 2.38; // a star post's rubber ring, outside
const SLING_R = 4.76 + 6.35; // a sling post plus its rubber cord
const SUPPORT_R = 6.5; // a printed ramp or wireform support post (13 mm)
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
// mouth is capped by an 11 mm rubber post, and each lane has a rollover. Returns { rollovers }.
export function buildOrbits(physics, layout) {
  const { ORBIT_GUIDES = [], ORBIT_WEDGES = [], ORBIT_POSTS = [], ORBIT_POST = { d: 11 }, ORBIT_ROLLOVERS = [] } = layout;
  for (const g of ORBIT_GUIDES) polylineWalls(physics, g.line, BAND_T, { id: 'orbit-' + g.side, kind: 'guide', mat: 'metal' });
  for (const w of ORBIT_WEDGES) polylineWalls(physics, w.line, BAND_T, { id: 'wedge-' + w.side, kind: 'guide', mat: 'metal' });
  ORBIT_POSTS.forEach(([x, y], i) => physics.addCircle(x, y, ORBIT_POST.d / 2, { id: 'orbit-post' + i, kind: 'post', mat: 'rubber' }));
  const rollovers = ORBIT_ROLLOVERS.map((r, i) => physics.addTrigger(rect(r.x, r.y, ...ROLLOVER), 'orbit' + i, { kind: 'orbit' }));
  return { rollovers };
}

// A profile [[x, y, z, w], ...] (dense: every 6 mm or so) as samples with plan arc length.
function samples(profile) {
  let s = 0;
  return profile.map((q, i) => {
    if (i) s += Math.hypot(q[0] - profile[i - 1][0], q[1] - profile[i - 1][1]);
    return { p: [q[0], q[1], q[2]], w: q[3], s2: s };
  });
}
// The point at plan length s (extended straight past either end), with its unit tangent.
function atPlan(list, s) {
  let i = 1;
  while (i < list.length - 1 && list[i].s2 < s) i++;
  const a = list[i - 1], b = list[i], l = b.s2 - a.s2 || 1, k = (s - a.s2) / l;
  return { x: a.p[0] + (b.p[0] - a.p[0]) * k, y: a.p[1] + (b.p[1] - a.p[1]) * k, tx: (b.p[0] - a.p[0]) / l, ty: (b.p[1] - a.p[1]) / l };
}
// A quad across a channel: from s − half to s + half along it, hw either side.
function across(list, s, half, hw) {
  const a = atPlan(list, s - half), b = atPlan(list, s + half);
  return [[a.x - a.ty * hw, a.y + a.tx * hw], [b.x - b.ty * hw, b.y + b.tx * hw], [b.x + b.ty * hw, b.y - b.tx * hw], [a.x + a.ty * hw, a.y - a.tx * hw]];
}
// How far before a wireform's dead end the ball drops through: its rails spread over `spread` mm into a U of
// `dropRadius` round the ball, easing apart, and it falls between them once they are a ball (and a rail) apart.
export function wireDropFrom(WIRE, R) {
  const radius = WIRE.dropRadius, half0 = WIRE.rail, ease = u => u * u * (3 - 2 * u);
  for (let d = 0; d <= WIRE.spread; d += 0.25) if (half0 + (radius - half0) * ease(d / WIRE.spread) >= R + WIRE.rod - 0.5) return radius + WIRE.spread - d;
  return radius;
}

// A ramp and its wireform as one track on the ramp's own layer, plus the walls that stand on the wood, the support
// posts and two triggers. Centre lines are Origin's: the ramp's profile, then the wireform's.
function buildRamp(physics, layout, ramp) {
  const { RAMP, WIRE, BALL_R: R } = layout;
  const body = samples(ramp.profile), wire = samples(ramp.wire);
  const rampEnd = body.at(-1).s2;
  // Between a wireform's rails the ball has about 2.6 mm of play; the channel narrows to that over the last 40 mm of
  // the ramp, as its walls hand the ball to the rails.
  const wireHw = R + 2.6, taper = 40;
  const pts = [];
  for (const q of body) {
    const k = Math.max(0, Math.min(1, (rampEnd - q.s2) / taper));
    pts.push([q.p[0], q.p[1], q.p[2] + R, wireHw + (q.w / 2 - wireHw) * k]);
  }
  for (const q of wire.slice(1)) pts.push([q.p[0], q.p[1], q.p[2] + WIRE.ride, wireHw]);
  // Where the floor is under 30 mm the walls stand on the wood: 2.4 mm walls outside the channel, on every layer.
  const low = body.filter(q => q.p[2] < RAMP_LOW), lowEnd = low.at(-1).s2;
  const side = sgn => low.map((q, i) => {
    const a = low[Math.max(0, i - 1)].p, b = low[Math.min(low.length - 1, i + 1)].p, l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const off = sgn * (q.w / 2 + RAMP.side / 2);
    return [q.p[0] - ((b[1] - a[1]) / l) * off, q.p[1] + ((b[0] - a[0]) / l) * off];
  });
  const [left, right] = [side(1), side(-1)], wallId = `ramp-${ramp.id}-wall`;
  for (const w of [left, right]) polylineWalls(physics, w, RAMP.side, { id: wallId, kind: 'ramp', mat: 'ramp', layer: '*' });
  // Beyond, the floor's underside is 27 mm off the wood, the top of the ball: a ball under the raised ramp meets it
  // there. (Origin closes the wood under each ramp with its orbit and target guides, so none should get there.)
  physics.addWall(...left.at(-1), ...right.at(-1), { r: RAMP.floor / 2, id: wallId, kind: 'ramp', mat: 'ramp' });
  // The track: on from the mouth while it's walled; off where the wireform's rails spread at its dead end, the stop
  // rail beyond taking most of the ball's speed.
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  physics.addTrack(pts, { id: ramp.id, layer: ramp.id, mat: 'ramp', entry: [0, lowEnd - 4], exit: len - wireDropFrom(WIRE, R), exitDamp: 0.4 });
  // The support posts stand on the wood (most are under the ramp, out of reach; the ball meets any that aren't).
  for (const [x, y] of [...ramp.supports, ...ramp.wireSupports]) physics.addCircle(x, y, SUPPORT_R, { kind: 'post', mat: 'plastic' });
  // Triggers: across the mouth (either layer), and the ramp's switch near the top of its climb (Origin's, at 82%):
  // only a ball that makes the ramp gets there.
  const mouth = `ramp-${ramp.id}-mouth`, made = `ramp-${ramp.id}-made`;
  physics.addTrigger(across(body, 2, 10, RAMP.mouth / 2), mouth, { kind: 'mouth', layer: '*' });
  physics.addTrigger(across(body, rampEnd * (ramp.switchAt ?? 0.82), 10, RAMP.width / 2 + 4), made, { kind: 'ramp', layer: ramp.id });
  const m = atPlan(body, 0);
  return { id: ramp.id, side: ramp.side, layer: ramp.id, mouth, made, at: [m.x, m.y], heading: Math.atan2(m.ty, m.tx) / DEG };
}

export function buildColliders(physics, layout) {
  const { PF, BALL_R: R, FLIPPERS, SLINGS, APRON, SHOOTER, ARCH, INLANE_GUIDES, STAR_POSTS, GATE, TOP_LANES, POPS, POP, RAMPS, RETURN_LANES,
    TARGETS, TARGET_GUIDES, TARGET_RUBBER, SAUCER } = layout;
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

  // Inlane guides: the ball meets the contact plate's edge (it stands at the ball's equator; the cover plate above
  // is clear of the ball), and the star post capping the strip between the lanes.
  for (const g of INLANE_GUIDES) polylineWalls(physics, g.plate.outline, 0, { id: 'inlane-' + g.side, kind: 'guide', mat: 'plastic', closed: true });
  for (const [x, y] of STAR_POSTS) physics.addCircle(x, y, STAR_R, { kind: 'post', mat: 'rubber' });

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

  // Flippers: the main pair and the upper pair, each its own size; a side's button works both of its.
  ids.flippers = {};
  for (const f of FLIPPERS) ids.flippers[f.id] = physics.addFlipper({ id: f.id, side: f.side, x: f.x, y: f.y, rest: f.rest, up: f.up, baseR: f.baseR, tipR: f.tipR, length: f.length });

  // Top lanes: a rubber ring round each guide's two posts, a rollover in each lane. Return-lane rollovers.
  for (const r of TOP_LANES.rubbers) physics.addWall(...r.posts[0], ...r.posts[1], { r: r.postR + r.cord, kind: 'rubber', mat: 'band' });
  ids.lanes = TOP_LANES.lanes.map((l, i) => physics.addTrigger(rect(l.x, l.y, ...ROLLOVER), 'lane' + i, { kind: 'rollover' }));
  ids.returns = RETURN_LANES.map((l, i) => physics.addTrigger(rect(l.x, l.y, ...ROLLOVER), 'return' + i, { kind: l.kind }));

  // The saucer under the middle lane.
  ids.saucer = physics.addSaucer(SAUCER.x, SAUCER.y, { id: 'saucer', reach: SAUCER.reach, maxSpeed: SAUCER.maxSpeed, hold: SAUCER.hold, kick: SAUCER.kick, angle: SAUCER.kickAngle });

  // Pops: the skirt is the contact, the ball's centre 34 mm from the axis.
  ids.pops = POPS.map((p, i) => physics.addCircle(p.x, p.y, POP.reach - R, { id: 'pop' + i, kind: 'pop', mat: 'pop', kick: KICKS.pop, minSpeed: 50, recycle: 0.03 }));

  // The standup bank: each target's face and body, 25.4 × 10, a fixed wall that reports its hits. Behind it the
  // rubber round three posts, and the steel guides from the bank up along the ramps.
  const T = TARGETS, hd = T.depth / 2;
  ids.targets = T.list.map((t, i) => physics.addWall(t.x - T.width / 2 + hd, t.y, t.x + T.width / 2 - hd, t.y, { r: hd, id: 'target' + i, kind: 'target', mat: 'drop' }));
  const P = TARGET_RUBBER.posts;
  P.forEach((a, i) => {
    const b = P[(i + 1) % P.length], r = Math.max(9, TARGET_RUBBER.grooves[i] + TARGET_RUBBER.cord);
    physics.addWall(...a, ...b, { r, id: 'target-rubber', kind: 'rubber', mat: 'band' });
  });
  for (const g of TARGET_GUIDES) polylineWalls(physics, g.line, BAND_T, { id: 'target-guide-' + g.side, kind: 'guide', mat: 'metal' });

  // Ramps and wireforms.
  ids.ramps = RAMPS.map(r => buildRamp(physics, layout, r));

  // Where to aim: the centre of each ramp's mouth, 90 mm up the middle of each orbit's throat (from the middle of its
  // mouth, between the post and the wedge, along its arrow), the middle standup's face and the saucer.
  const mid = T.list[1];
  const throat = i => {
    const post = layout.ORBIT_POSTS[i], wedge = layout.ORBIT_WEDGES[i].line, arrow = layout.INSERTS.find(x => x.id === ['left_orbit_arrow', 'right_orbit_arrow'][i]);
    const end = wedge.reduce((best, q) => (Math.hypot(q[0] - post[0], q[1] - post[1]) < Math.hypot(best[0] - post[0], best[1] - post[1]) ? q : best));
    const r = arrow.angle * DEG, m = [(post[0] + end[0]) / 2, (post[1] + end[1]) / 2];
    return [m[0] - Math.sin(r) * 90, m[1] + Math.cos(r) * 90];
  };
  ids.aim = {
    ...Object.fromEntries(ids.ramps.map(r => [r.id, r.at])),
    targets: [mid.x, mid.y - hd - R - 2],
    saucer: [SAUCER.x, SAUCER.y],
    'orbit-left': throat(0),
    'orbit-right': throat(1),
  };
  return ids;
}
