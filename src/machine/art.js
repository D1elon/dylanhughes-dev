// Printed artwork, drawn on canvases: the playfield, the translite, the cabinet sides, the apron, the plastics, the
// cards and the standup faces. The look follows Deadbounce's Origin table, rethemed in black, white and royal blue: a
// field lit like a stage, light running up the lanes, beams from the flippers to each shot, and every insert in a
// pool of its own light. The site's sections are the shots: the case studies are the ramps.
import {
  PF, POPS, RAMPS, TOP_LANES, APRON, SHOOTER, RETURN_LANES, ORBIT_ROLLOVERS, INSERTS, TARGETS,
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
const DEEP = rgba('deep');
const LIGHT = rgba('light');
const GREY = rgba('grey');
// Each lamp colour's tint for the art (Origin's lilac, violet, pale lilac and warm white).
const TINTS = { royal: ROYAL, deep: DEEP, light: LIGHT, white: WHITE };

export const FONTS = {
  display: (size, weight = 650) => `${weight} ${size}px Archivo`,
  mono: (size, weight = 500) => `${weight} ${size}px "Martian Mono"`,
  body: (size, weight = 500) => `${weight} ${size}px "Instrument Sans"`,
};
// Type set as the site sets it: Archivo headlines at 112.5% width ('semi-expanded', the nearest canvas keyword to the
// site's 108%), weight 650, tracked -0.03em; Martian Mono labels at 87.5% width, weight 500, tracked 0.08em (callers
// pass them in capitals); Instrument Sans body text as drawn.
function setType(g, kind, size, weight) {
  if (kind === 'display') {
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

// --- Insert shapes ---------------------------------------------------------------------------------------------
// Origin's lens outlines (studio/src/parts/geometry.js insertOutline): polygons in millimetres, centred, fitted to
// w × l, pointing +y.

export function circleShape(d, steps = 40) {
  return Array.from({ length: steps }, (_, i) => { const a = (i / steps) * Math.PI * 2; return [Math.cos(a) * d / 2, Math.sin(a) * d / 2]; });
}
export function arrowShape(w, l) {
  const shaft = w * 0.44, head = l * 0.48;
  return [[-shaft / 2, -l / 2], [shaft / 2, -l / 2], [shaft / 2, l / 2 - head], [w / 2, l / 2 - head], [0, l / 2], [-w / 2, l / 2 - head], [-shaft / 2, l / 2 - head]];
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

// The four lane inserts are the Skills list; the five top lanes are the Experience timeline.
export const SKILL_LEGENDS = ['Web', 'Game', 'Media', 'Fab'];
export const TIMELINE = [
  ['2025', 'Freelance'],
  ['2023', 'Glaser Group'],
  ['2021', 'Origin Beer Lab'],
  ['2018', 'T&B Equipment'],
  ['2018', 'Atlee High'],
];

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
  return INSERTS.map(ins => ({ ...ins, ...(role.get(ins.id) || { group: 'other', index: 0 }), w: ins.width, l: ins.length, shape: SHAPES[ins.shape](ins.width, ins.length) }));
}
// The insert a rollover lights, by its trigger's id (lane0–4, return0–3, orbit0–1).
export function rolloverInsert(trigger) {
  const n = Number(trigger.replace(/\D+/g, ''));
  if (trigger.startsWith('lane')) return TOP_LANES.lanes[n]?.insert;
  if (trigger.startsWith('return')) return RETURN_LANES[n]?.insert;
  if (trigger.startsWith('orbit')) return ['left_orbit_arrow', 'right_orbit_arrow'][n];
  return null;
}

// A lens's print, as Origin's lenses carry them: ink on the lens's underside that the lamp shines round. White where
// the lamp shows through, ink where it doesn't; `size` pixels across the insert's w × l, centred, +y up.
export function drawInsertPrint(ins, size = 128) {
  const c = canvas(size, Math.round((size * ins.l) / ins.w));
  const g = c.getContext('2d');
  const k = size / ins.w, cx = c.width / 2, cy = c.height / 2;
  g.fillStyle = '#fff';
  g.fillRect(0, 0, c.width, c.height);
  const ink = 'rgba(11, 12, 15, 0.92)';
  g.fillStyle = ink; g.strokeStyle = ink; g.lineCap = 'round'; g.lineJoin = 'round';
  if (ins.legend) {
    const display = /^\d+$/.test(ins.legend);
    const mm = display ? Math.min(ins.w * 0.25, 4.8) : Math.min((ins.w * 0.84) / (ins.legend.length * 0.74 + 0.3), 3.7);
    label(g, cx, cy + k * 0.15, ins.legend, mm * k, ink, display ? 'display' : 'mono');
  }
  const s = Math.min(ins.w, ins.l) * k;
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
  const X = x => x * scale;
  const Y = y => (PF.l - y) * scale;
  const S = v => v * scale;
  const radial = (x, y, r, stops) => {
    const grad = g.createRadialGradient(X(x), Y(y), 0, X(x), Y(y), S(r));
    stops.forEach(([at, color]) => grad.addColorStop(at, color));
    g.fillStyle = grad;
    g.fillRect(0, 0, c.width, c.height);
  };

  // 1. The field: black, lit from the middle like a stage, with a royal-blue pool behind the pops.
  g.fillStyle = COLORS.field;
  g.fillRect(0, 0, c.width, c.height);
  radial(PF.cx, 520, 640, [[0, PALETTE.black3], [0.55, '#1a1d22'], [1, 'rgba(20, 22, 26, 0)']]);
  radial(PF.cx, 820, 230, [[0, ROYAL(0.2)], [1, ROYAL(0)]]);

  // 2. A half-inch dot grid, brightest under the middle of the field.
  g.fillStyle = WHITE(1);
  for (let y = 6.35; y < PF.l; y += 12.7) for (let x = 6.35; x < PF.w; x += 12.7) {
    const d = Math.hypot((x - PF.cx) / 1.1, (y - 560) / 1.6), a = 0.13 * Math.max(0, 1 - d / 470);
    if (a < 0.01) continue;
    g.globalAlpha = a;
    g.beginPath(); g.arc(X(x), Y(y), S(0.62), 0, Math.PI * 2); g.fill();
  }
  g.globalAlpha = 1;

  // 3. Light running up each lane: the in- and outlanes, the orbits, the top lanes, and the shooter lane's channel
  // with chevrons pointing up it.
  const laneLight = (x, y0, y1, width, alpha, tint = WHITE) => {
    const grad = g.createLinearGradient(0, Y(y0), 0, Y(y1));
    grad.addColorStop(0, tint(0)); grad.addColorStop(0.35, tint(alpha)); grad.addColorStop(1, tint(0));
    g.fillStyle = grad;
    g.beginPath(); g.roundRect(X(x - width / 2), Y(y1), S(width), S(y1 - y0), S(width / 2)); g.fill();
  };
  for (const l of RETURN_LANES) laneLight(l.x, 220, 420, 20, 0.14);
  for (const o of ORBIT_ROLLOVERS) laneLight(o.x, 640, 900, 22, 0.12);
  for (const l of TOP_LANES.lanes) laneLight(l.x, l.y - 40, l.y + 70, 20, 0.18);
  {
    const x0 = SHOOTER.laneLeft, x1 = SHOOTER.laneRight;
    const grad = g.createLinearGradient(0, Y(0), 0, Y(SHOOTER.dividerTop));
    grad.addColorStop(0, ROYAL(0.06)); grad.addColorStop(1, ROYAL(0.26));
    g.fillStyle = grad;
    g.fillRect(X(x0), Y(SHOOTER.dividerTop), S(x1 - x0), S(SHOOTER.dividerTop));
    const mid = (x0 + x1) / 2;
    g.lineWidth = S(2.2); g.lineJoin = 'round'; g.lineCap = 'round';
    for (let y = 130, i = 0; y < 780; y += 46, i++) {
      g.strokeStyle = LIGHT(0.34 + i * 0.03);
      g.beginPath(); g.moveTo(X(mid - 9), Y(y)); g.lineTo(X(mid), Y(y + 9)); g.lineTo(X(mid + 9), Y(y)); g.stroke();
    }
  }

  // 4. The shots: a beam from each flipper to the opposite ramp's mouth, crossing on the centre line; the orbits'
  // beams fainter, down each orbit arrow's own axis; and one up the middle to the saucer's arrow.
  const beam = (from, to, w0, w1, alpha, tint = ROYAL) => {
    const dx = to[0] - from[0], dy = to[1] - from[1], len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
    const grad = g.createLinearGradient(X(from[0]), Y(from[1]), X(to[0]), Y(to[1]));
    grad.addColorStop(0, tint(0)); grad.addColorStop(0.6, tint(alpha * 0.55)); grad.addColorStop(1, tint(alpha));
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(X(from[0] + nx * w0 / 2), Y(from[1] + ny * w0 / 2)); g.lineTo(X(to[0] + nx * w1 / 2), Y(to[1] + ny * w1 / 2));
    g.lineTo(X(to[0] - nx * w1 / 2), Y(to[1] - ny * w1 / 2)); g.lineTo(X(from[0] - nx * w0 / 2), Y(from[1] - ny * w0 / 2));
    g.closePath(); g.fill();
    // Fine edges that sharpen as they reach the shot.
    const edge = g.createLinearGradient(X(from[0]), Y(from[1]), X(to[0]), Y(to[1]));
    edge.addColorStop(0, tint(0)); edge.addColorStop(1, tint(Math.min(1, alpha * 2.2)));
    g.strokeStyle = edge; g.lineWidth = S(0.9);
    for (const k of [1, -1]) {
      g.beginPath(); g.moveTo(X(from[0] + k * nx * w0 / 2), Y(from[1] + k * ny * w0 / 2)); g.lineTo(X(to[0] + k * nx * w1 / 2), Y(to[1] + k * ny * w1 / 2)); g.stroke();
    }
  };
  // Origin's: from just inside the far flipper's tip at rest to the middle of the mouth, 2 mm short of its lip.
  RAMPS.forEach(ramp => beam([ramp.side === 'left' ? 262 : 2 * PF.cx - 262, 196], [ramp.profile[0][0], ramp.profile[0][1] - 2], 8, 50, 0.36));
  const inserts = insertList(), byId = Object.fromEntries(inserts.map(i => [i.id, i]));
  for (const id of ['left_orbit_arrow', 'right_orbit_arrow']) {
    const a = byId[id], r = (a.angle * Math.PI) / 180, dir = [-Math.sin(r), Math.cos(r)];
    beam([a.x - dir[0] * 400, a.y - dir[1] * 400], [a.x + dir[0] * 34, a.y + dir[1] * 34], 4, 28, 0.18, DEEP);
  }
  const saucerArrow = byId.saucer_arrow;
  beam([PF.cx, 610], [saucerArrow.x, saucerArrow.y + 10], 6, 30, 0.2);

  // 5. Every insert sits in a pool of its own light, in a printed bezel traced from its own outline.
  for (const ins of inserts) {
    const tint = TINTS[ins.color] || WHITE, r = Math.max(ins.w, ins.l) * 1.15;
    const grad = g.createRadialGradient(X(ins.x), Y(ins.y), 0, X(ins.x), Y(ins.y), S(r));
    grad.addColorStop(0, tint(0.4)); grad.addColorStop(0.55, tint(0.13)); grad.addColorStop(1, tint(0));
    g.fillStyle = grad;
    g.beginPath(); g.arc(X(ins.x), Y(ins.y), S(r), 0, Math.PI * 2); g.fill();
  }
  for (const ins of inserts) {
    const a = (ins.angle * Math.PI) / 180, sx = (ins.w / 2 + 2.6) / (ins.w / 2), sy = (ins.l / 2 + 2.6) / (ins.l / 2);
    g.save();
    g.lineJoin = 'round';
    g.beginPath();
    ins.shape.forEach(([px, py], k) => {
      const qx = px * sx, qy = py * sy, rx = qx * Math.cos(a) - qy * Math.sin(a), ry = qx * Math.sin(a) + qy * Math.cos(a);
      k ? g.lineTo(X(ins.x + rx), Y(ins.y + ry)) : g.moveTo(X(ins.x + rx), Y(ins.y + ry));
    });
    g.closePath();
    g.strokeStyle = 'rgba(0,0,0,0.5)'; g.lineWidth = S(3.4); g.stroke();
    g.strokeStyle = (TINTS[ins.color] || WHITE)(ins.color === 'white' ? 0.5 : 0.7); g.lineWidth = S(0.8); g.stroke();
    g.restore();
  }

  // 6. Names, in small spaced capitals: the site's sections are the shots. Behind an arrow, along its axis.
  const behind = (ins, text, size, color, gap = 6.5) => {
    const r = (ins.angle * Math.PI) / 180, back = ins.l / 2 + gap;
    g.save();
    g.translate(X(ins.x + Math.sin(r) * back), Y(ins.y - Math.cos(r) * back));
    g.rotate(-r);
    label(g, 0, 0, text, size, color, 'mono');
    g.restore();
  };
  behind(byId.left_ramp_arrow, 'Deadbounce', S(4.4), WHITE(0.9));
  behind(byId.right_ramp_arrow, 'Tip Top', S(4.4), WHITE(0.9));
  behind(byId.left_orbit_arrow, 'Orbit', S(3.6), WHITE(0.62));
  behind(byId.right_orbit_arrow, 'Orbit', S(3.6), WHITE(0.62));
  behind(saucerArrow, 'Mystery', S(3.4), WHITE(0.7), 5.5);
  // Skills: the row of lane inserts across the field. About: between the three pops. Experience: over the top
  // lanes' years. Contact: under the shoot-again shield, where Origin prints SHOOT AGAIN.
  const laneY = RETURN_LANES[0].insertY;
  label(g, X(PF.cx), Y(laneY), 'Skills', S(4.4), WHITE(0.85), 'mono');
  for (const k of [-1, 1]) {
    g.strokeStyle = WHITE(0.25); g.lineWidth = S(0.5);
    g.beginPath(); g.moveTo(X(PF.cx + k * 22), Y(laneY)); g.lineTo(X(PF.cx + k * 120), Y(laneY)); g.stroke();
  }
  const pop = POPS.reduce((m, p) => [m[0] + p.x / POPS.length, m[1] + p.y / POPS.length], [0, 0]);
  label(g, X(pop[0]), Y(pop[1] + 1), 'About', S(3.8), WHITE(0.85), 'mono');
  const lane3 = TOP_LANES.lanes[2];
  label(g, X(lane3.insertX), Y(lane3.insertY + 18.5), 'Experience', S(3.8), WHITE(0.85), 'mono');
  const again = byId.shoot_again;
  label(g, X(again.x), Y(again.y - again.l / 2 - 6), 'Contact', S(4), WHITE(0.85), 'mono');

  // 7. The lockup between the slings: the dot-matrix DH, the name, and the model under it.
  dotMark(g, X(PF.cx), Y(276), S(2.2), ROYAL(1), WHITE(0.06));
  label(g, X(PF.cx), Y(258), 'Dylan Hughes', S(8.4), WHITE(0.95), 'display');
  label(g, X(PF.cx), Y(248), 'DH-26 · Richmond, Virginia', S(3), LIGHT(0.9), 'mono');

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

// --- Translite --------------------------------------------------------------------------------------------------
// The backbox's translite, `width` wide at the glass's 1.32 : 1, printed to be lit from behind: a black field with a
// royal-blue glow, fine rays behind a large dot-matrix DH, a double frame, and the name and title set like a game's.
export function drawBackglass(width) {
  const height = Math.round(width / 1.32);
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 1320;
  const cx = width / 2, cy = height * 0.4;

  const field = g.createRadialGradient(cx, cy, 0, cx, height * 0.45, Math.max(width, height) * 0.75);
  field.addColorStop(0, '#16245a'); field.addColorStop(0.42, '#0e1222'); field.addColorStop(1, PALETTE.black);
  g.fillStyle = field;
  g.fillRect(0, 0, width, height);

  // Rays from behind the mark, as a light box shows them, and a dot field fading out from the middle.
  g.save();
  g.translate(cx, cy);
  for (let i = 0; i < 36; i++) {
    g.rotate(Math.PI / 18);
    g.fillStyle = ROYAL(i % 3 === 0 ? 0.13 : 0.055);
    g.beginPath(); g.moveTo(0, 0); g.lineTo(width, -width * 0.03); g.lineTo(width, width * 0.03); g.fill();
  }
  g.restore();
  for (let y = 18 * u; y < height; y += 22 * u) for (let x = 18 * u; x < width; x += 22 * u) {
    const a = 0.1 * Math.max(0, 1 - Math.hypot(x - cx, (y - cy) * 1.3) / (width * 0.55));
    if (a < 0.01) continue;
    g.fillStyle = WHITE(a);
    g.beginPath(); g.arc(x, y, 1.4 * u, 0, Math.PI * 2); g.fill();
  }

  // The frame: a royal-blue line with a fine white one inside it.
  const inset = 46 * u;
  g.save();
  g.shadowColor = ROYAL(0.9); g.shadowBlur = 14 * u;
  g.strokeStyle = ROYAL(1); g.lineWidth = 5 * u;
  g.beginPath(); g.roundRect(inset, inset, width - inset * 2, height - inset * 2, 36 * u); g.stroke();
  g.restore();
  g.strokeStyle = WHITE(0.32); g.lineWidth = 1.6 * u;
  g.beginPath(); g.roundRect(inset + 14 * u, inset + 14 * u, width - inset * 2 - 28 * u, height - inset * 2 - 28 * u, 26 * u); g.stroke();

  // The mark, glowing: lit dots with their unlit neighbours faintly printed, as on the display.
  const dot = 40 * u;
  g.save();
  g.shadowColor = ROYAL(1); g.shadowBlur = 40 * u;
  dotMark(g, cx, cy, dot, ROYAL(1), 'rgba(0,0,0,0)');
  g.restore();
  dotMark(g, cx, cy, dot, PALETTE.ice, WHITE(0.07));

  // The title: the name, then the trade, then the place.
  const nameY = cy + dot * 4.6;
  g.save();
  g.shadowColor = LIGHT(0.55); g.shadowBlur = 18 * u;
  label(g, cx, nameY, 'Dylan Hughes', 100 * u, PALETTE.white, 'display');
  g.restore();
  label(g, cx, nameY + 76 * u, 'The portfolio', 24 * u, LIGHT(1), 'mono');
  label(g, cx, nameY + 112 * u, 'Model DH-26 · Richmond, Virginia', 16 * u, GREY(0.9), 'mono');
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
// black under the translite's glow, and at the left the player, the name and the place, set as the site sets them.
export function drawPlayerCard(img, width) {
  const height = Math.round(width / 1.32), c = canvas(width, height), g = c.getContext('2d'), u = width / 1320;
  const glow = g.createRadialGradient(width * 0.3, height * 0.5, 0, width * 0.3, height * 0.5, width * 0.7);
  glow.addColorStop(0, '#121c44'); glow.addColorStop(0.55, '#0b0e1a'); glow.addColorStop(1, PALETTE.black);
  g.fillStyle = glow;
  g.fillRect(0, 0, width, height);
  // The photo's own edge fades out (its alpha, not a black wash), so it melts into the glow behind it.
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
  label(g, x, height * 0.48, 'Dylan', 118 * u, PALETTE.white, 'display', 'left');
  label(g, x, height * 0.48 + 118 * u, 'Hughes', 118 * u, PALETTE.white, 'display', 'left');
  label(g, x, height * 0.48 + 214 * u, 'Richmond, Virginia', 22 * u, GREY(0.95), 'mono', 'left');
  return c;
}

// --- Cabinet, apron and targets ----------------------------------------------------------------------------------

// A cabinet side, `width` from the back (x = 0) to the front, `height` from the top edge down to the bottom at the
// back. The bottom is level in the world, so it rises toward the front to `frontBottom` of the height. Black paint
// with a royal-blue sweep rising from low at the front to over half the side at the back, like a flipper's stroke; a
// fine white line riding over it, a pinstripe under the top edge, the DH cut out of the sweep under the backbox, and
// the name in the open band.
export function drawCabinetSide(width, height, { frontBottom = 0.77 } = {}) {
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const bottomAt = x => height - (height - frontBottom * height) * (x / width);
  // A point `along` the side from the front (0) to the back (1), `z` pixels above the bottom edge.
  const at = (along, z) => { const x = width * (1 - along); return [x, bottomAt(x) - z]; };
  g.fillStyle = PALETTE.black1;
  g.fillRect(0, 0, width, height);
  const low = height * 0.08, back = height * 0.56;
  const edge = [[0, low], [0.45, low * 0.8], [0.72, back * 0.55], [1, back]];
  const curve = (lift = 0) => {
    g.moveTo(...at(0, low + lift));
    g.bezierCurveTo(...edge.slice(1).flatMap(([a, z]) => at(a, z + lift)));
  };
  const fill = g.createLinearGradient(width, 0, 0, 0);
  fill.addColorStop(0, PALETTE.deep); fill.addColorStop(0.55, PALETTE.royal); fill.addColorStop(1, '#4a72ff');
  g.beginPath(); g.moveTo(width, height); g.lineTo(...at(0, low)); curve(); g.lineTo(0, height); g.closePath();
  g.fillStyle = fill; g.fill();
  g.lineCap = 'round';
  g.strokeStyle = PALETTE.paper; g.lineWidth = height * 0.0065; g.beginPath(); curve(height * 0.03); g.stroke();
  g.strokeStyle = ROYAL(0.95); g.lineWidth = height * 0.008; g.beginPath(); g.moveTo(0, height * 0.045); g.lineTo(width, height * 0.045); g.stroke();
  // The mark, cut out of the sweep where it has grown tall.
  const markAt = 0.86, [mx] = at(markAt, 0), deep = back * 0.92;
  dotMark(g, mx, bottomAt(mx) - deep * 0.55, deep * 0.085, PALETTE.black1, 'rgba(11, 12, 15, 0.18)');
  // The name in the open band between the sweep's line and the pinstripe.
  const [lx] = at(0.42, 0), band = bottomAt(lx) - (low * 0.9 + height * 0.03);
  const mid = (height * 0.045 + band) / 2;
  label(g, lx, mid - height * 0.035, 'Dylan Hughes', height * 0.12, PALETTE.paper, 'display');
  label(g, lx, mid + height * 0.06, 'Creative technologist', height * 0.032, LIGHT(1), 'mono');
  return c;
}

export function drawApronCard(kind, width) {
  const height = Math.round(width * (3.5 / 6.25));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 625;
  // Printed dark, like the rest of the apron: white type on black, inside a royal-blue rim.
  g.fillStyle = PALETTE.black1;
  g.fillRect(0, 0, width, height);
  g.strokeStyle = ROYAL(0.95);
  g.lineWidth = 3 * u;
  g.beginPath(); g.roundRect(14 * u, 14 * u, width - 28 * u, height - 28 * u, 14 * u); g.stroke();
  g.fillStyle = PALETTE.paper2;
  g.textAlign = 'center';
  g.textBaseline = 'alphabetic';
  if (kind === 'instructions') {
    setType(g, 'display', 30 * u);
    g.fillText('How to play', width / 2, 66 * u);
    setType(g, 'body', 20 * u);
    g.textAlign = 'left';
    const lines = [
      '1  Send the problem to dyl.harrell@gmail.com',
      '2  Get a straight answer on whether',
      '    I’m the right person for it',
      '3  Build something useful together',
    ];
    lines.forEach((t, i) => g.fillText(t, 52 * u, (120 + i * 42) * u));
    setType(g, 'mono', 13 * u);
    g.textAlign = 'center';
    g.fillStyle = LIGHT(1);
    g.fillText('DYLANHUGHES.DEV', width / 2, 316 * u);
  } else {
    setType(g, 'display', 40 * u);
    g.fillText('Free play', width / 2, 118 * u);
    setType(g, 'mono', 15 * u);
    g.fillStyle = LIGHT(1);
    g.fillText('RICHMOND, VIRGINIA · EASTERN TIME', width / 2, 172 * u);
    g.fillStyle = PALETTE.paper2;
    setType(g, 'body', 20 * u);
    g.fillText('Websites · Game software · Printed parts', width / 2, 232 * u);
    g.fillStyle = COLORS.royal;
    g.fillRect(width / 2 - 40 * u, 270 * u, 80 * u, 6 * u);
  }
  return c;
}

// The apron's deck: black, a royal-blue pinstripe along the lip, and the machine's name between the cards,
// where every game prints its logo. Canvas coordinates follow the deck's playfield millimetres.
export function drawApron(width) {
  const x0 = PF.rail, x1 = SHOOTER.laneLeft, y0 = -4, y1 = APRON.rightShoulder[1];
  const s = width / (x1 - x0);
  const c = canvas(width, (y1 - y0) * s);
  const g = c.getContext('2d');
  const X = x => (x - x0) * s, Y = y => (y1 - y) * s;
  const grad = g.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, PALETTE.black2);
  grad.addColorStop(1, PALETTE.black1);
  g.fillStyle = grad;
  g.fillRect(0, 0, c.width, c.height);
  // Fine brushed lines.
  for (let i = 0; i < c.height; i += Math.max(2, s * 0.6)) {
    g.fillStyle = `rgba(255,255,255,${0.012 + 0.012 * Math.sin(i * 0.37)})`;
    g.fillRect(0, i, c.width, 1);
  }
  // Pinstripe following the lip and the shoulders.
  g.strokeStyle = ROYAL(0.95);
  g.lineWidth = 1.4 * s;
  g.beginPath();
  g.moveTo(X(APRON.leftShoulder[0] + 6), Y(APRON.leftShoulder[1] - 10));
  g.lineTo(X(APRON.lipLeft[0] - 4), Y(APRON.lipLeft[1] - 7));
  g.stroke();
  g.beginPath();
  g.moveTo(X(APRON.lipRight[0] + 4), Y(APRON.lipRight[1] - 7));
  g.lineTo(X(APRON.rightShoulder[0] - 6), Y(APRON.rightShoulder[1] - 10));
  g.stroke();
  // The emblem: a dot-matrix DH, the name and the model.
  const cx = X(PF.cx), base = Y(30);
  const D = ['1110', '1001', '1001', '1001', '1110'], H = ['1001', '1001', '1111', '1001', '1001'];
  const dot = 3.1 * s;
  const startX = cx - (9 * dot) / 2, startY = Y(78);
  [D, H].forEach((glyph, k) => glyph.forEach((row, y) => [...row].forEach((on, x) => {
    g.fillStyle = on === '1' ? COLORS.royal : WHITE(0.07);
    g.beginPath();
    g.arc(startX + (k * 5 + x + 0.5) * dot, startY + (y + 0.5) * dot, dot * 0.36, 0, Math.PI * 2);
    g.fill();
  })));
  g.fillStyle = COLORS.white;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  setType(g, 'display', 9 * s);
  g.fillText('Dylan Hughes', cx, base + 6 * s);
  setType(g, 'mono', 3.3 * s);
  g.fillStyle = GREY(0.9);
  g.fillText('MODEL DH-26 · RICHMOND, VIRGINIA', cx, base + 17 * s);
  // The cabinet's sweep carried onto the apron: a glowing band along the front edge, with a fine line riding it.
  const sweep = g.createLinearGradient(X(x0), 0, X(x1), 0);
  sweep.addColorStop(0, PALETTE.royal); sweep.addColorStop(0.5, PALETTE.deep); sweep.addColorStop(1, PALETTE.royal);
  const wave = lift => { g.moveTo(X(x0), Y(10 + lift)); g.bezierCurveTo(X(x0 + 130), Y(1.5 + lift), X(x1 - 130), Y(1.5 + lift), X(x1), Y(10 + lift)); };
  g.fillStyle = sweep;
  g.beginPath(); g.moveTo(X(x0), Y(y0)); wave(0); g.lineTo(X(x1), Y(y0)); g.closePath(); g.fill();
  g.strokeStyle = WHITE(0.8); g.lineWidth = 0.7 * s; g.beginPath(); wave(4.5); g.stroke();
  return c;
}

// A standup's face: white, with a royal-blue bullseye at ball height.
export function drawTargetFace(width) {
  const height = Math.round(width * (TARGETS.height / TARGETS.width));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  g.fillStyle = COLORS.white;
  g.fillRect(0, 0, width, height);
  const cx = width / 2, cy = height * (1 - 13.5 / TARGETS.height), u = width / TARGETS.width;
  g.fillStyle = COLORS.royal;
  g.beginPath(); g.arc(cx, cy, 6.2 * u, 0, Math.PI * 2); g.fill();
  g.fillStyle = COLORS.white;
  g.beginPath(); g.arc(cx, cy, 4 * u, 0, Math.PI * 2); g.fill();
  g.fillStyle = COLORS.royal;
  g.beginPath(); g.arc(cx, cy, 2 * u, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(20, 22, 26, 0.18)';
  g.fillRect(0, height - 1.5 * u, width, 1.5 * u);
  return c;
}

// A pop bumper's cap decal: a printed disc under the cap's clear top, with the dot-matrix DH from the apron.
export function drawPopDecal(size) {
  const c = canvas(size, size);
  const g = c.getContext('2d');
  const m = size / 2;
  g.fillStyle = COLORS.white;
  g.beginPath(); g.arc(m, m, m, 0, Math.PI * 2); g.fill();
  g.strokeStyle = COLORS.royal;
  g.lineWidth = size * 0.07;
  g.beginPath(); g.arc(m, m, m * 0.88, 0, Math.PI * 2); g.stroke();
  g.strokeStyle = 'rgba(20, 22, 26, 0.5)';
  g.lineWidth = size * 0.008;
  g.beginPath(); g.arc(m, m, m * 0.74, 0, Math.PI * 2); g.stroke();
  const D = ['1110', '1001', '1001', '1001', '1110'], H = ['1001', '1001', '1111', '1001', '1001'];
  const dot = size * 0.06, x0 = m - (9 * dot) / 2, y0 = m - (5 * dot) / 2 - size * 0.04;
  [D, H].forEach((glyph, k) => glyph.forEach((row, y) => [...row].forEach((on, x) => {
    g.fillStyle = on === '1' ? COLORS.ink : 'rgba(20, 22, 26, 0.1)';
    g.beginPath(); g.arc(x0 + (k * 5 + x + 0.5) * dot, y0 + (y + 0.5) * dot, dot * 0.36, 0, Math.PI * 2); g.fill();
  })));
  g.fillStyle = COLORS.ink;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  setType(g, 'mono', size * 0.075);
  g.fillText('1,000', m, m + size * 0.22);
  return c;
}

// A sling's printed plastic, drawn on its own outline (`pad` mm round the posts) at `ppm` pixels per millimetre: black
// with a fine dot grid, and a royal-blue rim just inside the edge that reads as light caught in the plastic's cut edge.
// Returns the canvas and its extent in playfield millimetres, so the texture can be fitted to the part.
export function drawSlingPlastic(sling, ppm = 8, pad = 12) {
  const posts = ccw(sling.posts);
  const outline = roundedHull(posts, pad, 10);
  const xs = outline.map(p => p[0]), ys = outline.map(p => p[1]);
  const box = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
  const c = canvas((box[2] - box[0]) * ppm, (box[3] - box[1]) * ppm);
  const g = c.getContext('2d');
  const X = x => (x - box[0]) * ppm, Y = y => (box[3] - y) * ppm;
  const path = pts => { g.beginPath(); pts.forEach(([x, y], k) => (k ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y)))); g.closePath(); };
  const cx = (box[0] + box[2]) / 2, cy = (box[1] + box[3]) / 2;
  const shade = g.createRadialGradient(X(cx), Y(cy + 10), 0, X(cx), Y(cy), (box[2] - box[0]) * ppm);
  shade.addColorStop(0, PALETTE.black3); shade.addColorStop(1, PALETTE.black1);
  g.fillStyle = shade;
  g.fillRect(0, 0, c.width, c.height);
  g.save();
  path(outline); g.clip();
  g.fillStyle = WHITE(0.09);
  for (let y = box[1]; y < box[3]; y += 4.2) for (let x = box[0]; x < box[2]; x += 4.2) { g.beginPath(); g.arc(X(x), Y(y), 0.42 * ppm, 0, Math.PI * 2); g.fill(); }
  g.restore();
  g.lineJoin = 'round';
  g.strokeStyle = ROYAL(1); g.lineWidth = 1.5 * ppm; path(roundedHull(posts, pad - 1.6, 10)); g.stroke();
  g.strokeStyle = LIGHT(0.4); g.lineWidth = 0.5 * ppm; path(roundedHull(posts, pad - 4.4, 10)); g.stroke();
  return { canvas: c, box };
}

// A printed plastic drawn on its own outline (playfield millimetres) at `ppm` pixels per millimetre, as Origin prints
// its inlane plastics: black lit from the middle, a quarter-inch dot grid and a royal-blue rim on the edge; `mark` puts the
// dot-matrix DH where the part is widest. Returns the canvas and its extent, so the texture can be fitted to the part.
export function drawPlasticPrint(outline, { ppm = 8, pad = 1.5, mark = false } = {}) {
  const xs = outline.map(p => p[0]), ys = outline.map(p => p[1]);
  const box = [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) + pad, Math.max(...ys) + pad];
  const c = canvas((box[2] - box[0]) * ppm, (box[3] - box[1]) * ppm);
  const g = c.getContext('2d');
  const X = x => (x - box[0]) * ppm, Y = y => (box[3] - y) * ppm;
  const path = new Path2D();
  outline.forEach(([x, y], k) => (k ? path.lineTo(X(x), Y(y)) : path.moveTo(X(x), Y(y))));
  path.closePath();
  // The centroid: where the light comes from, and the mark if it falls on the part.
  let a = 0, mx = 0, my = 0;
  outline.forEach(([x0, y0], i) => { const [x1, y1] = outline[(i + 1) % outline.length], f = x0 * y1 - x1 * y0; a += f; mx += (x0 + x1) * f; my += (y0 + y1) * f; });
  mx /= 3 * a; my /= 3 * a;
  g.fillStyle = PALETTE.black1;
  g.fillRect(0, 0, c.width, c.height);
  g.save();
  g.clip(path);
  const shade = g.createRadialGradient(X(mx), Y(my), 0, X(mx), Y(my), Math.max(c.width, c.height) * 0.8);
  shade.addColorStop(0, PALETTE.black3); shade.addColorStop(1, PALETTE.black1);
  g.fillStyle = shade;
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = WHITE(0.09);
  for (let y = box[1] + 3.175; y < box[3]; y += 6.35) for (let x = box[0] + 3.175; x < box[2]; x += 6.35) { g.beginPath(); g.arc(X(x), Y(y), 0.42 * ppm, 0, Math.PI * 2); g.fill(); }
  g.lineJoin = 'round';
  g.strokeStyle = ROYAL(0.26); g.lineWidth = 9 * ppm; g.stroke(path);
  g.strokeStyle = ROYAL(1); g.lineWidth = 3.2 * ppm; g.stroke(path);
  g.restore();
  if (mark && g.isPointInPath(path, X(mx), Y(my))) dotMark(g, X(mx), Y(my), 1.9 * ppm, ROYAL(1), WHITE(0.05));
  return { canvas: c, box };
}
