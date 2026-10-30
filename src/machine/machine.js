// Builds the machine: cabinet and legs, backbox with backglass and dot-matrix display, and the playfield with its
// parts. Returns handles for everything that moves or lights.
import * as THREE from 'three';
import {
  PF, BALL_R, FLIPPERS, FLIPPER, SLINGS, APRON, SHOOTER, ARCH, GUIDES, STAR_POSTS, REBOUND, GATE, TOP_LANES, POPS, POP,
  RAMPS, RAMP, WIRE, DROPS, RETURN_LANES, RUBBER_POSTS,
} from './layout.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { MM, pf, extrude, extrudeLocal, place, lathe, tube, tubeLocal, densify, wall, roundedHull, ccw, arcPoints } from './geo.js';
import { insertMaterial, lacquer } from './materials.js';
import { insertList } from './art.js';

const DEG = Math.PI / 180;
const PITCH = PF.pitch * DEG;

// The cabinet is a wedge: its top runs parallel to the playfield, its bottom is level, so all four legs are equal.
// Body coordinates (tilted with the playfield) in metres; `bottom` is the front bottom edge.
export const CABINET = {
  inner: (PF.w + 22) * MM,
  wallT: 0.019,
  front: 0.585,
  back: -0.565,
  top: 0.116,
  bottom: -0.32,
  floor: -0.93,
};
// The cabinet's bottom edge at body depth z: level in the world, so it drops toward the back in body coordinates.
const bottomAt = z => CABINET.bottom + (z - CABINET.front) * Math.tan(PITCH);
export const BACKBOX = { w: 0.64, h: 0.76, d: 0.25, glassW: 0.58, glassH: 0.58 / 1.32, glassY: 0.255, dmdW: 0.384, dmdH: 0.096, dmdY: 0.118 };

function mesh(geo, mat, { cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

function texture(canvas, maxAniso = 8) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}

export function buildMachine({ M, art, dmdCanvas, anisotropy }) {
  const root = new THREE.Group();
  const body = new THREE.Group(); // the cabinet, tilted to the playfield's pitch
  body.rotation.x = PITCH;
  root.add(body);
  const playfield = new THREE.Group();
  body.add(playfield);
  const handles = { root, body, playfield, inserts: new Map(), pops: [], drops: [], flippers: [], slings: [], interactive: [], gi: [], bulbs: [], rollovers: [], flashers: [] };

  // Converts playfield millimetres to world coordinates.
  handles.toWorld = (x, y, h = 0) => {
    body.updateMatrixWorld(true);
    return pf(x, y, h).applyMatrix4(playfield.matrixWorld);
  };

  buildBoard(playfield, M, art, anisotropy);
  buildRails(playfield, M);
  buildGuides(playfield, M, handles);
  buildSlings(playfield, M, art, handles);
  buildFlippers(playfield, M, handles);
  buildApron(playfield, M, art, anisotropy);
  buildTopLanes(playfield, M, handles);
  buildPops(playfield, M, art, anisotropy, handles);
  buildDrops(playfield, M, art, anisotropy, handles);
  buildRamps(playfield, M, handles);
  buildGate(playfield, M, handles);
  buildInserts(playfield, handles);
  buildShooter(playfield, M, handles);
  buildBalls(playfield, M, handles);
  buildGI(playfield, M, handles);
  buildCabinet(body, root, M, art, anisotropy, handles);
  buildBackbox(root, M, art, dmdCanvas, anisotropy, handles);
  return handles;
}

// --- Playfield ----------------------------------------------------------------------------------------------------

// The board: 12.7 mm ply under a clear-coated print, notched at the front right where the shooter lane runs out to
// the cabinet's front wall.
const BOARD_OUTLINE = [[0, 0], [SHOOTER.laneLeft, 0], [SHOOTER.laneLeft, 105.8], [PF.w, 105.8], [PF.w, PF.l], [0, PF.l]];
function buildBoard(group, M, art, anisotropy) {
  const top = lacquer(texture(art.playfield, anisotropy));
  // Built in UV space (0–1 across the board) so the art maps straight on, then scaled to metres.
  const shape = new THREE.Shape(BOARD_OUTLINE.map(([x, y]) => new THREE.Vector2(x / PF.w, y / PF.l)));
  const geo = new THREE.ShapeGeometry(shape).scale(PF.w * MM, PF.l * MM, 1).translate((-PF.w / 2) * MM, (-PF.l / 2) * MM, 0).rotateX(-Math.PI / 2);
  const plane = mesh(geo, top, { cast: false });
  group.add(plane);
  group.add(mesh(extrude(BOARD_OUTLINE, -PF.thick - 0.05, PF.thick), M.wood, { cast: false }));
  return plane;
}

// The playfield's edge: a formed steel band, 1.6 mm sheet standing 28.6 mm, up the left side, round the arch's
// 130 mm and 150 mm corners and down the right; and the shooter lane's divider.
const BAND = { t: 1.6, h: 28.6 };
function buildRails(group, M) {
  const f = BAND.t / 2;
  const band = [
    [PF.rail - f, -2], [PF.rail - f, ARCH.left.cy],
    ...arcPoints(ARCH.left.cx, ARCH.left.cy, ARCH.left.r + f, 180, 90, 24).slice(1),
    ...arcPoints(ARCH.right.cx, ARCH.right.cy, ARCH.right.r + f, 90, 0, 28),
    [SHOOTER.laneRight + f, 105.8],
  ];
  group.add(mesh(wall(band, BAND.t, BAND.h), M.steel));
  guideFeet(group, M, band, 1);
  const divider = [[SHOOTER.laneLeft - f, SHOOTER.apronTop], [SHOOTER.laneLeft - f, SHOOTER.dividerTop]];
  group.add(mesh(wall(divider, BAND.t, BAND.h), M.steel));
}

// Feet bent out of a guide's bottom edge every `spacing` mm on the side the ball can't reach, each held by a screw.
function guideFeet(group, M, line, side, spacing = 120) {
  const tabs = [], screws = [];
  let carry = spacing / 2;
  for (let i = 1; i < line.length; i++) {
    const [x0, y0] = line[i - 1], [x1, y1] = line[i];
    const len = Math.hypot(x1 - x0, y1 - y0);
    if (!len) continue;
    const dx = (x1 - x0) / len, dy = (y1 - y0) / len;
    const nx = -dy * side, ny = dx * side;
    let d = carry;
    for (; d <= len; d += spacing) {
      const x = x0 + dx * d + nx * 4.6, y = y0 + dy * d + ny * 4.6;
      const angle = Math.atan2(dy, dx);
      tabs.push(new THREE.BoxGeometry(9 * MM, 1.2 * MM, 6 * MM).rotateY(angle).translate(...pf(x, y, 0.6).toArray()));
      screws.push(new THREE.CylinderGeometry(2.3 * MM, 2.3 * MM, 1.1 * MM, 12).translate(...pf(x + nx * 0.6, y + ny * 0.6, 1.75).toArray()));
    }
    carry = d - len;
  }
  if (tabs.length) group.add(mesh(mergeGeometries(tabs), M.steel, { cast: false }), mesh(mergeGeometries(screws), M.darkSteel, { cast: false }));
}

function buildGuides(group, M, handles) {
  for (const g of GUIDES) group.add(mesh(wall(g, BAND.t, BAND.h), M.steel));
  for (const [x, y] of STAR_POSTS) group.add(starPost(M, x, y));
  for (const [x, y] of RUBBER_POSTS) group.add(starPost(M, x, y));
  // The rebound rubber: one ring stretched round two star posts across the arch's corner.
  for (const [x, y] of REBOUND) group.add(starPost(M, x, y, { ring: false }));
  const band = densify(roundedHull(ccw(REBOUND), 7.13, 10), 4);
  group.add(mesh(tube(band.map(([x, y]) => [x, y, 13.5]), 2.38, { closed: true, tension: 0.1, radial: 8 }), M.rubber));
  // Return-lane rollovers.
  for (const [i, l] of RETURN_LANES.entries()) handles.rollovers.push(rollover(group, M, l.x, l.y, 'return' + i));
}

// A star post (03-8319): fluted plastic, 19 mm across and 27 mm tall, with a groove at ball height for its rubber
// ring, slid over a stud and capped with a nut.
const STAR = (() => {
  const pts = [];
  for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2, r = i % 2 ? 7.6 : 9.5; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
  return pts;
})();
let starParts;
function starPost(M, x, y, { ring = true } = {}) {
  if (!starParts) {
    const lower = extrudeLocal(STAR, 9, { bevel: 0.5, curveSegments: 1 });
    const upper = extrudeLocal(STAR, 9, { bevel: 0.5, curveSegments: 1 }).translate(0, 18 * MM, 0);
    const core = new THREE.CylinderGeometry(4.75 * MM, 4.75 * MM, 9 * MM, 16).translate(0, 13.5 * MM, 0);
    starParts = {
      body: mergeGeometries([lower, upper, core.toNonIndexed()]),
      ring: new THREE.TorusGeometry(7.13 * MM, 2.38 * MM, 10, 28).rotateX(Math.PI / 2).translate(0, 13.5 * MM, 0),
      nut: new THREE.CylinderGeometry(3.67 * MM, 3.67 * MM, 2.8 * MM, 6).translate(0, 28.4 * MM, 0),
    };
  }
  const g = new THREE.Group();
  g.add(mesh(starParts.body, M.postPlastic));
  if (ring) g.add(mesh(starParts.ring, M.rubber));
  g.add(mesh(starParts.nut, M.steel, { cast: false }));
  return place(g, x, y);
}

// A metal mini post (02-4036): 9.5 mm across and 30 mm tall.
function miniPost(M, x, y) {
  return place(mesh(lathe([[0, 0], [5.6, 0], [5.6, 1], [4.76, 1.8], [4.76, 28.6], [4.2, 30.16], [0, 30.16]], 20), M.steel), x, y);
}

// A narrow plastic post (03-9357) carrying a plastic: 9.5 mm across, with a spacer up to the plastic's underside.
function post(M, x, y, { height = 30 } = {}) {
  return place(mesh(lathe([[0, 0], [5.6, 0], [5.6, 1.4], [4.76, 2.2], [4.76, 9], [3.9, 10.5], [3.9, 16.5], [4.76, 18], [4.76, height], [0, height]], 20), M.postPlastic), x, y);
}

// A wire rollover switch: a bent wire in a dark slot whose ends dive to a microswitch under the board. The ball
// presses it flush as it rolls over.
const slotMaterial = new THREE.MeshBasicMaterial({ color: 0x050506 });
function rollover(group, M, x, y, insert) {
  const g = new THREE.Group();
  const slot = new THREE.Shape();
  const L = 44.45 / 2 - 2.38, r = 2.38;
  slot.absarc(0, L, r, 0, Math.PI, false);
  slot.absarc(0, -L, r, Math.PI, Math.PI * 2, false);
  const slotGeo = new THREE.ShapeGeometry(slot, 6).scale(MM, MM, MM).rotateX(-Math.PI / 2);
  const slotMesh = new THREE.Mesh(slotGeo, slotMaterial);
  slotMesh.position.y = 0.06 * MM;
  g.add(slotMesh);
  const pts = [[0, -21.2, -3], [0, -19.05, 0]];
  for (let k = 1; k < 12; k++) { const u = -1 + (2 * k) / 12; pts.push([0, u * 19.05, 6.35 * Math.sqrt(1 - u * u)]); }
  pts.push([0, 19.05, 0], [0, 21.2, -3]);
  const wire = mesh(tubeLocal(pts, 0.8, { tension: 0.2, radial: 8 }), M.chrome, { receive: false });
  g.add(wire);
  place(g, x, y);
  group.add(g);
  return { wire, x, y, insert, press: 0 };
}

// A slingshot: three posts with a rubber ring round them and a plastic on top. Under the long inboard face, a kicker
// arm rises through the board with a nylon tip resting against the rubber; two leaf switches sit behind it. When
// the ball hits the rubber the coil swings the arm out and the rubber snaps outward with it.
const SLING = { postR: 4.76, cord: 6.35, travel: 9 };

function buildSlings(group, M, art, handles) {
  const plasticTex = texture(art.plastic);
  const coverMat = new THREE.MeshPhysicalMaterial({ map: plasticTex, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 });
  const nylon = new THREE.MeshPhysicalMaterial({ color: 0xece8dc, roughness: 0.45, clearcoat: 0.2 });
  for (const sling of SLINGS) {
    const g = new THREE.Group();
    const posts = sling.posts;
    for (const [x, y] of posts) g.add(post(M, x, y, { height: 30.5 }));
    // The active face runs between the first two posts; its outward normal points away from the third.
    const [A, B, C] = posts;
    const len = Math.hypot(B[0] - A[0], B[1] - A[1]);
    const ux = (B[0] - A[0]) / len, uy = (B[1] - A[1]) / len;
    let nx = -uy, ny = ux;
    if ((C[0] - A[0]) * nx + (C[1] - A[1]) * ny > 0) { nx = -nx; ny = -ny; }
    const R = SLING.postR + SLING.cord / 2;
    const ring = densify(roundedHull(ccw(posts), R, 8), 3);
    const weight = ring.map(([x, y]) => {
      const t = ((x - A[0]) * ux + (y - A[1]) * uy) / len;
      const off = (x - A[0]) * nx + (y - A[1]) * ny;
      return off > R * 0.5 && t > 0 && t < 1 ? Math.sin(Math.PI * t) : 0;
    });
    const rubberGeo = push => tube(ring.map(([x, y], i) => [x + nx * push * weight[i], y + ny * push * weight[i], 13.5]), SLING.cord / 2, { closed: true, tension: 0.1, radial: 8, segments: ring.length * 2 });
    const rubber = mesh(rubberGeo(0), M.rubber);
    rubber.userData.action = 'sling-' + sling.side;
    handles.interactive.push(rubber);
    g.add(rubber);
    // The plastic on its posts, held by a washer and nut on each.
    const cover = roundedHull(ccw(posts), 12, 8);
    g.add(mesh(extrude(cover, 30.5, 2.2, { bevel: 0.4 }), coverMat));
    for (const [x, y] of posts) {
      g.add(place(mesh(new THREE.CylinderGeometry(3.5 * MM, 3.5 * MM, 0.55 * MM, 16).translate(0, 0.275 * MM, 0), M.steel), x, y, 32.7));
      g.add(place(mesh(new THREE.CylinderGeometry(3.67 * MM, 3.67 * MM, 2.8 * MM, 6).translate(0, 1.4 * MM, 0), M.steel), x, y, 33.25));
    }
    // Kicker arm: a steel stem through a slot in the wood, carrying a nylon tip that rests just behind the rubber.
    const angle = Math.atan2(uy, ux) / DEG;
    const out = Math.sign(-uy * nx + ux * ny); // which way local -Z points: +1 when it is the outward normal
    const tipZ = -out * (R - SLING.cord / 2 - 0.15 - 2);
    const mid = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    const arm = new THREE.Group();
    const tip = mesh(new THREE.BoxGeometry(18 * MM, 10 * MM, 4 * MM), nylon);
    tip.position.set(0, 13.5 * MM, tipZ * MM);
    arm.add(tip);
    arm.add(mesh(new THREE.BoxGeometry(7.5 * MM, 9 * MM, 1.5 * MM).translate(0, 4 * MM, (tipZ + out * 1.2) * MM), M.steel));
    place(arm, mid[0], mid[1], 0, angle);
    g.add(arm);
    const slot = new THREE.Mesh(new THREE.PlaneGeometry(10 * MM, 3 * MM).rotateX(-Math.PI / 2), slotMaterial);
    slot.position.set(0, 0.06 * MM, (tipZ + out * 1.2) * MM);
    const slotHolder = place(new THREE.Group(), mid[0], mid[1], 0, angle);
    slotHolder.add(slot);
    // Leaf switches either side of the kicker, their blades just behind the rubber.
    for (const s of [-1, 1]) {
      const blade = mesh(new THREE.BoxGeometry(7 * MM, 12 * MM, 0.35 * MM).translate(s * 26 * MM, 10 * MM, -out * (R - SLING.cord / 2 - 1.2) * MM), M.steel);
      const foot = mesh(new THREE.BoxGeometry(9 * MM, 5 * MM, 6 * MM).translate(s * 26 * MM, 2.5 * MM, -out * (R - SLING.cord / 2 - 5.5) * MM), M.graphitePlastic);
      slotHolder.add(blade, foot);
    }
    g.add(slotHolder);
    group.add(g);
    const push = new THREE.Vector3(nx * MM, 0, -ny * MM).multiplyScalar(SLING.travel + 0.15);
    handles.slings.push({ side: sling.side, rubber, rubberGeo, arm, rest: arm.position.clone(), push, kicked: -1, shown: 0 });
  }
}

// The bat outline: a base circle of radius R and a tip circle of radius r, `d` apart, joined by their outer tangents.
function batOutline(R, r, d = FLIPPER.length) {
  const phi = Math.asin((R - r) / d);
  const pts = [];
  const steps = 18;
  const b0 = Math.PI / 2 - phi, b1 = Math.PI * 1.5 + phi;
  for (let i = 0; i <= steps; i++) { const a = b0 + (b1 - b0) * (i / steps); pts.push([Math.cos(a) * R, Math.sin(a) * R]); }
  const t0 = -Math.PI / 2 + phi, t1 = Math.PI / 2 - phi;
  for (let i = 0; i <= steps; i++) { const a = t0 + (t1 - t0) * (i / steps); pts.push([d + Math.cos(a) * r, Math.sin(a) * r]); }
  return pts;
}

// A flipper bat: a bottom flange just off the wood, a groove carrying the rubber at ball height, and a top cap.
function buildFlippers(group, M, handles) {
  const F = FLIPPER;
  const band = F.rubberTo - F.rubberFrom;
  const flange = extrudeLocal(batOutline(...F.flange), F.rubberFrom - 0.6, { bevel: 0.5 });
  const core = extrudeLocal(batOutline(...F.groove), band);
  const rubber = extrudeLocal(batOutline(F.baseR - 2.6, F.tipR - 2.6), band, { bevel: 2.6 });
  const cap = extrudeLocal(batOutline(...F.cap), F.height - F.rubberTo, { bevel: 0.9 });
  for (const f of FLIPPERS) {
    const pivot = new THREE.Group();
    const parts = [[flange, M.whitePlastic, 0.6], [core, M.whitePlastic, F.rubberFrom], [rubber, M.rubberOrange, F.rubberFrom], [cap, M.whitePlastic, F.rubberTo]];
    for (const [geo, mat, h] of parts) {
      const m = mesh(geo, mat);
      m.position.y = h * MM;
      m.userData.action = 'flip-' + f.side;
      pivot.add(m);
      handles.interactive.push(m);
    }
    place(pivot, f.x, f.y, 0, f.rest);
    group.add(pivot);
    handles.flippers.push({ ...f, pivot, angle: f.rest, target: f.rest, velocity: 0 });
  }
}

// The apron (after Williams/Bally A-13204): formed 1.3 mm sheet. A flat deck 47.6 mm up, carried on walls under its
// shoulders, along the front and beside the shooter lane; the lip is open underneath, so the ball drains under it.
function buildApron(group, M, art, anisotropy) {
  const lipA0 = Math.atan2(APRON.lipEndY - APRON.lipCy, APRON.lipLeft[0] - PF.cx) / DEG;
  const lipA1 = Math.atan2(APRON.lipEndY - APRON.lipCy, APRON.lipRight[0] - PF.cx) / DEG;
  const lip = arcPoints(PF.cx, APRON.lipCy, APRON.lipR, lipA0, lipA1, 36);
  const outline = [[PF.rail, -4], [SHOOTER.laneLeft, -4], APRON.rightShoulder, ...[...lip].reverse(), APRON.leftShoulder];
  const T = 1.3, top = APRON.deck;
  const apronMat = new THREE.MeshPhysicalMaterial({ color: 0x1a1d20, roughness: 0.35, metalness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  // The deck's printed art: the top cap's UVs are its shape coordinates in metres, so the texture is fitted to them.
  const artTex = texture(art.apron, anisotropy);
  const x0 = (PF.rail - PF.w / 2) * MM, x1 = (SHOOTER.laneLeft - PF.w / 2) * MM;
  const y0 = (-4 - PF.l / 2) * MM, y1 = (APRON.rightShoulder[1] - PF.l / 2) * MM;
  artTex.repeat.set(1 / (x1 - x0), 1 / (y1 - y0));
  artTex.offset.set(-x0 / (x1 - x0), -y0 / (y1 - y0));
  const artMat = new THREE.MeshPhysicalMaterial({ map: artTex, roughness: 0.4, metalness: 0.2, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  group.add(mesh(extrude(ccw(outline), top - T, T, { bevel: 0.4 }), [artMat, apronMat]));
  const h = top - T, open = 155.5 / 2;
  const walls = [
    wall([APRON.leftShoulder, APRON.lipLeft], T, h), wall([APRON.lipRight, APRON.rightShoulder], T, h),
    wall([[SHOOTER.laneLeft - 0.65, -4], [SHOOTER.laneLeft - 0.65, APRON.rightShoulder[1]]], T, h),
    wall([[PF.rail + 0.65, -4], [PF.rail + 0.65, APRON.leftShoulder[1]]], T, 14, h - 14),
    wall([[PF.rail, -3.35], [PF.cx - open, -3.35]], T, h), wall([[PF.cx + open, -3.35], [SHOOTER.laneLeft, -3.35]], T, h),
    wall([[PF.cx - open, -3.35], [PF.cx + open, -3.35]], T, h - 38.1, 38.1),
  ];
  group.add(mesh(mergeGeometries(walls), apronMat));
  // In its shadow: the drain and the two guides that steer a ball into it.
  group.add(mesh(extrude(ccw(outline), 0.08, 0.1), M.cabinetInner, { cast: false }));
  group.add(mesh(mergeGeometries([wall([[167, 101], [128, 75]], 1.6, 20), wall([[307, 101], [232, 74]], 1.6, 20)]), M.steel));
  // The lip's rolled edge.
  const stripe = arcPoints(PF.cx, APRON.lipCy, APRON.lipR + 0.6, lipA0, lipA1, 36).map(([x, y]) => [x, y, top - 0.6]);
  group.add(mesh(tube(stripe, 0.8, { tension: 0 }), M.aluminium, { cast: false }));
  // Instruction cards in their windows, as on every machine since the 1970s.
  for (const [kind, cx] of [['instructions', PF.cx - 147.65], ['free', PF.cx + 147.65]]) {
    const tex = texture(art.cards[kind], anisotropy);
    const card = mesh(new THREE.PlaneGeometry(158.8 * MM, 88.9 * MM).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }), { cast: false });
    card.position.copy(pf(cx, 61.55, top + 0.3));
    group.add(card);
    const fx = 79.4 + 1.2, fy0 = 61.55 - 44.45 - 1.2, fy1 = 61.55 + 44.45 + 1.2;
    group.add(mesh(wall([[cx - fx, fy0], [cx + fx, fy0], [cx + fx, fy1], [cx - fx, fy1], [cx - fx, fy0]], 2.4, 1.2, top), M.aluminium, { cast: false }));
  }
}

// Top lanes: steel guides with a metal mini post at each end, and a rollover in each lane.
function buildTopLanes(group, M, handles) {
  for (const x of TOP_LANES.guides) {
    group.add(mesh(wall([[x, TOP_LANES.guideFrom], [x, TOP_LANES.guideTo]], BAND.t, BAND.h), M.steel));
    group.add(miniPost(M, x, TOP_LANES.guideFrom), miniPost(M, x, TOP_LANES.guideTo));
  }
  for (const [i, x] of TOP_LANES.centers.entries()) handles.rollovers.push(rollover(group, M, x, TOP_LANES.y, 'lane' + i));
}

// A pop bumper: a dark base, a plastic skirt the ball presses against, a lit body, the steel ring on its two rods,
// and the cap. When the skirt tilts it closes the switch, and the coil pulls the ring down onto the ball.
function buildPops(group, M, art, anisotropy, handles) {
  const base = lathe([[0, 0], [17, 0], [17, 2.7], [0, 2.7]], 40);
  const skirt = lathe([[11, 2.7], [23.15, 2.7], [23.4, 3.4], [23.15, 4.7], [22.2, 5.4], [11, 5.4]], 56);
  const body = lathe([[0, 5.4], [15.5, 5.4], [15.5, 31.6], [0, 31.6]], 40);
  const ringGeo = lathe([[15.8, -9], [16.8, -9], [16.8, 0], [22.6, 0], [23.2, 0.5], [23.2, 1.5], [22.6, 2], [15.8, 2], [15.8, -9]], 56);
  const rodGeo = new THREE.CylinderGeometry(1.6 * MM, 1.6 * MM, 42 * MM, 10).translate(0, -21 * MM, 0);
  // The cap: a chamfered top over a short rim, with a printed decal under its clear top. Lathe profiles run from the
  // axis at the bottom, out and up, so their normals face outward.
  const capGeo = lathe([[0, 31.6], [25, 31.6], [29.4, 32], [30, 33], [30, 36.5], [29.3, 37.8], [25.5, 41.6], [21, 43.1], [10, 43.45], [0, 43.5]], 72);
  const decal = new THREE.MeshStandardMaterial({ map: texture(art.popDecal, anisotropy), roughness: 0.3, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  const decalGeo = new THREE.CircleGeometry(20.5 * MM, 48).rotateX(-Math.PI / 2).translate(0, 43.56 * MM, 0);
  const socketGeo = new THREE.BoxGeometry(9 * MM, 6 * MM, 6 * MM).translate(0, 3 * MM, 0);
  const bulbGeo = lathe([[0, 6], [2.6, 6], [3.4, 7], [5, 10], [5, 18.5], [3.8, 21.5], [0, 22.4]], 20);
  for (const [i, p] of POPS.entries()) {
    const g = new THREE.Group();
    // Each part sits in its own holder, so the exploded view can lift it along the bumper's axis. `lift` is how far
    // it rises in the fully exploded view, in millimetres; the labels name the parts.
    const parts = [];
    const part = (label, lift, ...objects) => {
      const holder = new THREE.Group();
      holder.add(...objects);
      holder.userData = { label, lift };
      g.add(holder);
      parts.push(holder);
      return holder;
    };
    part('Base', 0, mesh(base, M.graphitePlastic));
    const skirtMesh = mesh(skirt, M.whitePlastic);
    part('Skirt', 26, skirtMesh);
    const bulbMat = M.bulb.clone();
    handles.bulbs.push(bulbMat);
    part('Lamp · #555', 56, mesh(socketGeo, M.darkSteel, { cast: false }), mesh(bulbGeo, bulbMat, { cast: false }));
    const bodyMat = M.popBody.clone();
    const bodyMesh = mesh(body, bodyMat);
    part('Body', 86, bodyMesh);
    const ring = new THREE.Group();
    ring.add(mesh(ringGeo, M.chrome));
    for (const s of [-1, 1]) ring.add(mesh(rodGeo, M.chrome).translateX(s * 19.5 * MM));
    ring.position.y = POP.ringRest * MM;
    part('Ring & rods', 128, ring);
    const capMat = M.popCap.clone();
    const cap = mesh(capGeo, capMat, { receive: false });
    part('Cap · Ø60', 172, cap);
    part('Decal', 206, mesh(decalGeo, decal, { cast: false }));
    // Two cap screws through the decal.
    const screws = [-1, 1].map(s => mesh(new THREE.CylinderGeometry(2.6 * MM, 2.6 * MM, 0.9 * MM, 16).translate(s * 17.46 * MM, 43.75 * MM, 0), M.chrome, { cast: false }));
    part('Cap screws ×2', 232, ...screws);
    place(g, p.x, p.y);
    group.add(g);
    g.traverse(o => { o.userData.action = 'pop-' + i; });
    handles.interactive.push(cap, bodyMesh, skirtMesh);
    handles.pops.push({ group: g, parts, ring, skirt: skirtMesh, cap, capMat, bodyMat, fired: -1, axis: new THREE.Vector3(1, 0, 0), x: p.x, y: p.y });
  }
}

function buildDrops(group, M, art, anisotropy, handles) {
  const span = DROPS.count * DROPS.pitch + 8;
  const plateTex = texture(art.bankPlate, anisotropy);
  const plateFace = new THREE.MeshStandardMaterial({ map: plateTex, roughness: 0.42, metalness: 0.5 });
  const plate = mesh(new THREE.BoxGeometry(span * MM, 40 * MM, 3 * MM), [M.darkSteel, M.darkSteel, M.darkSteel, M.darkSteel, plateFace, M.darkSteel]);
  plate.position.copy(pf(DROPS.cx, DROPS.y + 9, 20));
  group.add(plate);
  // Slots the targets drop into.
  const slotMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
  for (let i = 0; i < DROPS.count; i++) {
    const x = DROPS.cx + (i - (DROPS.count - 1) / 2) * DROPS.pitch;
    const slot = new THREE.Mesh(new THREE.PlaneGeometry((DROPS.width + 1.6) * MM, (DROPS.thick + 2) * MM).rotateX(-Math.PI / 2), slotMat);
    slot.position.copy(pf(x, DROPS.y, 0.15));
    group.add(slot);
    const tex = texture(art.targets[i], anisotropy);
    const face = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45 });
    const edge = M.whitePlastic;
    const target = mesh(new THREE.BoxGeometry(DROPS.width * MM, DROPS.height * MM, DROPS.thick * MM), [edge, edge, edge, edge, face, edge]);
    const holder = new THREE.Group();
    holder.position.copy(pf(x, DROPS.y, 0));
    target.position.y = (DROPS.height / 2) * MM;
    holder.add(target);
    group.add(holder);
    target.userData.action = 'drop-' + i;
    handles.interactive.push(target);
    handles.drops.push({ holder, target, index: i, x, state: 'up', since: -1 });
  }
}

// Ramps and wireforms. Each ramp is swept along its centre line with real thickness, stands on hex standoffs with
// tabs outside its walls, and hands the ball to a wireform at the top of its turn.
function buildRamps(group, M, handles) {
  handles.ramps = [];
  const rampMat = M.clearPlastic;
  for (const ramp of RAMPS) {
    const t = ramp.turn, dir = t.mirror ? -1 : 1;
    const turnPts = [];
    for (let k = 1; k <= 18; k++) {
      const a = (k / 18) * Math.PI;
      turnPts.push([t.cx + dir * Math.cos(a) * t.r, t.cy + Math.sin(a) * t.r, t.h0 + (t.h1 - t.h0) * (k / 18)]);
    }
    const centre = [...ramp.path, ...turnPts];
    const curve = new THREE.CatmullRomCurve3(centre.map(([x, y, h]) => pf(x, y, h)), false, 'centripetal');
    let turnStart = 0;
    for (let i = 1; i < ramp.path.length; i++) turnStart += Math.hypot(...ramp.path[i].map((v, k) => v - ramp.path[i - 1][k]));
    const outer = dir; // the turn's outer wall: right of travel on the left ramp, left of travel on the right
    const g = new THREE.Group();
    const body = mesh(sweepRamp(curve, turnStart, outer), rampMat, { cast: false, receive: false });
    body.renderOrder = 2;
    g.add(body);
    g.add(rampSupports(curve, turnStart, outer, M, rampMat));
    for (const child of g.children) child.traverse(o => { o.userData.action = 'ramp-' + ramp.id; });
    group.add(g);
    handles.interactive.push(body);

    // A flasher on the turn's outer wall, at the apex: it fires when the ramp is made.
    handles.flashers.push(flasher(group, M, curve, turnStart, outer, ramp.id));

    // The wireform carries on from the end of the turn.
    const wireCurve = new THREE.CatmullRomCurve3(ramp.wire.map(([x, y, h]) => pf(x, y, h)), false, 'centripetal');
    group.add(mesh(sweepWires(wireCurve), M.chrome));
    group.add(wireSupports(wireCurve, ramp, M));
    handles.ramps.push({ id: ramp.id, side: ramp.side, curve, wireCurve, group: g });
  }
}

// A flasher dome: a clear orange dome on a black base, clipped to the top of a ramp wall, with a lamp inside and a
// light that throws its flash onto the playfield.
function flasher(group, M, curve, turnStart, outer, id) {
  const L = curve.getLength() / MM, u = (turnStart + (L - turnStart) * 0.5) / L;
  const p = curve.getPointAt(u), tan = curve.getTangentAt(u).setY(0).normalize();
  const side = new THREE.Vector3().crossVectors(tan, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(outer);
  const g = new THREE.Group();
  g.position.copy(p).addScaledVector(side, (RAMP.width / 2 + RAMP.side + 9) * MM);
  g.position.y = p.y + (RAMP.outerWall - 4) * MM;
  g.add(mesh(new THREE.BoxGeometry(14 * MM, 2 * MM, 22 * MM).translate(0, -1 * MM, 6 * MM).applyMatrix4(new THREE.Matrix4().lookAt(new THREE.Vector3(), side, new THREE.Vector3(0, 1, 0))), M.darkSteel, { cast: false }));
  g.add(mesh(lathe([[0, 0], [15, 0], [15, 4], [13.5, 5], [0, 5]], 32), M.graphitePlastic, { cast: false }));
  const mat = new THREE.MeshPhysicalMaterial({ color: 0xff7a2a, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.04, emissive: 0xff5a10, emissiveIntensity: 0, transparent: true, opacity: 0.88 });
  mat.userData.gain = M.popCap.userData.gain * 2;
  g.add(mesh(lathe([[0, 5], [12.5, 5], [12.5, 9], [12, 14], [10, 19.5], [6.5, 23.5], [0, 25]], 32), mat, { cast: false }));
  const light = new THREE.PointLight(0xff8a3a, 0, 0.5, 2);
  light.position.y = 16 * MM;
  g.add(light);
  group.add(g);
  return { id, mat, light, level: 0 };
}

// The ramp's body: a 3 mm floor and 2.4 mm walls swept along its centre line. The channel is 42 mm, flared to a
// 52 mm mouth; the turn's outer wall stands taller; and low down, where the floor is under 30 mm, the walls carry on
// down to the wood so no ball can get under the floor.
function sweepRamp(curve, turnStart, outer) {
  const R = RAMP, L = curve.getLength() / MM, steps = 200;
  const up = new THREE.Vector3(0, 1, 0);
  const frames = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps, p = curve.getPointAt(u), tan = curve.getTangentAt(u);
    frames.push({ p, side: new THREE.Vector3().crossVectors(tan, up).normalize(), s: u * L, floor: p.y / MM });
  }
  const profile = ({ s, floor }) => {
    const w = R.width + (R.mouth - R.width) * Math.max(0, 1 - s / R.flare);
    const turn = THREE.MathUtils.smoothstep(s, turnStart - 40, turnStart + 30) * (R.outerWall - R.wall);
    const hr = R.wall + (outer > 0 ? turn : 0), hl = R.wall + (outer < 0 ? turn : 0);
    const a = w / 2, b = a + R.side, f = R.floor;
    const d = floor < 30 ? Math.max(0, floor - f) : 0;
    return [
      [[-b, -f], [b, -f], [b, hr], [a, hr], [a, 0], [-a, 0], [-a, hl], [-b, hl]],
      [[a, -f - d], [b, -f - d], [b, -f], [a, -f]],
      [[-b, -f - d], [-a, -f - d], [-a, -f], [-b, -f]],
    ];
  };
  const shapes = frames.map(profile);
  const geos = [];
  shapes[0].forEach((poly, pi) => {
    for (let k = 0; k < poly.length; k++) {
      const pos = [], idx = [];
      for (let i = 0; i <= steps; i++) {
        const fr = frames[i], P = shapes[i][pi];
        for (const [lat, vert] of [P[k], P[(k + 1) % P.length]]) {
          const v = fr.p.clone().addScaledVector(fr.side, lat * MM).addScaledVector(up, vert * MM);
          pos.push(v.x, v.y, v.z);
        }
        if (i < steps) { const o = i * 2; idx.push(o, o + 2, o + 1, o + 1, o + 2, o + 3); }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      geos.push(geo);
    }
  });
  // The entrance: a feathered metal flap lying on the wood in front of the mouth.
  const f0 = frames[0], tan0 = curve.getTangentAt(0);
  const flap = new THREE.BoxGeometry(R.mouth * MM, 0.8 * MM, 28 * MM);
  flap.applyMatrix4(new THREE.Matrix4().makeBasis(f0.side, up, tan0.clone().setY(0).normalize().negate()));
  flap.translate(f0.p.x - tan0.x * 12 * MM, 0.4 * MM, f0.p.z - tan0.z * 12 * MM);
  flap.deleteAttribute('uv');
  geos.push(flap);
  return mergeGeometries(geos.map(g => (g.index ? g.toNonIndexed() : g)));
}

// Hex standoffs (5/16 inch) standing 6.5 mm outside a wall, each carrying a printed tab out from the floor.
function rampSupports(curve, turnStart, outer, M, rampMat) {
  const L = curve.getLength() / MM, up = new THREE.Vector3(0, 1, 0);
  const turnLen = L - turnStart;
  const spots = [[230, 1], [230, -1], [turnStart + 30, outer], [turnStart + turnLen * 0.55, outer], [L - 12, outer]];
  const posts = [], tabs = [], screws = [];
  for (const [s, side] of spots) {
    const u = Math.min(1, s / L), p = curve.getPointAt(u), tan = curve.getTangentAt(u).setY(0).normalize();
    const sv = new THREE.Vector3().crossVectors(tan, up).normalize().multiplyScalar(side);
    const floor = p.y / MM;
    if (floor < 30) continue;
    const off = RAMP.width / 2 + RAMP.side + 6.5;
    const base = p.clone().addScaledVector(sv, off * MM);
    const h = floor - RAMP.floor - 1.5;
    posts.push(new THREE.CylinderGeometry(4.62 * MM, 4.62 * MM, h * MM, 6).translate(base.x, (h / 2) * MM, base.z));
    const tab = new THREE.BoxGeometry(18 * MM, 1.5 * MM, (off - RAMP.width / 2 + 5) * MM);
    tab.applyMatrix4(new THREE.Matrix4().makeBasis(tan, up, sv));
    const mid = p.clone().addScaledVector(sv, ((off + RAMP.width / 2) / 2 + 1.5) * MM);
    tab.translate(mid.x, (h + 0.75) * MM, mid.z);
    tabs.push(tab);
    screws.push(new THREE.CylinderGeometry(2.6 * MM, 2.6 * MM, 1.2 * MM, 12).translate(base.x, (h + 2.1) * MM, base.z));
  }
  const g = new THREE.Group();
  if (posts.length) {
    g.add(mesh(mergeGeometries(posts), M.zinc));
    const tabMesh = mesh(mergeGeometries(tabs), rampMat, { cast: false, receive: false });
    tabMesh.renderOrder = 2;
    g.add(tabMesh, mesh(mergeGeometries(screws), M.darkSteel, { cast: false }));
  }
  return g;
}

// A steel wireform of 1/8-inch rod: two bottom rails 22 mm apart that the ball rides, two side rails above them, and
// U-hoops passing under the bottom rails at most 50 mm apart. At the end the rails spread and a stop rail closes
// the form, so the ball drops through onto the inlane.
function sweepWires(curve) {
  const L = curve.getLength() / MM, steps = Math.ceil(L / 3);
  const up = new THREE.Vector3(0, 1, 0);
  const frame = u => {
    const p = curve.getPointAt(u), t = curve.getTangentAt(u);
    return { p, t, s: new THREE.Vector3().crossVectors(t, up).normalize() };
  };
  const at = (f, lat, vert, fwd = 0) => f.p.clone().addScaledVector(f.s, lat * MM).addScaledVector(up, vert * MM).addScaledVector(f.t, fwd * MM);
  const spread = s => THREE.MathUtils.smoothstep(s, L - 45, L - 6);
  const geos = [];
  const rod = (pts, r = WIRE.rod, segs) => geos.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), segs || pts.length * 2, r * MM, 8));
  const [ux, uy] = WIRE.upper;
  for (const [lat, vert, end] of [[-WIRE.rail, 0, 21], [WIRE.rail, 0, 21], [-ux, uy, 22], [ux, uy, 22]]) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const u = i / steps, sp = spread(u * L);
      pts.push(at(frame(u), Math.sign(lat) * (Math.abs(lat) + sp * (end - Math.abs(lat))), vert));
    }
    rod(pts, WIRE.rod, steps);
  }
  // The stop rail: a half hoop round the end, joining the side rails.
  const fe = frame(1), stop = [];
  for (let k = 0; k <= 14; k++) { const a = (k / 14) * Math.PI; stop.push(at(fe, -22 * Math.cos(a), uy - 6 * Math.sin(a), 16 * Math.sin(a))); }
  rod(stop);
  // Hoops.
  const hoop = [[-ux, uy], [-15.6, 8], [-13, -3], [-6.5, -6.6], [0, -7.2], [6.5, -6.6], [13, -3], [15.6, 8], [ux, uy]];
  for (let s = 22; s < L - 50; s += 48) { const f = frame(s / L); rod(hoop.map(([lat, vert]) => at(f, lat, vert)), 1.4, 24); }
  return mergeGeometries(geos);
}

// Wireform supports: hex posts inboard of the form with a strap up to it, and a bracket from the inlane's star post
// to the dead end.
function wireSupports(curve, ramp, M) {
  const posts = [], straps = [];
  const strap = (a, b, w = 6, t = 1.5) => {
    const d = b.clone().sub(a), len = d.length();
    const geo = new THREE.BoxGeometry(w * MM, t * MM, len);
    geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), d.normalize()));
    geo.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    straps.push(geo);
  };
  const near = (x, y) => {
    let best = 0, bd = Infinity;
    for (let i = 0; i <= 200; i++) { const p = curve.getPointAt(i / 200); const d = Math.hypot(p.x - pf(x, y).x, p.z - pf(x, y).z); if (d < bd) { bd = d; best = i / 200; } }
    return curve.getPointAt(best);
  };
  for (const [x, y] of ramp.supports) {
    const w = near(x, y);
    const top = w.y / MM - 9;
    const base = pf(x, y, top);
    posts.push(new THREE.CylinderGeometry(4.62 * MM, 4.62 * MM, top * MM, 6).translate(base.x, (top / 2) * MM, base.z));
    strap(base, w.clone().add(new THREE.Vector3(0, -7.6 * MM, 0)));
  }
  const end = curve.getPointAt(1);
  strap(pf(ramp.post[0], ramp.post[1], 30.2), end.clone().add(new THREE.Vector3(0, -6 * MM, 0)), 7, 2);
  const g = new THREE.Group();
  g.add(mesh(mergeGeometries(posts), M.zinc), mesh(mergeGeometries(straps), M.zinc));
  return g;
}

// The shooter lane's one-way gate: a wire flap hung from a rod across the lane's exit. A plunge swings it open; a
// ball coming down the right side meets its closed face and can't drop back into the lane.
function buildGate(group, M, handles) {
  const [ax, ay] = GATE.from, [bx, by] = GATE.to;
  const len = Math.hypot(bx - ax, by - ay), angle = Math.atan2(by - ay, bx - ax) / DEG;
  const g = place(new THREE.Group(), (ax + bx) / 2, (ay + by) / 2, 0, angle);
  const hinge = GATE.height - 3;
  for (const s of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(1.6 * MM, GATE.height * MM, 10 * MM).translate(s * (len / 2) * MM, (GATE.height / 2) * MM, 0), M.steel));
  g.add(mesh(new THREE.CylinderGeometry(1.2 * MM, 1.2 * MM, len * MM, 10).rotateZ(Math.PI / 2).translate(0, hinge * MM, 0), M.steel, { cast: false }));
  const L = len / 2 - 5, drop = hinge - 5;
  const flap = new THREE.Group();
  flap.add(mesh(tubeLocal([[-L, 0, 0], [-L, 0, -drop], [L, 0, -drop], [L, 0, 0]], 0.9, { tension: 0.02, radial: 6 }), M.chrome, { cast: false }));
  flap.add(mesh(tubeLocal([[-L, 0, -drop / 2], [L, 0, -drop / 2]], 0.7, { tension: 0, radial: 6 }), M.chrome, { cast: false }));
  flap.position.y = hinge * MM;
  g.add(flap);
  group.add(g);
  handles.gate = { flap, open: 0, velocity: 0, at: pf((ax + bx) / 2, (ay + by) / 2, BALL_R) };
}

function buildInserts(group, handles) {
  for (const ins of insertList()) {
    const mat = insertMaterial(ins.color);
    // Sanded flush with the wood: only a hair of the top stands above the board.
    const m = new THREE.Mesh(extrudeLocal(ins.shape, 0.4, { curveSegments: 6 }), mat);
    place(m, ins.x, ins.y, -0.34, ins.angle);
    m.renderOrder = 1;
    group.add(m);
    handles.inserts.set(ins.id, { mesh: m, mat, group: ins.group, index: ins.index, level: 0.06, goal: 0.06, flash: 0 });
  }
}

// The ball shooter (after Stern 500-6146-00): a 3/8-inch rod with a rubber tip, the power spring between the tip and
// the housing on the cabinet's front wall, and the knob outside. Pulling compresses the spring.
function buildShooter(group, M, handles) {
  const [bx, by] = SHOOTER.ballRest;
  const tipFace = by - BALL_R;
  const housingY = PF.l / 2 - (CABINET.front - CABINET.wallT) / MM; // inside face of the cabinet's front wall
  const plunger = new THREE.Group(); // origin at the tip's face; +Z runs toward the player
  plunger.add(mesh(lathe([[0, 0], [5.5, 0.4], [8.4, 1.8], [9.5, 4.5], [9.5, 25.4], [0, 25.4]], 24).rotateX(Math.PI / 2), M.rubber));
  plunger.add(mesh(new THREE.CylinderGeometry(4.76 * MM, 4.76 * MM, 194 * MM, 16).rotateX(Math.PI / 2).translate(0, 0, (6.4 + 97) * MM), M.chrome));
  const knob = mesh(lathe([[0, 0], [6, 0], [10.5, 5], [14.3, 16], [13.6, 30], [8, 33], [0, 33.5]], 28).rotateX(Math.PI / 2).translate(0, 0, 196 * MM), M.rubberOrange);
  plunger.add(knob);
  plunger.position.copy(pf(bx, tipFace, 10));
  group.add(plunger);
  for (const c of plunger.children) c.userData.action = 'plunger';
  handles.interactive.push(knob);
  // The power spring: anchored at the housing and squeezed as the tip comes back.
  const springLen = tipFace - 25.4 - housingY;
  const coils = 24, pts = [];
  for (let i = 0; i <= coils * 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * 5.55 * MM, Math.sin(a) * 5.55 * MM, -(i / (coils * 16)) * springLen * MM));
  }
  const spring = mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), coils * 16, 0.4 * MM, 5), M.steel);
  spring.position.copy(pf(bx, housingY, 10));
  group.add(spring);
  // The housing bracket on the wall.
  group.add(place(mesh(new THREE.BoxGeometry(28 * MM, 34 * MM, 5 * MM).translate(0, 10 * MM, -2.5 * MM), M.darkSteel), bx, housingY + 5, 0));
  handles.plunger = { group: plunger, spring, springLen, rest: plunger.position.clone(), pull: 0, offset: 0 };
}

function buildBalls(group, M, handles) {
  const geo = new THREE.SphereGeometry(BALL_R * MM, 40, 28);
  handles.ball = mesh(geo, M.ball);
  handles.ball.position.copy(pf(SHOOTER.ballRest[0], SHOOTER.ballRest[1], BALL_R));
  group.add(handles.ball);
  // A second ball rests in the shooter lane, ready to launch.
  handles.shooterBall = mesh(geo, M.ball);
  handles.shooterBall.position.copy(pf(SHOOTER.ballRest[0], SHOOTER.ballRest[1], BALL_R));
  group.add(handles.shooterBall);
}

// General illumination: #44-style bulbs (T-3¼ glass in a wedge socket) tucked under the slingshot plastics and beside
// posts, never in a lane, with a few point lights to carry their glow.
function buildGI(group, M, handles) {
  const spots = [[106, 300], [368.35, 300], [112, 332], [362.35, 332], [60, 1015], [110, 1040]];
  const glass = lathe([[0, 0], [3.2, 0], [4.6, 3], [5.1, 7], [5.1, 12], [4.2, 15.5], [2.4, 17], [0, 17.3]], 16);
  const socket = new THREE.CylinderGeometry(4.2 * MM, 4.6 * MM, 6 * MM, 12).translate(0, 3 * MM, 0);
  for (const [x, y] of spots) {
    const mat = M.bulb.clone();
    const bulb = new THREE.Group();
    bulb.add(mesh(socket, M.darkSteel));
    const g = new THREE.Mesh(glass, mat);
    g.position.y = 5 * MM;
    bulb.add(g);
    group.add(place(bulb, x, y));
    handles.bulbs.push(mat);
  }
  const lights = [[120, 330, 70, 0.9], [355, 330, 70, 0.9], [237, 620, 120, 1.1], [237, 900, 110, 1.0]];
  for (const [x, y, h, k] of lights) {
    const light = new THREE.PointLight(0xffd7a8, 0, 0.45, 2);
    light.position.copy(pf(x, y, h));
    light.userData.base = k * 0.02;
    group.add(light);
    handles.gi.push(light);
  }
}

// --- Cabinet ---------------------------------------------------------------------------------------------------

function buildCabinet(body, root, M, art, anisotropy, handles) {
  const C = CABINET;
  const len = C.front - C.back;
  const yMin = bottomAt(C.back), H = C.top - yMin;
  const outer = C.inner + C.wallT * 2;
  const sideTex = texture(art.cabinetSide, anisotropy);
  const sideArt = new THREE.MeshPhysicalMaterial({ map: sideTex, roughness: 0.4, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const sideArtFlip = sideArt.clone();
  sideArtFlip.map = sideTex.clone();
  sideArtFlip.map.wrapS = THREE.RepeatWrapping;
  sideArtFlip.map.repeat.x = -1;
  sideArtFlip.map.needsUpdate = true;
  // Each side panel is the wedge outline, built in UV space (0–1 over the side's bounding box) so its art maps on.
  const wedge = new THREE.Shape([[1, (C.top - yMin) / H], [0, (C.top - yMin) / H], [0, 0], [1, (C.bottom - yMin) / H]].map(([u, v]) => new THREE.Vector2(u, v)));
  const panel = (x, facing) => {
    const geo = new THREE.ShapeGeometry(wedge).applyMatrix4(new THREE.Matrix4().set(0, 0, 1, x, 0, H, 0, yMin, len, 0, 0, C.back, 0, 0, 0, 1));
    if (facing > 0) { geo.scale(-1, 1, 1); geo.translate(2 * x, 0, 0); }
    geo.computeVertexNormals();
    return geo;
  };
  for (const s of [-1, 1]) {
    const xo = s * (C.inner / 2 + C.wallT), xi = s * (C.inner / 2);
    body.add(mesh(panel(xo, s), s > 0 ? sideArtFlip : sideArt));
    body.add(mesh(panel(xi, -s), M.cabinetInner));
    // Side rail: brushed aluminium along the top.
    const rail = mesh(new THREE.BoxGeometry(C.wallT + 0.012, 0.012, len + 0.004), M.aluminium);
    rail.position.set(s * (C.inner / 2 + C.wallT / 2 - 0.002), C.top + 0.006, (C.front + C.back) / 2);
    body.add(rail);
  }
  const frontH = C.top - C.bottom - 0.04;
  const front = mesh(new THREE.BoxGeometry(outer, frontH, C.wallT), M.cabinet);
  front.position.set(0, C.bottom + frontH / 2, C.front - C.wallT / 2);
  body.add(front);
  const backH = C.top - yMin;
  const back = mesh(new THREE.BoxGeometry(outer, backH, C.wallT), M.cabinet);
  back.position.set(0, yMin + backH / 2, C.back + C.wallT / 2);
  body.add(back);
  const floor = mesh(new THREE.BoxGeometry(outer, C.wallT, len / Math.cos(PITCH)), M.cabinet);
  floor.rotation.x = -PITCH;
  floor.position.set(0, (C.bottom + yMin) / 2 + C.wallT / 2, (C.front + C.back) / 2);
  body.add(floor);
  // Lockdown bar.
  const bar = mesh(new RoundedBox(outer + 0.006, 0.026, 0.072, 0.006), M.trim);
  bar.position.set(0, C.top + 0.004, C.front - 0.03);
  body.add(bar);
  // Coin door and start button on the front.
  const doorY = C.bottom + frontH * 0.5;
  const door = mesh(new RoundedBox(0.25, 0.012, 0.28, 0.012), M.trim);
  door.rotation.x = Math.PI / 2;
  door.position.set(0, doorY - 0.02, C.front + 0.004);
  body.add(door);
  const inset = mesh(new THREE.BoxGeometry(0.21, 0.24, 0.004), M.darkSteel);
  inset.position.set(0, doorY - 0.02, C.front + 0.011);
  body.add(inset);
  for (const x of [-0.048, 0.048]) {
    const plate = mesh(new THREE.BoxGeometry(0.06, 0.085, 0.006), M.aluminium);
    plate.position.set(x, doorY + 0.045, C.front + 0.014);
    body.add(plate);
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.026, 0.002), new THREE.MeshBasicMaterial({ color: 0xff6a13 }));
    slot.position.set(x, doorY + 0.055, C.front + 0.0175);
    body.add(slot);
    const reject = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 16).rotateX(Math.PI / 2), M.trim);
    reject.position.set(x, doorY + 0.02, C.front + 0.018);
    body.add(reject);
  }
  const start = mesh(lathe([[0, 0], [15, 0], [15, 4], [13, 9], [0, 10]], 28).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xff6a13, emissive: 0xff6a13, emissiveIntensity: 0.5, roughness: 0.3 }));
  start.position.set(-0.205, C.top - 0.07, C.front);
  body.add(start);
  handles.startButton = start;

  // Legs: vertical in the world and all the same length, from the level bottom to the floor.
  body.updateMatrixWorld(true);
  for (const [x, z] of [[-1, C.front - 0.06], [1, C.front - 0.06], [-1, C.back + 0.06], [1, C.back + 0.06]]) {
    const corner = new THREE.Vector3(x * (outer / 2 - 0.035), bottomAt(z), z).applyMatrix4(body.matrixWorld);
    const h = corner.y - C.floor;
    const leg = new THREE.Group();
    leg.add(mesh(new THREE.BoxGeometry(0.06, h, 0.06), M.aluminium));
    leg.add(mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.02, 16).translate(0, -h / 2 - 0.01, 0), M.rubber));
    leg.position.set(corner.x, C.floor + h / 2 + 0.02, corner.z);
    root.add(leg);
  }
}

// RoundedBoxGeometry is small enough to keep here rather than pull in an add-on.
class RoundedBox extends THREE.BufferGeometry {
  constructor(w, h, d, r) {
    super();
    const geo = new THREE.BoxGeometry(w - 2 * r, h, d - 2 * r);
    const shape = new THREE.Shape();
    const hw = w / 2, hd = d / 2;
    shape.moveTo(-hw + r, -hd);
    shape.lineTo(hw - r, -hd); shape.quadraticCurveTo(hw, -hd, hw, -hd + r);
    shape.lineTo(hw, hd - r); shape.quadraticCurveTo(hw, hd, hw - r, hd);
    shape.lineTo(-hw + r, hd); shape.quadraticCurveTo(-hw, hd, -hw, hd - r);
    shape.lineTo(-hw, -hd + r); shape.quadraticCurveTo(-hw, -hd, -hw + r, -hd);
    const ex = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 6 });
    ex.rotateX(Math.PI / 2);
    ex.translate(0, h / 2, 0);
    geo.dispose();
    this.copy(ex);
  }
}

// --- Backbox ---------------------------------------------------------------------------------------------------

function buildBackbox(root, M, art, dmdCanvas, anisotropy, handles) {
  const B = BACKBOX;
  const box = new THREE.Group();
  // Stand the backbox on the cabinet's back end.
  handles.body.updateMatrixWorld(true);
  const seat = new THREE.Vector3(0, CABINET.top, CABINET.back + 0.02).applyMatrix4(handles.body.matrixWorld);
  box.position.set(0, seat.y + 0.004, seat.z + 0.02);
  root.add(box);
  handles.backbox = box;

  const shell = mesh(new THREE.BoxGeometry(B.w, B.h, B.d), M.cabinet);
  shell.position.set(0, B.h / 2, -B.d / 2);
  box.add(shell);
  // Aluminium trim round the front.
  const trim = new THREE.Shape();
  trim.moveTo(-B.w / 2, 0); trim.lineTo(B.w / 2, 0); trim.lineTo(B.w / 2, B.h); trim.lineTo(-B.w / 2, B.h); trim.lineTo(-B.w / 2, 0);
  const hole = new THREE.Path();
  const hx = B.w / 2 - 0.022;
  hole.moveTo(-hx, 0.018); hole.lineTo(-hx, B.h - 0.02); hole.lineTo(hx, B.h - 0.02); hole.lineTo(hx, 0.018); hole.lineTo(-hx, 0.018);
  trim.holes.push(hole);
  const frame = mesh(new THREE.ExtrudeGeometry(trim, { depth: 0.012, bevelEnabled: true, bevelSize: 0.002, bevelThickness: 0.002, bevelSegments: 2 }), M.trim);
  frame.position.z = -0.004;
  box.add(frame);
  // Speaker panel.
  const panelH = B.glassY - 0.03;
  const panel = mesh(new THREE.BoxGeometry(B.w - 0.044, panelH, 0.006), M.speaker);
  panel.position.set(0, 0.018 + panelH / 2, 0.001);
  box.add(panel);
  for (const s of [-1, 1]) {
    const grille = new THREE.Group();
    const rings = mesh(lathe([[0, 0], [48, 0], [52, 1.5], [55, 4], [0, 4]], 40).rotateX(Math.PI / 2), M.darkSteel);
    grille.add(rings);
    for (let r = 10; r <= 44; r += 8.5) {
      const t = new THREE.Mesh(new THREE.TorusGeometry(r * MM, 1.1 * MM, 6, 40), M.speaker);
      t.position.z = 4.2 * MM;
      grille.add(t);
    }
    grille.position.set(s * (B.dmdW / 2 + 0.072), B.dmdY, 0.004);
    box.add(grille);
  }
  // Dot-matrix display: the site's own DMD canvas as a live texture behind a dark bezel.
  const dmdTex = new THREE.CanvasTexture(dmdCanvas);
  dmdTex.colorSpace = THREE.SRGBColorSpace;
  dmdTex.anisotropy = anisotropy;
  const dmd = new THREE.Mesh(new THREE.PlaneGeometry(B.dmdW, B.dmdH), new THREE.MeshBasicMaterial({ map: dmdTex, toneMapped: false }));
  dmd.position.set(0, B.dmdY, 0.0052);
  dmd.userData.action = 'dmd';
  box.add(dmd);
  const bezel = mesh(new THREE.BoxGeometry(B.dmdW + 0.024, B.dmdH + 0.024, 0.004), M.cabinetInner);
  bezel.position.set(0, B.dmdY, 0.0025);
  box.add(bezel);
  handles.dmd = { mesh: dmd, texture: dmdTex };
  handles.interactive.push(dmd);

  // Backglass: backlit art behind glass.
  const glassTex = texture(art.backglass, anisotropy);
  const glassMat = new THREE.MeshBasicMaterial({ map: glassTex, toneMapped: false, color: new THREE.Color(0, 0, 0) });
  const glassY = B.glassY + B.glassH / 2;
  const backglass = new THREE.Mesh(new THREE.PlaneGeometry(B.glassW, B.glassH), glassMat);
  backglass.position.set(0, glassY, 0.002);
  box.add(backglass);
  const cover = new THREE.Mesh(new THREE.PlaneGeometry(B.glassW, B.glassH), M.glass);
  cover.position.set(0, glassY, 0.006);
  box.add(cover);
  handles.backglass = { mesh: backglass, material: glassMat, level: 0 };
  // Anchor for the hero copy laid over the glass.
  const anchor = new THREE.Object3D();
  anchor.position.set(0, glassY, 0.0065);
  box.add(anchor);
  handles.heroAnchor = anchor;
  handles.backglassSize = [B.glassW, B.glassH];
}

// --- Media plates ------------------------------------------------------------------------------------------------
// A screenshot or photo printed on a plate in an aluminium frame, on two chrome standoffs, like a ramp sign. It is
// hinged at its foot: `reveal` swings it up from lying flat on the playfield to standing, facing the camera.

export function buildPlate({ M, url, width, aspect, action, anisotropy }) {
  const height = width / aspect;
  const loader = new THREE.TextureLoader();
  const tex = loader.load(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  const group = new THREE.Group();
  const hinge = new THREE.Group();
  group.add(hinge);
  const lift = 0.028; // the plate stands on its standoffs this high above the wood
  hinge.position.y = lift;
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.35, metalness: 0, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.32 }),
  );
  face.position.set(0, height / 2 + 0.006, 0.0032);
  face.userData.action = action;
  hinge.add(face);
  const back = mesh(new THREE.BoxGeometry(width + 0.012, height + 0.012, 0.005), M.trim);
  back.position.set(0, height / 2 + 0.006, 0);
  back.userData.action = action;
  hinge.add(back);
  const edge = 0.0035;
  for (const [x, y, w, h] of [[0, height + 0.012 - edge / 2, width + 0.012, edge], [0, edge / 2, width + 0.012, edge], [-(width + 0.012) / 2 + edge / 2, height / 2 + 0.006, edge, height + 0.012], [(width + 0.012) / 2 - edge / 2, height / 2 + 0.006, edge, height + 0.012]]) {
    const bar = mesh(new THREE.BoxGeometry(w, h, 0.007), M.trim);
    bar.position.set(x, y, 0.001);
    hinge.add(bar);
  }
  // Standoffs from the wood to the plate's foot.
  for (const x of [-width * 0.32, width * 0.32]) {
    const post = mesh(new THREE.CylinderGeometry(0.0028, 0.0034, lift, 12), M.chrome);
    post.position.set(x, lift / 2, 0);
    group.add(post);
  }
  const plate = { group, hinge, face, reveal: 0, shown: -1, height };
  plate.setReveal = (r, tilt = 0) => {
    if (Math.abs(r - plate.shown) < 0.002) return;
    plate.shown = r;
    const e = 1 - Math.pow(1 - r, 3);
    hinge.rotation.x = -((1 - e) * (Math.PI / 2 - 0.05) + e * tilt); // flat on the wood → standing, leaning back
    group.visible = r > 0.003;
    group.scale.setScalar(0.85 + 0.15 * e);
  };
  plate.setReveal(0);
  return plate;
}
