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
export const FLIPPER = { baseR: 12.5, tipR: 7.75, length: 68.45, height: 22, rubber: 3.2 };

const mirror = ([x, y]) => [2 * PF.cx - x, y];
const leftSling = [[98.5, 355], [135.18, 255.65], [98.5, 278.1]];
export const SLINGS = [
  { side: 'left', posts: leftSling },
  { side: 'right', posts: leftSling.map(mirror) },
];

// Apron: lip arc centred on the play centre line, shoulders rising at 34° to the rails.
export const APRON = {
  deck: 47.6,
  lipR: 149.8,
  lipCy: 88.9 + 149.8,
  lipEndY: 105.9,
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

// Lower third guides (steel), left side; the right is its mirror.
const inlaneLeft = [[48.7, 392], [48.7, 300], [70, 262], [112, 214], [126, 204]];
export const GUIDES = [inlaneLeft, inlaneLeft.map(mirror)];
export const STAR_POSTS = [[49, 392], mirror([49, 392])];

export const TOP_LANES = {
  y: 990,
  centers: [-52, 0, 52].map(d => PF.cx + d),
  guides: [-78, -26, 26, 78].map(d => PF.cx + d),
  guideFrom: 958,
  guideTo: 1022,
  insertY: 936,
};

export const POPS = [
  { x: PF.cx - 54, y: 866 },
  { x: PF.cx + 54, y: 866 },
  { x: PF.cx, y: 778 },
];
export const POP = { cap: 60, height: 44 };

// Ramps: a printed ramp up each side with a U-turn at the top, returning on a wireform over the outlane to the inlane.
// Points are [x, y, h]. The right ramp is the left one mirrored.
const leftRamp = [
  [134, 596, 0], [124, 660, 12], [114, 740, 30], [106, 820, 50], [102, 870, 62],
];
const leftTurn = { cx: 74, cy: 880, r: 30, from: 0, to: 180, h0: 62, h1: 72 };
const leftWire = [
  [44, 872, 72], [36, 800, 70], [32, 640, 62], [32, 500, 50], [36, 430, 38], [54, 384, 22], [64, 352, 12],
];
const mirror3 = ([x, y, h]) => [2 * PF.cx - x, y, h];
export const RAMPS = [
  { side: 'left', id: 'deadbounce', path: leftRamp, turn: leftTurn, wire: leftWire, width: 50 },
  {
    side: 'right', id: 'tiptop', path: leftRamp.map(mirror3),
    turn: { ...leftTurn, cx: 2 * PF.cx - leftTurn.cx, mirror: true }, wire: leftWire.map(mirror3), width: 50,
  },
];

export const DROPS = { cx: PF.cx, y: 596, count: 4, pitch: 30, width: 25.4, height: 34, labels: ['Web', 'Game', 'Media', 'Fab'] };

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
