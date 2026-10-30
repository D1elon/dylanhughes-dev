// The machine's layout in millimetres. Playfield coordinates: x from the left rail, y from the front edge (the
// player's end), h above the wood. The board, flippers, slings, apron and shooter lane follow the Blank playfield
// in Deadbounce (docs/blank-playfield-dimensions.md); everything else is this machine's own design.

export const PF = {
  w: 514.35,
  l: 1066.8,
  thick: 12.7,
  cx: 237.175, // the play area's centre line; the shooter lane sits to its right
  pitch: 6.5, // degrees
  rail: 6,
};

export const BALL_R = 13.5;

export const FLIPPERS = [
  { side: 'left', x: 148.275, y: 177.8, rest: -25, up: 27 },
  { side: 'right', x: 326.075, y: 177.8, rest: 205, up: 153 },
];
// A Williams 3-inch bat (20-9250, measured): rubber outline 11.28 / 6.64 on 62.8 mm centres, bottom flange, groove
// and top cap inside it. The bat swings 52° in about 26 ms.
export const FLIPPER = {
  baseR: 11.28, tipR: 6.64, length: 62.8, height: 24.1,
  flange: [9.21, 4.45], groove: [8.05, 3.68], cap: [8.2, 3.4],
  rubberFrom: 8.6, rubberTo: 20,
};

const mirror = ([x, y]) => [2 * PF.cx - x, y];
const leftSling = [[98.5, 355], [135.18, 255.65], [98.5, 278.1]];
export const SLINGS = [
  { side: 'left', posts: leftSling },
  { side: 'right', posts: leftSling.map(mirror) },
];

// Apron (after Williams/Bally A-13204): a formed sheet deck 47.6 mm up whose lip is an R149.8 arc centred on the
// play centre line, lowest 88.9 mm from the front; its shoulders rise at 34° to the rails.
export const APRON = {
  deck: 47.6,
  lipR: 149.8,
  lipCy: 88.9 + 149.8,
  lipEndY: 104.4,
  leftShoulder: [6, 217.1],
  rightShoulder: [474.35, 221.1],
};
APRON.lipHalf = Math.sqrt(APRON.lipR ** 2 - (APRON.lipCy - APRON.lipEndY) ** 2);
APRON.lipLeft = [PF.cx - APRON.lipHalf, APRON.lipEndY];
APRON.lipRight = [PF.cx + APRON.lipHalf, APRON.lipEndY];

export const SHOOTER = { laneLeft: 474.35, laneRight: 508.35, dividerTop: 910.8, apronTop: 221.1, ballRest: [491.35, 117.9] };

// Top arch: side rails sweep into a 130 mm corner on the left and a 150 mm corner on the right.
export const ARCH = {
  top: PF.l - PF.rail,
  left: { cx: PF.rail + 130, cy: PF.l - PF.rail - 130, r: 130 },
  right: { cx: SHOOTER.laneRight - 150, cy: PF.l - PF.rail - 150, r: 150 },
};

const arc = (cx, cy, r, a0, a1, steps) => Array.from({ length: steps + 1 }, (_, i) => {
  const a = ((a0 + (a1 - a0) * (i / steps)) * Math.PI) / 180;
  return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
});

// Inlane guide, after the Blank playfield's lower third. The steel's ball face runs down x = 49.5, bends round an
// R28 fillet into a 33 mm return lane parallel to the sling's lower rubber, and ends in an R12.5 curl 3.5 mm off
// the flipper's base. The steel's centre line sits 0.8 mm outboard of that face.
const inlaneLeft = [[48.7, 375], ...arc(77.5, 272.1, 28.8, 180, 238.6, 10), ...arc(125.45, 195.24, 11.7, 58.4, -37, 10)];
export const GUIDES = [inlaneLeft, inlaneLeft.map(mirror)];
// A star post caps the strip between inlane and outlane, shifted toward the outlane so a ball down the inlane clears it.
export const STAR_POSTS = [[46, 390], mirror([46, 390])];
// Rebound rubber across the arch's upper-left corner, so a full plunge doesn't ride the rail down into the outlane.
export const REBOUND = [[180, 1050.85], [22.5, 970]];

// The shooter lane's one-way wire gate, leaning 40° across the lane's exit.
export const GATE = { from: [466, 911.8], to: [502, 942], height: 28.6 };

export const TOP_LANES = {
  y: 990,
  centers: [-48, 0, 48].map(d => PF.cx + d),
  guides: [-72, -24, 24, 72].map(d => PF.cx + d),
  guideFrom: 958,
  guideTo: 1022,
  insertY: 936,
};

export const POPS = [
  { x: PF.cx - 54, y: 866 },
  { x: PF.cx + 54, y: 866 },
  { x: PF.cx, y: 778 },
];
// Pop bumper: 60 mm cap, 44 mm tall. The ring's flange rests just under the cap and pulls down about 9 mm onto a
// ball pressed against the skirt, whose centre is then 34 mm from the bumper's axis.
export const POP = { cap: 60, height: 44, ringRest: 29.5, ringTravel: 9, reach: 34 };

// Ramps: a printed ramp up each side, its 42 mm channel flared to a 52 mm mouth, climbing to a U-turn of R45 at the
// top, then handing the ball to a steel wireform that comes down over the outlane and drops it into its own side's
// inlane: left ramp to the left flipper, right ramp to the right. Points are [x, y, h]; the right is the mirror.
const leftRamp = [[134, 596, 0], [128, 660, 12], [123, 740, 30], [120, 820, 50], [119, 870, 62]];
const leftTurn = { cx: 74, cy: 880, r: 45, from: 0, to: 180, h0: 62, h1: 72 };
// The wireform's bottom-rail centre line: rail tops flush with the ramp floor at the hand-off, then down to a
// rounded dead end over the inlane, where the rails spread and the ball drops through.
const leftWire = [
  [29, 880, 70.4], [30, 800, 67], [32, 700, 61], [34, 600, 55], [42, 520, 49], [58, 466, 44.5], [69.4, 434, 41.5], [69.4, 420, 41],
];
const mirror3 = ([x, y, h]) => [2 * PF.cx - x, y, h];
export const RAMP = { width: 42, mouth: 52, flare: 60, wall: 28, outerWall: 36, floor: 3, side: 2.4 };
export const WIRE = { rod: 1.6, rail: 11, upper: [15, 19], ride: 10.34 };
export const RAMPS = [
  { side: 'left', id: 'deadbounce', path: leftRamp, turn: leftTurn, wire: leftWire, supports: [[54, 820], [54, 640], [50, 496]], post: STAR_POSTS[0] },
  {
    side: 'right', id: 'tiptop', path: leftRamp.map(mirror3),
    turn: { ...leftTurn, cx: 2 * PF.cx - leftTurn.cx, mirror: true }, wire: leftWire.map(mirror3),
    supports: [[54, 820], [54, 640], [50, 496]].map(mirror), post: STAR_POSTS[1],
  },
];

export const DROPS = { cx: PF.cx, y: 596, count: 4, pitch: 30, width: 25.4, height: 28.6, thick: 6.35, labels: ['Web', 'Game', 'Media', 'Fab'] };

export const LADDER = { cx: PF.cx, top: 452, pitch: 27, count: 5, w: 30, h: 20 };

export const PLAY_AGAIN = { x: PF.cx, y: 262, w: 58, h: 22 };

// Arrow inserts in front of each ramp, pointing up its entrance.
export const RAMP_ARROWS = [
  { x: 150, y: 538, angle: 102, ramp: 0 },
  { x: 2 * PF.cx - 150, y: 538, angle: 78, ramp: 1 },
];

export const TOP_LANE_INSERTS = TOP_LANES.centers.map(x => ({ x, y: TOP_LANES.insertY }));
export const LANE_LETTERS = ['R', 'V', 'A']; // Richmond, Virginia

// Return lanes: a rollover in each inlane and outlane, as on the Blank playfield, with an insert above each.
const leftReturn = [{ kind: 'outlane', x: 26, y: 315, insertY: 362 }, { kind: 'inlane', x: 69.4, y: 315, insertY: 362 }];
export const RETURN_LANES = [...leftReturn, ...leftReturn.map(l => ({ ...l, x: 2 * PF.cx - l.x }))];

// Rubber posts: either side of each ramp entrance, and guarding the pop bumpers' lower corners.
const leftPosts = [[95, 588], [175, 606], [158, 800]];
export const RUBBER_POSTS = [...leftPosts, ...leftPosts.map(mirror)];
