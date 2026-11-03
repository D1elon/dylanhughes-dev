// Generates src/machine/origin.js from Deadbounce's Origin template, so the site's playfield is the table as it was
// authored in the Studio rather than a hand copy of it.
//
//   node tools/origin-layout.mjs <path to studio/src/templates/twin-ramps.json> [out = src/machine/origin.js]
//
// The template stores each part's centre in board millimetres, with its outlines, posts and centre lines relative to
// that centre and turned by `rotation` (degrees, counter-clockwise). This writes every part the site uses in absolute
// board millimetres (x from the left edge, y from the flipper end, z/h above the wood), with the curves built the way
// the Studio builds them (studio/src/parts/geometry.js): guides and ramps drawn `smooth` are centripetal Catmull-Rom
// curves through their points, sampled every 5 mm (guides) or 6 mm (ramps), and a ramp's width eases from its mouth
// to its body over `mouthLength`. Flippers get their shaft, radii and reach as the Studio's flipperGeometry gives them.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';

const [, , source, out = 'src/machine/origin.js'] = process.argv;
if (!source) {
  console.error('usage: node tools/origin-layout.mjs <twin-ramps.json> [out]');
  process.exit(1);
}
const template = JSON.parse(readFileSync(source, 'utf8'));
const DEG = Math.PI / 180;
const r3 = v => Math.round(v * 1000) / 1000;
const pt = p => p.map(r3);

// --- The Studio's geometry (studio/src/parts/geometry.js and starter-layout.js), as it builds each part --------------

const toWorld = (c, [x, y]) => {
  const a = (c.rotation || 0) * DEG, cos = Math.cos(a), sin = Math.sin(a);
  return [c.x + x * cos - y * sin, c.y + x * sin + y * cos];
};
const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1], (b[2] ?? 0) - (a[2] ?? 0));
const planDist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const signedArea = poly => poly.reduce((s, a, i) => { const b = poly[(i + 1) % poly.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0) / 2;
const ccw = poly => (signedArea(poly) < 0 ? [...poly].reverse() : poly);

// Centripetal Catmull-Rom through the points, keeping both ends (geometry.js catmullRom).
function catmullRom(points, { closed = false, segmentLength = 6 } = {}) {
  const n = points.length;
  if (n < 3) return points.map(p => [...p]);
  const dims = points[0].length;
  const extrapolate = (end, next) => end.map((v, k) => v * 2 - next[k]);
  const get = i => (closed ? points[(i + n) % n] : i < 0 ? extrapolate(points[0], points[1]) : i >= n ? extrapolate(points[n - 1], points[n - 2]) : points[i]);
  const outPts = [];
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
    const steps = Math.max(1, Math.ceil(dist(p1, p2) / segmentLength));
    const t0 = 0, t1 = t0 + Math.max(1e-6, Math.sqrt(dist(p0, p1))), t2 = t1 + Math.max(1e-6, Math.sqrt(dist(p1, p2))), t3 = t2 + Math.max(1e-6, Math.sqrt(dist(p2, p3)));
    for (let step = 0; step < steps; step++) {
      const t = t1 + ((t2 - t1) * step) / steps, p = [];
      for (let d = 0; d < dims; d++) {
        const a1 = ((t1 - t) / (t1 - t0)) * p0[d] + ((t - t0) / (t1 - t0)) * p1[d];
        const a2 = ((t2 - t) / (t2 - t1)) * p1[d] + ((t - t1) / (t2 - t1)) * p2[d];
        const a3 = ((t3 - t) / (t3 - t2)) * p2[d] + ((t - t2) / (t3 - t2)) * p3[d];
        const b1 = ((t2 - t) / (t2 - t0)) * a1 + ((t - t0) / (t2 - t0)) * a2;
        const b2 = ((t3 - t) / (t3 - t1)) * a2 + ((t - t1) / (t3 - t1)) * a3;
        p.push(((t2 - t) / (t2 - t1)) * b1 + ((t - t1) / (t2 - t1)) * b2);
      }
      outPts.push(p);
    }
  }
  if (!closed) outPts.push([...points[n - 1]]);
  return outPts;
}

// A guide's or a wall's built centre line: smoothed unless `smooth: false` (geometry.js centerline), absolute.
function guideLine(c) {
  const local = c.points.map(p => p.map(Number));
  const line = c.smooth !== false && local.length > 2 ? catmullRom(local, { segmentLength: 5 }) : local;
  return line.map(p => pt(toWorld(c, p)));
}

// A ramp's built centre line with its floor height and width at each point (geometry.js rampProfile), absolute.
function rampProfile(c) {
  const local = c.points.map(p => [Number(p[0]), Number(p[1]), Number(p[2] ?? 0)]);
  const line = c.smooth !== false && local.length > 2 ? catmullRom(local, { segmentLength: 6 }) : local;
  const s = [0];
  for (let i = 1; i < line.length; i++) s.push(s[i - 1] + planDist(line[i - 1], line[i]));
  const total = s.at(-1) || 1, body = c.rampWidth ?? 38, start = c.widthStart ?? body;
  const mouth = start === body ? 0 : Math.max(0, Math.min(total / 2, c.mouthLength ?? 66));
  const ease = u => { const t = Math.max(0, Math.min(1, u)); return t * t * (3 - 2 * t); };
  const widthAt = d => (mouth > 0 && d < mouth ? start + (body - start) * ease(d / mouth) : body);
  return line.map((p, i) => { const [x, y] = toWorld(c, p); return [r3(x), r3(y), r3(p[2]), r3(widthAt(s[i]))]; });
}

// Where a ramp's support stations stand (ramp-supports.js): `at` along its plan length, on `side` (1 left of travel,
// -1 right), the post 6.5 mm beyond the ramp's outer edge. A wireform's dead end has no hoop for an ear past where its
// rails spread, so its stations stop short of that (`limit`, mm from the end); a post under 10 mm is left out.
function supportsFor(c, profile, edge, limit = 0) {
  const s = [0];
  for (let i = 1; i < profile.length; i++) s.push(s[i - 1] + planDist(profile[i - 1], profile[i]));
  const total = s.at(-1);
  return (c.rampSupports || []).map(({ at, side }) => {
    const d = Math.min(at * total, total - limit);
    let i = 1;
    while (i < profile.length - 1 && s[i] < d) i++;
    const a = profile[i - 1], b = profile[i], k = (d - s[i - 1]) / (s[i] - s[i - 1] || 1), l = planDist(a, b) || 1;
    const tx = (b[0] - a[0]) / l, ty = (b[1] - a[1]) / l, w = a[3] + (b[3] - a[3]) * k, z = a[2] + (b[2] - a[2]) * k, reach = edge(w) + 6.5;
    return { at, side, x: r3(a[0] + (b[0] - a[0]) * k - ty * reach * side), y: r3(a[1] + (b[1] - a[1]) * k + tx * reach * side), z: r3(z) };
  }).filter(p => p.z - 3 >= 10);
}

// A straight part (rail, divider, drain guide) from its centre, length and rotation (starter-layout.js guide(): the
// part's length runs at rotation + 90°).
function straight(c) {
  const a = ((c.rotation || 0) + 90) * DEG, h = c.length / 2;
  return { from: pt([c.x - Math.cos(a) * h, c.y - Math.sin(a) * h]), to: pt([c.x + Math.cos(a) * h, c.y + Math.sin(a) * h]) };
}

// VPX kicker strength to mm/s, as the Studio's engine converts it (engine/compile.js VPU_SPEED).
const VPU_SPEED = ((25.4 * 1.0625) / 50) * 100;

// --- Each part, absolute --------------------------------------------------------------------------------------

function convert(c) {
  const base = { id: c.id, type: c.type, name: c.name, x: r3(c.x), y: r3(c.y) };
  if (c.rotation) base.rotation = r3(c.rotation);
  const size = { width: r3(c.width), length: r3(c.length), height: r3(c.height) };
  switch (c.type) {
    case 'flipper': {
      // flipperGeometry: the shaft is the base circle's centre; the tip radius is 0.31 of the bat's width.
      const baseR = c.length / 2, tipR = Number.isFinite(c.tipRadius) ? c.tipRadius : c.length * 0.31, reach = c.width - baseR - tipR;
      const pivot = toWorld(c, [-c.width / 2 + baseR, 0]);
      return { ...base, side: c.side, pivot: pt(pivot), rest: r3(c.rotation), stroke: c.stroke ?? 52, baseR: r3(baseR), tipR: r3(tipR), reach: r3(reach), ...size,
        ...(c.sharedSwitch ? { sharedSwitch: c.sharedSwitch } : {}), ...(c.flipperMechanism ? { mechanismAngle: c.flipperMechanism.angle } : {}) };
    }
    case 'sling':
      return { ...base, side: c.side, posts: c.posts.map(p => pt(toWorld(c, [p.x, p.y]))), roles: c.posts.map(p => p.role), postRadius: c.postRadius, contactRadius: c.contactRadius };
    case 'plastic':
      return { ...base, z: c.z, thickness: c.thickness, outline: ccw(c.points.map(p => pt(toWorld(c, p)))), holes: (c.holes || []).map(h => [...pt(toWorld(c, [h.x, h.y])), h.diameter]),
        collidable: c.collidable !== false, assembly: c.physicalPart?.assemblyId, notes: c.physicalPart?.notes || c.notes };
    case 'post':
      return { ...base, ...size, postType: c.postType, profile: c.geometryProfile, ...(c.postRing === false ? { ring: false } : {}) };
    case 'rollover':
      return base;
    case 'bumper':
      return { ...base, ...size };
    case 'target':
      return { ...base, ...size };
    case 'insert':
      return { ...base, ...size, shape: c.shape || 'circle', color: c.color, ...(c.print ? { icon: c.print.layers?.[0]?.icon } : {}) };
    case 'rubber':
      return { ...base, posts: c.posts.map(p => pt(toWorld(c, p))), postDiameter: c.postDiameter, cord: c.cord, rubberHeight: c.rubberHeight,
        ...(c.postDiameters ? { postDiameters: c.postDiameters } : {}), ...(c.postIds ? { postIds: c.postIds } : {}) };
    case 'kicker':
      return { ...base, ...size, kickerType: c.kickerType, kickAngle: c.kickAngle, kickSpeed: c.kickSpeed, kick: r3((c.kickSpeed ?? 30) * VPU_SPEED), pulseMs: c.coil?.pulseMs };
    case 'gate': {
      const a = (c.rotation || 0) * DEG, h = c.width / 2;
      return { ...base, ...size, from: pt([c.x - Math.cos(a) * h, c.y - Math.sin(a) * h]), to: pt([c.x + Math.cos(a) * h, c.y + Math.sin(a) * h]), oneWay: c.oneWay };
    }
    case 'guide':
      if (Array.isArray(c.points)) return { ...base, thickness: c.thickness ?? 1.6, height: r3(c.height), smooth: c.smooth !== false, points: c.points.map(p => pt(toWorld(c, p))), line: guideLine(c),
        ...(c.mounts ? { mounts: c.mounts } : {}) };
      return { ...base, thickness: r3(c.width), height: r3(c.height), ...straight(c) };
    case 'ramp': {
      const profile = rampProfile(c), wire = c.rampType !== 'plastic';
      // A printed ramp's outer edge is its 2.4 mm wall outside the channel; a printed wireform's is its hoop, outside the
      // 5 mm rails at ±0.31 of its width.
      // A dead end's spread starts 40 mm before the U round the ball (ball, rail and 3 mm clearance), and its last ear
      // half an ear, a hoop and 1 mm before that (wireform-construction.js wireDropEnd).
      const edge = wire ? w => w * 0.31 + 2.5 + 3.5 : w => w / 2 + 2.4, limit = c.wireExit?.kind === 'drop' ? 13.5 + 2.5 + 3 + 40 + 9 + 5 + 1 : 0;
      return { ...base, rampType: c.rampType, rampWidth: c.rampWidth, ...(c.widthStart ? { widthStart: c.widthStart, mouthLength: c.mouthLength } : {}), ...(c.wallHeight ? { wallHeight: c.wallHeight } : {}),
        points: c.points.map(p => [...pt(toWorld(c, p)), r3(p[2] ?? 0)]), profile, supports: supportsFor(c, profile, edge, limit),
        ...(c.switches?.length ? { switches: c.switches.map(s => s.at) } : {}), ...(c.sideRails ? { sideRails: c.sideRails } : {}),
        entry: c.rampEntry?.kind || c.wireEntry?.kind || null, exit: c.rampExit?.kind || c.wireExit?.kind || null };
    }
    case 'apron':
      return { ...base, ...size, outline: c.outline.map(p => pt(toWorld(c, p))), lip: { centre: pt(toWorld(c, c.formed.lip.centre)), radius: c.formed.lip.radius, from: pt(toWorld(c, c.formed.lip.from)), to: pt(toWorld(c, c.formed.lip.to)) } };
    case 'plunger':
      return { ...base, ...size };
    default:
      return null;
  }
}

const parts = template.components.map(convert).filter(Boolean);
const skipped = template.components.filter(c => !parts.some(p => p.id === c.id)).map(c => c.id);

// --- Writing ----------------------------------------------------------------------------------------------------

// One part per entry, its short fields on one line and each long list on its own.
const json = v => JSON.stringify(v);
function entry(p) {
  const short = [], long = [];
  for (const [k, v] of Object.entries(p)) {
    if (v === undefined) continue;
    const text = `${k}: ${json(v)}`;
    (Array.isArray(v) && text.length > 90 ? long : short).push(text);
  }
  return `  ${p.id}: {\n    ${short.join(', ')},${long.map(t => `\n    ${t},`).join('')}\n  },`;
}
const layout = template.layout;
const header = `// Generated by tools/origin-layout.mjs from Deadbounce's Origin table: ${basename(source)} (layout ${layout.id}, schema
// ${layout.schemaVersion}), ${template.components.length} components on a ${template.playfield.width} × ${template.playfield.length} mm board at ${template.playfield.slope}°. Do not edit by hand: change the template
// in the Studio and run  node tools/origin-layout.mjs <twin-ramps.json>.
//
// Board millimetres, absolute: x from the board's left edge, y from the flipper end, z / h above the wood. Outlines and
// centre lines are as the Studio builds them: \`line\` is a guide's steel centre line, smoothed when the template draws it
// smooth; a ramp's \`profile\` is [x, y, floor height, width] every 6 mm or so; \`points\` are the authored control points.
// A flipper's \`pivot\` is its shaft, \`rest\` the bat's direction at rest and \`stroke\` its swing (degrees); \`reach\` is
// shaft to tip centre. A saucer's \`kick\` is its eject in mm/s (VPX strength × ${r3(VPU_SPEED)}).
// Not used by the site, so not written: ${skipped.join(', ')}.
`;
const body = `${header}
export const ORIGIN_BOARD = ${json({ width: template.playfield.width, length: template.playfield.length, thickness: template.playfield.thickness, slope: template.playfield.slope, ball: layout.ballDiameter, centreX: layout.mainPlayfield.centerX, orbitLane: layout.orbit?.laneWidth, throat: layout.orbit?.throatWidth })};

export const ORIGIN = {
${parts.map(entry).join('\n')}
};
`;
writeFileSync(resolve(out), body);
console.log(`wrote ${out}: ${parts.length} parts (${skipped.length} skipped: ${skipped.join(', ')})`);
