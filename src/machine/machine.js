// Builds the machine: cabinet and legs, backbox with backglass and dot-matrix display, and the playfield with its
// parts. Returns handles for everything that moves or lights.
import * as THREE from 'three';
import {
  PF, BALL_R, FLIPPERS, FLIPPER, SLINGS, APRON, SHOOTER, ARCH, GUIDES, STAR_POSTS, TOP_LANES, POPS, POP, RAMPS,
  DROPS, RETURN_LANES, RUBBER_POSTS,
} from './layout.js';
import { MM, pf, extrude, extrudeLocal, place, lathe, tube, wall, roundedHull, ccw, arcPoints } from './geo.js';
import { insertMaterial } from './materials.js';
import { insertList } from './art.js';

const DEG = Math.PI / 180;
const PITCH = PF.pitch * DEG;

export const CABINET = {
  inner: (PF.w + 22) * MM,
  wallT: 0.019,
  front: 0.585,
  back: -0.565,
  top: 0.1,
  bottom: -0.42,
  floor: -0.93,
};
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
  const handles = { root, body, playfield, inserts: new Map(), pops: [], drops: [], flippers: [], slings: [], interactive: [], gi: [], lanes: [] };

  // Converts playfield millimetres to world coordinates.
  handles.toWorld = (x, y, h = 0) => {
    body.updateMatrixWorld(true);
    return pf(x, y, h).applyMatrix4(playfield.matrixWorld);
  };

  buildBoard(playfield, M, art, anisotropy);
  buildRails(playfield, M);
  buildGuides(playfield, M);
  buildSlings(playfield, M, art, handles);
  buildFlippers(playfield, M, handles);
  buildApron(playfield, M, art, anisotropy, handles);
  buildTopLanes(playfield, M, handles);
  buildPops(playfield, M, handles);
  buildDrops(playfield, M, art, anisotropy, handles);
  buildRamps(playfield, M, handles);
  buildInserts(playfield, handles);
  buildShooter(playfield, M, handles);
  buildBalls(playfield, M, handles);
  buildGI(playfield, M, handles);
  buildCabinet(body, root, M, art, anisotropy, handles);
  buildBackbox(root, M, art, dmdCanvas, anisotropy, handles);
  return handles;
}

// --- Playfield ----------------------------------------------------------------------------------------------------

function buildBoard(group, M, art, anisotropy) {
  const map = texture(art.playfield, anisotropy);
  const top = new THREE.MeshPhysicalMaterial({ map, roughness: 0.55, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.12, envMapIntensity: 0.5 });
  const plane = mesh(new THREE.PlaneGeometry(PF.w * MM, PF.l * MM).rotateX(-Math.PI / 2), top, { cast: false });
  group.add(plane);
  const edge = mesh(new THREE.BoxGeometry(PF.w * MM, PF.thick * MM, PF.l * MM), M.wood, { cast: false });
  edge.position.y = (-PF.thick / 2 - 0.05) * MM;
  group.add(edge);
}

function buildRails(group, M) {
  const r = PF.rail / 2;
  const left = [[r, -2], [r, ARCH.left.cy]];
  const arcL = arcPoints(ARCH.left.cx, ARCH.left.cy, ARCH.left.r + r, 180, 90, 18).slice(1);
  const arcR = arcPoints(ARCH.right.cx, ARCH.right.cy, ARCH.right.r + r, 90, 0, 18);
  const right = [[SHOOTER.laneRight + r, ARCH.right.cy], [SHOOTER.laneRight + r, -2]];
  const outline = [...left, ...arcL, ...arcR, ...right.slice(1)];
  group.add(mesh(wall(outline, PF.rail, 30), M.steel));
  // Top edge bead along the rails for a finished look.
  group.add(mesh(tube(outline.map(([x, y]) => [x, y, 30]), 1.6, { tension: 0 }), M.aluminium));
  // Shooter lane divider.
  group.add(mesh(wall([[SHOOTER.laneLeft - 3, SHOOTER.apronTop], [SHOOTER.laneLeft - 3, SHOOTER.dividerTop]], PF.rail, 28), M.steel));
}

function buildGuides(group, M) {
  for (const g of GUIDES) group.add(mesh(wall(g, 1.6, 28.6), M.steel));
  for (const [x, y] of STAR_POSTS) group.add(post(M, x, y));
  for (const [x, y] of RUBBER_POSTS) group.add(post(M, x, y));
  // Return-lane rollovers: a bent wire in each lane.
  for (const l of RETURN_LANES) {
    group.add(mesh(tube([[l.x, l.y - 14, -1], [l.x, l.y - 10, 5], [l.x, l.y + 10, 5], [l.x, l.y + 14, -1]], 0.9, { tension: 0.3 }), M.chrome));
  }
}

// A rubber post: a plastic post with a rubber ring at ball height.
function post(M, x, y, { ring = true, height = 27 } = {}) {
  const g = new THREE.Group();
  g.add(mesh(lathe([[0, 0], [5.2, 0], [5.2, 2], [4.2, 3], [4.2, 9], [3.2, 11.5], [3.2, 15.5], [4.4, 18], [4.4, height - 2], [3.6, height], [0, height]], 20), M.postPlastic));
  if (ring) {
    const torus = mesh(new THREE.TorusGeometry(6.2 * MM, 2.6 * MM, 10, 24), M.rubber);
    torus.rotation.x = Math.PI / 2;
    torus.position.y = 13.5 * MM;
    g.add(torus);
  }
  g.add(mesh(new THREE.CylinderGeometry(2.4 * MM, 2.4 * MM, 1.5 * MM, 12).translate(0, (height + 0.75) * MM, 0), M.chrome));
  return place(g, x, y);
}

function buildSlings(group, M, art, handles) {
  const plasticTex = texture(art.plastic);
  for (const sling of SLINGS) {
    const g = new THREE.Group();
    for (const [x, y] of sling.posts) g.add(post(M, x, y, { ring: false, height: 30 }));
    // The rubber stretched round its three posts.
    const hull = roundedHull(ccw(sling.posts), 4.8 + 3.2, 6);
    const rubber = mesh(tube(hull.map(([x, y]) => [x, y, 13.5]), 3.2, { closed: true, tension: 0.1, radial: 8 }), M.rubber);
    g.add(rubber);
    // The plastic cover on its spacers.
    const cover = roundedHull(ccw(sling.posts), 12, 8);
    const coverMat = new THREE.MeshPhysicalMaterial({ map: plasticTex, roughness: 0.3, clearcoat: 1, transparent: true, opacity: 0.94 });
    const plastic = mesh(extrude(cover, 30.5, 2.2, { bevel: 0.4 }), coverMat);
    g.add(plastic);
    // The kicker behind the active (long inboard) face.
    const [a, b] = sling.posts;
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const nx = -Math.sin(ang), ny = Math.cos(ang);
    const toward = sling.side === 'left' ? -1 : 1;
    const kicker = new THREE.Group();
    kicker.add(mesh(new THREE.BoxGeometry(46 * MM, 7 * MM, 3 * MM), M.steel));
    place(kicker, mid[0] + nx * 6 * toward, mid[1] + ny * 6 * toward, 13.5, -ang / DEG + 0);
    kicker.rotation.y = ang;
    g.add(kicker);
    handles.slings.push({ side: sling.side, rubber, kicker, rest: kicker.position.clone(), push: new THREE.Vector3(nx * toward, 0, -ny * toward).multiplyScalar(-6 * MM), kick: 0 });
    group.add(g);
  }
}

// The bat outline: a base circle and a tip circle joined by their outer tangents.
function batOutline(grow = 0) {
  const R = FLIPPER.baseR + grow, r = FLIPPER.tipR + grow, d = FLIPPER.length;
  const phi = Math.asin((R - r) / d);
  const pts = [];
  const steps = 18;
  const b0 = Math.PI / 2 - phi, b1 = Math.PI * 1.5 + phi;
  for (let i = 0; i <= steps; i++) { const a = b0 + (b1 - b0) * (i / steps); pts.push([Math.cos(a) * R, Math.sin(a) * R]); }
  const t0 = -Math.PI / 2 + phi, t1 = Math.PI / 2 - phi;
  for (let i = 0; i <= steps; i++) { const a = t0 + (t1 - t0) * (i / steps); pts.push([d + Math.cos(a) * r, Math.sin(a) * r]); }
  return pts;
}

function buildFlippers(group, M, handles) {
  const bat = extrudeLocal(batOutline(-1.2), 19, { bevel: 1.2 });
  const rubber = extrudeLocal(batOutline(0.6), 7, { bevel: 0.6 });
  for (const f of FLIPPERS) {
    const pivot = new THREE.Group();
    const b = mesh(bat, M.whitePlastic);
    b.position.y = 2 * MM;
    pivot.add(b);
    const r = mesh(rubber, M.rubberOrange);
    r.position.y = 8 * MM;
    pivot.add(r);
    pivot.add(mesh(new THREE.CylinderGeometry(5 * MM, 5 * MM, 2 * MM, 20).translate(0, 22 * MM, 0), M.chrome));
    place(pivot, f.x, f.y, 0, f.rest);
    group.add(pivot);
    for (const child of pivot.children) child.userData.action = 'flip-' + f.side;
    handles.flippers.push({ ...f, pivot, angle: f.rest, target: f.rest, velocity: 0 });
    handles.interactive.push(b, r);
  }
}

function buildApron(group, M, art, anisotropy, handles) {
  // Deck outline: front edge, shoulders and the lip arc between the flippers.
  const lipA0 = Math.atan2(APRON.lipEndY - APRON.lipCy, APRON.lipLeft[0] - PF.cx) / DEG;
  const lipA1 = Math.atan2(APRON.lipEndY - APRON.lipCy, APRON.lipRight[0] - PF.cx) / DEG;
  const lip = arcPoints(PF.cx, APRON.lipCy, APRON.lipR, lipA0, lipA1, 36);
  const outline = [[PF.rail, -4], [SHOOTER.laneLeft, -4], APRON.rightShoulder, ...lip.reverse(), APRON.leftShoulder];
  const apronMat = new THREE.MeshPhysicalMaterial({ color: 0x1a1d20, roughness: 0.35, metalness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  // The deck's printed art: the top cap's UVs are its shape coordinates in metres, so the texture is fitted to them.
  const artTex = texture(art.apron, anisotropy);
  const x0 = (PF.rail - PF.w / 2) * MM, x1 = (SHOOTER.laneLeft - PF.w / 2) * MM;
  const y0 = (-4 - PF.l / 2) * MM, y1 = (APRON.rightShoulder[1] - PF.l / 2) * MM;
  artTex.repeat.set(1 / (x1 - x0), 1 / (y1 - y0));
  artTex.offset.set(-x0 / (x1 - x0), -y0 / (y1 - y0));
  const artMat = new THREE.MeshPhysicalMaterial({ map: artTex, roughness: 0.4, metalness: 0.2, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  group.add(mesh(extrude(ccw(outline), 0, APRON.deck, { bevel: 1.5 }), [artMat, apronMat]));
  // An aluminium stripe along the lip.
  const stripe = arcPoints(PF.cx, APRON.lipCy, APRON.lipR + 1.6, lipA0, lipA1, 36).map(([x, y]) => [x, y, APRON.deck + 0.2]);
  group.add(mesh(tube(stripe, 1.4, { tension: 0 }), M.aluminium));
  // Instruction cards, as on every machine since the 1970s.
  for (const [kind, cx] of [['instructions', 88], ['free', 2 * PF.cx - 88]]) {
    const tex = texture(art.cards[kind], anisotropy);
    const card = mesh(new THREE.PlaneGeometry(159 * MM, 89 * MM).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }), { cast: false });
    card.position.copy(pf(cx, 56, APRON.deck + 0.3));
    group.add(card);
    const frame = mesh(wall([[cx - 81, 10], [cx + 81, 10], [cx + 81, 102], [cx - 81, 102], [cx - 81, 10]], 2.4, 1.2, APRON.deck), M.aluminium);
    group.add(frame);
  }
}

function buildTopLanes(group, M, handles) {
  for (const x of TOP_LANES.guides) {
    group.add(mesh(wall([[x, TOP_LANES.guideFrom], [x, TOP_LANES.guideTo]], 1.6, 26), M.steel));
    group.add(post(M, x, TOP_LANES.guideFrom));
    // A plastic cap along the top of each guide, its front edge printed orange.
    const cap = [[x - 4.5, TOP_LANES.guideFrom + 4], [x + 4.5, TOP_LANES.guideFrom + 4], [x + 4.5, TOP_LANES.guideTo + 2], [x - 4.5, TOP_LANES.guideTo + 2]];
    group.add(mesh(extrude(cap, 27.5, 2, { bevel: 0.5 }), M.graphitePlastic));
    group.add(mesh(extrude([[x - 4.5, TOP_LANES.guideFrom + 4], [x + 4.5, TOP_LANES.guideFrom + 4], [x + 4.5, TOP_LANES.guideFrom + 9], [x - 4.5, TOP_LANES.guideFrom + 9]], 29.6, 0.3), M.rubberOrange));
  }
  // Rollover wires.
  for (const x of TOP_LANES.centers) {
    const y = TOP_LANES.y;
    const w = mesh(tube([[x, y - 14, -1], [x, y - 10, 5], [x, y + 10, 5], [x, y + 14, -1]], 0.9, { tension: 0.3 }), M.chrome);
    group.add(w);
    handles.lanes.push(w);
  }
}

function buildPops(group, M, handles) {
  for (const [i, p] of POPS.entries()) {
    const g = new THREE.Group();
    g.add(mesh(lathe([[0, 0], [30.5, 0], [30.5, 1.5], [29, 3], [0, 3]], 40), M.graphitePlastic));
    const skirt = mesh(lathe([[24, 3], [31, 3.5], [31, 5.4], [24, 5.6]], 40), M.darkSteel);
    g.add(skirt);
    g.add(mesh(lathe([[0, 4], [21.5, 4], [21.5, 7], [19.6, 9], [19.2, 30], [20.6, 33], [0, 33]], 40), M.popBody));
    const ring = new THREE.Group();
    const torus = mesh(new THREE.TorusGeometry(23.5 * MM, 1.8 * MM, 10, 40), M.chrome);
    torus.rotation.x = Math.PI / 2;
    ring.add(torus);
    for (const s of [-1, 1]) ring.add(mesh(new THREE.CylinderGeometry(1.4 * MM, 1.4 * MM, 26 * MM, 8).translate(s * 23.5 * MM, -13 * MM, 0), M.chrome));
    ring.position.y = 27 * MM;
    g.add(ring);
    const capMat = M.popCap.clone();
    const cap = mesh(lathe([[0, 44], [12, 43.6], [21, 42], [27.5, 38.8], [30, 35.8], [30, 33.6], [26, 33], [0, 33]], 48), capMat);
    g.add(cap);
    const lip = mesh(new THREE.TorusGeometry(29.4 * MM, 1.4 * MM, 8, 48), M.whitePlastic);
    lip.rotation.x = Math.PI / 2;
    lip.position.y = 34.2 * MM;
    g.add(lip);
    // A screw head on top of the cap.
    g.add(mesh(new THREE.CylinderGeometry(3 * MM, 3 * MM, 1 * MM, 16).translate(0, 44.2 * MM, 0), M.chrome));
    place(g, p.x, p.y);
    group.add(g);
    for (const child of g.children) child.userData.action = 'pop-' + i;
    handles.interactive.push(cap);
    cap.userData.action = 'pop-' + i;
    handles.pops.push({ group: g, ring, skirt, cap, capMat, fire: 0, x: p.x, y: p.y });
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
    const slot = new THREE.Mesh(new THREE.PlaneGeometry(27 * MM, 6.5 * MM).rotateX(-Math.PI / 2), slotMat);
    slot.position.copy(pf(x, DROPS.y, 0.15));
    group.add(slot);
    const tex = texture(art.targets[i], anisotropy);
    const face = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45 });
    const edge = M.whitePlastic;
    const target = mesh(new THREE.BoxGeometry(DROPS.width * MM, DROPS.height * MM, 4.5 * MM), [edge, edge, edge, edge, face, edge]);
    const holder = new THREE.Group();
    holder.position.copy(pf(x, DROPS.y, 0));
    target.position.y = (DROPS.height / 2) * MM;
    holder.add(target);
    // Clip the dropped target at the wood with a mask box: the wood edge hides it as it falls.
    group.add(holder);
    target.userData.action = 'drop-' + i;
    handles.interactive.push(target);
    handles.drops.push({ holder, target, down: 0, goal: 0, index: i, x });
  }
}

// A ramp is a floor and two walls swept along its centre line; a wireform carries the ball back down.
function buildRamps(group, M, handles) {
  handles.ramps = [];
  for (const ramp of RAMPS) {
    const t = ramp.turn, dir = t.mirror ? -1 : 1;
    const turnPts = [];
    for (let k = 1; k <= 14; k++) {
      const a = (k / 14) * Math.PI;
      turnPts.push([t.cx + dir * Math.cos(a) * t.r, t.cy + Math.sin(a) * t.r, t.h0 + (t.h1 - t.h0) * (k / 14)]);
    }
    const centre = [...ramp.path, ...turnPts];
    const curve = new THREE.CatmullRomCurve3(centre.map(([x, y, h]) => pf(x, y, h)), false, 'centripetal');
    const g = sweepRamp(curve, ramp.width, 20, M);
    for (const child of g.children) child.userData.action = 'ramp-' + ramp.id;
    group.add(g);
    handles.interactive.push(...g.children);

    // Wireform: two floor wires and an outer guide wire, offset from the return path.
    const wirePath = [[centre.at(-1)[0], centre.at(-1)[1], centre.at(-1)[2]], ...ramp.wire];
    const wireCurve = new THREE.CatmullRomCurve3(wirePath.map(([x, y, h]) => pf(x, y, h)), false, 'centripetal');
    const wires = sweepWires(wireCurve, M);
    group.add(wires);

    // Supports: standoffs from the ramp floor and the wire down to the wood.
    for (const u of [0.35, 0.7]) addStandoff(group, curve.getPointAt(u), M);
    for (const u of [0.25, 0.55, 0.85]) addStandoff(group, wireCurve.getPointAt(u), M, 9);

    // The ball's path for a shot: from the opposite flipper, up the ramp and back down the wire.
    handles.ramps.push({ id: ramp.id, side: ramp.side, curve, wireCurve, group: g });
  }
}

function sweepRamp(curve, widthMM, wallMM, M) {
  const steps = 120;
  const floor = [], left = [], right = [];
  const w = (widthMM / 2) * MM, wh = wallMM * MM;
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    const p = curve.getPointAt(u);
    const tan = curve.getTangentAt(u);
    const side = new THREE.Vector3().crossVectors(tan, up).normalize();
    floor.push(p.clone().addScaledVector(side, -w), p.clone().addScaledVector(side, w));
    left.push(p.clone().addScaledVector(side, -w), p.clone().addScaledVector(side, -w).addScaledVector(up, wh));
    right.push(p.clone().addScaledVector(side, w), p.clone().addScaledVector(side, w).addScaledVector(up, wh));
  }
  const strip = verts => {
    const geo = new THREE.BufferGeometry();
    const pos = [], idx = [];
    verts.forEach(v => pos.push(v.x, v.y, v.z));
    for (let i = 0; i < steps; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
  };
  const g = new THREE.Group();
  for (const verts of [floor, left, right]) {
    const m = new THREE.Mesh(strip(verts), M.clearPlastic);
    m.renderOrder = 2;
    g.add(m);
  }
  // Rolled top edges and the floor's outer edges give the clear plastic a readable outline.
  const edgeCurve = (pts, k) => new THREE.CatmullRomCurve3(pts.filter((_, i) => i % 2 === k));
  for (const pts of [left, right]) g.add(new THREE.Mesh(new THREE.TubeGeometry(edgeCurve(pts, 1), steps, 1.3 * MM, 6), M.rampEdge));
  for (const pts of [left, right]) g.add(new THREE.Mesh(new THREE.TubeGeometry(edgeCurve(pts, 0), steps, 0.9 * MM, 6), M.rampEdge));
  // Entrance flap: a thin steel lip where the ramp meets the wood.
  const p0 = curve.getPointAt(0), t0 = curve.getTangentAt(0);
  const flap = new THREE.Mesh(new THREE.BoxGeometry(widthMM * MM, 0.8 * MM, 14 * MM), M.steel);
  flap.position.copy(p0).addScaledVector(t0, -4 * MM);
  flap.position.y = 0.4 * MM;
  flap.lookAt(flap.position.clone().add(new THREE.Vector3(t0.x, 0, t0.z)));
  g.add(flap);
  return g;
}

function sweepWires(curve, M) {
  const g = new THREE.Group();
  const steps = 140;
  const up = new THREE.Vector3(0, 1, 0);
  const offsets = [[-9, 0], [9, 0], [-15, 14], [15, 14]];
  for (const [side, rise] of offsets) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      const p = curve.getPointAt(u), tan = curve.getTangentAt(u);
      const s = new THREE.Vector3().crossVectors(tan, up).normalize();
      pts.push(p.clone().addScaledVector(s, side * MM).addScaledVector(up, (rise - 4) * MM));
    }
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), steps, 1.15 * MM, 8), M.chrome));
  }
  // Cross straps every so often.
  for (let i = 1; i < 9; i++) {
    const u = i / 9;
    const p = curve.getPointAt(u), tan = curve.getTangentAt(u);
    const s = new THREE.Vector3().crossVectors(tan, up).normalize();
    const a = p.clone().addScaledVector(s, -15 * MM).addScaledVector(up, 10 * MM);
    const b = p.clone().addScaledVector(s, -9 * MM).addScaledVector(up, -4 * MM);
    const c = p.clone().addScaledVector(s, 9 * MM).addScaledVector(up, -4 * MM);
    const d = p.clone().addScaledVector(s, 15 * MM).addScaledVector(up, 10 * MM);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a, b, c, d], false, 'catmullrom', 0.1), 16, 0.9 * MM, 6), M.chrome));
  }
  return g;
}

function addStandoff(group, top, M, inset = 4) {
  const h = top.y - inset * MM;
  if (h <= 0.004) return;
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(2.2 * MM, 2.6 * MM, h, 10), M.chrome);
  rod.position.set(top.x, h / 2, top.z);
  rod.castShadow = true;
  group.add(rod);
}

function buildInserts(group, handles) {
  for (const ins of insertList()) {
    const mat = insertMaterial(ins.color);
    const m = new THREE.Mesh(extrudeLocal(ins.shape, 0.9, { curveSegments: 6 }), mat);
    place(m, ins.x, ins.y, 0.05, ins.angle);
    m.renderOrder = 1;
    group.add(m);
    handles.inserts.set(ins.id, { mesh: m, mat, group: ins.group, index: ins.index, level: 0.06, goal: 0.06, flash: 0 });
  }
}

function buildShooter(group, M, handles) {
  const [bx, by] = SHOOTER.ballRest;
  const plunger = new THREE.Group();
  const tipY = by - BALL_R - 0.6;
  // Rod, spring, tip and knob, running out through the cabinet front.
  plunger.add(mesh(new THREE.CylinderGeometry(3.2 * MM, 3.2 * MM, 190 * MM, 14).rotateX(Math.PI / 2).translate(0, 0, 95 * MM), M.chrome));
  plunger.add(mesh(new THREE.CylinderGeometry(9 * MM, 9 * MM, 7 * MM, 18).rotateX(Math.PI / 2).translate(0, 0, 3.5 * MM), M.rubber));
  const spring = [];
  for (let i = 0; i <= 120; i++) { const a = i * 0.55; spring.push(new THREE.Vector3(Math.cos(a) * 6.5 * MM, Math.sin(a) * 6.5 * MM, (12 + i * 0.5) * MM)); }
  plunger.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(spring), 240, 0.8 * MM, 6), M.chrome));
  const knob = mesh(lathe([[0, 0], [7, 0], [11, 6], [13, 18], [12, 30], [0, 32]], 24).rotateX(Math.PI / 2).translate(0, 0, 196 * MM), M.rubberOrange);
  plunger.add(knob);
  plunger.position.copy(pf(bx, tipY, 10));
  group.add(plunger);
  for (const c of plunger.children) c.userData.action = 'plunger';
  handles.interactive.push(knob);
  handles.plunger = { group: plunger, rest: plunger.position.clone(), pull: 0 };
}

function buildBalls(group, M, handles) {
  const geo = new THREE.SphereGeometry(BALL_R * MM, 40, 28);
  handles.ball = mesh(geo, M.chrome);
  handles.ball.position.copy(pf(SHOOTER.ballRest[0], SHOOTER.ballRest[1], BALL_R));
  group.add(handles.ball);
  // A second ball rests in the shooter lane, ready to launch.
  handles.shooterBall = mesh(geo, M.chrome);
  handles.shooterBall.position.copy(pf(SHOOTER.ballRest[0], SHOOTER.ballRest[1], BALL_R));
  group.add(handles.shooterBall);
}

// General illumination: warm bulbs under the slings and along the lanes, and a few lights to carry them.
function buildGI(group, M, handles) {
  const spots = [[66, 300], [408, 300], [140, 420], [334, 420], [40, 700], [430, 700], [150, 980], [330, 980]];
  for (const [x, y] of spots) {
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(3.2 * MM, 12, 8).scale(1, 1.4, 1), M.bulb);
    bulb.position.copy(pf(x, y, 6));
    group.add(bulb);
  }
  const lights = [[120, 330, 70, 0.9], [355, 330, 70, 0.9], [237, 620, 120, 1.1], [237, 900, 110, 1.0]];
  for (const [x, y, h, k] of lights) {
    const light = new THREE.PointLight(0xffd7a8, 0, 0.75, 1.6);
    light.position.copy(pf(x, y, h));
    light.userData.base = k * 0.32;
    group.add(light);
    handles.gi.push(light);
  }
}

// --- Cabinet ---------------------------------------------------------------------------------------------------

function buildCabinet(body, root, M, art, anisotropy, handles) {
  const C = CABINET;
  const len = C.front - C.back;
  const height = C.top - C.bottom;
  const sideTex = texture(art.cabinetSide, anisotropy);
  const sideArt = new THREE.MeshPhysicalMaterial({ map: sideTex, roughness: 0.4, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const sideArtFlip = sideArt.clone();
  sideArtFlip.map = sideTex.clone();
  sideArtFlip.map.wrapS = THREE.RepeatWrapping;
  sideArtFlip.map.repeat.x = -1;
  sideArtFlip.map.needsUpdate = true;
  for (const s of [-1, 1]) {
    const mats = [M.cabinet, M.cabinet, M.cabinet, M.cabinet, M.cabinet, M.cabinet];
    mats[s > 0 ? 0 : 1] = s > 0 ? sideArtFlip : sideArt; // outer face carries the art
    mats[s > 0 ? 1 : 0] = M.cabinetInner; // inner face: flat black, as inside a real cabinet
    const side = mesh(new THREE.BoxGeometry(C.wallT, height, len), mats);
    side.position.set(s * (C.inner / 2 + C.wallT / 2), C.bottom + height / 2, (C.front + C.back) / 2);
    body.add(side);
    // Side rail: brushed aluminium along the top.
    const rail = mesh(new THREE.BoxGeometry(C.wallT + 0.012, 0.012, len + 0.004), M.aluminium);
    rail.position.set(s * (C.inner / 2 + C.wallT / 2 - 0.002), C.top + 0.006, (C.front + C.back) / 2);
    body.add(rail);
  }
  const outer = C.inner + C.wallT * 2;
  const front = mesh(new THREE.BoxGeometry(outer, height - 0.04, C.wallT), M.cabinet);
  front.position.set(0, C.bottom + (height - 0.04) / 2, C.front - C.wallT / 2);
  body.add(front);
  const back = mesh(new THREE.BoxGeometry(outer, height, C.wallT), M.cabinet);
  back.position.set(0, C.bottom + height / 2, C.back + C.wallT / 2);
  body.add(back);
  const floor = mesh(new THREE.BoxGeometry(outer, C.wallT, len), M.cabinetInner);
  floor.position.set(0, C.bottom + C.wallT / 2, (C.front + C.back) / 2);
  body.add(floor);
  // Lockdown bar.
  const bar = mesh(new RoundedBox(outer + 0.006, 0.026, 0.072, 0.006), M.trim);
  bar.position.set(0, C.top + 0.004, C.front - 0.03);
  body.add(bar);
  // Glass over the playfield.
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(C.inner, len - 0.08).rotateX(-Math.PI / 2), M.glass);
  glass.position.set(0, 0.094, (C.front + C.back) / 2 - 0.02);
  glass.renderOrder = 5;
  body.add(glass);
  // Coin door and start button on the front.
  const door = mesh(new RoundedBox(0.25, 0.012, 0.28, 0.012), M.trim);
  door.rotation.x = Math.PI / 2;
  door.position.set(0, -0.175, C.front + 0.004);
  body.add(door);
  const inset = mesh(new THREE.BoxGeometry(0.21, 0.24, 0.004), M.darkSteel);
  inset.position.set(0, -0.175, C.front + 0.011);
  body.add(inset);
  for (const x of [-0.048, 0.048]) {
    const plate = mesh(new THREE.BoxGeometry(0.06, 0.085, 0.006), M.aluminium);
    plate.position.set(x, -0.11, C.front + 0.014);
    body.add(plate);
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.026, 0.002), new THREE.MeshBasicMaterial({ color: 0xff6a13 }));
    slot.position.set(x, -0.1, C.front + 0.0175);
    body.add(slot);
    const reject = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 16).rotateX(Math.PI / 2), M.trim);
    reject.position.set(x, -0.135, C.front + 0.018);
    body.add(reject);
  }
  const start = mesh(lathe([[0, 0], [15, 0], [15, 4], [13, 9], [0, 10]], 28).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xff6a13, emissive: 0xff6a13, emissiveIntensity: 0.5, roughness: 0.3 }));
  start.position.set(-0.205, -0.035, C.front);
  body.add(start);
  handles.startButton = start;

  // Legs: vertical in the world, from the cabinet's bottom corners to the floor.
  body.updateMatrixWorld(true);
  for (const [x, z] of [[-1, C.front - 0.06], [1, C.front - 0.06], [-1, C.back + 0.06], [1, C.back + 0.06]]) {
    const corner = new THREE.Vector3(x * (outer / 2 - 0.035), C.bottom, z).applyMatrix4(body.matrixWorld);
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
  const cover = new THREE.Mesh(new THREE.PlaneGeometry(B.glassW, B.glassH), M.glass.clone());
  cover.material.opacity = 0.05;
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
    const bar = mesh(new THREE.BoxGeometry(w, h, 0.007), M.aluminium);
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
