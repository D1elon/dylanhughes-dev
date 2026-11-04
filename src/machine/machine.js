// Builds the machine: cabinet and legs, backbox with backglass and dot-matrix display, and the playfield with its
// parts. Returns handles for everything that moves or lights.
import * as THREE from 'three';
import {
  PF, BALL_R, FLIPPERS, batParts, SLINGS, APRON, DRAIN_GUIDES, SHOOTER, ARCH, INLANE_GUIDES, STAR_POSTS, GATE, TOP_LANES, POPS, POP,
  RAMPS, RAMP, WIRE, RETURN_LANES, ORBIT_GUIDES, ORBIT_WEDGES, ORBIT_POSTS, ORBIT_POST, ORBIT_ROLLOVERS, GI_SPOTS_UPPER,
  TARGETS, TARGET_GUIDES, TARGET_POSTS, TARGET_RUBBER, SAUCER,
} from './layout.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { MM, pf, extrude, extrudeLocal, place, lathe, tube, tubeLocal, densify, wall, roundedHull, ccw, arcPoints } from './geo.js';
import { insertMaterial, lacquer, glow, ROYAL, LIGHT, DEEP, LAMP_WHITE } from './materials.js';
import { insertList, rolloverInsert, drawInsertPrint } from './art.js';

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

// A printed plastic's top, its print fitted to the part: the caps' UVs are shape coordinates in metres, so the
// texture is scaled to the print's extent (`box`, playfield millimetres).
function printMaterial({ canvas, box }) {
  const tex = texture(canvas);
  const [u0, v0, u1, v1] = [(box[0] - PF.w / 2) * MM, (box[1] - PF.l / 2) * MM, (box[2] - PF.w / 2) * MM, (box[3] - PF.l / 2) * MM];
  tex.repeat.set(1 / (u1 - u0), 1 / (v1 - v0));
  tex.offset.set(-u0 / (u1 - u0), -v0 / (v1 - v0));
  return new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 });
}
// A plastic's cut edge catches the light inside it: royal blue, at about a seventh of a lamp's luminance.
let edgeLitMat;
const edgeLit = () => (edgeLitMat ||= new THREE.MeshStandardMaterial({ color: 0x0a1230, roughness: 0.3, emissive: ROYAL, emissiveIntensity: glow(ROYAL, 0.16) }));
const nylon = new THREE.MeshPhysicalMaterial({ color: 0xe8eaee, roughness: 0.45, clearcoat: 0.2 });

export function buildMachine({ M, art, dmdCanvas, anisotropy }) {
  const root = new THREE.Group();
  const body = new THREE.Group(); // the cabinet, tilted to the playfield's pitch
  body.rotation.x = PITCH;
  root.add(body);
  const playfield = new THREE.Group();
  body.add(playfield);
  const handles = { root, body, playfield, inserts: new Map(), pops: [], targets: [], flippers: [], slings: [], interactive: [], gi: [], bulbs: [], rollovers: [], flashers: [] };

  // Converts playfield millimetres to world coordinates.
  handles.toWorld = (x, y, h = 0) => {
    body.updateMatrixWorld(true);
    return pf(x, y, h).applyMatrix4(playfield.matrixWorld);
  };

  buildBoard(playfield, M, art, anisotropy);
  buildRails(playfield, M);
  buildGuides(playfield, M, art, handles);
  buildSlings(playfield, M, art, handles);
  buildFlippers(playfield, M, handles);
  buildApron(playfield, M, art, anisotropy);
  buildTopLanes(playfield, M, handles);
  buildSaucer(playfield, M, handles);
  buildPops(playfield, M, art, anisotropy, handles);
  buildTargets(playfield, M, art, anisotropy, handles);
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
// the cabinet's front wall, with the saucer's cup let into it.
const BOARD_OUTLINE = [[0, 0], [SHOOTER.laneLeft, 0], [SHOOTER.laneLeft, 105.8], [PF.w, 105.8], [PF.w, PF.l], [0, PF.l]];
const SAUCER_HOLE = Array.from({ length: 40 }, (_, i) => { const a = -(i / 40) * Math.PI * 2; return [SAUCER.x + Math.cos(a) * (SAUCER.r + 0.6), SAUCER.y + Math.sin(a) * (SAUCER.r + 0.6)]; });
function buildBoard(group, M, art, anisotropy) {
  const top = lacquer(texture(art.playfield, anisotropy));
  // Built in UV space (0–1 across the board) so the art maps straight on, then scaled to metres.
  const uv = ([x, y]) => new THREE.Vector2(x / PF.w, y / PF.l);
  const shape = new THREE.Shape(BOARD_OUTLINE.map(uv));
  shape.holes.push(new THREE.Path(SAUCER_HOLE.map(uv)));
  const geo = new THREE.ShapeGeometry(shape, 24).scale(PF.w * MM, PF.l * MM, 1).translate((-PF.w / 2) * MM, (-PF.l / 2) * MM, 0).rotateX(-Math.PI / 2);
  const plane = mesh(geo, top, { cast: false });
  group.add(plane);
  group.add(mesh(extrude(BOARD_OUTLINE, -PF.thick - 0.05, PF.thick, { holes: [SAUCER_HOLE] }), M.wood, { cast: false }));
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
  // The shooter lane's divider: a 6 mm bar, stopping short of the arch so the right orbit joins the lane.
  const t = SHOOTER.laneLeft - SHOOTER.dividerFace;
  const divider = [[SHOOTER.dividerFace + t / 2, SHOOTER.apronTop], [SHOOTER.dividerFace + t / 2, SHOOTER.dividerTop]];
  group.add(mesh(wall(divider, t, BAND.h), M.steel));
}

// Feet bent out of a guide's bottom edge every `spacing` mm on the side the ball can't reach, each held by a screw.
function guideFeet(group, M, line, side, spacing = 120) {
  const at = [];
  let carry = spacing / 2;
  for (let i = 1; i < line.length; i++) {
    const [x0, y0] = line[i - 1], [x1, y1] = line[i];
    const len = Math.hypot(x1 - x0, y1 - y0);
    if (!len) continue;
    let d = carry;
    for (; d <= len; d += spacing) at.push({ x: x0 + ((x1 - x0) * d) / len, y: y0 + ((y1 - y0) * d) / len, dx: (x1 - x0) / len, dy: (y1 - y0) / len, side });
    carry = d - len;
  }
  footMeshes(group, M, at);
}
// A formed guide's feet where the template mounts it: `at` (0–1 along its length) on `side` (1 left of its run).
function mountFeet(group, M, line, mounts) {
  const s = [0];
  for (let i = 1; i < line.length; i++) s.push(s[i - 1] + Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]));
  const at = mounts.filter(m => Number.isFinite(m.at)).map(m => {
    const d = m.at * s.at(-1);
    let i = 1;
    while (i < line.length - 1 && s[i] < d) i++;
    const a = line[i - 1], b = line[i], l = s[i] - s[i - 1] || 1, k = (d - s[i - 1]) / l;
    return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, dx: (b[0] - a[0]) / l, dy: (b[1] - a[1]) / l, side: m.side };
  });
  footMeshes(group, M, at);
}
function footMeshes(group, M, list) {
  const tabs = [], screws = [];
  for (const { x: px, y: py, dx, dy, side } of list) {
    const nx = -dy * side, ny = dx * side, x = px + nx * 4.6, y = py + ny * 4.6, angle = Math.atan2(dy, dx);
    tabs.push(new THREE.BoxGeometry(9 * MM, 1.2 * MM, 6 * MM).rotateY(angle).translate(...pf(x, y, 0.6).toArray()));
    screws.push(new THREE.CylinderGeometry(2.3 * MM, 2.3 * MM, 1.1 * MM, 12).translate(...pf(x + nx * 0.6, y + ny * 0.6, 1.75).toArray()));
  }
  if (tabs.length) group.add(mesh(mergeGeometries(tabs), M.steel, { cast: false }), mesh(mergeGeometries(screws), M.darkSteel, { cast: false }));
}

// The inlane guides, the orbits and the lower field's posts and rollovers.
function buildGuides(group, M, art, handles) {
  // Origin's return plastics: a 3 mm contact plate at the ball's equator and a 3 mm cover over it at 30.8 mm, each
  // printed like the sling covers with its cut edge lit, on two stacks of nylon spacers with an M4 screw through
  // them, the cover screwed to the top of the star post between the lanes.
  INLANE_GUIDES.forEach((g, i) => {
    const prints = art.inlane[i];
    group.add(mesh(extrude(ccw(g.plate.outline), g.plate.z, g.thickness, { bevel: 0.3 }), [printMaterial(prints.plate), edgeLit()]));
    group.add(mesh(extrude(ccw(g.cover.outline), g.cover.z, g.thickness, { bevel: 0.4 }), [printMaterial(prints.cover), edgeLit()]));
    const top = g.cover.z + g.thickness;
    for (const [x, y] of g.stacks) {
      group.add(place(mesh(new THREE.CylinderGeometry(4 * MM, 4 * MM, (g.plate.z - 0.8) * MM, 16).translate(0, ((g.plate.z - 0.8) / 2) * MM, 0), nylon), x, y));
      group.add(place(mesh(new THREE.CylinderGeometry(4 * MM, 4 * MM, 15 * MM, 16).translate(0, 7.5 * MM, 0), nylon), x, y, g.plate.z + g.thickness));
    }
    for (const [x, y] of [...g.stacks, g.post]) {
      group.add(place(mesh(new THREE.CylinderGeometry(4.5 * MM, 4.5 * MM, 0.8 * MM, 16).translate(0, 0.4 * MM, 0), M.steel, { cast: false }), x, y, top));
      group.add(place(mesh(lathe([[0, 0], [3.6, 0], [3.6, 1.2], [2.6, 2.6], [0, 2.8]], 16), M.darkSteel, { cast: false }), x, y, top + 0.8));
    }
    // A short spacer between the star post's nut and the cover.
    group.add(place(mesh(new THREE.CylinderGeometry(3.6 * MM, 3.6 * MM, (g.cover.z - 29.8) * MM, 6).translate(0, ((g.cover.z - 29.8) / 2) * MM, 0), M.steel, { cast: false }), ...g.post, 29.8));
  });
  for (const [x, y] of STAR_POSTS) group.add(starPost(M, x, y));
  // The orbits: Origin's formed steel inner guides up each side and the wedges that close the space behind each
  // throat's bend, each foot where the template mounts it. Each inner guide ends at an 11 mm rubber post at its
  // throat's mouth.
  group.add(mesh(mergeGeometries([...ORBIT_GUIDES, ...ORBIT_WEDGES].map(g => wall(g.line, BAND.t, BAND.h))), M.steel));
  for (const g of ORBIT_GUIDES) mountFeet(group, M, g.line, g.mounts);
  for (const [x, y] of ORBIT_POSTS) group.add(rubberPost(M, x, y, ORBIT_POST.d, ORBIT_POST.height));
  for (const [i, r] of ORBIT_ROLLOVERS.entries()) handles.rollovers.push(rollover(group, M, r.x, r.y, rolloverInsert('orbit' + i)));
  // Return-lane rollovers.
  for (const [i, l] of RETURN_LANES.entries()) handles.rollovers.push(rollover(group, M, l.x, l.y, rolloverInsert('return' + i)));
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

// A small post sleeved in rubber, `d` across at ball height, with a white cap: the orbit throats' mouth posts.
function rubberPost(M, x, y, d, height) {
  const g = new THREE.Group();
  const r = d / 2;
  g.add(mesh(lathe([[0, 0], [r - 0.6, 0], [r - 0.6, 6], [0, 6]], 20), M.postPlastic));
  g.add(mesh(lathe([[r - 2.4, 6], [r, 6.6], [r, 20.4], [r - 2.4, 21]], 24), M.rubber));
  g.add(mesh(lathe([[0, 6], [r - 2.4, 6], [r - 2.4, 21], [r - 0.6, 21], [r - 0.6, height - 1], [r - 1.6, height], [0, height]], 20), M.postPlastic));
  return place(g, x, y);
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
    g.add(mesh(extrude(cover, 30.5, 2.2, { bevel: 0.4 }), [printMaterial(art.plastics[SLINGS.indexOf(sling)]), edgeLit()]));
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
function batOutline(R, r, d) {
  const phi = Math.asin((R - r) / d);
  const pts = [];
  const steps = 18;
  const b0 = Math.PI / 2 - phi, b1 = Math.PI * 1.5 + phi;
  for (let i = 0; i <= steps; i++) { const a = b0 + (b1 - b0) * (i / steps); pts.push([Math.cos(a) * R, Math.sin(a) * R]); }
  const t0 = -Math.PI / 2 + phi, t1 = Math.PI / 2 - phi;
  for (let i = 0; i <= steps; i++) { const a = t0 + (t1 - t0) * (i / steps); pts.push([d + Math.cos(a) * r, Math.sin(a) * r]); }
  return pts;
}

// A flipper bat: a bottom flange just off the wood, a groove carrying the rubber at ball height, and a top cap, each
// sized to its own bat (Origin's 88.7 mm main bats and 61.7 mm upper bats). Each turns by its own id.
function buildFlippers(group, M, handles) {
  for (const f of FLIPPERS) {
    const P = batParts(f), band = P.rubberTo - P.rubberFrom, d = f.length;
    const flange = extrudeLocal(batOutline(...P.flange, d), P.rubberFrom - 0.6, { bevel: 0.5 });
    const core = extrudeLocal(batOutline(...P.groove, d), band);
    const rubber = extrudeLocal(batOutline(f.baseR - 2.6, f.tipR - 2.6, d), band, { bevel: 2.6 });
    const cap = extrudeLocal(batOutline(...P.cap, d), f.height - P.rubberTo, { bevel: 0.9 });
    const pivot = new THREE.Group();
    const parts = [[flange, M.whitePlastic, 0.6], [core, M.whitePlastic, P.rubberFrom], [rubber, M.rubberRoyal, P.rubberFrom], [cap, M.whitePlastic, P.rubberTo]];
    for (const [geo, mat, h] of parts) {
      const m = mesh(geo, mat);
      m.position.y = h * MM;
      m.userData.action = 'flip-' + f.side;
      pivot.add(m);
      handles.interactive.push(m);
    }
    // The shaft's nut on the cap.
    pivot.add(mesh(new THREE.CylinderGeometry(3.2 * MM, 3.2 * MM, 1 * MM, 6).translate(0, (f.height + 0.5) * MM, 0), M.steel, { cast: false }));
    place(pivot, f.x, f.y, 0, f.rest);
    group.add(pivot);
    handles.flippers.push({ ...f, pivot });
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
  const apronMat = new THREE.MeshPhysicalMaterial({ color: 0x14161a, roughness: 0.4, metalness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.1 });
  // The deck's printed art: the top cap's UVs are its shape coordinates in metres, so the texture is fitted to them.
  const artTex = texture(art.apron, anisotropy);
  const x0 = (PF.rail - PF.w / 2) * MM, x1 = (SHOOTER.laneLeft - PF.w / 2) * MM;
  const y0 = (-4 - PF.l / 2) * MM, y1 = (APRON.rightShoulder[1] - PF.l / 2) * MM;
  artTex.repeat.set(1 / (x1 - x0), 1 / (y1 - y0));
  artTex.offset.set(-x0 / (x1 - x0), -y0 / (y1 - y0));
  const artMat = new THREE.MeshPhysicalMaterial({ map: artTex, roughness: 0.55, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.1 });
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
  // In its shadow: the drain and Origin's two formed guides that steer a ball into it.
  group.add(mesh(extrude(ccw(outline), 0.08, 0.1), M.cabinetInner, { cast: false }));
  group.add(mesh(mergeGeometries(DRAIN_GUIDES.map(g => wall(g, 1.6, 20))), M.steel));
  // The lip's rolled edge.
  const stripe = arcPoints(PF.cx, APRON.lipCy, APRON.lipR + 0.6, lipA0, lipA1, 36).map(([x, y]) => [x, y, top - 0.6]);
  group.add(mesh(tube(stripe, 0.8, { tension: 0 }), M.aluminium, { cast: false }));
  // Instruction cards in their windows, as on every machine since the 1970s.
  for (const [kind, cx] of [['instructions', PF.cx - 147.65], ['free', PF.cx + 147.65]]) {
    const tex = texture(art.cards[kind], anisotropy);
    const card = mesh(new THREE.PlaneGeometry(158.8 * MM, 88.9 * MM).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }), { cast: false });
    card.position.copy(pf(cx, 61.55, top + 0.3));
    group.add(card);
    const fx = 79.4 + 1.2, fy0 = 61.55 - 44.45 - 1.2, fy1 = 61.55 + 44.45 + 1.2;
    group.add(mesh(wall([[cx - fx, fy0], [cx + fx, fy0], [cx + fx, fy1], [cx - fx, fy1], [cx - fx, fy0]], 2.4, 1.2, top), M.aluminium, { cast: false }));
  }
}

// Top lanes: six guides, each a 3/16-inch rubber ring round two narrow plastic posts, and a rollover in each lane.
function buildTopLanes(group, M, handles) {
  const rings = [];
  for (const r of TOP_LANES.rubbers) {
    for (const [x, y] of r.posts) group.add(post(M, x, y, { height: 26 }));
    const path = densify(roundedHull(ccw(r.posts), r.postR + r.cord / 2, 10), 3);
    rings.push(tube(path.map(([x, y]) => [x, y, r.h]), r.cord / 2, { closed: true, tension: 0.1, radial: 8, segments: path.length * 2 }));
  }
  group.add(mesh(mergeGeometries(rings), M.rubber));
  for (const [i, l] of TOP_LANES.lanes.entries()) handles.rollovers.push(rollover(group, M, l.x, l.y, rolloverInsert('lane' + i)));
}

// The saucer: a stamped steel cup let into the board, its flange on the wood held by two screws, with the kicker's
// slot at its back (opposite the way it kicks) and the kicker's finger in it, which swings out to eject the ball.
function buildSaucer(group, M, handles) {
  const { r } = SAUCER, g = new THREE.Group();
  const local = (dx, dy, h = 0) => new THREE.Vector3(dx * MM, h * MM, -dy * MM);
  // The cup's floor follows the ball 0.6 mm under it as it sits 5 mm down, then flares to the lip; outside it, the
  // flange. The profile runs out over the top and back in under it, so the sheet has a thickness.
  const dish = [];
  for (let k = 0; k <= 8; k++) { const x = (k / 8) * 10.5; dish.push([x, 8.5 - Math.sqrt(14.1 ** 2 - x * x)]); }
  const under = dish.map(([x, y]) => [x, y - 0.9]);
  const cup = lathe([...under, [r - 0.4, -0.9], [r, -0.1], [r + 4.4, 0.05], [r + 4.4, 0.85], [r + 3.8, 0.95], [r - 0.3, 0.95], [r - 1, 0.2], ...[...dish].reverse()], 48);
  g.add(mesh(cup, M.steel, { cast: false }));
  // The slot and the finger, at the back.
  const back = (SAUCER.kickAngle + 180) * DEG;
  const slot = new THREE.Mesh(new THREE.BoxGeometry(3.6 * MM, 0.2 * MM, 9 * MM), slotMaterial);
  slot.position.copy(local(Math.cos(back) * (r - 1), Math.sin(back) * (r - 1), 1.05));
  slot.rotation.y = back + Math.PI / 2;
  g.add(slot);
  const finger = new THREE.Group();
  finger.add(mesh(new THREE.BoxGeometry(2 * MM, 8 * MM, 6 * MM).translate(0, -3 * MM, 0), M.darkSteel, { cast: false }));
  finger.position.copy(local(Math.cos(back) * (r - 2), Math.sin(back) * (r - 2), 0));
  finger.rotation.y = back + Math.PI / 2;
  g.add(finger);
  // Two screws through the flange, either side of the slot.
  for (const s of [-1, 1]) {
    const a = back + s * (Math.PI / 2), screw = mesh(lathe([[0, 0], [2.7, 0], [2.7, 0.6], [1.8, 1.4], [0, 1.6]], 16), M.chrome, { cast: false });
    screw.position.copy(local(Math.cos(a) * (r + 2.2), Math.sin(a) * (r + 2.2), 0.95));
    g.add(screw);
  }
  place(g, SAUCER.x, SAUCER.y);
  group.add(g);
  handles.saucer = { group: g, finger, rest: finger.position.clone(), out: local(-Math.cos(back), -Math.sin(back)).normalize(), kicked: -1 };
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
    handles.pops.push({ group: g, parts, ring, skirt: skirtMesh, cap, capMat, bodyMat, fired: -1, axis: new THREE.Vector3(1, 0, 0), x: p.x, y: p.y, id: p.id });
  }
}

// The standup bank: three one-inch targets, each a printed face on a leaf switch in a dark housing that stands on a
// steel bracket, knocked back a little when hit. Behind them a rubber round three 18 mm posts, and Origin's steel
// guides from the bank up along each ramp's inner wall to the top lanes.
function buildTargets(group, M, art, anisotropy, handles) {
  const T = TARGETS, faceT = 2.4, front = -T.depth / 2;
  const faceMat = new THREE.MeshStandardMaterial({ map: texture(art.target, anisotropy), roughness: 0.42 });
  const edge = M.whitePlastic;
  for (const [i, t] of T.list.entries()) {
    const holder = new THREE.Group();
    const face = mesh(new THREE.BoxGeometry(T.width * MM, T.height * MM, faceT * MM), [edge, edge, edge, edge, faceMat, edge]);
    // BoxGeometry's +Z face (index 4) looks toward the player (-y on the playfield), where the ball comes from.
    face.position.set(0, (T.height / 2 + 1.5) * MM, -(front + faceT / 2) * MM);
    holder.add(face);
    holder.add(mesh(new THREE.BoxGeometry(18 * MM, 22 * MM, (T.depth - faceT) * MM).translate(0, 12.5 * MM, -(front + faceT + (T.depth - faceT) / 2) * MM), M.graphitePlastic));
    holder.add(mesh(new THREE.BoxGeometry(0.4 * MM, 24 * MM, 5 * MM).translate(-4 * MM, 14 * MM, -(T.depth / 2 + 1) * MM), M.steel, { cast: false }));
    place(holder, t.x, t.y);
    group.add(holder);
    group.add(place(mesh(new THREE.BoxGeometry(22 * MM, 1.5 * MM, (T.depth + 4) * MM).translate(0, 0.75 * MM, 0), M.darkSteel, { cast: false }), t.x, t.y + 1));
    face.userData.action = 'target-' + i;
    handles.interactive.push(face);
    handles.targets.push({ holder, face, rest: holder.position.clone(), back: new THREE.Vector3(0, 0, -MM), hit: -1, index: i });
  }
  // The posts the rubber wraps: 18 mm, grooved at the rubber's height.
  for (const [k, p] of TARGET_POSTS.entries()) {
    const r = p.d / 2, gr = TARGET_RUBBER.grooves[k], h = TARGET_RUBBER.h, c = TARGET_RUBBER.cord;
    group.add(place(mesh(lathe([[0, 0], [r, 0], [r, h - c / 2 - 1.5], [gr, h - c / 2 - 0.5], [gr, h + c / 2 + 0.5], [r, h + c / 2 + 1.5], [r, p.height - 1.2], [r - 1.2, p.height], [0, p.height]], 28), M.postPlastic), p.x, p.y));
    group.add(place(mesh(new THREE.CylinderGeometry(3.67 * MM, 3.67 * MM, 2.8 * MM, 6).translate(0, 1.4 * MM, 0), M.steel, { cast: false }), p.x, p.y, p.height));
  }
  const band = bandAround(TARGET_RUBBER.posts.map(([x, y], k) => ({ x, y, r: TARGET_RUBBER.grooves[k] + TARGET_RUBBER.cord / 2 })));
  group.add(mesh(tube(densify(band, 3).map(([x, y]) => [x, y, TARGET_RUBBER.h]), TARGET_RUBBER.cord / 2, { closed: true, tension: 0.1, radial: 8 }), M.rubber));
  group.add(mesh(mergeGeometries(TARGET_GUIDES.map(g => wall(g.line, g.thickness, BAND.h))), M.steel));
  for (const g of TARGET_GUIDES) mountFeet(group, M, g.line, g.mounts);
}
// The outline round circles of different sizes ([{ x, y, r }], convex, counter-clockwise): tangent runs between arcs.
function bandAround(circles) {
  const c = ccw(circles.map(k => [k.x, k.y])).map(([x, y]) => circles.find(k => k.x === x && k.y === y));
  const n = c.length, out = [];
  const tangent = (a, b) => { const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy); return Math.atan2(dy, dx) - Math.acos((a.r - b.r) / d); };
  for (let i = 0; i < n; i++) {
    const p = c[i], a0 = tangent(c[(i - 1 + n) % n], p), a1 = tangent(p, c[(i + 1) % n]);
    let sweep = a1 - a0;
    while (sweep < 0) sweep += Math.PI * 2;
    const steps = Math.max(2, Math.ceil(sweep / (8 * DEG)));
    for (let k = 0; k <= steps; k++) { const a = a0 + (sweep * k) / steps; out.push([p.x + Math.cos(a) * p.r, p.y + Math.sin(a) * p.r]); }
  }
  return out;
}

// Ramps and wireforms, on Origin's centre lines. Each ramp is swept along its profile with real thickness, flared to
// its mouth, stands on printed posts and hands the ball to a printed two-wire form at the top of its turn.
function buildRamps(group, M, handles) {
  handles.ramps = [];
  const rampMat = M.clearPlastic;
  for (const ramp of RAMPS) {
    const curve = new THREE.CatmullRomCurve3(ramp.profile.map(([x, y, h]) => pf(x, y, h)), false, 'centripetal');
    const width = widthAlong(ramp.profile);
    const g = new THREE.Group();
    const body = mesh(sweepRamp(curve, width), rampMat, { cast: false, receive: false });
    body.renderOrder = 2;
    g.add(body);
    g.add(rampSupports(ramp, M, rampMat));
    for (const child of g.children) child.traverse(o => { o.userData.action = 'ramp-' + ramp.id; });
    group.add(g);
    handles.interactive.push(body);

    // A flasher on the turn's outer wall, at its apex: it fires when the ramp is made.
    handles.flashers.push(flasher(group, M, curve, width, ramp));

    // The wireform carries on from the end of the turn.
    const wireCurve = new THREE.CatmullRomCurve3(ramp.wire.map(([x, y, h]) => pf(x, y, h)), false, 'centripetal');
    group.add(mesh(sweepWires(wireCurve, ramp), M.chrome));
    group.add(wireSupports(wireCurve, ramp, M));
    handles.ramps.push({ id: ramp.id, side: ramp.side, curve, wireCurve, group: g });
  }
}
// A profile's width at a fraction u of its 3D length (as a curve's getPointAt measures it).
function widthAlong(profile) {
  const s = [0];
  for (let i = 1; i < profile.length; i++) s.push(s[i - 1] + Math.hypot(...[0, 1, 2].map(k => profile[i][k] - profile[i - 1][k])));
  return u => {
    const d = u * s.at(-1);
    let i = 1;
    while (i < s.length - 1 && s[i] < d) i++;
    const k = Math.max(0, Math.min(1, (d - s[i - 1]) / (s[i] - s[i - 1] || 1)));
    return profile[i - 1][3] + (profile[i][3] - profile[i - 1][3]) * k;
  };
}
// Where a ramp turns hardest: the fraction along it, and which side of travel is the turn's outside (1 left, -1 right).
function apex(curve) {
  let best = 0, at = 0.5, side = 1;
  for (let i = 40; i <= 195; i++) {
    const u = i / 200, a = curve.getTangentAt(u - 0.01).setY(0).normalize(), b = curve.getTangentAt(u + 0.01).setY(0).normalize();
    const turn = a.x * b.z - a.z * b.x;
    if (Math.abs(turn) > best) { best = Math.abs(turn); at = u; side = turn > 0 ? 1 : -1; }
  }
  return { at, outer: side };
}

// A flasher dome: a clear royal-blue dome on a black base, clipped to the top of a ramp wall, with a lamp inside and a
// light that throws its flash onto the playfield.
function flasher(group, M, curve, width, ramp) {
  const { at: u, outer } = apex(curve);
  const p = curve.getPointAt(u), tan = curve.getTangentAt(u).setY(0).normalize();
  // In the playfield group's frame (Z toward the player), the left of travel is up × tangent.
  const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize().multiplyScalar(outer);
  const g = new THREE.Group();
  g.position.copy(p).addScaledVector(side, (width(u) / 2 + RAMP.side + 9) * MM);
  g.position.y = p.y + (RAMP.wall - 4) * MM;
  g.add(mesh(new THREE.BoxGeometry(14 * MM, 2 * MM, 22 * MM).translate(0, -1 * MM, 6 * MM).applyMatrix4(new THREE.Matrix4().lookAt(new THREE.Vector3(), side, new THREE.Vector3(0, 1, 0))), M.darkSteel, { cast: false }));
  g.add(mesh(lathe([[0, 0], [15, 0], [15, 4], [13.5, 5], [0, 5]], 32), M.graphitePlastic, { cast: false }));
  const mat = new THREE.MeshPhysicalMaterial({ color: ROYAL, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.04, emissive: ROYAL, emissiveIntensity: 0, transparent: true, opacity: 0.9 });
  mat.userData.gain = M.popCap.userData.gain * 2;
  g.add(mesh(lathe([[0, 5], [12.5, 5], [12.5, 9], [12, 14], [10, 19.5], [6.5, 23.5], [0, 25]], 32), mat, { cast: false }));
  const light = new THREE.PointLight(LIGHT, 0, 0.5, 2);
  light.position.y = 16 * MM;
  g.add(light);
  group.add(g);
  return { id: ramp.id, mat, light, level: 0 };
}

// The ramp's body: a 3 mm floor and 2.4 mm walls 28 mm tall, swept along its centre line. The channel follows the
// profile's width (52 mm at the mouth easing to 42 over 60 mm); low down, where the floor is under 30 mm, the walls
// carry on down to the wood so no ball can get under the floor.
function sweepRamp(curve, width) {
  const R = RAMP, steps = 240;
  const up = new THREE.Vector3(0, 1, 0);
  const frames = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps, p = curve.getPointAt(u), tan = curve.getTangentAt(u);
    frames.push({ p, side: new THREE.Vector3().crossVectors(tan, up).normalize(), w: width(u), floor: p.y / MM });
  }
  const profile = ({ w, floor }) => {
    const a = w / 2, b = a + R.side, f = R.floor, hr = R.wall, hl = R.wall;
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
  // The entrance: a feathered flap lying on the wood in front of the mouth.
  const f0 = frames[0], tan0 = curve.getTangentAt(0);
  const flap = new THREE.BoxGeometry((f0.w + 2 * R.side) * MM, 0.8 * MM, 26 * MM);
  flap.applyMatrix4(new THREE.Matrix4().makeBasis(f0.side, up, tan0.clone().setY(0).normalize().negate()));
  flap.translate(f0.p.x - tan0.x * 11 * MM, 0.4 * MM, f0.p.z - tan0.z * 11 * MM);
  flap.deleteAttribute('uv');
  geos.push(flap);
  return mergeGeometries(geos.map(g => (g.index ? g.toNonIndexed() : g)));
}

// The point of a centre line (playfield mm, [x, y, h, ...]) nearest (x, y) in plan, and the direction to it.
function nearest(line, x, y) {
  let best = line[0], bd = Infinity;
  for (const q of line) { const d = Math.hypot(q[0] - x, q[1] - y); if (d < bd) { bd = d; best = q; } }
  return { q: best, d: bd, dx: (best[0] - x) / (bd || 1), dy: (best[1] - y) / (bd || 1) };
}

// Origin's printed support posts (13 mm, on a foot screwed to the board), each under a printed ear on the ramp's
// side wall.
function rampSupports(ramp, M, rampMat) {
  const posts = [], ears = [], feet = [];
  for (const [x, y, z] of ramp.supports) {
    const top = z - RAMP.floor - 0.5, n = nearest(ramp.profile, x, y), angle = Math.atan2(n.dy, n.dx);
    posts.push(new THREE.CylinderGeometry(6.5 * MM, 6.5 * MM, top * MM, 20).translate(...pf(x, y, top / 2).toArray()));
    feet.push(new THREE.BoxGeometry(32 * MM, 4 * MM, 11 * MM).rotateY(angle + Math.PI / 2).translate(...pf(x, y, 2).toArray()));
    const len = n.d - n.q[3] / 2 + 1;
    ears.push(new THREE.BoxGeometry(len * MM, 3 * MM, 18 * MM).rotateY(angle).translate(...pf(x + (n.dx * len) / 2, y + (n.dy * len) / 2, top + 1.5).toArray()));
  }
  const g = new THREE.Group();
  if (posts.length) {
    g.add(mesh(mergeGeometries(posts), M.whitePlastic), mesh(mergeGeometries(feet), M.whitePlastic, { cast: false }));
    const earMesh = mesh(mergeGeometries(ears), rampMat, { cast: false, receive: false });
    earMesh.renderOrder = 2;
    g.add(earMesh);
  }
  return g;
}

// Origin's printed two-wire form: 5 mm rails ±11.2 mm either side of the path with their undersides on its height,
// U-hoops under them every 55 mm, a side rail round the outside of the turn, and at the end a rounded dead end: the
// rails spread over 40 mm into a U round the ball, a stop rail above it, and the ball drops through onto its inlane.
function sweepWires(curve, ramp) {
  const L = curve.getLength() / MM, steps = Math.ceil(L / 3);
  const up = new THREE.Vector3(0, 1, 0);
  const frame = u => {
    const p = curve.getPointAt(Math.min(1, Math.max(0, u))), t = curve.getTangentAt(Math.min(1, Math.max(0, u)));
    return { p, t, s: new THREE.Vector3().crossVectors(t, up).normalize() };
  };
  // `lat` is to the right of travel (crossVectors(t, up)); `vert` up from the path; `fwd` along it.
  const at = (f, lat, vert, fwd = 0) => f.p.clone().addScaledVector(f.s, lat * MM).addScaledVector(up, vert * MM).addScaledVector(f.t, fwd * MM);
  const W = WIRE, half = W.rail, r = W.rod, end = W.dropRadius, from = L - end - W.spread;
  const ease = u => { const t = Math.max(0, Math.min(1, u)); return t * t * (3 - 2 * t); };
  const geos = [];
  const rod = (pts, rr = r, segs) => geos.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), segs || pts.length * 2, rr * MM, 8));
  // Bottom rails, spreading into the U at the end.
  for (const s of [-1, 1]) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const d = (i / steps) * (L - end);
      pts.push(at(frame(d / L), s * (half + (end - half) * ease((d - from) / W.spread)), r));
    }
    rod(pts, r, steps);
  }
  const fe = frame((L - end) / L), u = [];
  for (let k = 0; k <= 16; k++) { const a = (k / 16) * Math.PI; u.push(at(fe, -end * Math.cos(a), r, end * Math.sin(a))); }
  rod(u);
  // The side rails (Origin's: the outside of the turn; side 1 is the left of travel), and the stop rail over the U.
  const { u: su, v: sv } = W.sideRail;
  for (const rail of ramp.sideRails) {
    const pts = [], n = Math.max(4, Math.ceil(((rail.to - rail.from) * L) / 3));
    for (let i = 0; i <= n; i++) pts.push(at(frame(rail.from + ((rail.to - rail.from) * i) / n), -rail.side * su, sv));
    rod(pts, r, n);
  }
  const stop = [];
  for (let k = 0; k <= 16; k++) { const a = (k / 16) * Math.PI; stop.push(at(fe, -(end + 1) * Math.cos(a), sv, (end + 1) * Math.sin(a))); }
  rod(stop);
  for (const s of [-1, 1]) rod([at(fe, s * (end + 1), r), at(fe, s * (end + 1), sv)], r, 4);
  // Hoops: a band under the rails, dipping clear of the ball between them and rising outside them.
  const hoop = [[-half - 4, r + 3], [-half - 2.5, -0.5], [-half + 1, -2.8], [0, -4.2], [half - 1, -2.8], [half + 2.5, -0.5], [half + 4, r + 3]];
  for (let s = 20; s < from; s += 55) { const f = frame(s / L); rod(hoop.map(([lat, vert]) => at(f, lat, vert)), 1.75, 24); }
  return mergeGeometries(geos);
}

// Wireform supports: Origin's printed posts, each up to an ear on the hoop above it.
function wireSupports(curve, ramp, M) {
  const posts = [], straps = [];
  const strap = (a, b, w = 7, t = 3) => {
    const d = b.clone().sub(a), len = d.length();
    const geo = new THREE.BoxGeometry(w * MM, t * MM, len);
    geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), d.normalize()));
    geo.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    straps.push(geo);
  };
  for (const [x, y, z] of ramp.wireSupports) {
    const n = nearest(ramp.wire, x, y), top = z - 6;
    posts.push(new THREE.CylinderGeometry(6.5 * MM, 6.5 * MM, top * MM, 20).translate(...pf(x, y, top / 2).toArray()));
    strap(pf(x, y, top + 1.5), pf(n.q[0] - n.dx * (WIRE.rail - 2), n.q[1] - n.dy * (WIRE.rail - 2), n.q[2] - 2.5));
  }
  const g = new THREE.Group();
  if (posts.length) g.add(mesh(mergeGeometries(posts), M.whitePlastic), mesh(mergeGeometries(straps), M.chrome));
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

// Every insert, as Origin shapes it: plastic sanded flush with the wood, lit from beneath. A lens with a legend or an
// icon carries it as ink on its underside: the print darkens the lens and masks its lamp.
function buildInserts(group, handles) {
  for (const ins of insertList()) {
    const mat = insertMaterial(ins.color);
    if (ins.legend || ins.icon) {
      const tex = texture(drawInsertPrint(ins, 192));
      // The cap's UVs are its shape coordinates in metres, centred on the insert.
      tex.repeat.set(1 / (ins.w * MM), 1 / (ins.l * MM));
      tex.offset.set(0.5, 0.5);
      mat.map = tex;
      mat.emissiveMap = tex;
    }
    // Sanded flush with the wood: only a hair of the top stands above the board.
    const m = new THREE.Mesh(extrudeLocal(ins.shape, 0.4, { curveSegments: 6 }), [mat, insertMaterial(ins.color)]);
    place(m, ins.x, ins.y, -0.34, ins.angle);
    m.renderOrder = 1;
    group.add(m);
    handles.inserts.set(ins.id, { mesh: m, mat, side: m.material[1], group: ins.group, index: ins.index, level: 0.06, goal: 0.06, flash: 0 });
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
  const knob = mesh(lathe([[0, 0], [6, 0], [10.5, 5], [14.3, 16], [13.6, 30], [8, 33], [0, 33.5]], 28).rotateX(Math.PI / 2).translate(0, 0, 196 * MM), M.rubberRoyal);
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
// posts, never in a lane, with a point light at bulb height for each group to carry their glow. Low, as real GI
// is, the lights pool round their bulbs, and their reflections in the clear coat sit under the plastics and against
// the rail, where the bulbs are, rather than as hot spots out on the open field.
function buildGI(group, M, handles) {
  const spots = [[106, 300], [368.35, 300], [112, 332], [362.35, 332], ...GI_SPOTS_UPPER];
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
  const lights = [[109, 316, 24, 0.9], [365.35, 316, 24, 0.9], ...GI_SPOTS_UPPER.map(([x, y]) => [x + (x < PF.cx ? 6 : -6), y, 20, 0.55])];
  for (const [x, y, h, k] of lights) {
    const light = new THREE.PointLight(LAMP_WHITE, 0, 0.4, 2);
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
    // The printed side stands a quarter of a millimetre proud of the wall, so it never shares a plane with the ends of
    // the front, back and floor.
    const xo = s * (C.inner / 2 + C.wallT + 0.00025), xi = s * (C.inner / 2);
    body.add(mesh(panel(xo, s), s > 0 ? sideArtFlip : sideArt));
    body.add(mesh(panel(xi, -s), M.cabinetInner));
    // Side rail: black anodised aluminium along the top.
    const rail = mesh(new THREE.BoxGeometry(C.wallT + 0.012, 0.012, len + 0.004), M.armour);
    rail.position.set(s * (C.inner / 2 + C.wallT / 2 - 0.002), C.top + 0.006, (C.front + C.back) / 2);
    body.add(rail);
  }
  const frontH = C.top - C.bottom - 0.04;
  const front = mesh(new THREE.BoxGeometry(outer, frontH, C.wallT), M.cabinet);
  front.position.set(0, C.bottom + frontH / 2, C.front - C.wallT / 2);
  body.add(front);
  // The sides' sweep carried across the front under the coin door, with its fine white line.
  const sweepH = (C.top - bottomAt(C.back)) * 0.08;
  const sweep = mesh(new THREE.PlaneGeometry(outer, sweepH), new THREE.MeshPhysicalMaterial({ color: DEEP, roughness: 0.42, clearcoat: 0.7, clearcoatRoughness: 0.2 }), { cast: false });
  sweep.position.set(0, C.bottom + sweepH / 2, C.front + 0.0004);
  body.add(sweep);
  const line = mesh(new THREE.PlaneGeometry(outer, 0.0045), new THREE.MeshStandardMaterial({ color: 0xf5f6f8, roughness: 0.4 }), { cast: false });
  line.position.set(0, C.bottom + sweepH + 0.017, C.front + 0.0004);
  body.add(line);
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
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.026, 0.002), new THREE.MeshBasicMaterial({ color: LIGHT }));
    slot.position.set(x, doorY + 0.055, C.front + 0.0175);
    body.add(slot);
    const reject = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 16).rotateX(Math.PI / 2), M.trim);
    reject.position.set(x, doorY + 0.02, C.front + 0.018);
    body.add(reject);
  }
  // The start button: royal-blue plastic lit from behind. Its gain keeps it at the luminance an orange one had.
  const startMat = new THREE.MeshPhysicalMaterial({ color: ROYAL, emissive: ROYAL, emissiveIntensity: 0.5, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05 });
  startMat.userData.gain = glow(ROYAL, 1) * 0.32;
  const start = mesh(lathe([[0, 0], [15, 0], [15, 4], [13, 9], [0, 10]], 28).rotateX(Math.PI / 2), startMat);
  start.position.set(-0.205, C.top - 0.07, C.front);
  body.add(start);
  handles.startButton = start;

  // Legs: vertical in the world and all the same length, from the level bottom to the floor.
  body.updateMatrixWorld(true);
  for (const [x, z] of [[-1, C.front - 0.06], [1, C.front - 0.06], [-1, C.back + 0.06], [1, C.back + 0.06]]) {
    const corner = new THREE.Vector3(x * (outer / 2 - 0.035), bottomAt(z), z).applyMatrix4(body.matrixWorld);
    const h = corner.y - C.floor;
    const leg = new THREE.Group();
    leg.add(mesh(new THREE.BoxGeometry(0.06, h, 0.06), M.armour));
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

// --- Back panel displays ------------------------------------------------------------------------------------------
// The back panel is the inside face of the cabinet's back wall, between the playfield's top edge and the backbox,
// behind every playfield part. Three LCDs are set into it: a case study's screen on each side, behind its ramp, and the
// portrait in the middle. Each sits in a thin black anodised bezel screwed to the panel at its corners, under its own
// cover glass. It is dark until its station arrives, then powers on: the backlight comes up and a scan line draws the
// picture in from the top. Leaving the station, it fades out.

// The panel's face, in playfield millimetres: `y` along the board, `top` above the wood (the cabinet's top edge), and
// its extent across.
export const BACK_PANEL = {
  y: Math.round((PF.l / 2 - (CABINET.back + CABINET.wallT) / MM) * 100) / 100,
  top: Math.round(CABINET.top / MM),
  x0: Math.round((PF.w / 2 - CABINET.inner / 2 / MM) * 100) / 100,
  x1: Math.round((PF.w / 2 + CABINET.inner / 2 / MM) * 100) / 100,
};
// An LCD module's build, in millimetres: the bezel's width round the picture, its depth off the panel and the
// softening on its edges, and the M3 button-head screws through its corners.
const LCD = { bezel: 4.5, depth: 4.2, bevel: 0.45, screw: 1.45 };

// `x`, `h`: the picture's middle, across the board and above the wood; `width`, `height`: the picture's size. The
// photo is cropped to fill it, held on `focus` (0–1 across and down the photo).
export function buildScreen({ M, url, x, h, width, height, action, anisotropy, focus = [0.5, 0.5] }) {
  const B = LCD, group = new THREE.Group();
  const W = width + B.bezel * 2, H = height + B.bezel * 2;
  // The picture: drawn into a canvas at the screen's own aspect, so its UVs run 0–1 over the glass.
  const res = Math.min(1024, Math.round(width * 10.5));
  const pic = document.createElement('canvas');
  pic.width = res; pic.height = Math.round((res * height) / width);
  const ctx = pic.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, pic.width, pic.height);
  const tex = new THREE.CanvasTexture(pic);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  const img = new Image();
  img.decoding = 'async';
  img.onload = () => {
    const k = Math.max(pic.width / img.naturalWidth, pic.height / img.naturalHeight), w = img.naturalWidth * k, hh = img.naturalHeight * k;
    ctx.drawImage(img, (pic.width - w) * focus[0], (pic.height - hh) * focus[1], w, hh);
    tex.needsUpdate = true;
  };
  img.src = url;
  // The power-on: `uSeq` runs 0 → 1 through it (backlight, then the scan), and `uFade` dims the whole picture.
  const uniforms = { uSeq: { value: 0 }, uFade: { value: 0 }, uRows: { value: pic.height / 3 } };
  const faceMat = new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(0.86, 0.86, 0.86), toneMapped: false });
  faceMat.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.fragmentShader = 'uniform float uSeq;\nuniform float uFade;\nuniform float uRows;\n' + shader.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
      {
        float back = smoothstep( 0.0, 0.2, uSeq );
        float scan = clamp( ( uSeq - 0.16 ) / 0.6, 0.0, 1.0 ) * 1.08;
        float down = 1.0 - vMapUv.y;
        float shown = smoothstep( down - 0.012, down + 0.012, scan );
        float line = exp( -pow( ( down - scan ) * 64.0, 2.0 ) ) * ( 1.0 - smoothstep( 0.92, 1.08, scan ) );
        vec3 col = mix( vec3( 0.006, 0.009, 0.02 ) * back, diffuseColor.rgb, shown );
        col += vec3( 0.36, 0.48, 1.0 ) * line * 0.75 * back;
        float rows = 0.86 + 0.14 * sin( vMapUv.y * uRows * 6.2832 );
        col *= mix( rows, 1.0, smoothstep( 0.72, 1.0, uSeq ) );
        diffuseColor.rgb = col * uFade;
      }`);
  };
  const face = new THREE.Mesh(new THREE.PlaneGeometry(width * MM, height * MM), faceMat);
  face.position.z = (B.depth - 0.9) * MM;
  face.userData.screenAction = action;
  group.add(face);
  // The black matrix round the picture, and the cover glass over it.
  const backing = new THREE.Mesh(new THREE.PlaneGeometry((width + 0.6) * MM, (height + 0.6) * MM), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  backing.position.z = (B.depth - 1.1) * MM;
  group.add(backing);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry((width + 0.4) * MM, (height + 0.4) * MM), M.screenGlass);
  glass.position.z = (B.depth - 0.45) * MM;
  group.add(glass);
  // The bezel: a frame with softened edges round the picture.
  const outline = (w, hgt, r) => { const s = new THREE.Shape(); s.moveTo(-w / 2 + r, -hgt / 2); s.lineTo(w / 2 - r, -hgt / 2); s.quadraticCurveTo(w / 2, -hgt / 2, w / 2, -hgt / 2 + r); s.lineTo(w / 2, hgt / 2 - r); s.quadraticCurveTo(w / 2, hgt / 2, w / 2 - r, hgt / 2); s.lineTo(-w / 2 + r, hgt / 2); s.quadraticCurveTo(-w / 2, hgt / 2, -w / 2, hgt / 2 - r); s.lineTo(-w / 2, -hgt / 2 + r); s.quadraticCurveTo(-w / 2, -hgt / 2, -w / 2 + r, -hgt / 2); return s; };
  const frame = outline(W, H, 1.8);
  frame.holes.push(outline(width + 0.2, height + 0.2, 0.4));
  const bezel = mesh(new THREE.ExtrudeGeometry(frame, { depth: B.depth - B.bevel * 2, bevelEnabled: true, bevelSize: B.bevel, bevelThickness: B.bevel, bevelSegments: 2, curveSegments: 4 }).translate(0, 0, B.bevel).scale(MM, MM, MM), M.trim, { cast: false });
  group.add(bezel);
  // A screw through each corner of the bezel, its head just proud of the face.
  const head = lathe([[0, 0], [B.screw, 0], [B.screw, 0.3], [B.screw * 0.7, 0.75], [0, 0.85]], 16).rotateX(Math.PI / 2);
  const screwGeo = [];
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) screwGeo.push(head.clone().translate(sx * (W / 2 - B.bezel / 2), sy * (H / 2 - B.bezel / 2), B.depth - 0.1));
  group.add(mesh(mergeGeometries(screwGeo).scale(MM, MM, MM), M.chrome, { cast: false }));
  // A power LED in the bezel's lower right corner.
  const ledMat = new THREE.MeshBasicMaterial({ color: 0x0a1430 });
  const led = new THREE.Mesh(new THREE.CircleGeometry(0.55 * MM, 12), ledMat);
  led.position.set((width / 2 - 6) * MM, -(height / 2 + B.bezel / 2) * MM, (B.depth + 0.02) * MM);
  group.add(led);
  group.position.copy(pf(x, BACK_PANEL.y, h));

  const lit = new THREE.Color(LIGHT), dim = new THREE.Color(0x0a1430);
  const screen = { group, face, action, seq: 0, fade: 0, on: false };
  // `on`: whether its station is here. `wall`: seconds since the last frame, unclamped, so the power-on takes the same
  // time however slowly frames come.
  screen.update = (wall, on, reduced = false) => {
    if (on) { screen.fade = 1; screen.seq = reduced ? 1 : Math.min(1, screen.seq + wall / 0.95); }
    else { screen.fade = reduced ? 0 : Math.max(0, screen.fade - wall / 0.3); if (screen.fade === 0) screen.seq = 0; }
    screen.on = on;
    uniforms.uSeq.value = screen.seq;
    uniforms.uFade.value = screen.fade;
    ledMat.color.copy(screen.fade > 0 ? lit : dim);
    // Clickable once it's showing something.
    face.userData.action = screen.seq > 0.4 && screen.fade > 0.5 ? action : null;
  };
  screen.update(0, false, true);
  return screen;
}
