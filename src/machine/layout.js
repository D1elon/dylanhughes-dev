// The machine's layout in millimetres. Playfield coordinates: x from the left rail, y from the front edge (the
// player's end), h above the wood. The playfield is Deadbounce's Origin table, part for part: origin.js is generated
// from its template (tools/origin-layout.mjs) and everything here is built from it. What this file adds is how the site
// draws and plays each part: section names for the shots, sizes of hardware the template only names, and the physics.
import { ORIGIN as O, ORIGIN_BOARD } from './origin.js';

export const PF = {
  w: ORIGIN_BOARD.width,
  l: ORIGIN_BOARD.length,
  thick: ORIGIN_BOARD.thickness,
  cx: ORIGIN_BOARD.centreX, // the play area's centre line; the shooter lane sits to its right
  pitch: ORIGIN_BOARD.slope, // degrees
  rail: O.boundary_left.x + O.boundary_left.thickness / 2, // the left rail's ball face
};

export const BALL_R = ORIGIN_BOARD.ball / 2;

const r2 = v => Math.round(v * 100) / 100;
// A polyline shifted sideways by d (positive: to the left of travel).
const offset = (points, d) => points.map((p, i) => {
  const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [r2(p[0] - (dy / l) * d), r2(p[1] + (dx / l) * d)];
});

// --- Flippers ------------------------------------------------------------------------------------------------------

// Four bats on two buttons: Origin's main flippers (88.7 mm overall: R12.5 base and R7.75 tip on 68.45 mm centres) and,
// up by each orbit throat, its upper flippers (61.7 mm: R13 and R8.06 on 40.64), which flip with their side's main
// button. Each swings Origin's 52° (the Studio engine's stroke for every flipper; `flipperMechanism.angle` only turns the
// coil plate under the board). `x, y` is the shaft; `rest` and `up` the bat's direction at rest and at end of stroke.
const flipper = (c, id) => ({
  id, side: c.side, upper: !!c.sharedSwitch, x: c.pivot[0], y: c.pivot[1], rest: c.rest, up: c.rest + (c.side === 'left' ? 1 : -1) * c.stroke,
  baseR: c.baseR, tipR: c.tipR, length: c.reach, height: c.height,
});
export const FLIPPERS = [
  flipper(O.left_flipper, 'left'), flipper(O.right_flipper, 'right'),
  flipper(O.upper_left_flipper, 'upper-left'), flipper(O.upper_right_flipper, 'upper-right'),
];
// A bat's parts, after a Williams 3-inch bat (20-9250, measured: rubber outline 11.28 / 6.64): a bottom flange just
// off the wood, a groove carrying the rubber at ball height and a top cap, each scaled to the bat's own radii.
const BAT = { base: 11.28, tip: 6.64, flange: [9.21, 4.45], groove: [8.05, 3.68], cap: [8.2, 3.4], rubberFrom: 8.6, rubberTo: 20 };
export function batParts(f) {
  const k = ([b, t]) => [r2((b / BAT.base) * f.baseR), r2((t / BAT.tip) * f.tipR)];
  return { flange: k(BAT.flange), groove: k(BAT.groove), cap: k(BAT.cap), rubberFrom: BAT.rubberFrom, rubberTo: BAT.rubberTo };
}
export const FLIPPER = { baseR: FLIPPERS[0].baseR, tipR: FLIPPERS[0].tipR, length: FLIPPERS[0].length, height: FLIPPERS[0].height, ...batParts(FLIPPERS[0]) };

// --- The lower third -------------------------------------------------------------------------------------------------

// Slings: three posts each, the kicking face between the first two (upper inner, lower), the third (upper outer).
export const SLINGS = [O.left_sling, O.right_sling].map(s => ({ side: s.side, posts: s.posts, postR: s.postRadius, reach: s.contactRadius }));

// Apron (after Williams/Bally A-13204): a formed sheet deck 47.6 mm up whose lip is an R149.8 arc centred on the
// play centre line, lowest 88.9 mm from the front; its shoulders rise at 34° to the rails.
const apronOutline = O.apron.outline;
export const APRON = {
  deck: O.apron.height,
  lipR: O.apron.lip.radius,
  lipCy: O.apron.lip.centre[1],
  lipEndY: O.apron.lip.from[1],
  leftShoulder: apronOutline.at(-1),
  rightShoulder: apronOutline[2],
};
APRON.lipHalf = Math.sqrt(APRON.lipR ** 2 - (APRON.lipCy - APRON.lipEndY) ** 2);
APRON.lipLeft = [PF.cx - APRON.lipHalf, APRON.lipEndY];
APRON.lipRight = [PF.cx + APRON.lipHalf, APRON.lipEndY];
// The formed drain guides under the deck that steer a ball into the trough's notch.
export const DRAIN_GUIDES = [O.left_drain_guide, O.right_drain_guide].map(g => [g.from, g.to]);

// The shooter lane and its 6 mm divider bar, which stops at y = 840 so the right orbit lane joins the lane under the
// arch. The ball rests on the plunger's tip.
export const SHOOTER = {
  laneLeft: O.shooter_divider.x + O.shooter_divider.thickness / 2,
  laneRight: O.boundary_right.x - O.boundary_right.thickness / 2,
  dividerFace: O.shooter_divider.x - O.shooter_divider.thickness / 2,
  dividerTop: O.shooter_divider.to[1],
  apronTop: r2(O.shooter_divider.from[1]),
  ballRest: [O.shooter.x, O.shooter.y + O.shooter.length / 2 + BALL_R],
};

// Top arch: the rail's ball face sweeps into a 130 mm corner on the left and a 150 mm corner on the right (the
// template's arcs are the 6 mm rail's centre line).
const archOf = (c, left) => {
  const a = c.points[0], b = c.points.at(-1), half = c.thickness / 2;
  return left ? { cx: b[0], cy: a[1], r: r2(b[0] - a[0] - half) } : { cx: a[0], cy: b[1], r: r2(b[0] - a[0] - half) };
};
export const ARCH = { top: PF.l - PF.rail, left: archOf(O.top_arch_left, true), right: archOf(O.top_arch_right, false) };

// The inlane guides (Origin's return plastics): a 3 mm contact plate at the ball's equator, 12–15 mm up, that is the
// inlane's and outlane's walls and the return arm onto the flipper, and a 3 mm cover plate over it at 30.8 mm, clear
// of the ball, carried on two spacer stacks and screwed to the top of the star post between the lanes.
// Outline: an original adaptation inspired by "pinball flipper ball guide", Tinkot, CC BY 4.0
// (https://creativecommons.org/licenses/by/4.0/, https://www.thingiverse.com/thing:3563020); no source mesh copied.
export const INLANE_GUIDES = ['left', 'right'].map(side => {
  const plate = O[`${side}_inlane_guide`], cover = O[`${side}_inlane_guide_cover`];
  return {
    side, thickness: plate.thickness,
    plate: { id: plate.id, z: plate.z, outline: plate.outline },
    cover: { id: cover.id, z: cover.z, outline: cover.outline },
    stacks: [O[`${side}_inlane_guide_stack_1`], O[`${side}_inlane_guide_stack_2`]].map(s => [s.x, s.y]),
    post: [O[`${side}_outlane_post`].x, O[`${side}_outlane_post`].y],
  };
});
// A star post (03-8319) caps each strip between the inlane and the outlane.
export const STAR_POSTS = INLANE_GUIDES.map(g => g.post);

// Return lanes, in the order the Skills list reads them: left outlane, left inlane, right inlane, right outlane. A
// rollover in each, and a round insert over each at y = 386.
export const RETURN_LANES = ['left_outlane', 'left_inlane', 'right_inlane', 'right_outlane'].map(id => ({
  id, kind: id.endsWith('outlane') ? 'outlane' : 'inlane', x: O[id].x, y: O[id].y, insert: O[`${id}_insert`].id, insertY: O[`${id}_insert`].y,
}));

// --- The orbit and the shooter lane's gate --------------------------------------------------------------------------

// A 40 mm lane up each side inside the rail and the shooter divider, open across the top: a full plunge rides the
// arch round and comes down the left orbit; a soft one drops off the top into the top lanes. Each lane's lower end
// bends 30° toward the opposite flipper into a 54 mm throat walled by a formed wedge on the rail. The inner guides are
// formed 1.6 mm steel along `line` (the steel's centre line); `face` is the ball face on the lane side.
export const ORBIT = { lane: ORIGIN_BOARD.orbitLane, throat: ORIGIN_BOARD.throat, steel: O.left_orbit_guide.thickness, height: O.left_orbit_guide.height };
export const ORBIT_GUIDES = [O.left_orbit_guide, O.right_orbit_guide].map((g, i) => ({
  side: i ? 'right' : 'left', line: g.line, face: offset(g.line, g.thickness / 2), mounts: g.mounts || [],
}));
// The throat wedges: formed 1.6 mm steel whose upper face turns the lane toward the opposite flipper and whose lower
// leg closes it to the rail.
export const ORBIT_WEDGES = [O.left_orbit_wedge, O.right_orbit_wedge].map((g, i) => ({ side: i ? 'right' : 'left', line: g.line }));
// 11 mm rubber posts capping each inner guide at its throat's mouth.
export const ORBIT_POSTS = [O.left_orbit_post, O.right_orbit_post].map(p => [p.x, p.y]);
export const ORBIT_POST = { d: O.left_orbit_post.width, height: O.left_orbit_post.height };
export const ORBIT_ROLLOVERS = [O.left_orbit, O.right_orbit].map((r, i) => ({ side: i ? 'right' : 'left', x: r.x, y: r.y }));

// The shooter lane's one-way wire gate, leaning 40° across the lane's exit: a plunge passes up through it; a ball
// coming down the right side meets its closed face and is turned into the right orbit lane.
export const GATE = { from: O.shooter_gate.from, to: O.shooter_gate.to, height: 28.6 };

// --- The upper field -----------------------------------------------------------------------------------------------

// Five top lanes under the orbit's open top, between six guides: each a 3/16-inch rubber ring (4.76 mm cord) round two
// posts, thin enough to leave each lane wider than a ball. A rollover in each lane and a round insert about 40 mm above
// it. The middle lane feeds the saucer; the others drop the ball onto the pops.
export const TOP_LANES = {
  lanes: [1, 2, 3, 4, 5].map(n => {
    const r = O[`top_lane_${n}`], ins = O[`top_lane_${n}_insert`];
    return { x: r.x, y: r.y, insert: ins.id, insertX: ins.x, insertY: ins.y };
  }),
  rubbers: [1, 2, 3, 4, 5, 6].map(n => {
    const r = O[`top_lane_rubber_${n}`];
    return { posts: r.posts, postR: r.postDiameter / 2, cord: r.cord, h: r.rubberHeight };
  }),
};

// The saucer under the middle lane: a stamped steel cup that catches a slow ball (Origin's engine: within 0.7 of its
// radius of the middle, under 900 mm/s), holds it about a second on its switch, and kicks it back out along
// `kickAngle` (degrees on the board: 0 right, 90 up the table). The kick is Origin's: 30 in VPX strength, 1620 mm/s.
export const SAUCER = {
  x: O.saucer.x, y: O.saucer.y, r: O.saucer.width / 2, depth: O.saucer.height, kickAngle: O.saucer.kickAngle, kick: Math.round(O.saucer.kick),
  reach: (O.saucer.width / 2) * 0.7, maxSpeed: 900, hold: 1.0,
};

// Pops: three, Origin's: pop_1 at the back centre under the saucer, pop_2 and pop_3 in front of it either side.
export const POPS = ['pop_1', 'pop_2', 'pop_3'].map(id => ({ id, x: O[id].x, y: O[id].y }));
// Pop bumper: 60 mm cap, 44 mm tall. The ring's flange rests just under the cap and pulls down about 9 mm onto a
// ball pressed against the skirt, whose centre is then 34 mm from the bumper's axis.
export const POP = { cap: O.pop_1.width, height: O.pop_1.height, ringRest: 29.5, ringTravel: 9, reach: 34 };

// The standup bank between the ramp mouths: three one-inch faces (25.4 wide, 10 deep, 35 tall) at y = 690 on 38.1 mm
// centres, the gaps between them too narrow for a ball, each with a round insert 22 mm in front. Behind them a rubber
// wrapped round three 18 mm posts keeps the ball off their backs, and a 1.6 mm steel guide runs from the bank up
// along each ramp's inner wall to the top lanes.
export const TARGETS = {
  list: ['target_a', 'target_b', 'target_c'].map(id => ({ id, x: O[id].x, y: O[id].y, insert: O[`${id}_insert`].id })),
  width: O.target_a.width, depth: O.target_a.length, height: O.target_a.height,
};
export const TARGET_GUIDES = [O.target_guide_left, O.target_guide_right].map((g, i) => ({ side: i ? 'right' : 'left', line: g.line, mounts: g.mounts || [], thickness: g.thickness, height: g.height }));
export const TARGET_POSTS = ['target_post_left', 'target_post_right', 'target_post_centre'].map(id => ({ x: O[id].x, y: O[id].y, d: O[id].width, height: O[id].height }));
// The template draws the rubber's own posts 2 mm in front of the three post parts it names (postIds); it is wrapped
// round the posts here, in their grooves.
export const TARGET_RUBBER = {
  posts: O.target_rubber.postIds.map(id => [O[id].x, O[id].y]), grooves: O.target_rubber.postDiameters.map(d => d / 2), cord: O.target_rubber.cord, h: O.target_rubber.rubberHeight,
};

// --- Ramps and wireforms ----------------------------------------------------------------------------------------------

// Two printed ramps, mirror images. Each mouth eases onto the wood a third of the way up, facing the opposite
// flipper; the channel (42 mm, flared to a 52 mm mouth over its first 60 mm, 28 mm walls) climbs past the pops, turns
// out over the orbit and hands the ball at 72 mm up to a printed two-wire form, which comes down over the orbit lane
// and drops the ball through its rounded dead end into its own side's inlane. `profile` is Origin's built centre line
// [x, y, floor height, width]; `wire` the wireform's [x, y, rail height (the rails' undersides), width]; `supports`
// are the posts under each. The case studies are the shots: the left ramp is Deadbounce, the right Tip Top.
export const RAMP = { width: O.left_ramp.rampWidth, mouth: O.left_ramp.widthStart, flare: O.left_ramp.mouthLength, wall: O.left_ramp.wallHeight, floor: 3, side: 2.4 };
// The wireform's printed rails: 5 mm, their centres ±0.31 of its 36 mm width either side of the path and their
// undersides on its height; a ball between them rides 13.97 mm over the path. A side rail guards the outside of the
// turn, 1.5 mm clear of the resting ball 25° above its equator.
const railHalf = O.left_wireform.rampWidth * 0.31, railR = 2.5, rideOn = Math.sqrt((BALL_R + railR) ** 2 - railHalf ** 2);
export const WIRE = {
  rod: railR, rail: r2(railHalf), ride: r2(railR + rideOn),
  sideRail: { u: r2(Math.max(railHalf, (BALL_R + railR + 1.5) * Math.cos(25 * Math.PI / 180))), v: r2(railR + rideOn + (BALL_R + railR + 1.5) * Math.sin(25 * Math.PI / 180)) },
  // The dead end: the rails spread over 40 mm into a U round the ball (ball, rail and 3 mm), and the ball drops through
  // where they are a ball apart.
  dropRadius: BALL_R + railR + 3, spread: 40,
};
const ramp = (side, id, r, w, arrow) => ({
  side, id, profile: r.profile, supports: r.supports.map(s => [s.x, s.y, s.z]), switchAt: r.switches?.[0],
  wire: w.profile, wireSupports: w.supports.map(s => [s.x, s.y, s.z]), sideRails: w.sideRails || [],
  arrow: { x: O[arrow].x, y: O[arrow].y, angle: O[arrow].rotation },
  post: STAR_POSTS[side === 'left' ? 0 : 1],
});
export const RAMPS = [
  ramp('left', 'deadbounce', O.left_ramp, O.left_wireform, 'left_ramp_arrow'),
  ramp('right', 'tiptop', O.right_ramp, O.right_wireform, 'right_ramp_arrow'),
];

// --- Inserts -------------------------------------------------------------------------------------------------------

// All 21 of Origin's lenses, with their shapes (circle, arrow, hexagon, star, shield; an arrow points along +y turned
// `angle` degrees counter-clockwise) and lamp colours. Origin's lilac lamps are royal blue here, its violet ones the
// deeper royal, its pale lilac the light tint and its warm white white.
const LAMP = { a99cff: 'royal', '8f7dff': 'deep', c9c0ff: 'light', f4f3f8: 'white' };
export const INSERTS = Object.values(O).filter(c => c.type === 'insert').map(c => ({
  id: c.id, x: c.x, y: c.y, angle: c.rotation || 0, width: c.width, length: c.length, shape: c.shape, color: LAMP[c.color] || 'white', icon: c.icon,
}));

// --- General illumination ------------------------------------------------------------------------------------------

// Bulbs tucked inside each throat wedge, closed to the ball, against the rail.
export const GI_SPOTS_UPPER = [[18, 520], [2 * PF.cx - 18, 520]];
