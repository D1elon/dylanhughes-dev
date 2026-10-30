// Geometry helpers. Parts are authored in playfield millimetres (x from the left rail, y from the front edge, h
// above the wood) and built in the playfield group's local space in metres: X right, Y up, Z toward the player.
import * as THREE from 'three';
import { PF } from './layout.js';

export const MM = 0.001;

export function pf(x, y, h = 0) {
  return new THREE.Vector3((x - PF.w / 2) * MM, h * MM, (PF.l / 2 - y) * MM);
}

// A flat outline in playfield millimetres, extruded upward from h0 by `height`.
export function extrude(points, h0, height, { bevel = 0, curveSegments = 12, holes = [] } = {}) {
  const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2((x - PF.w / 2) * MM, (y - PF.l / 2) * MM)));
  for (const hole of holes) shape.holes.push(new THREE.Path(hole.map(([x, y]) => new THREE.Vector2((x - PF.w / 2) * MM, (y - PF.l / 2) * MM))));
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(height - bevel * 2, 0.0001) * MM,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel * MM,
    bevelSize: bevel * MM,
    bevelSegments: 3,
    curveSegments,
  });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, (h0 + bevel) * MM, 0);
  return geo;
}

// A local outline (millimetres, centred on the origin) extruded upward; position it with `place`.
export function extrudeLocal(points, height, { bevel = 0, curveSegments = 12 } = {}) {
  const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x * MM, y * MM)));
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(height - bevel * 2, 0.0001) * MM,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel * MM,
    bevelSize: bevel * MM,
    bevelSegments: 3,
    curveSegments,
  });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, bevel * MM, 0);
  return geo;
}

// Places a locally built object at playfield (x, y, h), rotated by `angle` degrees counter-clockwise seen from above.
export function place(object, x, y, h = 0, angle = 0) {
  object.position.copy(pf(x, y, h));
  object.rotation.y = (angle * Math.PI) / 180;
  return object;
}

// A profile [[radius mm, height mm], ...] turned around the vertical axis.
export function lathe(profile, segments = 48) {
  return new THREE.LatheGeometry(profile.map(([r, h]) => new THREE.Vector2(r * MM, h * MM)), segments);
}

// A round tube through playfield points [[x, y, h], ...] of radius r millimetres.
export function tube(points, r, { tension = 0.5, segments, radial = 10, closed = false } = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, h]) => pf(x, y, h)), closed, 'catmullrom', tension);
  const length = curve.getLength();
  return new THREE.TubeGeometry(curve, segments || Math.max(12, Math.round(length / 0.006)), r * MM, radial, closed);
}

// A round tube through local points [[x, y, h], ...] in millimetres, for parts built round their own origin and then
// placed with `place`.
export function tubeLocal(points, r, { tension = 0.5, segments, radial = 10, closed = false } = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, h]) => new THREE.Vector3(x * MM, h * MM, -y * MM)), closed, 'catmullrom', tension);
  return new THREE.TubeGeometry(curve, segments || Math.max(12, Math.round(curve.getLength() / 0.002)), r * MM, radial, closed);
}

// Inserts points along any edge of a closed outline longer than `step` millimetres.
export function densify(points, step) {
  const out = [];
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / step));
    for (let k = 0; k < n; k++) out.push([a[0] + (b[0] - a[0]) * (k / n), a[1] + (b[1] - a[1]) * (k / n)]);
  }
  return out;
}

export function curve3(points, tension = 0.5) {
  return new THREE.CatmullRomCurve3(points.map(([x, y, h]) => pf(x, y, h)), false, 'catmullrom', tension);
}

// Offsets a closed polygon outward by d (positive) using vertex normals of the bisectors. Good enough for convex
// outlines such as a rubber ring round its posts.
export function roundedHull(points, r, steps = 10) {
  // Hull of circles of radius r centred on each point (points in order, convex).
  const out = [];
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const p = points[i], prev = points[(i - 1 + n) % n], next = points[(i + 1) % n];
    const a0 = Math.atan2(p[1] - prev[1], p[0] - prev[0]) - Math.PI / 2;
    let a1 = Math.atan2(next[1] - p[1], next[0] - p[0]) - Math.PI / 2;
    while (a1 < a0) a1 += Math.PI * 2;
    for (let k = 0; k <= steps; k++) {
      const a = a0 + (a1 - a0) * (k / steps);
      out.push([p[0] + Math.cos(a) * r, p[1] + Math.sin(a) * r]);
    }
  }
  return out;
}

// Signed area: positive when counter-clockwise.
export function area(points) {
  let s = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, y0] = points[i], [x1, y1] = points[(i + 1) % points.length];
    s += x0 * y1 - x1 * y0;
  }
  return s / 2;
}
export const ccw = points => (area(points) < 0 ? [...points].reverse() : points);

// A wall of thickness t (mm) and height h along a polyline of playfield points.
export function wall(points, t, h, h0 = 0) {
  const left = [], right = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
    let dx = b[0] - a[0], dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1;
    dx /= len; dy /= len;
    left.push([p[0] - dy * t / 2, p[1] + dx * t / 2]);
    right.push([p[0] + dy * t / 2, p[1] - dx * t / 2]);
  }
  return extrude(ccw([...left, ...right.reverse()]), h0, h);
}

export function arcPoints(cx, cy, r, a0, a1, steps = 24) {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const a = ((a0 + (a1 - a0) * (i / steps)) * Math.PI) / 180;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });
}
