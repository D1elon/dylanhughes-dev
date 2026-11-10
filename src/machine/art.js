// Printed artwork, drawn on canvases: the playfield, the translite, the cabinet, the apron, the plastics, the cards
// and the standup faces. The look is a late-1970s game's, screen-printed in the site's own inks: flat royal blues,
// white and black under heavy black keylines; a flaming sun in the middle of the field, every insert in a flame of its
// own, scalloped crescents rolling out from the pops and along the cabinet, and the names lettered in arcs. The site's
// sections are the shots: the case studies are the ramps.
import {
  PF, POPS, RAMPS, TOP_LANES, APRON, SHOOTER, RETURN_LANES, INSERTS, TARGETS,
} from './layout.js';
import { roundedHull, ccw } from './geo.js';
import { PALETTE, rgba } from './palette.js';

export const COLORS = {
  field: PALETTE.black2,
  white: PALETTE.paper,
  grey: PALETTE.grey,
  royal: PALETTE.royal,
  light: PALETTE.light,
  deep: PALETTE.deep,
  ink: PALETTE.black2,
  cab: PALETTE.black1,
};
const WHITE = rgba('paper');
const ROYAL = rgba('royal');
const LIGHT = rgba('light');
const GREY = rgba('grey');
// The print's inks: black for the keylines and the field, four blues from navy to ice, and white.
const INK = {
  k: PALETTE.black, field: PALETTE.black1, navy: PALETTE.navy, deep: PALETTE.deep, royal: PALETTE.royal,
  light: PALETTE.light, ice: PALETTE.ice, white: PALETTE.paper,
};
const TAU = Math.PI * 2, DEG = Math.PI / 180;

export const FONTS = {
  display: (size, weight = 650) => `${weight} ${size}px Archivo`,
  mono: (size, weight = 500) => `${weight} ${size}px "Martian Mono"`,
  body: (size, weight = 500) => `${weight} ${size}px "Instrument Sans"`,
};
// Type set as the site sets it: Archivo headlines at 112.5% width ('semi-expanded', the nearest canvas keyword to the
// site's 108%), weight 650, tracked -0.03em; Martian Mono labels at 87.5% width, weight 500, tracked 0.08em (callers
// pass them in capitals); Instrument Sans body text as drawn. `poster` is the art's lettering: the same Archivo at its
// heaviest and widest, in capitals, the way a 1970s game letters its name.
function setType(g, kind, size, weight) {
  if (kind === 'poster') {
    g.font = FONTS.display(size, weight || 900);
    g.fontStretch = 'extra-expanded';
    g.letterSpacing = `${size * 0.015}px`;
  } else if (kind === 'display') {
    g.font = FONTS.display(size, weight);
    g.fontStretch = 'semi-expanded';
    g.letterSpacing = `${-size * 0.03}px`;
  } else if (kind === 'mono') {
    g.font = FONTS.mono(size, weight);
    g.fontStretch = 'semi-condensed';
    g.letterSpacing = `${size * 0.08}px`;
  } else {
    g.font = FONTS.body(size, weight);
    g.fontStretch = 'normal';
    g.letterSpacing = '0px';
  }
}

export async function loadArtFonts() {
  await Promise.all([
    document.fonts.load('900 40px Archivo'),
    document.fonts.load('700 40px Archivo'),
    document.fonts.load('500 20px "Martian Mono"'),
    document.fonts.load('500 20px "Instrument Sans"'),
  ]).catch(() => {});
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.round(w);
  c.height = Math.round(h);
  return c;
}

// --- The print toolkit -------------------------------------------------------------------------------------------
// Shapes as paths, in whatever units the canvas is set to at the time (the playfield draws in its own millimetres,
// y up; the rest in pixels).

const polar = (x, y, r, a) => [x + r * Math.cos(a), y + r * Math.sin(a)];
const polygon = points => { const p = new Path2D(); points.forEach(([x, y], i) => (i ? p.lineTo(x, y) : p.moveTo(x, y))); p.closePath(); return p; };
const circlePath = (x, y, r) => { const p = new Path2D(); p.arc(x, y, r, 0, TAU); return p; };
const moved = (path, dx, dy, rot = 0) => { const p = new Path2D(); p.addPath(path, new DOMMatrix().translate(dx, dy).rotate(rot)); return p; };

// A star of `n` points between two radii.
function burstPath(x, y, r0, r1, n, phase = 0) {
  return polygon(Array.from({ length: n * 2 }, (_, i) => polar(x, y, i % 2 ? r0 : r1, phase + (i * Math.PI) / n)));
}
// A circle with `n` round scallops standing `bump` proud of it.
function scallopPath(x, y, r, n, bump) {
  const p = new Path2D(), step = TAU / n;
  p.moveTo(x + r, y);
  for (let i = 0; i < n; i++) p.quadraticCurveTo(...polar(x, y, r + bump * 2, (i + 0.5) * step), ...polar(x, y, r, (i + 1) * step));
  p.closePath();
  return p;
}
// A ring of `n` flames licking `amp` out of a circle, each leaning the way the angle runs.
function flameRingPath(x, y, r, amp, n, { phase = 0, lean = 0.22 } = {}) {
  const p = new Path2D(), step = TAU / n, at = (rr, t) => polar(x, y, rr, phase + t * step);
  p.moveTo(...at(r, 0));
  for (let i = 0; i < n; i++) {
    p.bezierCurveTo(...at(r + amp * 0.02, i + 0.4), ...at(r + amp * 0.5, i + 0.34 + lean), ...at(r + amp, i + 0.56 + lean));
    p.bezierCurveTo(...at(r + amp * 0.52, i + 0.74 + lean * 0.5), ...at(r + amp * 0.16, i + 0.7), ...at(r, i + 1));
  }
  p.closePath();
  return p;
}
// A four-pointed twinkle (or more points), its sides pinched in toward the middle.
function twinklePath(x, y, r, { pinch = 0.16, rot = Math.PI / 2, points = 4 } = {}) {
  const p = new Path2D();
  p.moveTo(...polar(x, y, r, rot));
  for (let i = 0; i < points; i++) p.quadraticCurveTo(...polar(x, y, r * pinch, rot + ((i + 0.5) * TAU) / points), ...polar(x, y, r, rot + ((i + 1) * TAU) / points));
  p.closePath();
  return p;
}
// The flame an insert sits in: a round head of radius R at the origin and a body trailing L toward -y that splits
// into three tongues from `neck` of the way down. `spread` widens the body.
function flamePath(R, L, { neck = 0.44, spread = 1, sway = 0.12 } = {}) {
  const p = new Path2D(), s = spread, n = -L * neck;
  const TL = [-0.98 * R * s, -0.74 * L], NL = [-0.36 * R * s, n], TC = [sway * R, -L], NR = [0.4 * R * s, n * 1.05], TR = [0.92 * R * s, -0.66 * L];
  p.moveTo(R, 0);
  p.arc(0, 0, R, 0, Math.PI, false);
  p.bezierCurveTo(-R, -0.5 * R, -1.32 * R * s, -0.42 * L, ...TL);
  p.bezierCurveTo(TL[0] + 0.14 * R, TL[1] + 0.12 * L, NL[0] - 0.12 * R, NL[1] - 0.16 * L, ...NL);
  p.bezierCurveTo(NL[0] + 0.12 * R, NL[1] - 0.2 * L, TC[0] - 0.24 * R, TC[1] + 0.2 * L, ...TC);
  p.bezierCurveTo(TC[0] + 0.2 * R, TC[1] + 0.22 * L, NR[0] - 0.1 * R, NR[1] - 0.18 * L, ...NR);
  p.bezierCurveTo(NR[0] + 0.1 * R, NR[1] - 0.14 * L, TR[0] - 0.16 * R, TR[1] + 0.1 * L, ...TR);
  p.bezierCurveTo(1.28 * R * s, -0.4 * L, R, -0.5 * R, R, 0);
  p.closePath();
  return p;
}
// A teardrop: a round bulb of radius R at the origin, drawn up to a point L toward +y.
function teardropPath(R, L) {
  const p = new Path2D();
  p.moveTo(-R, 0);
  p.arc(0, 0, R, Math.PI, TAU, false);
  p.bezierCurveTo(R, R * 0.9, R * 0.16, L * 0.56, 0, L);
  p.bezierCurveTo(-R * 0.16, L * 0.56, -R, R * 0.9, -R, 0);
  p.closePath();
  return p;
}

// Prints paths as one shape: a black keyline round the lot, an optional rim of `rimW` outside it, then the fill. `key`
// is the keyline's width; all in the canvas's current units.
function printShape(g, paths, { fill, rim = null, rimW = 0, key = 1, keyInk = INK.k }) {
  paths = [].concat(paths);
  g.lineJoin = 'round'; g.lineCap = 'round';
  if (key) { g.strokeStyle = keyInk; g.lineWidth = (rimW + key) * 2; for (const p of paths) g.stroke(p); }
  if (rimW) { g.strokeStyle = rim || fill; g.lineWidth = rimW * 2; for (const p of paths) g.stroke(p); }
  g.fillStyle = fill;
  for (const p of paths) g.fill(p);
}
// A crescent "scale", the cabinet's stencil: circles of shrinking radius, each pushed further toward `dir`, so every
// band is a crescent, fat on the side away from `dir`. `layers` are [radius, push, ink] as fractions of R.
function scaleMotif(g, x, y, R, dir, layers, key = 0) {
  for (const [r, push, ink] of layers) {
    const p = circlePath(...polar(x, y, R * push, dir), R * r);
    g.fillStyle = ink; g.fill(p);
    if (key) { g.strokeStyle = INK.k; g.lineWidth = key; g.stroke(p); }
  }
}
// A chrome ball as a print shows one: an ice disc, a royal shadow and a navy one sliding off it, and a white glint.
function orb(g, x, y, r, key = r * 0.14) {
  g.save();
  const p = circlePath(x, y, r);
  g.fillStyle = INK.ice; g.fill(p);
  g.save(); g.clip(p);
  g.fillStyle = INK.royal; g.fill(circlePath(x + r * 0.34, y - r * 0.4, r * 1.02));
  g.fillStyle = INK.navy; g.fill(circlePath(x + r * 0.62, y - r * 0.74, r * 0.98));
  g.restore();
  g.fillStyle = INK.white; g.fill(circlePath(x - r * 0.36, y + r * 0.38, r * 0.2));
  g.strokeStyle = INK.k; g.lineWidth = key; g.stroke(p);
  g.restore();
}

// Lettering, as the art carries it: capitals with a black outline and a drop shadow in a second ink. Sizes and
// positions are in the canvas's pixels (text is never drawn in the playfield's flipped millimetres).
function poster(g, text, x, y, size, { fill = INK.white, stroke = INK.k, weight = 0.15, shadow = INK.royal, drop = 0.09, align = 'center', kind = 'poster', fontWeight } = {}) {
  g.save();
  setType(g, kind, size, fontWeight);
  g.textAlign = align; g.textBaseline = 'middle'; g.lineJoin = 'round';
  text = text.toUpperCase();
  const d = size * drop;
  if (shadow) {
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = size * weight; g.strokeText(text, x + d, y + d); }
    g.fillStyle = shadow; g.fillText(text, x + d, y + d);
  }
  if (stroke) { g.strokeStyle = stroke; g.lineWidth = size * weight; g.strokeText(text, x, y); }
  g.fillStyle = fill; g.fillText(text, x, y);
  g.restore();
}
// The same lettering round a circle (cx, cy, r in pixels), centred on `mid`: the angle anticlockwise from the right,
// as the playfield measures them. Over the top of the circle the letters stand outward; with `under`, they hang
// inside it and read along the bottom. `maxSpan` (radians) shrinks the type to fit. `fills` colours runs of
// characters: [[count, ink], …].
function arcText(g, text, cx, cy, r, mid, size, { fill = INK.white, stroke = INK.k, weight = 0.15, shadow = INK.royal, drop = 0.09, kind = 'poster', fontWeight, under = false, maxSpan = Infinity, fills = null, track = 0.04 } = {}) {
  g.save();
  text = text.toUpperCase();
  const measure = () => { setType(g, kind, size, fontWeight); g.letterSpacing = '0px'; return [...text].map(ch => g.measureText(ch).width + size * track); };
  let widths = measure(), total = widths.reduce((a, b) => a + b, 0);
  if (total / r > maxSpan) { size *= (maxSpan * r) / total; widths = measure(); total = widths.reduce((a, b) => a + b, 0); }
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
  const inks = [];
  if (fills) for (const [count, ink] of fills) for (let i = 0; i < count; i++) inks.push(ink);
  // Canvas angles run clockwise from the right. Over the top the text runs clockwise; under, anticlockwise.
  const dir = under ? -1 : 1, start = -mid - (dir * total) / (2 * r);
  const glyphs = [];
  let acc = 0;
  [...text].forEach((ch, i) => { const a = start + (dir * (acc + widths[i] / 2)) / r; acc += widths[i]; glyphs.push([ch, a, inks[i] || fill]); });
  const d = size * drop;
  const pass = fn => glyphs.forEach(([ch, a, ink]) => {
    g.save();
    g.translate(cx + r * Math.cos(a), cy + r * Math.sin(a));
    g.rotate(a + (under ? -Math.PI / 2 : Math.PI / 2));
    fn(ch, ink, -a - (under ? -Math.PI / 2 : Math.PI / 2));
    g.restore();
  });
  // The shadow falls down and to the right of the page, whichever way a letter is turned.
  const off = turn => [d * (Math.cos(turn) - Math.sin(turn)), d * (Math.sin(turn) + Math.cos(turn))];
  if (shadow) {
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = size * weight; pass((ch, ink, turn) => g.strokeText(ch, ...off(turn))); }
    g.fillStyle = shadow; pass((ch, ink, turn) => g.fillText(ch, ...off(turn)));
  }
  if (stroke) { g.strokeStyle = stroke; g.lineWidth = size * weight; pass(ch => g.strokeText(ch, 0, 0)); }
  pass((ch, ink) => { g.fillStyle = ink; g.fillText(ch, 0, 0); });
  g.restore();
  return size;
}

// --- Insert shapes ---------------------------------------------------------------------------------------------
// Origin's lens outlines (studio/src/parts/geometry.js insertOutline): polygons in millimetres, centred, fitted to
// w × l, pointing +y.

export function circleShape(d, steps = 40) {
  return Array.from({ length: steps }, (_, i) => { const a = (i / steps) * Math.PI * 2; return [Math.cos(a) * d / 2, Math.sin(a) * d / 2]; });
}
export function arrowShape(w, l) {
  const shaft = w * 0.4, head = l * 0.44, notch = shaft * 0.42;
  return [[-shaft / 2, -l / 2], [0, -l / 2 + notch], [shaft / 2, -l / 2], [shaft / 2, l / 2 - head], [w / 2, l / 2 - head], [0, l / 2], [-w / 2, l / 2 - head], [-shaft / 2, l / 2 - head]];
}
export function hexagonShape(w, l) {
  return Array.from({ length: 6 }, (_, i) => [Math.cos((i * Math.PI) / 3) * w / 2, Math.sin((i * Math.PI) / 3) * l / 2]);
}
// Five points, the inner corners at 0.45 of the outer.
export function starShape(w, l) {
  return Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 ? 0.45 : 1, a = Math.PI / 2 + (i * Math.PI) / 5;
    return [Math.cos(a) * (w / 2) * r, Math.sin(a) * (l / 2) * r];
  });
}
// A shield: a flat top with clipped corners, its sides curving in to a point toward the player.
export function shieldShape(w, l) {
  const shoulder = -l / 2 + l * 0.45, pts = [[0, -l / 2]];
  for (let i = 1; i <= 8; i++) { const t = i / 8; pts.push([(w / 2) * Math.sin((t * Math.PI) / 2), -l / 2 + (shoulder + l / 2) * (1 - Math.cos((t * Math.PI) / 2))]); }
  pts.push([w / 2, l / 2 - l * 0.08], [w * 0.3, l / 2], [-w * 0.3, l / 2], [-w / 2, l / 2 - l * 0.08]);
  for (let i = 8; i >= 1; i--) { const t = i / 8; pts.push([(-w / 2) * Math.sin((t * Math.PI) / 2), -l / 2 + (shoulder + l / 2) * (1 - Math.cos((t * Math.PI) / 2))]); }
  return pts;
}
const SHAPES = { circle: (w, l) => circleShape(Math.min(w, l)), arrow: arrowShape, hexagon: hexagonShape, star: starShape, shield: shieldShape };

// --- The inserts and what each one means here ---------------------------------------------------------------------

// The four lane inserts are the Skills list; the five top lanes are the Experience timeline; the three standups are
// what the hero says: design it, build it, ship it.
export const SKILL_LEGENDS = ['Web', 'Game', 'Media', 'Fab'];
export const TIMELINE = [
  ['2025', 'Freelance'],
  ['2023', 'Glaser Group'],
  ['2021', 'Origin Beer Lab'],
  ['2018', 'T&B Equipment'],
  ['2018', 'Atlee High'],
];
const TARGET_WORDS = ['Design', 'Build', 'Ship'];

// Every lit insert on the playfield, with Origin's shape and lamp. `group` ties an insert to a station or an
// animation; `legend` and `icon` are printed on the lens.
export function insertList() {
  const role = new Map();
  TOP_LANES.lanes.forEach((l, i) => role.set(l.insert, { group: 'years', index: i, legend: TIMELINE[i][0] }));
  RETURN_LANES.forEach((l, i) => role.set(l.insert, { group: 'skills', index: i, legend: SKILL_LEGENDS[i] }));
  RAMPS.forEach((r, i) => role.set(`${r.side}_ramp_arrow`, { group: 'ramp' + i, index: i }));
  ['left_orbit_arrow', 'right_orbit_arrow'].forEach((id, i) => role.set(id, { group: 'orbit', index: i }));
  TARGETS.list.forEach((t, i) => role.set(t.insert, { group: 'targets', index: i }));
  ['extra_ball_insert', 'lock_insert', 'wizard_insert'].forEach((id, i) => role.set(id, { group: 'ladder', index: i }));
  role.set('saucer_arrow', { group: 'saucer', index: 0 });
  role.set('shoot_again', { group: 'again', index: 0 });
  return INSERTS.map(ins => ({ ...ins, ...(role.get(ins.id) || { group: 'other', index: 0 }), w: ins.width, l: ins.length, kind: ins.shape, shape: SHAPES[ins.shape](ins.width, ins.length) }));
}
// The insert a rollover lights, by its trigger's id (lane0–4, return0–3, orbit0–1).
export function rolloverInsert(trigger) {
  const n = Number(trigger.replace(/\D+/g, ''));
  if (trigger.startsWith('lane')) return TOP_LANES.lanes[n]?.insert;
  if (trigger.startsWith('return')) return RETURN_LANES[n]?.insert;
  if (trigger.startsWith('orbit')) return ['left_orbit_arrow', 'right_orbit_arrow'][n];
  return null;
}

// A lens's print and its moulding, as the lamp shows them: white where the light comes through, grey where the
// starburst moulded into the lens's underside turns it aside, and black ink for the legend. Round lenses, stars,
// hexagons and shields carry a starburst of facets from the middle and a ring near the rim; arrows carry chevrons
// running up them. `size` pixels across the insert's w × l, centred, +y up.
export function drawInsertPrint(ins, size = 128) {
  const c = canvas(size, Math.round((size * ins.l) / ins.w));
  const g = c.getContext('2d');
  const k = size / ins.w, cx = c.width / 2, cy = c.height / 2;
  g.fillStyle = '#fff';
  g.fillRect(0, 0, c.width, c.height);
  const ink = 'rgba(11, 12, 15, 0.94)';
  const s = Math.min(ins.w, ins.l) * k, reach = Math.max(c.width, c.height);
  if (ins.kind === 'arrow') {
    // Chevrons up the arrow, like the ribs of a fluted lens.
    g.strokeStyle = 'rgba(11, 12, 15, 0.2)'; g.lineWidth = k * 1.5; g.lineJoin = 'miter';
    for (let y = c.height + k * 6; y > -k * 8; y -= k * 4.6) { g.beginPath(); g.moveTo(cx - reach, y + reach * 0.8); g.lineTo(cx, y); g.lineTo(cx + reach, y + reach * 0.8); g.stroke(); }
  } else {
    const facets = ins.kind === 'star' ? 20 : ins.kind === 'hexagon' ? 24 : 32, legend = !!(ins.legend || ins.icon);
    for (let i = 0; i < facets; i += 2) {
      g.fillStyle = `rgba(11, 12, 15, ${legend ? 0.12 : 0.17})`;
      g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, reach, (i / facets) * TAU + Math.PI / 2, ((i + 1) / facets) * TAU + Math.PI / 2); g.closePath(); g.fill();
    }
    g.strokeStyle = 'rgba(11, 12, 15, 0.24)'; g.lineWidth = s * 0.03;
    g.beginPath(); g.arc(cx, cy, s * 0.415, 0, TAU); g.stroke();
    if (!legend) { g.beginPath(); g.arc(cx, cy, s * 0.16, 0, TAU); g.stroke(); }
  }
  g.fillStyle = ink; g.strokeStyle = ink; g.lineCap = 'round'; g.lineJoin = 'round';
  if (ins.legend) {
    // The legend on a clear patch of the lens, in the art's own lettering.
    const text = ins.legend.toUpperCase(), year = /^\d+$/.test(text);
    let px = (year ? Math.min(ins.w * 0.3, 5.4) : 4.4) * k;
    setType(g, 'poster', px, 800);
    g.fontStretch = year ? 'expanded' : 'semi-expanded';
    const fit = (ins.w * 0.8 * k) / g.measureText(text).width;
    if (fit < 1) { px *= fit; setType(g, 'poster', px, 800); g.fontStretch = year ? 'expanded' : 'semi-expanded'; }
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.strokeStyle = '#fff'; g.lineWidth = px * 0.5; g.strokeText(text, cx, cy + px * 0.04);
    g.fillText(text, cx, cy + px * 0.04);
    g.strokeStyle = ink;
  }
  if (ins.icon) {
    g.fillStyle = '#fff'; g.beginPath(); g.arc(cx, cy, s * 0.3, 0, TAU); g.fill();
    g.fillStyle = ink;
  }
  if (ins.icon === 'ball') {
    g.lineWidth = s * 0.07;
    g.beginPath(); g.arc(cx, cy, s * 0.23, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.arc(cx - s * 0.07, cy - s * 0.07, s * 0.06, 0, Math.PI * 2); g.fill();
  } else if (ins.icon === 'lock') {
    g.lineWidth = s * 0.07;
    g.beginPath(); g.moveTo(cx - s * 0.13, cy + s * 0.02); g.arc(cx, cy - s * 0.06, s * 0.13, Math.PI, 0); g.lineTo(cx + s * 0.13, cy + s * 0.02); g.stroke();
    g.beginPath(); g.roundRect(cx - s * 0.21, cy, s * 0.42, s * 0.3, s * 0.04); g.fill();
  } else if (ins.icon === 'crown') {
    const w = s * 0.4, h = s * 0.26, y = cy + s * 0.12;
    g.beginPath(); g.moveTo(cx - w / 2, y); g.lineTo(cx - w / 2, y - h); g.lineTo(cx - w / 4, y - h * 0.45); g.lineTo(cx, y - h * 1.15);
    g.lineTo(cx + w / 4, y - h * 0.45); g.lineTo(cx + w / 2, y - h); g.lineTo(cx + w / 2, y); g.closePath(); g.fill();
  }
  return c;
}

// --- Playfield -------------------------------------------------------------------------------------------------

export function drawPlayfield(scale) {
  const c = canvas(PF.w * scale, PF.l * scale);
  const g = c.getContext('2d');
  // Text is set in pixels; shapes are drawn in the playfield's own millimetres, y up the table.
  const X = x => x * scale, Y = y => (PF.l - y) * scale, S = v => v * scale;
  const K = 1; // the keyline, in millimetres
  const mm = fn => { g.save(); g.setTransform(scale, 0, 0, -scale, 0, PF.l * scale); g.lineJoin = 'round'; g.lineCap = 'round'; fn(); g.restore(); };
  const local = (x, y, deg, fn) => mm(() => { g.translate(x, y); g.rotate(deg * DEG); fn(); });
  const inserts = insertList(), byId = Object.fromEntries(inserts.map(i => [i.id, i]));
  const cx = PF.cx;
  const [pcx, pcy] = POPS.reduce((m, p) => [m[0] + p.x / POPS.length, m[1] + p.y / POPS.length], [0, 0]);
  // The sun: centred on the stack of inserts up the middle of the field.
  const stack = ['extra_ball_insert', 'lock_insert', 'wizard_insert'].map(id => byId[id]);
  const SUN = { x: cx, y: (stack[0].y - stack[0].l / 2 + stack[2].y + stack[2].l / 2) / 2, core: 60, band: 75, body: 134, amp: 19 };
  const lens = ins => polygon(ins.shape);

  // 1. The field: black.
  g.fillStyle = INK.field;
  g.fillRect(0, 0, c.width, c.height);

  // 2. The sun's halo, printed as a halftone: rings of dots shrinking away from it into the black.
  mm(() => {
    for (let r = SUN.body + SUN.amp + 8, i = 0; i < 9; r += 6.2, i++) {
      const n = Math.round((TAU * r) / 6.4), size = 2.1 * (1 - i / 9.6);
      g.fillStyle = i < 3 ? INK.royal : i < 6 ? INK.deep : INK.navy;
      for (let k = 0; k < n; k++) g.fill(circlePath(...polar(SUN.x, SUN.y, r, ((k + (i % 2) / 2) / n) * TAU), size));
    }
  });

  // 3. Crescents rolling out from the pops, as on the cabinet: scalloped discs, each larger one pushed further up the
  // table, so the blue between them is a stack of crescents, thin by the standups and fat under the top arch.
  mm(() => {
    const bands = [[278, INK.navy], [246, INK.field], [216, INK.deep], [188, INK.field], [162, INK.navy], [138, INK.field]];
    for (const [R, ink] of bands) {
      const y = pcy + (R - 112) * 0.93, p = scallopPath(pcx, y, R, Math.round(R / 7.2), 3.4);
      g.fillStyle = ink; g.fill(p);
      if (ink === INK.field) continue;
      g.strokeStyle = INK.k; g.lineWidth = K; g.stroke(p);
      g.strokeStyle = ink === INK.deep ? INK.ice : INK.light; g.lineWidth = 0.7; g.stroke(scallopPath(pcx, y, R - 5, Math.round(R / 7.2), 3.4));
    }
  });

  // 4. About: the pops stand on a royal disc with a white starburst behind them, each in a ring of spikes of its own.
  mm(() => {
    const disc = scallopPath(pcx, pcy, 112, 28, 3.6);
    printShape(g, disc, { fill: INK.royal, rim: INK.white, rimW: 2.2, key: K });
    g.save(); g.clip(disc);
    g.fillStyle = INK.deep;
    for (let i = 0; i < 14; i++) g.fill(polygon([[pcx, pcy], polar(pcx, pcy, 130, (i * TAU) / 14), polar(pcx, pcy, 130, ((i + 0.5) * TAU) / 14)]));
    g.restore();
    printShape(g, burstPath(pcx, pcy, 70, 97, 14, Math.PI / 2), { fill: INK.white, key: K });
    printShape(g, burstPath(pcx, pcy, 62, 86, 14, Math.PI / 2 + Math.PI / 14), { fill: INK.ice, key: K });
    printShape(g, circlePath(pcx, pcy, 68), { fill: INK.navy, key: K });
    for (const p of POPS) printShape(g, burstPath(p.x, p.y, 35.5, 43, 18, Math.PI / 2), { fill: INK.white, key: K });
    for (const p of POPS) printShape(g, circlePath(p.x, p.y, 35.5), { fill: INK.k, key: 0 });
    for (const p of POPS) { g.strokeStyle = INK.royal; g.lineWidth = 1.4; g.stroke(circlePath(p.x, p.y, 33)); }
  });

  // 5. The lanes. Up each orbit, a ribbon of stripes from its arrow; up the shooter lane, chevrons brightening toward
  // the top.
  mm(() => {
    for (const id of ['left_orbit_arrow', 'right_orbit_arrow']) {
      const a = byId[id], r = a.angle * DEG, dir = [-Math.sin(r), Math.cos(r)], x = a.x < cx ? 26 : 2 * cx - 26;
      const p = new Path2D();
      p.moveTo(a.x - dir[0] * 6, a.y - dir[1] * 6);
      p.bezierCurveTo(a.x + dir[0] * 48, a.y + dir[1] * 48, x, 652, x, 700);
      p.lineTo(x, 948);
      g.lineCap = 'butt';
      for (const [w, ink] of [[25.5, INK.k], [23.5, INK.navy], [17, INK.deep], [11, INK.royal], [5.4, INK.light], [1.6, INK.white]]) { g.strokeStyle = ink; g.lineWidth = w; g.stroke(p); }
    }
    const mid = (SHOOTER.laneLeft + SHOOTER.laneRight) / 2;
    const ramp = [INK.navy, INK.navy, INK.navy, INK.deep, INK.deep, INK.deep, INK.royal, INK.royal, INK.royal, INK.light, INK.light, INK.light, INK.ice, INK.ice, INK.ice, INK.white, INK.white, INK.white, INK.white, INK.white, INK.white];
    for (let y = 132, i = 0; y < 790; y += 33, i++) {
      printShape(g, polygon([[mid - 11.5, y], [mid, y + 11.5], [mid + 11.5, y], [mid + 11.5, y + 9.5], [mid, y + 21], [mid - 11.5, y + 9.5]]), { fill: ramp[i], key: K * 0.8 });
    }
  });

  // 6. The sun. A body of flames with a white rim, its rays swirling out of the middle in two blues with white
  // needles between them; then the white band the names are lettered round; then the black middle, ringed with
  // flames turned inward, where the inserts stand.
  const swirl = (a, r) => a + 0.34 * ((r - SUN.band) / (SUN.body - SUN.band)) ** 2;
  const sweep = (a0, a1, r0, r1, taper = 0, steps = 10) => {
    const pts = [];
    for (let i = 0; i <= steps; i++) { const t = i / steps, r = r0 + (r1 - r0) * t; pts.push(polar(SUN.x, SUN.y, r, swirl(a0 + (a1 - a0) * 0.5 * taper * t, r))); }
    for (let i = steps; i >= 0; i--) { const t = i / steps, r = r0 + (r1 - r0) * t; pts.push(polar(SUN.x, SUN.y, r, swirl(a1 - (a1 - a0) * 0.5 * taper * t, r))); }
    return polygon(pts);
  };
  mm(() => {
    const body = flameRingPath(SUN.x, SUN.y, SUN.body, SUN.amp, 24, { phase: Math.PI / 24, lean: 0.2 });
    printShape(g, body, { fill: INK.royal, rim: INK.white, rimW: 2.6, key: K });
    g.save(); g.clip(body);
    g.fillStyle = INK.deep;
    for (let i = 0; i < 24; i += 2) g.fill(sweep((i * TAU) / 24, ((i + 1) * TAU) / 24, SUN.band, SUN.body + SUN.amp + 4));
    g.restore();
    g.strokeStyle = INK.k; g.lineWidth = K; g.stroke(body);
    for (let i = 0; i < 24; i++) {
      const a = (i * TAU) / 24, long = i % 2 === 0, w = (long ? 3.4 : 2.2) * DEG;
      printShape(g, sweep(a - w, a + w, SUN.band + 2, long ? SUN.body - 6 : SUN.body - 30, 1), { fill: long ? INK.white : INK.ice, key: K * 0.7 });
    }
    printShape(g, circlePath(SUN.x, SUN.y, SUN.band), { fill: INK.white, key: K });
    printShape(g, circlePath(SUN.x, SUN.y, SUN.core), { fill: INK.k, key: 0 });
    // Flames turned inward off the band, in two rows; none where the star and the ball stand close to it.
    for (const [n, depth, ink, phase] of [[30, 7, INK.royal, 0.5], [30, 10.5, INK.ice, 0]]) {
      for (let i = 0; i < n; i++) {
        const a = ((i + phase) * TAU) / n;
        if (Math.abs(Math.cos(a)) < 0.42) continue;
        g.fillStyle = ink;
        g.fill(polygon([polar(SUN.x, SUN.y, SUN.core + 0.3, a - 0.085), polar(SUN.x, SUN.y, SUN.core - depth, a + 0.03), polar(SUN.x, SUN.y, SUN.core + 0.3, a + 0.085)]));
      }
    }
    g.strokeStyle = INK.k; g.lineWidth = K; g.stroke(circlePath(SUN.x, SUN.y, SUN.core));
  });
  // The names round the band: the case studies over the top, each beside its ramp's arrow, and the address under.
  {
    const r = S((SUN.core + SUN.band) / 2), ax = X(SUN.x), ay = Y(SUN.y), size = S(8.2), on = { fill: INK.k, stroke: null, shadow: null, track: 0.07 };
    arcText(g, '01 Deadbounce', ax, ay, r, 119 * DEG, size, { ...on, fills: [[2, INK.royal]], maxSpan: 50 * DEG });
    arcText(g, '02 Tip Top', ax, ay, r, 62 * DEG, size, { ...on, fills: [[2, INK.royal]], maxSpan: 44 * DEG });
    arcText(g, 'dylanhughes.dev', ax, ay, r, 270 * DEG, S(7.2), { ...on, under: true, maxSpan: 72 * DEG });
    mm(() => {
      g.fillStyle = INK.royal;
      for (const [a, r] of [[89, 4.4], [205, 5.6], [335, 5.6]]) g.fill(twinklePath(...polar(SUN.x, SUN.y, (SUN.core + SUN.band) / 2, a * DEG), r));
      g.fillStyle = INK.k;
      for (const a of [180, 0, 222, 318]) g.fill(circlePath(...polar(SUN.x, SUN.y, (SUN.core + SUN.band) / 2, a * DEG), 1.5));
    });
  }

  // 7. Every insert in a flame of its own. The lane inserts' flames trail down their lanes; the standups' carry a
  // word each; the arrows fly out of the sun as comets, trailing flame behind them.
  const flame = (ins, R, L, opts = {}) => local(ins.x, ins.y, opts.turn || 0, () => {
    const p = flamePath(R, L, opts);
    printShape(g, p, { fill: opts.fill || INK.royal, rim: INK.white, rimW: 1.7, key: K });
    // A second, lighter flame inside the first, low in its body.
    g.save(); g.clip(p);
    g.translate(0, -L * 0.3); g.scale(0.56, 0.72);
    g.fillStyle = opts.core || INK.light; g.fill(flamePath(R, L, opts));
    g.restore();
    g.strokeStyle = INK.k; g.lineWidth = K * 0.8; g.stroke(p);
  });
  for (const ins of inserts) {
    if (ins.group === 'years') flame(ins, ins.w / 2 + 5.6, 42, { sway: ins.index % 2 ? -0.2 : 0.2 });
    else if (ins.group === 'skills') flame(ins, ins.w / 2 + 5, 56, { spread: 0.92, sway: ins.x < cx ? 0.2 : -0.2 });
    else if (ins.group === 'targets') flame(ins, ins.w / 2 + 5, 60, { neck: 0.64, spread: 0.9, sway: (ins.index - 1) * 0.3 });
  }
  const comet = (ins, grow, tail) => local(ins.x, ins.y, ins.angle, () => {
    const body = lens(ins), trail = moved(flamePath(ins.w * 0.2, tail, { spread: 1.5 }), 0, -ins.l / 2 + 5);
    printShape(g, [trail, body], { fill: INK.white, rimW: grow, key: K });
    g.fillStyle = INK.ice; g.fill(moved(flamePath(ins.w * 0.14, tail * 0.86, { spread: 1.5 }), 0, -ins.l / 2 + 2));
  });
  comet(byId.left_ramp_arrow, 5.6, 34);
  comet(byId.right_ramp_arrow, 5.6, 34);
  comet(byId.left_orbit_arrow, 3.8, 26);
  comet(byId.right_orbit_arrow, 3.8, 26);
  comet(byId.saucer_arrow, 3.6, 0.01);
  // Shoot again, between the flippers: a teardrop drawn up to a point toward the name, in front of a sun rising out
  // of the drain.
  const again = byId.shoot_again;
  mm(() => {
    const ox = cx, oy = 92, R = 134, rise = scallopPath(ox, oy, R, 26, 3.4);
    printShape(g, rise, { fill: INK.navy, rim: INK.royal, rimW: 1.6, key: K });
    g.save(); g.clip(rise);
    g.fillStyle = INK.deep;
    for (let i = 0; i < 13; i++) g.fill(polygon([[ox, oy], polar(ox, oy, R + 8, (i * Math.PI) / 13), polar(ox, oy, R + 8, ((i + 0.5) * Math.PI) / 13)]));
    for (const [r, ink] of [[62, INK.royal], [50, INK.light], [38, INK.white]]) printShape(g, circlePath(ox, oy, r), { fill: ink, key: K });
    g.restore();
  });
  local(again.x, again.y, 0, () => {
    const drop = teardropPath(25, 88);
    printShape(g, drop, { fill: INK.royal, rim: INK.white, rimW: 2, key: K });
    g.save(); g.clip(drop);
    g.fillStyle = INK.deep; g.fill(teardropPath(17, 70));
    g.fillStyle = INK.navy; g.fill(moved(teardropPath(9, 46), 0, 6));
    g.restore();
  });

  // 8. Each lens in a black bezel; the ones on the sun's black middle get a fine ice ring instead.
  for (const ins of inserts) local(ins.x, ins.y, ins.angle, () => {
    const p = lens(ins);
    g.strokeStyle = INK.k; g.lineWidth = 4.4; g.stroke(p);
    g.fillStyle = INK.k; g.fill(p);
    if (ins.group === 'ladder') { g.strokeStyle = INK.ice; g.lineWidth = 5.6; g.stroke(p); g.strokeStyle = INK.k; g.lineWidth = 4.2; g.stroke(p); }
  });

  // 9. Lettering. The standups' words in their flames; the stack's names beside it; About under the pops; Skills on
  // a ribbon across the field between the lane inserts; Experience arched over the top lanes' years; Contact in the
  // teardrop under the shield; Launch up the shooter lane.
  const small = { weight: 0.24, shadow: null };
  TARGETS.list.forEach((t, i) => { const ins = byId[t.insert]; poster(g, TARGET_WORDS[i], X(ins.x), Y(ins.y - 26.5), S(3.5), small); });
  ['Extra ball', 'Lock', 'Wizard'].forEach((name, i) => {
    const ins = stack[i];
    poster(g, name, X(ins.x - ins.w / 2 - 6), Y(ins.y), S(3.5), { ...small, fill: INK.ice, align: 'right' });
    mm(() => { g.fillStyle = INK.white; g.fill(twinklePath(ins.x + ins.w / 2 + 12, ins.y, 5 - i * 0.6)); g.fillStyle = INK.light; g.fill(twinklePath(ins.x + ins.w / 2 + 23, ins.y + (i - 1) * 3, 2.6)); });
  });
  arcText(g, '03 About', X(pcx), Y(pcy), S(104.5), 124 * DEG, S(7), { fills: [[2, INK.ice]], weight: 0.2, track: 0.08 });
  arcText(g, 'Player one', X(pcx), Y(pcy), S(104.5), 56 * DEG, S(7), { weight: 0.2, track: 0.08 });
  {
    // The ribbon: a band bowed up in the middle, its swallow tails folded back behind it.
    const y = RETURN_LANES[0].insertY + 1, half = 58;
    mm(() => {
      for (const k of [-1, 1]) {
        printShape(g, polygon([[cx + k * (half - 10), y + 3.5], [cx + k * (half + 20), y + 1.5], [cx + k * (half + 13), y - 5], [cx + k * (half + 20), y - 11.5], [cx + k * (half - 10), y - 9.5]]), { fill: INK.light, key: K });
        printShape(g, polygon([[cx + k * half, y - 7.6], [cx + k * (half - 10), y - 9.5], [cx + k * (half - 10), y - 3]]), { fill: INK.navy, key: K * 0.7 });
      }
      const band = new Path2D();
      band.moveTo(cx - half, y + 6.4); band.quadraticCurveTo(cx, y + 12.4, cx + half, y + 6.4);
      band.lineTo(cx + half, y - 7.6); band.quadraticCurveTo(cx, y - 1.6, cx - half, y - 7.6); band.closePath();
      printShape(g, band, { fill: INK.white, key: K });
    });
    const r = (half * half + 9) / 6;
    arcText(g, '04 Skills', X(cx), Y(y + 2.2 - r), S(r), 90 * DEG, S(9.4), { fill: INK.k, stroke: null, shadow: null, fills: [[2, INK.royal]], track: 0.08 });
  }
  arcText(g, '05 Experience', X(236), Y(760), S(291.5), 90 * DEG, S(7.4), { fills: [[2, INK.ice]], track: 0.12 });
  poster(g, '06 Contact', X(again.x), Y(again.y - again.l / 2 - 6), S(3.3), { ...small, fill: INK.white });
  poster(g, 'Shoot', X(again.x), Y(again.y + 26), S(3.4), { ...small, fill: INK.ice });
  poster(g, 'again', X(again.x), Y(again.y + 21), S(3.4), { ...small, fill: INK.ice });
  g.save();
  g.translate(X((SHOOTER.laneLeft + SHOOTER.laneRight) / 2), Y(872)); g.rotate(-Math.PI / 2);
  poster(g, 'Launch', 0, 0, S(6), { weight: 0.2, drop: 0.1 });
  g.restore();

  // 10. The name between the slings, arched like a marquee over the dot-matrix DH, with a string of chrome balls
  // either side.
  {
    const ax = X(cx), ay = Y(126);
    arcText(g, 'Dylan Hughes', ax, ay, S(166), 90 * DEG, S(18), { maxSpan: 61 * DEG, weight: 0.15, drop: 0.1, track: 0.03 });
    arcText(g, 'The portfolio of', ax, ay, S(184.5), 90 * DEG, S(3.6), { fill: INK.ice, stroke: null, shadow: null, kind: 'mono', track: 0.22, fontWeight: 600 });
    dotMark(g, ax, Y(263), S(2.4), INK.royal, WHITE(0.07));
    label(g, ax, Y(246.5), 'Creative technologist', S(2.9), INK.white, 'mono');
    label(g, ax, Y(240.5), 'Richmond · Virginia', S(2.5), LIGHT(1), 'mono');
    mm(() => {
      for (const k of [-1, 1]) {
        g.fillStyle = INK.white; g.fill(twinklePath(cx + k * 26, 263, 6.4));
        [[46, 262, 5.2], [59, 268, 4], [70, 276, 3], [79, 285, 2.2]].forEach(([dx, y, r]) => orb(g, cx + k * dx, y, r));
      }
    });
  }

  // 11. Stars in the black, and the standups' sparks.
  mm(() => {
    const stars = [
      [64, 452, 7, INK.white], [52, 425, 3.4, INK.light], [78, 478, 3, INK.ice], [410, 452, 7, INK.white], [422, 425, 3.4, INK.light], [396, 478, 3, INK.ice],
      [150, 322, 4, INK.light], [324, 322, 4, INK.light], [22, 262, 4.5, INK.white], [452, 262, 4.5, INK.white], [28, 236, 2.4, INK.light], [446, 236, 2.4, INK.light],
      [92, 1034, 6, INK.white], [72, 1012, 3, INK.light], [382, 1034, 6, INK.white], [402, 1012, 3, INK.light], [110, 1050, 2.4, INK.ice], [364, 1050, 2.4, INK.ice],
      [156, 708, 4.4, INK.white], [318, 708, 4.4, INK.white],
    ];
    for (const [x, y, r, ink] of stars) { g.fillStyle = ink; g.fill(twinklePath(x, y, r)); }
  });

  return c;
}

// The dot-matrix DH: two 4 × 5 glyphs of lit dots, centred on (x, y), `dot` pixels apart.
const DH_GLYPHS = [['1110', '1001', '1001', '1001', '1110'], ['1001', '1001', '1111', '1001', '1001']];
function dotMark(g, x, y, dot, on, off) {
  const x0 = x - (9 * dot) / 2, y0 = y - (5 * dot) / 2;
  DH_GLYPHS.forEach((glyph, k) => glyph.forEach((row, j) => [...row].forEach((lit, i) => {
    g.fillStyle = lit === '1' ? on : off;
    g.beginPath(); g.arc(x0 + (k * 5 + i + 0.5) * dot, y0 + (j + 0.5) * dot, dot * 0.36, 0, Math.PI * 2); g.fill();
  })));
}

function label(g, x, y, text, size, color, kind, align = 'center') {
  g.save();
  g.fillStyle = color;
  g.textAlign = align;
  g.textBaseline = 'middle';
  setType(g, kind === 'display' ? 'display' : 'mono', size);
  if (kind !== 'display') text = text.toUpperCase();
  g.fillText(text, x, y);
  g.restore();
}

// The cabinet's stencil: a crescent scale in white and two blues on the black. [radius, push, ink] as fractions.
const STENCIL = [[1, 0, INK.white], [0.9, 0.06, INK.royal], [0.66, 0.2, INK.field], [0.58, 0.25, INK.white], [0.5, 0.3, INK.deep], [0.3, 0.42, INK.field]];
// The same on blue, where the black would be lost: the gaps printed navy.
const STENCIL_ON_BLUE = STENCIL.map(([r, push, ink]) => [r, push, ink === INK.field ? INK.navy : ink]);

// --- Translite --------------------------------------------------------------------------------------------------
// The backbox's translite, `width` wide at the glass's 1.32 : 1, printed to be lit from behind: the playfield's sun
// rising in the middle of it with the dot-matrix DH in its black heart, rays swirling out to the corners, the name
// arched over it like a marquee and the title on a ribbon under it.
export function drawBackglass(width) {
  const height = Math.round(width / 1.32);
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 1320, K = 5 * u;
  const cx = width / 2, cy = 590 * u;
  g.fillStyle = INK.field;
  g.fillRect(0, 0, width, height);
  g.lineJoin = 'round';

  // Rays to the corners, swirling, in navy on the black; then a halftone round the sun.
  const swirl = (a, r) => a + 0.5 * (r / (1100 * u)) ** 1.5;
  const sweep = (a0, a1, r0, r1, taper = 0, steps = 14) => {
    const pts = [];
    for (let i = 0; i <= steps; i++) { const t = i / steps, r = r0 + (r1 - r0) * t; pts.push(polar(cx, cy, r, swirl(a0 + (a1 - a0) * 0.5 * taper * t, r))); }
    for (let i = steps; i >= 0; i--) { const t = i / steps, r = r0 + (r1 - r0) * t; pts.push(polar(cx, cy, r, swirl(a1 - (a1 - a0) * 0.5 * taper * t, r))); }
    return polygon(pts);
  };
  g.fillStyle = INK.navy;
  for (let i = 0; i < 28; i += 2) g.fill(sweep((i * TAU) / 28, ((i + 1) * TAU) / 28, 0, 1100 * u));
  for (let r = 372 * u, i = 0; i < 8; r += 17 * u, i++) {
    const n = Math.round((TAU * r) / (17.5 * u));
    g.fillStyle = i < 3 ? INK.royal : INK.deep;
    for (let k = 0; k < n; k++) g.fill(circlePath(...polar(cx, cy, r, ((k + (i % 2) / 2) / n) * TAU), 5.6 * u * (1 - i / 9)));
  }
  // Crescents rolling in from the lower corners, as on the cabinet.
  for (const s of [-1, 1]) {
    scaleMotif(g, cx + s * 700 * u, height + 40 * u, 330 * u, s > 0 ? -2.2 : -0.94, STENCIL, K * 0.8);
    scaleMotif(g, cx + s * 470 * u, height + 150 * u, 250 * u, s > 0 ? -2.2 : -0.94, STENCIL, K * 0.8);
  }

  // The sun.
  const body = flameRingPath(cx, cy, 262 * u, 44 * u, 24, { phase: Math.PI / 24, lean: 0.2 });
  printShape(g, body, { fill: INK.royal, rim: INK.white, rimW: 9 * u, key: K });
  g.save(); g.clip(body);
  g.fillStyle = INK.deep;
  for (let i = 0; i < 24; i += 2) g.fill(sweep((i * TAU) / 24, ((i + 1) * TAU) / 24, 0, 330 * u));
  g.restore();
  g.strokeStyle = INK.k; g.lineWidth = K; g.stroke(body);
  for (let i = 0; i < 24; i++) {
    const a = (i * TAU) / 24, long = i % 2 === 0, w = (long ? 3.6 : 2.4) * DEG;
    printShape(g, sweep(a - w, a + w, 150 * u, (long ? 250 : 205) * u, 1), { fill: long ? INK.white : INK.ice, key: K * 0.7 });
  }
  printShape(g, circlePath(cx, cy, 158 * u), { fill: INK.white, key: K });
  printShape(g, circlePath(cx, cy, 136 * u), { fill: INK.k, key: 0 });
  for (const [depth, ink, phase] of [[17, INK.royal, 0.5], [26, INK.ice, 0]]) {
    g.fillStyle = ink;
    for (let i = 0; i < 30; i++) {
      const a = ((i + phase) * TAU) / 30;
      g.fill(polygon([polar(cx, cy, 137 * u, a - 0.085), polar(cx, cy, (136 - depth) * u, a + 0.03), polar(cx, cy, 137 * u, a + 0.085)]));
    }
  }
  g.strokeStyle = INK.k; g.lineWidth = K; g.stroke(circlePath(cx, cy, 136 * u));
  // The mark in its heart, glowing: lit dots with their unlit neighbours faintly printed, as on the display.
  const dot = 19 * u;
  g.save();
  g.shadowColor = ROYAL(1); g.shadowBlur = 26 * u;
  dotMark(g, cx, cy, dot, ROYAL(1), 'rgba(0,0,0,0)');
  g.restore();
  dotMark(g, cx, cy, dot, PALETTE.ice, WHITE(0.07));

  // The name, arched over the sun; the title on a ribbon across its foot; the model under that.
  arcText(g, 'Dylan Hughes', cx, cy, 432 * u, 90 * DEG, 112 * u, { maxSpan: 150 * DEG, weight: 0.15, drop: 0.085, track: 0.04, shadow: INK.royal });
  {
    const y = 884 * u, half = 250 * u;
    for (const k of [-1, 1]) {
      printShape(g, polygon([[cx + k * (half - 40 * u), y - 20 * u], [cx + k * (half + 78 * u), y - 12 * u], [cx + k * (half + 52 * u), y + 16 * u], [cx + k * (half + 78 * u), y + 46 * u], [cx + k * (half - 40 * u), y + 38 * u]]), { fill: INK.light, key: K });
      printShape(g, polygon([[cx + k * half, y + 30 * u], [cx + k * (half - 40 * u), y + 38 * u], [cx + k * (half - 40 * u), y + 8 * u]]), { fill: INK.navy, key: K * 0.7 });
    }
    const band = new Path2D();
    band.moveTo(cx - half, y - 30 * u); band.quadraticCurveTo(cx, y - 52 * u, cx + half, y - 30 * u);
    band.lineTo(cx + half, y + 30 * u); band.quadraticCurveTo(cx, y + 8 * u, cx - half, y + 30 * u); band.closePath();
    printShape(g, band, { fill: INK.white, key: K });
    const r = (half * half + (22 * u) ** 2) / (44 * u);
    arcText(g, 'The portfolio', cx, y - 11 * u + r, r, 90 * DEG, 40 * u, { fill: INK.k, stroke: null, shadow: null, track: 0.1 });
  }
  label(g, cx, 941 * u, 'Model DH-26 · Richmond, Virginia', 14 * u, PALETTE.ice, 'mono');
  for (const [x, y, r, ink] of [[150, 120, 34, INK.white], [226, 204, 14, INK.light], [1170, 120, 34, INK.white], [1094, 204, 14, INK.light], [110, 470, 18, INK.ice], [1210, 470, 18, INK.ice]]) {
    g.fillStyle = ink; g.fill(twinklePath(x * u, y * u, r * u, { rot: 0 }));
  }

  // The frame: a white line with a fine ice one inside it.
  g.strokeStyle = INK.k; g.lineWidth = 16 * u; g.beginPath(); g.roundRect(26 * u, 26 * u, width - 52 * u, height - 52 * u, 34 * u); g.stroke();
  g.strokeStyle = INK.white; g.lineWidth = 7 * u; g.beginPath(); g.roundRect(26 * u, 26 * u, width - 52 * u, height - 52 * u, 34 * u); g.stroke();
  g.strokeStyle = PALETTE.light; g.lineWidth = 2 * u; g.beginPath(); g.roundRect(42 * u, 42 * u, width - 84 * u, height - 84 * u, 22 * u); g.stroke();
  return c;
}

// --- Backbox LCD pictures ------------------------------------------------------------------------------------------
// What the backbox's LCD shows for a section, `width` wide at the glass's 1.32 : 1.

// A case study's screenshot filling the screen, cropped to fit and held on `focus` (0–1 across and down it).
export function drawScreenPhoto(img, width, focus = [0.5, 0.5]) {
  const c = canvas(width, width / 1.32), g = c.getContext('2d');
  g.fillStyle = PALETTE.black;
  g.fillRect(0, 0, c.width, c.height);
  const k = Math.max(c.width / img.naturalWidth, c.height / img.naturalHeight), w = img.naturalWidth * k, h = img.naturalHeight * k;
  g.imageSmoothingQuality = 'high';
  g.drawImage(img, (c.width - w) * focus[0], (c.height - h) * focus[1], w, h);
  return c;
}

// About's player card, as a game puts up between balls: the portrait at full height on the right, fading into the
// black, with the translite's rays turning behind it, and at the left the player, the name and the place.
export function drawPlayerCard(img, width) {
  const height = Math.round(width / 1.32), c = canvas(width, height), g = c.getContext('2d'), u = width / 1320;
  g.fillStyle = INK.field;
  g.fillRect(0, 0, width, height);
  // Rays from behind the portrait, in navy on the black.
  const ox = width * 0.74, oy = height * 0.46;
  g.fillStyle = INK.navy;
  for (let i = 0; i < 28; i += 2) g.fill(polygon([[ox, oy], polar(ox, oy, width * 1.2, (i * TAU) / 28), polar(ox, oy, width * 1.2, ((i + 1) * TAU) / 28)]));
  // The photo's own edge fades out (its alpha, not a black wash), so it melts into the print behind it.
  const ph = height, pw = Math.round((img.naturalWidth / img.naturalHeight) * ph), px = width - pw;
  const photo = canvas(pw, ph), pg = photo.getContext('2d');
  pg.imageSmoothingQuality = 'high';
  pg.drawImage(img, 0, 0, pw, ph);
  pg.globalCompositeOperation = 'destination-in';
  const fade = pg.createLinearGradient(0, 0, pw * 0.45, 0);
  fade.addColorStop(0, 'rgba(0, 0, 0, 0)'); fade.addColorStop(0.5, 'rgba(0, 0, 0, 0.6)'); fade.addColorStop(1, 'rgba(0, 0, 0, 1)');
  pg.fillStyle = fade;
  pg.fillRect(0, 0, pw, ph);
  g.drawImage(photo, px, 0);
  const x = 96 * u;
  // The site's label rule: a hairline with a short royal bar at its start.
  g.fillStyle = WHITE(0.18); g.fillRect(x, height * 0.3, 420 * u, 1.5 * u);
  g.fillStyle = ROYAL(1); g.fillRect(x, height * 0.3 - 1.5 * u, 44 * u, 4.5 * u);
  label(g, x, height * 0.3 + 40 * u, 'Player 1', 22 * u, LIGHT(1), 'mono', 'left');
  poster(g, 'Dylan', x, height * 0.48, 112 * u, { align: 'left', weight: 0.1, drop: 0.07 });
  poster(g, 'Hughes', x, height * 0.48 + 118 * u, 112 * u, { align: 'left', weight: 0.1, drop: 0.07 });
  label(g, x, height * 0.48 + 214 * u, 'Richmond, Virginia', 22 * u, GREY(0.95), 'mono', 'left');
  g.fillStyle = INK.white; g.fill(twinklePath(x + 14 * u, height * 0.16, 22 * u, { rot: 0 }));
  g.fillStyle = INK.light; g.fill(twinklePath(x + 58 * u, height * 0.205, 9 * u, { rot: 0 }));
  return c;
}

// --- Cabinet, apron and targets ----------------------------------------------------------------------------------

// A cabinet side, `width` from the back (x = 0) to the front, `height` from the top edge down to the bottom at the
// back. The bottom is level in the world, so it rises toward the front to `frontBottom` of the height. Stencilled, as
// cabinets were: black paint, and a row of crescent scales in white and blue rolling along the bottom toward the
// front, growing toward the back so their crests run level; the name lettered in the black over them, a blue stripe
// and a white pinstripe under the top edge, and the mark in a starburst under the backbox.
export function drawCabinetSide(width, height, { frontBottom = 0.77 } = {}) {
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = height / 768;
  const bottomAt = x => height - (height - frontBottom * height) * (x / width);
  g.fillStyle = INK.field;
  g.fillRect(0, 0, width, height);
  g.lineJoin = 'round';
  // The scales, from the front back, each over the one before it: what shows of each is its fat front crescent.
  for (let x = width + 40 * u; x > -260 * u;) {
    const R = height * (0.2 + 0.17 * (1 - Math.max(0, x) / width));
    scaleMotif(g, x, bottomAt(x) - R * 0.5, R, Math.PI - 0.42, STENCIL, 4 * u);
    x -= R * 0.84;
  }
  // Under the top edge: a blue stripe and a white pinstripe.
  g.fillStyle = INK.royal; g.fillRect(0, height * 0.034, width, height * 0.026);
  g.fillStyle = INK.white; g.fillRect(0, height * 0.072, width, height * 0.007);
  // The name over the scales, toward the front, with the trade under it.
  const lx = width * 0.6, size = Math.min(height * 0.15, width * 0.056);
  poster(g, 'Dylan Hughes', lx, height * 0.235, size, { weight: 0.1, drop: 0.075 });
  label(g, lx, height * 0.235 + size * 0.86, 'Creative technologist · Richmond, Virginia', size * 0.2, PALETTE.ice, 'mono');
  for (const [x, y, r, ink] of [[0.262, 0.19, 0.05, INK.white], [0.284, 0.3, 0.02, INK.light], [0.938, 0.19, 0.05, INK.white], [0.916, 0.3, 0.02, INK.light]]) {
    g.fillStyle = ink; g.fill(twinklePath(width * x, height * y, height * r, { rot: 0 }));
  }
  // The mark in a starburst, in the black under the backbox.
  {
    const mx = width * 0.115, my = height * 0.265, R = height * 0.125;
    printShape(g, burstPath(mx, my, R * 0.86, R * 1.12, 28, 0), { fill: INK.white, key: 4 * u });
    printShape(g, circlePath(mx, my, R * 0.8), { fill: INK.royal, key: 4 * u });
    dotMark(g, mx, my, R * 0.135, INK.white, 'rgba(6, 7, 10, 0.2)');
  }
  return c;
}

// The cabinet's front, `width` across by `height`: the sides' scales rolling in from both corners toward the coin door
// (which covers the middle), the name lettered across the top, and the same stripes under the top edge.
export function drawCabinetFront(width, height) {
  const c = canvas(width, height), g = c.getContext('2d'), u = height / 512;
  g.fillStyle = INK.field;
  g.fillRect(0, 0, width, height);
  g.lineJoin = 'round';
  for (const s of [-1, 1]) {
    const edge = width / 2 + (s * width) / 2;
    for (const [dx, y, R] of [[0.02, 0.86, 0.5], [0.2, 0.98, 0.4], [0.36, 1.08, 0.32]]) {
      scaleMotif(g, edge - s * dx * width, height * y, height * R, s > 0 ? -0.5 : Math.PI + 0.5, STENCIL, 3 * u);
    }
  }
  g.fillStyle = INK.royal; g.fillRect(0, height * 0.03, width, height * 0.03);
  g.fillStyle = INK.white; g.fillRect(0, height * 0.075, width, height * 0.008);
  poster(g, 'Dylan Hughes', width * 0.52, height * 0.168, height * 0.092, { weight: 0.12, drop: 0.08 });
  return c;
}

// A backbox side, `width` deep by `height`: a column of scales stacked like bowls between two blue stripes.
export function drawBackboxSide(width, height) {
  const c = canvas(width, height), g = c.getContext('2d'), u = width / 256;
  g.fillStyle = INK.field;
  g.fillRect(0, 0, width, height);
  const R = width * 0.4;
  for (let y = height + R * 0.1; y > -R; y -= R * 0.92) scaleMotif(g, width / 2, y, R, -Math.PI / 2, STENCIL, 2.6 * u);
  for (const x of [0.045, 0.955]) {
    g.fillStyle = INK.royal; g.fillRect(width * x - width * 0.02, 0, width * 0.04, height);
  }
  for (const x of [0.105, 0.895]) { g.fillStyle = INK.white; g.fillRect(width * x - width * 0.006, 0, width * 0.012, height); }
  return c;
}

// The apron's cards, printed as cards were: black and blue on white stock, a headline in the art's lettering, and a
// rule of stars.
export function drawApronCard(kind, width) {
  const height = Math.round(width * (3.5 / 6.25));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 625;
  g.fillStyle = PALETTE.paper;
  g.fillRect(0, 0, width, height);
  g.lineJoin = 'round';
  g.strokeStyle = INK.k; g.lineWidth = 4 * u;
  g.beginPath(); g.roundRect(13 * u, 13 * u, width - 26 * u, height - 26 * u, 12 * u); g.stroke();
  g.strokeStyle = INK.royal; g.lineWidth = 2 * u;
  g.beginPath(); g.roundRect(21 * u, 21 * u, width - 42 * u, height - 42 * u, 7 * u); g.stroke();
  const stars = (y, n, gap) => { for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? INK.k : INK.royal; g.fill(twinklePath(width / 2 + (i - (n - 1) / 2) * gap * u, y * u, 8 * u, { rot: 0 })); } };
  if (kind === 'instructions') {
    // A blue header with the headline reversed out of it.
    g.fillStyle = INK.royal; g.beginPath(); g.roundRect(30 * u, 30 * u, width - 60 * u, 62 * u, 5 * u); g.fill();
    g.strokeStyle = INK.k; g.lineWidth = 3 * u; g.stroke();
    poster(g, 'How to play', width / 2, 62 * u, 34 * u, { weight: 0.14, shadow: INK.navy, drop: 0.08 });
    const lines = [['1', 'Send the problem to dyl.harrell@gmail.com'], ['2', 'Get a straight answer on whether'], ['', 'I’m the right person for it'], ['3', 'Build something useful together']];
    lines.forEach(([n, t], i) => {
      const y = (132 + i * 40) * u;
      if (n) {
        printShape(g, circlePath(62 * u, y, 14 * u), { fill: INK.royal, key: 2.5 * u });
        g.fillStyle = INK.white; g.textAlign = 'center'; g.textBaseline = 'middle'; setType(g, 'poster', 16 * u, 800); g.fillText(n, 62 * u, y + u);
      }
      g.fillStyle = INK.k; g.textAlign = 'left'; g.textBaseline = 'middle'; setType(g, 'body', 20.5 * u, 600);
      g.fillText(t, 88 * u, y + u);
    });
    label(g, width / 2, 306 * u, 'dylanhughes.dev', 14 * u, INK.deep, 'mono');
    for (const k of [-1, 1]) { g.fillStyle = INK.royal; g.fill(twinklePath(width / 2 + k * 108 * u, 305 * u, 9 * u, { rot: 0 })); }
  } else {
    poster(g, 'Free play', width / 2, 102 * u, 64 * u, { fill: INK.royal, weight: 0.1, shadow: INK.ice, drop: 0.07 });
    stars(168, 7, 34);
    label(g, width / 2, 208 * u, 'Richmond, Virginia · Eastern time', 15 * u, INK.deep, 'mono');
    g.fillStyle = INK.k; g.textAlign = 'center'; g.textBaseline = 'middle'; setType(g, 'body', 21 * u, 600);
    g.fillText('Websites · Game software · Printed parts', width / 2, 252 * u);
    label(g, width / 2, 300 * u, 'One player · Three balls', 13 * u, INK.k, 'mono');
  }
  return c;
}

// The apron's deck. The sun that rises out of the drain on the playfield carries on across it: rays in two blues from
// the same point, with crescent scales in the shoulders, a white line following the lip, and between the cards the
// maker's seal: the dot-matrix DH in a starburst, the name lettered round it. Canvas coordinates follow the deck's
// playfield millimetres.
export function drawApron(width) {
  const x0 = PF.rail, x1 = SHOOTER.laneLeft, y0 = -4, y1 = APRON.rightShoulder[1];
  const s = width / (x1 - x0);
  const c = canvas(width, (y1 - y0) * s);
  const g = c.getContext('2d');
  const X = x => (x - x0) * s, Y = y => (y1 - y) * s;
  g.fillStyle = INK.field;
  g.fillRect(0, 0, c.width, c.height);
  g.lineJoin = 'round'; g.lineCap = 'round';
  // The rays, from the point the playfield's rising sun is drawn round (canvas angles run clockwise).
  const ox = X(PF.cx), oy = Y(92), far = width;
  for (let i = 0; i < 52; i++) {
    g.fillStyle = i % 2 ? INK.navy : INK.deep;
    g.fill(polygon([[ox, oy], polar(ox, oy, far, (i * TAU) / 52), polar(ox, oy, far, ((i + 1) * TAU) / 52)]));
  }
  // Scales in the shoulders, rolling in toward the middle.
  for (const k of [-1, 1]) {
    const edge = k < 0 ? x0 : x1, push = k < 0 ? Math.PI + 0.6 : -0.6;
    scaleMotif(g, X(edge - k * 30), Y(142), 44 * s, push, STENCIL_ON_BLUE, 1 * s);
    scaleMotif(g, X(edge - k * 92), Y(120), 30 * s, push, STENCIL_ON_BLUE, 1 * s);
  }
  // A white line following the shoulders and the lip, keylined.
  const edge = new Path2D();
  edge.moveTo(X(APRON.leftShoulder[0] + 2), Y(APRON.leftShoulder[1] - 9));
  edge.lineTo(X(APRON.lipLeft[0] - 3), Y(APRON.lipLeft[1] - 7.5));
  edge.arc(X(PF.cx), Y(APRON.lipCy), (APRON.lipR + 7) * s, Math.atan2(APRON.lipCy - APRON.lipEndY, -APRON.lipHalf), Math.atan2(APRON.lipCy - APRON.lipEndY, APRON.lipHalf), true);
  edge.lineTo(X(APRON.rightShoulder[0] - 2), Y(APRON.rightShoulder[1] - 9));
  g.strokeStyle = INK.k; g.lineWidth = 4.2 * s; g.stroke(edge);
  g.strokeStyle = INK.white; g.lineWidth = 2.2 * s; g.stroke(edge);
  // The seal.
  const cx = X(PF.cx), cy = Y(41), R = 39 * s;
  printShape(g, burstPath(cx, cy, R * 0.9, R * 1.06, 36, 0), { fill: INK.white, key: 1 * s });
  printShape(g, circlePath(cx, cy, R * 0.86), { fill: INK.white, key: 0.8 * s });
  printShape(g, circlePath(cx, cy, R * 0.56), { fill: INK.royal, key: 1 * s });
  dotMark(g, cx, cy, 3.6 * s, INK.white, 'rgba(6, 7, 10, 0.22)');
  const on = { fill: INK.k, stroke: null, shadow: null, track: 0.1 };
  arcText(g, 'Dylan Hughes', cx, cy, R * 0.71, 90 * DEG, 7.4 * s, { ...on, maxSpan: 150 * DEG });
  arcText(g, 'Richmond · VA', cx, cy, R * 0.71, 270 * DEG, 5.6 * s, { ...on, under: true, fill: INK.deep, maxSpan: 120 * DEG });
  for (const a of [0, Math.PI]) { g.fillStyle = INK.royal; g.fill(twinklePath(...polar(cx, cy, R * 0.71, a), 3.4 * s, { rot: 0 })); }
  return c;
}

// A standup's face: white, with a royal-blue star in a ring at ball height.
export function drawTargetFace(width) {
  const height = Math.round(width * (TARGETS.height / TARGETS.width));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  g.fillStyle = COLORS.white;
  g.fillRect(0, 0, width, height);
  const cx = width / 2, cy = height * (1 - 13.5 / TARGETS.height), u = width / TARGETS.width;
  printShape(g, burstPath(cx, cy, 7.4 * u, 9.6 * u, 16, 0), { fill: INK.royal, key: 0.5 * u });
  printShape(g, circlePath(cx, cy, 6.6 * u), { fill: INK.white, key: 0.5 * u });
  printShape(g, burstPath(cx, cy, 2.3 * u, 5.4 * u, 5, -Math.PI / 2), { fill: INK.royal, key: 0.5 * u });
  g.fillStyle = INK.royal; g.fillRect(0, 2 * u, width, 2.4 * u);
  g.fillStyle = INK.k; g.fillRect(0, 5.2 * u, width, 0.8 * u);
  g.fillStyle = 'rgba(20, 22, 26, 0.18)';
  g.fillRect(0, height - 1.5 * u, width, 1.5 * u);
  return c;
}

// A pop bumper's cap decal: a white disc under the cap's clear top with a ring of blue spikes round the mark, as the
// caps of the time were printed.
export function drawPopDecal(size) {
  const c = canvas(size, size);
  const g = c.getContext('2d');
  const m = size / 2, key = size * 0.012;
  g.fillStyle = COLORS.white;
  g.beginPath(); g.arc(m, m, m, 0, Math.PI * 2); g.fill();
  printShape(g, burstPath(m, m, m * 0.5, m * 0.93, 18, 0), { fill: INK.royal, key });
  printShape(g, burstPath(m, m, m * 0.5, m * 0.7, 18, Math.PI / 18), { fill: INK.navy, key: key * 0.7 });
  printShape(g, circlePath(m, m, m * 0.52), { fill: INK.white, key });
  dotMark(g, m, m, size * 0.05, INK.k, 'rgba(20, 22, 26, 0.1)');
  return c;
}

// Stripes echoing a plastic's outline, from its edge inward: [width, ink] pairs in millimetres, drawn clipped to the
// part, over a fill of `inside`.
function contours(g, path, ppm, bands, inside) {
  g.save();
  g.clip(path);
  g.fillStyle = inside; g.fill(path);
  g.lineJoin = 'round';
  let total = bands.reduce((a, [w]) => a + w, 0);
  for (let i = bands.length - 1; i >= 0; i--) {
    g.strokeStyle = bands[i][1]; g.lineWidth = total * 2 * ppm; g.stroke(path);
    total -= bands[i][0];
  }
  g.restore();
}

// A sling's printed plastic, drawn on its own outline (`pad` mm round the posts) at `ppm` pixels per millimetre:
// stripes echoing its edge in white and blues, and a starburst round a chrome ball where it's widest, with smaller
// balls strung toward its points. Returns the canvas and its extent in playfield millimetres, so the texture can be
// fitted to the part.
export function drawSlingPlastic(sling, ppm = 8, pad = 12) {
  const posts = ccw(sling.posts);
  const outline = roundedHull(posts, pad, 10);
  const xs = outline.map(p => p[0]), ys = outline.map(p => p[1]);
  const box = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
  const c = canvas((box[2] - box[0]) * ppm, (box[3] - box[1]) * ppm);
  const g = c.getContext('2d');
  const X = x => (x - box[0]) * ppm, Y = y => (box[3] - y) * ppm;
  g.fillStyle = INK.white;
  g.fillRect(0, 0, c.width, c.height);
  const path = polygon(outline.map(([x, y]) => [X(x), Y(y)]));
  contours(g, path, ppm, [[2.6, INK.white], [0.9, INK.k], [3, INK.royal], [0.7, INK.k], [1.5, INK.ice], [0.7, INK.k]], INK.navy);
  // The burst sits a third of the way from the plastic's blunt top toward its point; the balls run on from it.
  const [A, B, C] = sling.posts, top = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2], at = t => [X(top[0] + (B[0] - top[0]) * t), Y(top[1] + (B[1] - top[1]) * t)];
  g.save(); g.clip(path);
  const [bx, by] = at(0.3);
  printShape(g, burstPath(bx, by, 5.4 * ppm, 10.5 * ppm, 12, 0.2), { fill: INK.white, key: 0.7 * ppm });
  orb(g, bx, by, 4.4 * ppm);
  [[0.56, 3], [0.7, 2.2], [0.8, 1.5]].forEach(([t, r]) => orb(g, ...at(t), r * ppm));
  g.restore();
  return { canvas: c, box };
}

// A printed plastic drawn on its own outline (playfield millimetres) at `ppm` pixels per millimetre: the inlane
// guides, long and narrow, printed in stripes echoing their edges; `mark` puts a star on the cover's round boss.
// Returns the canvas and its extent, so the texture can be fitted to the part.
export function drawPlasticPrint(outline, { ppm = 8, pad = 1.5, mark = false } = {}) {
  const xs = outline.map(p => p[0]), ys = outline.map(p => p[1]);
  const box = [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) + pad, Math.max(...ys) + pad];
  const c = canvas((box[2] - box[0]) * ppm, (box[3] - box[1]) * ppm);
  const g = c.getContext('2d');
  const X = x => (x - box[0]) * ppm, Y = y => (box[3] - y) * ppm;
  const path = polygon(outline.map(([x, y]) => [X(x), Y(y)]));
  g.fillStyle = INK.white;
  g.fillRect(0, 0, c.width, c.height);
  contours(g, path, ppm, [[1.3, INK.white], [0.6, INK.k], [2.2, INK.royal], [0.5, INK.k], [1.2, INK.ice], [0.5, INK.k]], INK.royal);
  if (mark) {
    // The boss: the round end at the top of the cover, over the star post.
    const top = outline.reduce((m, p) => (p[1] > m[1] ? p : m)), r = 12;
    const bx = X(top[0]), by = Y(top[1] - r);
    printShape(g, circlePath(bx, by, (r - 3.4) * ppm), { fill: INK.royal, key: 0.6 * ppm });
    g.fillStyle = INK.white; g.fill(twinklePath(bx, by, 7.2 * ppm, { rot: 0 }));
  }
  return { canvas: c, box };
}
