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


// The divider is a 6 mm bar, its playfield face at 468.35 (the left rail's face mirrored about the centre line), as on
// the reference; it stops at y = 840 so the right orbit lane joins the shooter lane under the arch. It was a 1.6 mm
// band up to 910.8, whose playfield face (472.75) would leave the right orbit lane 44.4 mm wide.
export const SHOOTER = {
  laneLeft: 474.35, laneRight: 508.35, dividerFace: 468.35, dividerTop: 840, apronTop: 221.1, ballRest: [491.35, 117.9],
};



// Top arch: side rails sweep into a 130 mm corner on the left and a 150 mm corner on the right.
export const ARCH = {
  top: PF.l - PF.rail,
  left: { cx: PF.rail + 130, cy: PF.l - PF.rail - 130, r: 130 },
  right: { cx: SHOOTER.laneRight - 150, cy: PF.l - PF.rail - 150, r: 150 },
};

// A 40 mm lane up each side, inside the rail (left) and the shooter divider (right), round the arch's corners and over
// the top. The inner guide is formed 1.6 mm steel, 28.6 mm tall (machine.js BAND), in two pieces that meet the outer
// top-lane guides. Across the top the run is open over the top lanes' entrances: a ball crossing slowly drops into a
// lane and goes on to the pops; a fast one rides the top rail over the lanes' posts and comes down the far orbit.
// Polylines named `face` are the ball face on the lane side; `line` is the steel's centre line, what wall() takes.
export const ORBIT = {
  lane: 40, // between faces: 1.5 balls, 6.5 mm either side of a centred ball
  leftFace: PF.rail, // the left orbit's outer wall: the rail
  rightFace: SHOOTER.dividerFace, // the right orbit's outer wall: the shooter divider
  steel: 1.6,
  // The inner guide's top corners (ball face, as the reference's), and the straights rising `slope` degrees from them
  // toward the centre line. The reference rounds the straights over on R200 to a crown 34 mm under the top rail
  // (kept in ORBIT_TOP_CROWN below); here they stop at the outer top-lane guides, PF.cx ± `open`.
  cornerLeft: 94, cornerRight: 110, slope: 7, crownGap: 34, crownR: 200, open: 72,
  // Throats: each lane bends 30° toward the opposite flipper from y = 690, the outer wall on R120 and the inner guide on
  // R70, into a parallel channel 54 mm wide with an 80 mm straight. An 11 mm rubber post caps the inner guide's end; a
  // formed wedge on the outer wall closes the space under the bend, its return leg climbing back to the wall at 60°.
  bend: 690, throatAngle: 30, throatR: 120, innerThroatR: 70, throatWidth: 54, throatLength: 80, mouthPost: 11, wedgeAngle: 60,
  // A mini post (02-4036) tops each top-lane guide; its radius sets how far under the orbit's face the posts sit.
  lanePostR: 4.76,
  rolloverY: 800,
};

const orbitRad = a => (a * Math.PI) / 180;
const orbitAdd = (p, v, k = 1) => [p[0] + v[0] * k, p[1] + v[1] * k];
// Points along an arc (degrees, counter-clockwise from +x), at most `step` mm apart, both ends included.
const orbitArc = ([cx, cy], r, a0, a1, step = 2) => {
  const n = Math.max(1, Math.ceil((orbitRad(Math.abs(a1 - a0)) * r) / step));
  return Array.from({ length: n + 1 }, (_, i) => {
    const a = orbitRad(a0 + ((a1 - a0) * i) / n);
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });
};
// Points along a straight, at most `step` mm apart, both ends included.
const orbitLine = (p, q, step = 4) => {
  const n = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / step));
  return Array.from({ length: n + 1 }, (_, i) => [p[0] + ((q[0] - p[0]) * i) / n, p[1] + ((q[1] - p[1]) * i) / n]);
};
// Runs joined end to end, dropping the repeated point where one meets the next; rounded to 0.01 mm.
const orbitJoin = (...runs) => runs.flat()
  .filter((p, i, all) => i === 0 || Math.hypot(p[0] - all[i - 1][0], p[1] - all[i - 1][1]) > 1e-6)
  .map(([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100]);
// The steel's centre line: a face moved half the steel's thickness to the right of travel (side 1) or the left (-1).
const orbitSteel = (face, side) => face.map((p, i) => {
  const a = face[Math.max(0, i - 1)], b = face[Math.min(face.length - 1, i + 1)];
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, k = (ORBIT.steel / 2) * side;
  return [Math.round((p[0] + ((b[1] - a[1]) / len) * k) * 100) / 100, Math.round((p[1] - ((b[0] - a[0]) / len) * k) * 100) / 100];
});
const orbitMirror = pts => pts.map(mirror);

const orbitGeometry = (() => {
  const O = ORBIT, half = O.steel / 2;
  const d = [Math.sin(orbitRad(O.throatAngle)), -Math.cos(orbitRad(O.throatAngle))]; // down the throat, toward the field
  const n = [Math.cos(orbitRad(O.throatAngle)), Math.sin(orbitRad(O.throatAngle))]; // across it, from outer wall to inner
  // The left throat's outer wall (the wedge's face): down the rail's face, round R120 and along an 80 mm straight.
  const outerC = [O.leftFace + O.throatR, O.bend];
  const bend = orbitAdd(outerC, n, -O.throatR); // (22.08, 630): where the R120 meets the straight
  const outerEnd = orbitAdd(bend, d, O.throatLength); // (62.08, 560.72)
  // The inner guide's face: down x = 46, round R70, then the straight 54 mm off the outer face, ending square to the
  // throat level with the outer straight's end.
  const xv = O.leftFace + O.lane;
  const innerC = [xv + O.innerThroatR, 0];
  innerC[1] = bend[1] + (O.throatWidth + O.innerThroatR - (innerC[0] - bend[0]) * n[0]) / n[1]; // 715.33
  const mouth = orbitAdd(outerEnd, n, O.throatWidth); // (108.85, 587.72)
  const throatFace = orbitJoin(orbitLine(mouth, orbitAdd(innerC, n, -O.innerThroatR)), orbitArc(innerC, O.innerThroatR, 180 + O.throatAngle, 180));
  // The top corners, placed as the reference places them: straights at `slope` tangent to each corner meet over the
  // centre line where a R200 rounding puts the crown `crownGap` under the top rail.
  const s = Math.sin(orbitRad(O.slope)), c = Math.cos(orbitRad(O.slope));
  const crown = [PF.cx, ARCH.top - O.crownGap], peakY = crown[1] + O.crownR * (1 / c - 1);
  const cornerL = [O.leftFace + O.lane + O.cornerLeft, 0], cornerR = [O.rightFace - O.lane - O.cornerRight, 0];
  cornerL[1] = peakY - (O.cornerLeft + (PF.cx - cornerL[0]) * s) / c; // 921.66
  cornerR[1] = peakY - (O.cornerRight + (cornerR[0] - PF.cx) * s) / c; // 907.51
  const touchL = [cornerL[0] - O.cornerLeft * s, cornerL[1] + O.cornerLeft * c]; // (128.54, 1014.96)
  const touchR = [cornerR[0] + O.cornerRight * s, cornerR[1] + O.cornerRight * c]; // (331.76, 1016.69)
  const rise = (touch, x) => touch[1] + Math.abs(x - touch[0]) * Math.tan(orbitRad(O.slope)); // up a straight to x
  const endL = [PF.cx - O.open, rise(touchL, PF.cx - O.open)]; // (165.175, 1019.46)
  const endR = [PF.cx + O.open, rise(touchR, PF.cx + O.open)]; // (309.175, 1019.46)
  // Left guide: from the throat's mouth up the side, round R94 and up the 7° straight to the leftmost lane guide. The
  // lane is on the left of travel, so the steel is on the right.
  const leftFace = orbitJoin(throatFace, orbitLine([xv, innerC[1]], [xv, cornerL[1]]), orbitArc(cornerL, O.cornerLeft, 180, 90 + O.slope), orbitLine(touchL, endL));
  // Right guide: the left throat mirrored, up x = 428.35, round R110 and up its straight to the rightmost lane guide.
  const rightFace = orbitJoin(orbitMirror(throatFace), orbitLine([O.rightFace - O.lane, innerC[1]], [O.rightFace - O.lane, cornerR[1]]),
    orbitArc(cornerR, O.cornerRight, 0, 90 - O.slope), orbitLine(touchR, endR));
  // The reference's closed run across the top (not used): the two straights carried on and rounded over on R200.
  const crownC = [crown[0], crown[1] - O.crownR];
  const crownFace = orbitJoin(orbitLine(endL, [crownC[0] - O.crownR * s, crownC[1] + O.crownR * c]),
    orbitArc(crownC, O.crownR, 90 + O.slope, 90 - O.slope), orbitLine([crownC[0] + O.crownR * s, crownC[1] + O.crownR * c], endR));
  // The wedge on the left rail: its centre line is the reference's, half the steel outside the throat's face, then the
  // return leg back to the rail's centre line at `wedgeAngle`. Its two ball faces are the throat's outer wall and the
  // leg's underside, which faces the field.
  const lineArcEnd = orbitAdd(outerC, n, -(O.throatR + half));
  const lineTip = orbitAdd(lineArcEnd, d, O.throatLength); // (61.38, 560.32)
  const lineBack = [O.leftFace - half, lineTip[1] - (lineTip[0] - O.leftFace) * Math.tan(orbitRad(O.wedgeAngle))]; // (5.2, 464.39)
  const wedgeLine = orbitJoin(orbitArc(outerC, O.throatR + half, 180, 180 + O.throatAngle), orbitLine(lineArcEnd, lineTip), orbitLine(lineTip, lineBack));
  const legDir = [(lineBack[0] - lineTip[0]) / Math.hypot(lineBack[0] - lineTip[0], lineBack[1] - lineTip[1]), (lineBack[1] - lineTip[1]) / Math.hypot(lineBack[0] - lineTip[0], lineBack[1] - lineTip[1])];
  const legOut = [-legDir[1], legDir[0]]; // left of travel down the leg: toward the field
  const wedgeFace = {
    throat: orbitJoin(orbitArc(outerC, O.throatR, 180, 180 + O.throatAngle), orbitLine(bend, outerEnd)),
    leg: orbitJoin(orbitLine(orbitAdd(lineTip, legOut, half), orbitAdd(lineBack, legOut, half))),
  };
  // The mouth post, centred a quarter of its diameter down the throat from the steel's end, so it stands only a few
  // millimetres proud of either face.
  const post = orbitAdd(orbitAdd(mouth, n, half), d, O.mouthPost / 4); // (110.91, 585.74)
  return { leftFace, rightFace, crownFace, wedgeLine, wedgeFace, post, corners: { left: cornerL, right: cornerR }, ends: [endL, endR], innerThroat: innerC };
})();

// The inner guides, each a ball-face polyline from its throat's mouth up to the outer top-lane guide, sampled at 4 mm on
// straights and 2 mm on curves, with the steel's centre line beside it.
export const ORBIT_GUIDES = [
  { side: 'left', face: orbitGeometry.leftFace, line: orbitSteel(orbitGeometry.leftFace, 1) },
  { side: 'right', face: orbitGeometry.rightFace, line: orbitSteel(orbitGeometry.rightFace, -1) },
];
// The reference's crown, should you want its closed top instead (then drop the top lanes' entrances; see the report).
export const ORBIT_TOP_CROWN = { face: orbitGeometry.crownFace, line: orbitSteel(orbitGeometry.crownFace, 1) };
// Throat wedges on the left rail and the shooter divider: centre line (rail, R120.8 bend, straight, 60° return leg) and
// the two ball faces.
export const ORBIT_WEDGES = [
  { side: 'left', line: orbitGeometry.wedgeLine, faces: orbitGeometry.wedgeFace },
  {
    side: 'right', line: orbitMirror(orbitGeometry.wedgeLine),
    faces: { throat: orbitMirror(orbitGeometry.wedgeFace.throat), leg: orbitMirror(orbitGeometry.wedgeFace.leg) },
  },
];
// 11 mm rubber posts capping each inner guide at its throat's mouth.
export const ORBIT_POSTS = [orbitGeometry.post, mirror(orbitGeometry.post)].map(([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100]);
// A rollover in each side lane, on the lane's centre line: each covers every line a ball's centre can take down it.
export const ORBIT_ROLLOVERS = [
  { side: 'left', x: ORBIT.leftFace + ORBIT.lane / 2, y: ORBIT.rolloverY },
  { side: 'right', x: ORBIT.rightFace - ORBIT.lane / 2, y: ORBIT.rolloverY },
];
// Where the orbit's run meets the outer top-lane guides, and how high their top posts stand: flush under its face.
ORBIT.junctionY = orbitGeometry.ends[0][1]; // 1019.46
ORBIT.lanePostY = Math.round((ORBIT.junctionY - ORBIT.lanePostR) * 100) / 100; // 1014.7



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

// No rebound rubber: its band crossed the left orbit lane at the arch's corner. The left orbit and its throat now take
// a full plunge back to the right flipper (the reference's orbit template drops it too). machine.js buildGuides must
// skip the band when the list is empty.
export const REBOUND = [];

// The shooter lane's one-way wire gate, leaning 40° from just over the divider's top to 3 mm short of the right rail
// (on the straight rail, below the corner): a plunge passes up through it; a ball coming down the right side meets its
// closed face and is turned into the right orbit lane. 51.4 mm long, centred at (485.68, 857.51).
const gateFrom = [SHOOTER.dividerFace - 2.35, SHOOTER.dividerTop + 1];
const gateLength = (SHOOTER.laneRight - 3 - gateFrom[0]) / Math.cos(orbitRad(40));
export const GATE = {
  from: gateFrom,
  to: [Math.round((gateFrom[0] + gateLength * Math.cos(orbitRad(40))) * 100) / 100, Math.round((gateFrom[1] + gateLength * Math.sin(orbitRad(40))) * 100) / 100],
  height: 28.6,
};




// Three lanes between four guides at the top centre, open at the top to the orbit's run. Every guide's top post sits
// flush under the orbit's face, 41.3 mm under the top rail, so a ball riding the rail passes over them. The outer
// guides stand where the orbit's two inner guides end, and their posts cap the joins.
export const TOP_LANES = {
  y: 986,
  centers: [-48, 0, 48].map(d => PF.cx + d),
  guides: [-ORBIT.open, -24, 24, ORBIT.open].map(d => PF.cx + d),
  guideFrom: 958,
  guideTo: ORBIT.lanePostY,
  insertY: 936,
};

// Pops (Twin Ramps' places): the upper two under the outer lanes, the third below between them.
export const POPS = [
  { x: 188, y: 862 },
  { x: 286, y: 862 },
  { x: PF.cx, y: 782 },
];


// Pop bumper: 60 mm cap, 44 mm tall. The ring's flange rests just under the cap and pulls down about 9 mm onto a
// ball pressed against the skirt, whose centre is then 34 mm from the bumper's axis.
export const POP = { cap: 60, height: 44, ringRest: 29.5, ringTravel: 9, reach: 34 };


// Ramps (Twin Ramps' centre line): each mouth eases onto the wood a third of the way up, on the line from the opposite
// flipper, at (179, 520): 3 mm further in than Twin Ramps' 176, because our mouth's walls stand full height on the wood
// and at 176 a ball leaving the throat along its inner guide clipped the outer corner by 1 mm (now clears by 1.2). The
// channel climbs steeply, then leans out past the pops to a quarter turn of R41 over the orbit's corner, and leaves
// level at (75, 903) pointing at the rail. machine.js must read the turn's `from` / `to` (degrees) and append `exit`.
// The wireform takes the ball there, rail tops flush with the ramp's floor, turns down on R32 over the orbit lane at
// x = 31, runs down over the lane and the throat high over both, and ends in its dead end over its own inlane.
const leftRamp = [[179, 520, 0], [172, 600, 14], [150, 700, 38], [126, 790, 58], [124, 862, 66]];
const leftTurn = { cx: 83, cy: 862, r: 41, from: 0, to: 90, h0: 66, h1: 71.5, exit: [75, 903, 72] };
const mirror3 = ([x, y, h]) => [2 * PF.cx - x, y, h];
const wireTurn = (cx, cy, r, a0, a1, h0, h1, steps) => Array.from({ length: steps + 1 }, (_, i) => {
  const a = orbitRad(a0 + ((a1 - a0) * i) / steps);
  return [Math.round((cx + Math.cos(a) * r) * 100) / 100, Math.round((cy + Math.sin(a) * r) * 100) / 100, Math.round((h0 + ((h1 - h0) * i) / steps) * 100) / 100];
});
// The wireform's bottom-rail centre line: 1.6 mm under the ramp's floor at the hand-off, then Twin Ramps' line in plan,
// 3.4 mm higher than theirs at the turn easing to 1 mm lower at the dead end (our old end, over the inlane at 69.4).
// Its hoops' undersides stay 11 mm or more over the guides' tops (28.6) everywhere above y = 560, 3.8 at the dead end.
const leftWire = [
  [75, 903, 70.4], ...wireTurn(63, 871, 32, 90, 180, 70, 68.4, 8),
  [31, 760, 62], [31, 690, 56.5], [37, 620, 52], [46, 560, 48.5], [56, 500, 45.5], [64, 455, 43], [69.4, 420, 41],
];
// Wireform posts (Twin Ramps' stations): two on the field side of the orbit guide above the throat, one in the
// corner the throat's wedge closes off against the rail, one before the dead end's rails spread. None stands in a
// lane or a throat, and none is more than 180 mm from the next.
const leftWireSupports = [[59.1, 879.4], [53.4, 731.6], [24, 553.8], [79.5, 497.1]];
// The ramps' standoffs, for machine.js rampSupports: { s: mm along the centre line from the mouth, side: 1 on the
// turn's outer side (right of travel on the left ramp, left on the right; multiply by `outer`), -1 the inner }. It
// skips any where the floor is under 30 mm (the walls run to the wood there). These are its old spots on the new line;
// the quarter turn's outer side faces into the field, so the last no longer lands on the rail (it was at x = 1.7). On
// the left ramp they stand at (166.9, 749.3), (109.8, 731.8), (136.1, 908.9), (123.2, 920.4) and (89.9, 932.6).
const rampStations = L => [{ s: 230, side: 1 }, { s: 230, side: -1 }, { s: L.turnStart + 30, side: 1 }, { s: L.turnStart + L.turnLen * 0.55, side: 1 }, { s: L.length - 12, side: 1 }];
export const RAMP = { width: 42, mouth: 52, flare: 60, wall: 28, outerWall: 36, floor: 3, side: 2.4, stations: rampStations };
export const WIRE = { rod: 1.6, rail: 11, upper: [15, 19], ride: 10.34 };
export const RAMPS = [
  { side: 'left', id: 'deadbounce', path: leftRamp, turn: leftTurn, wire: leftWire, supports: leftWireSupports, post: STAR_POSTS[0] },
  {
    side: 'right', id: 'tiptop', path: leftRamp.map(mirror3),
    turn: { ...leftTurn, cx: 2 * PF.cx - leftTurn.cx, exit: mirror3(leftTurn.exit), mirror: true }, wire: leftWire.map(mirror3),
    supports: leftWireSupports.map(mirror), post: STAR_POSTS[1],
  },
];




// Up to y = 705, between the ramps where they have leaned out. The ramps pass over the targets (their floor is 37 mm
// up there, the targets 28.6 tall) 5.7 mm to the side; the 40 mm plate clears their walls by 2.1 mm in plan; the lower
// pop stands 36.5 mm behind the plate, so a ball can pass behind the bank.
export const DROPS = { cx: PF.cx, y: 705, count: 4, pitch: 30, width: 25.4, height: 28.6, thick: 6.35, labels: ['Web', 'Game', 'Media', 'Fab'] };



export const LADDER = { cx: PF.cx, top: 452, pitch: 27, count: 5, w: 30, h: 20 };

export const PLAY_AGAIN = { x: PF.cx, y: 262, w: 58, h: 22 };


// Arrow inserts in front of each ramp, pointing up its entrance (Twin Ramps' place, 12 mm lower because ours are
// 63.5 mm long: the tip stops 2.4 mm short of the mouth's flap, and the head clears the ladder's top year).
const rampHeading = Math.round((Math.atan2(leftRamp[1][1] - leftRamp[0][1], leftRamp[1][0] - leftRamp[0][0]) * 18000) / Math.PI) / 100; // 95
export const RAMP_ARROWS = [
  { x: 184, y: 460, angle: rampHeading, ramp: 0 },
  { x: 2 * PF.cx - 184, y: 460, angle: 180 - rampHeading, ramp: 1 },
];
// Arrows on the line out of each orbit throat, a little below its mouth, pointing up it (Twin Ramps' places).
export const ORBIT_ARROWS = [
  { x: 111, y: 529, angle: 90 + ORBIT.throatAngle, orbit: 0 },
  { x: 2 * PF.cx - 111, y: 529, angle: 90 - ORBIT.throatAngle, orbit: 1 },
];



export const TOP_LANE_INSERTS = TOP_LANES.centers.map(x => ({ x, y: TOP_LANES.insertY }));
export const LANE_LETTERS = ['R', 'V', 'A']; // Richmond, Virginia

// Return lanes: a rollover in each inlane and outlane, as on the Blank playfield, with an insert above each.
const leftReturn = [{ kind: 'outlane', x: 26, y: 315, insertY: 362 }, { kind: 'inlane', x: 69.4, y: 315, insertY: 362 }];
export const RETURN_LANES = [...leftReturn, ...leftReturn.map(l => ({ ...l, x: 2 * PF.cx - l.x }))];


// Rubber posts guarding the pops' lower outside corners, just inside the ramps' outer edge in plan and under their
// floor (51.7 mm up there): a ball passes either side, 46.5 mm to the upper pop and 35.7 mm to the lower. The four
// beside the ramp entrances are gone: the left one stood in the left throat, the right one inside the new mouth.
const leftPosts = [[162, 780]];
export const RUBBER_POSTS = [...leftPosts, ...leftPosts.map(mirror)];



// Its bulbs at [60, 1015] and [110, 1040] now stand in the left orbit lane. These replace them: one inside each throat
// wedge, closed to the ball, 6.9 mm off the wall and 11 mm off the wedge's steel.
export const GI_SPOTS_UPPER = [[18, 520], [2 * PF.cx - 18, 520]];

