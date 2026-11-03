// Printed artwork, drawn on canvases: the playfield, the translite, the cabinet sides, the apron, the plastics, the
// cards and the drop-target faces. The look follows Deadbounce's Origin table, rethemed in graphite and plasma
// orange: a field lit like a stage, light running up the lanes, beams from the flippers to each shot, and every
// insert in a pool of its own light. The site's sections are the shots: the case studies are the ramps.
import {
  PF, POPS, POP, DROPS, LADDER, PLAY_AGAIN, RAMP_ARROWS, RAMPS, TOP_LANES, TOP_LANE_INSERTS, FLIPPERS, FLIPPER,
  SLINGS, GUIDES, APRON, ARCH, SHOOTER, LANE_LETTERS, RETURN_LANES, ORBIT_GUIDES, ORBIT_WEDGES, ORBIT_ARROWS, ORBIT_ROLLOVERS,
} from './layout.js';
import { roundedHull, ccw } from './geo.js';

export const COLORS = {
  field: '#15181b',
  field2: '#1c2024',
  alu: '#e3e5e2',
  slate: '#9ba1a5',
  plasma: '#ff6a13',
  ink: '#16181a',
  cab: '#0c0d0e',
};
const ALU = a => `rgba(227, 229, 226, ${a})`;
const PLASMA = a => `rgba(255, 106, 19, ${a})`;

export const FONTS = {
  display: (size, weight = 700, stretch = 112) => `${weight} ${size}px Archivo`,
  mono: (size, weight = 500) => `${weight} ${size}px "Martian Mono"`,
  body: (size, weight = 500) => `${weight} ${size}px "Instrument Sans"`,
};

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

// Shapes shared by the art and the 3D inserts: polygons in millimetres, centred, pointing +y.
export function arrowShape(w, h) {
  const hw = w / 2, hh = h / 2, neck = hw * 0.42, head = hh * 0.05;
  return [[0, hh], [hw, head - hh * 0.25], [neck, head - hh * 0.25], [neck, -hh], [-neck, -hh], [-neck, head - hh * 0.25], [-hw, head - hh * 0.25]];
}
export function chevronShape(w, h) {
  const hw = w / 2, hh = h / 2, t = h * 0.42;
  return [[0, hh], [hw, hh - t * 1.25], [hw, -hh], [0, -hh + t], [-hw, -hh], [-hw, hh - t * 1.25]];
}
export function triangleShape(w, h) {
  return [[0, h / 2], [w / 2, -h / 2], [-w / 2, -h / 2]];
}
export function ovalShape(w, h, steps = 40) {
  const pts = [], r = h / 2, straight = w / 2 - r;
  for (let i = 0; i <= steps / 2; i++) { const a = -Math.PI / 2 + (i / (steps / 2)) * Math.PI; pts.push([straight + Math.cos(a) * r, Math.sin(a) * r]); }
  for (let i = 0; i <= steps / 2; i++) { const a = Math.PI / 2 + (i / (steps / 2)) * Math.PI; pts.push([-straight + Math.cos(a) * r, Math.sin(a) * r]); }
  return pts;
}
export function circleShape(d, steps = 36) {
  return Array.from({ length: steps }, (_, i) => { const a = (i / steps) * Math.PI * 2; return [Math.cos(a) * d / 2, Math.sin(a) * d / 2]; });
}

// Every lit insert on the playfield. `group` ties an insert to a station or an animation.
export function insertList() {
  const list = [];
  TOP_LANE_INSERTS.forEach((p, i) => list.push({ id: `lane${i}`, group: 'lanes', x: p.x, y: p.y, angle: 0, shape: circleShape(20), color: 'alu' }));
  RAMP_ARROWS.forEach((a, i) => list.push({ id: `ramp${i}`, group: 'ramp' + i, x: a.x, y: a.y, angle: a.angle - 90, shape: arrowShape(28.6, 63.5), color: 'plasma' }));
  ORBIT_ARROWS.forEach((a, i) => list.push({ id: `orbit${i}`, group: 'orbit', index: i, x: a.x, y: a.y, angle: a.angle - 90, shape: arrowShape(20.6, 38.1), color: 'alu' }));
  for (let i = 0; i < DROPS.count; i++) {
    const x = DROPS.cx + (i - (DROPS.count - 1) / 2) * DROPS.pitch;
    list.push({ id: `drop${i}`, group: 'drops', index: i, x, y: DROPS.y - 36, angle: 0, shape: triangleShape(17, 13), color: 'plasma' });
  }
  for (let i = 0; i < LADDER.count; i++) {
    list.push({ id: `ladder${i}`, group: 'ladder', index: i, x: LADDER.cx, y: LADDER.top - i * LADDER.pitch, angle: 0, shape: chevronShape(LADDER.w, LADDER.h), color: i === 0 ? 'plasma' : 'alu' });
  }
  list.push({ id: 'again', group: 'again', x: PLAY_AGAIN.x, y: PLAY_AGAIN.y, angle: 0, shape: ovalShape(PLAY_AGAIN.w, PLAY_AGAIN.h), color: 'plasma' });
  RETURN_LANES.forEach((l, i) => list.push({
    id: `return${i}`, group: 'return', index: i, x: l.x, y: l.insertY, angle: 90,
    shape: l.kind === 'outlane' ? ovalShape(30, 16) : circleShape(18), color: l.kind === 'outlane' ? 'plasma' : 'alu',
  }));
  return list;
}

export const LADDER_LABELS = [
  ['2025', 'Freelance'],
  ['2023', 'Glaser Group'],
  ['2021', 'Origin Beer Lab'],
  ['2018', 'T&B Equipment'],
  ['2018', 'Atlee High'],
];

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

  // 1. The field: graphite, lit from the middle like a stage, with a warm pool behind the pops.
  g.fillStyle = COLORS.field;
  g.fillRect(0, 0, c.width, c.height);
  radial(PF.cx, 520, 640, [[0, '#2a2c2f'], [0.55, '#1c1f22'], [1, 'rgba(21,24,27,0)']]);
  radial(PF.cx, 830, 240, [[0, PLASMA(0.16)], [1, PLASMA(0)]]);

  // 2. A half-inch dot grid, brightest under the middle of the field.
  g.fillStyle = ALU(1);
  for (let y = 6.35; y < PF.l; y += 12.7) for (let x = 6.35; x < PF.w; x += 12.7) {
    const d = Math.hypot((x - PF.cx) / 1.1, (y - 560) / 1.6), a = 0.13 * Math.max(0, 1 - d / 470);
    if (a < 0.01) continue;
    g.globalAlpha = a;
    g.beginPath(); g.arc(X(x), Y(y), S(0.62), 0, Math.PI * 2); g.fill();
  }
  g.globalAlpha = 1;

  // 3. Light running up each lane: the in- and outlanes, the orbits, the top lanes, and the shooter lane's channel
  // with chevrons pointing up it.
  const laneLight = (x, y0, y1, width, alpha, tint = ALU) => {
    const grad = g.createLinearGradient(0, Y(y0), 0, Y(y1));
    grad.addColorStop(0, tint(0)); grad.addColorStop(0.35, tint(alpha)); grad.addColorStop(1, tint(0));
    g.fillStyle = grad;
    g.beginPath(); g.roundRect(X(x - width / 2), Y(y1), S(width), S(y1 - y0), S(width / 2)); g.fill();
  };
  for (const l of RETURN_LANES) laneLight(l.x, 220, 430, 20, 0.14);
  for (const o of ORBIT_ROLLOVERS) laneLight(o.x, 640, 960, 22, 0.12);
  for (const x of TOP_LANES.centers) laneLight(x, TOP_LANES.guideFrom - 30, TOP_LANES.guideTo + 30, 20, 0.18);
  {
    const x0 = SHOOTER.laneLeft, x1 = SHOOTER.laneRight;
    const grad = g.createLinearGradient(0, Y(0), 0, Y(SHOOTER.dividerTop));
    grad.addColorStop(0, PLASMA(0.05)); grad.addColorStop(1, PLASMA(0.22));
    g.fillStyle = grad;
    g.fillRect(X(x0), Y(SHOOTER.dividerTop), S(x1 - x0), S(SHOOTER.dividerTop));
    const mid = (x0 + x1) / 2;
    g.lineWidth = S(2.2); g.lineJoin = 'round'; g.lineCap = 'round';
    for (let y = 150, i = 0; y < 800; y += 46, i++) {
      g.strokeStyle = PLASMA(0.3 + i * 0.03);
      g.beginPath(); g.moveTo(X(mid - 9), Y(y)); g.lineTo(X(mid), Y(y + 9)); g.lineTo(X(mid + 9), Y(y)); g.stroke();
    }
  }

  // 4. The shots: a beam from each flipper to the opposite ramp's mouth, crossing on the centre line; the orbits'
  // beams fainter, down each orbit arrow's own axis; and one up the middle to the drop bank.
  const beam = (from, to, w0, w1, alpha, tint = PLASMA) => {
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
  RAMPS.forEach((ramp, i) => beam([PF.cx + (i ? -25 : 25), 196], ramp.path[0], 8, 50, 0.3));
  for (const a of ORBIT_ARROWS) {
    const r = (a.angle * Math.PI) / 180, dir = [Math.cos(r), Math.sin(r)];
    beam([a.x - dir[0] * 400, a.y - dir[1] * 400], [a.x + dir[0] * 34, a.y + dir[1] * 34], 4, 28, 0.15, ALU);
  }
  beam([PF.cx, 470], [PF.cx, DROPS.y - 44], 6, 34, 0.14);

  // 5. Every insert sits in a pool of its own light, in a printed bezel.
  const inserts = insertList();
  const extent = ins => { let r = 0; for (const [x, y] of ins.shape) r = Math.max(r, Math.hypot(x, y)); return r; };
  for (const ins of inserts) {
    const tint = ins.color === 'plasma' ? PLASMA : ALU, r = extent(ins) * 2.1;
    const grad = g.createRadialGradient(X(ins.x), Y(ins.y), 0, X(ins.x), Y(ins.y), S(r));
    grad.addColorStop(0, tint(0.4)); grad.addColorStop(0.55, tint(0.13)); grad.addColorStop(1, tint(0));
    g.fillStyle = grad;
    g.beginPath(); g.arc(X(ins.x), Y(ins.y), S(r), 0, Math.PI * 2); g.fill();
  }
  for (const ins of inserts) {
    const a = (ins.angle * Math.PI) / 180, grow = (extent(ins) + 2.6) / extent(ins);
    g.save();
    g.lineJoin = 'round';
    g.beginPath();
    ins.shape.forEach(([px, py], k) => {
      const rx = (px * Math.cos(a) - py * Math.sin(a)) * grow, ry = (px * Math.sin(a) + py * Math.cos(a)) * grow;
      k ? g.lineTo(X(ins.x + rx), Y(ins.y + ry)) : g.moveTo(X(ins.x + rx), Y(ins.y + ry));
    });
    g.closePath();
    g.strokeStyle = 'rgba(0,0,0,0.5)'; g.lineWidth = S(3.4); g.stroke();
    g.strokeStyle = ins.color === 'plasma' ? PLASMA(0.62) : ALU(0.5); g.lineWidth = S(0.8); g.stroke();
    g.restore();
  }

  // 6. Names: the site's sections are the shots. Small spaced capitals behind each arrow, along its axis.
  const along = (a, text, size, color) => {
    const r = ((a.angle - 90) * Math.PI) / 180, back = (a.length || 40) / 2 + 9;
    g.save();
    g.translate(X(a.x + Math.sin(r) * back), Y(a.y - Math.cos(r) * back));
    g.rotate(-r);
    label(g, 0, 0, text, size, color, 'mono');
    g.restore();
  };
  RAMP_ARROWS.forEach((a, i) => {
    // Up the arrow's outer side, reading toward the ramp.
    const r = (a.angle * Math.PI) / 180, out = i === 0 ? 1 : -1, off = 21;
    g.save();
    g.translate(X(a.x - Math.sin(r) * off * out), Y(a.y + Math.cos(r) * off * out));
    g.rotate(-r);
    label(g, 0, 0, i === 0 ? 'Deadbounce' : 'Tip Top', S(4.6), ALU(0.9), 'mono');
    g.restore();
  });
  ORBIT_ARROWS.forEach(a => along({ ...a, length: 38.1 }, 'Orbit', S(3.6), ALU(0.6)));
  label(g, X(PF.cx), Y(DROPS.y - 58), 'Skills', S(4.4), ALU(0.85), 'mono');
  label(g, X(PF.cx), Y(DROPS.y - 66), '4-target bank', S(3.2), ALU(0.45), 'mono');
  label(g, X(PF.cx), Y(POPS[2].y + 52), 'About', S(4.4), ALU(0.85), 'mono');
  label(g, X(PF.cx), Y(LADDER.top + 22), 'Experience', S(4.4), ALU(0.85), 'mono');
  LADDER_LABELS.forEach(([year, name], i) => {
    const y = LADDER.top - i * LADDER.pitch;
    label(g, X(PF.cx - 26), Y(y), year, S(3.8), i === 0 ? PLASMA(0.95) : ALU(0.6), 'mono', 'right');
    label(g, X(PF.cx + 26), Y(y), name, S(3.4), ALU(0.6), 'mono', 'left');
  });
  label(g, X(PF.cx), Y(PLAY_AGAIN.y - 20), 'Contact', S(4.4), ALU(0.85), 'mono');

  // Legends printed under the inserts, read through the plastic: lane letters, return lanes, play again.
  const ink = 'rgba(16,18,20,0.9)';
  TOP_LANE_INSERTS.forEach((p, i) => label(g, X(p.x), Y(p.y), LANE_LETTERS[i], S(8), ink, 'display'));
  for (const l of RETURN_LANES) {
    if (l.kind === 'outlane') {
      g.save(); g.translate(X(l.x), Y(l.insertY)); g.rotate(-Math.PI / 2);
      label(g, 0, 0, 'Special', S(3.4), ink, 'mono'); g.restore();
    } else label(g, X(l.x), Y(l.insertY), '2X', S(5.5), ink, 'display');
  }
  label(g, X(PLAY_AGAIN.x), Y(PLAY_AGAIN.y), 'Play again', S(4.2), ink, 'mono');

  // 7. The lockup between the slings: the dot-matrix DH, the name, and the model under it.
  dotMark(g, X(PF.cx), Y(318), S(2.2), PLASMA(1), ALU(0.06));
  label(g, X(PF.cx), Y(301), 'Dylan Hughes', S(8.4), ALU(0.95), 'display');
  label(g, X(PF.cx), Y(292), 'DH-26 · Richmond, Virginia', S(3), PLASMA(0.85), 'mono');

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
  if (kind === 'display') {
    g.font = FONTS.display(size, 700);
    g.fontStretch = 'expanded';
    g.letterSpacing = `${-size * 0.03}px`;
  } else {
    g.font = FONTS.mono(size, 500);
    g.letterSpacing = `${size * 0.08}px`;
    text = text.toUpperCase();
  }
  g.fillText(text, x, y);
  g.restore();
}

// --- Translite --------------------------------------------------------------------------------------------------
// The backbox's translite, `width` wide at the glass's 1.32 : 1, printed to be lit from behind: a deep graphite field
// with a warm glow, fine rays behind a large dot-matrix DH, a double frame, and the name and title set like a
// game's.
export function drawBackglass(width) {
  const height = Math.round(width / 1.32);
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 1320;
  const cx = width / 2, cy = height * 0.4;

  const field = g.createRadialGradient(cx, cy, 0, cx, height * 0.45, Math.max(width, height) * 0.75);
  field.addColorStop(0, '#3a2416'); field.addColorStop(0.42, '#1b1a1b'); field.addColorStop(1, '#0a0b0c');
  g.fillStyle = field;
  g.fillRect(0, 0, width, height);

  // Rays from behind the mark, as a light box shows them, and a dot field fading out from the middle.
  g.save();
  g.translate(cx, cy);
  for (let i = 0; i < 36; i++) {
    g.rotate(Math.PI / 18);
    g.fillStyle = PLASMA(i % 3 === 0 ? 0.075 : 0.035);
    g.beginPath(); g.moveTo(0, 0); g.lineTo(width, -width * 0.03); g.lineTo(width, width * 0.03); g.fill();
  }
  g.restore();
  for (let y = 18 * u; y < height; y += 22 * u) for (let x = 18 * u; x < width; x += 22 * u) {
    const a = 0.1 * Math.max(0, 1 - Math.hypot(x - cx, (y - cy) * 1.3) / (width * 0.55));
    if (a < 0.01) continue;
    g.fillStyle = ALU(a);
    g.beginPath(); g.arc(x, y, 1.4 * u, 0, Math.PI * 2); g.fill();
  }

  // The frame: a plasma line with a fine one inside it.
  const inset = 46 * u;
  g.strokeStyle = PLASMA(0.9); g.lineWidth = 5 * u;
  g.beginPath(); g.roundRect(inset, inset, width - inset * 2, height - inset * 2, 36 * u); g.stroke();
  g.strokeStyle = PLASMA(0.4); g.lineWidth = 1.6 * u;
  g.beginPath(); g.roundRect(inset + 14 * u, inset + 14 * u, width - inset * 2 - 28 * u, height - inset * 2 - 28 * u, 26 * u); g.stroke();

  // The mark, glowing: lit dots with their unlit neighbours faintly printed, as on the display.
  const dot = 40 * u;
  g.save();
  g.shadowColor = 'rgba(255, 120, 40, 0.9)'; g.shadowBlur = 38 * u;
  dotMark(g, cx, cy, dot, PLASMA(1), 'rgba(0,0,0,0)');
  g.restore();
  dotMark(g, cx, cy, dot, '#ff8a3d', ALU(0.07));

  // The title: the name, then the trade, then the place.
  const nameY = cy + dot * 4.6;
  g.save();
  g.shadowColor = 'rgba(255, 240, 225, 0.5)'; g.shadowBlur = 18 * u;
  label(g, cx, nameY, 'Dylan Hughes', 100 * u, '#f6f4f0', 'display');
  g.restore();
  label(g, cx, nameY + 76 * u, 'The portfolio', 24 * u, PLASMA(0.95), 'mono');
  label(g, cx, nameY + 112 * u, 'Model DH-26 · Richmond, Virginia', 16 * u, ALU(0.55), 'mono');
  return c;
}

// --- Cabinet, apron and targets ----------------------------------------------------------------------------------

// A cabinet side, `width` from the back (x = 0) to the front, `height` from the top edge down to the bottom at the
// back. The bottom is level in the world, so it rises toward the front to `frontBottom` of the height. Graphite
// paint with a plasma sweep rising from low at the front to over half the side at the back, like a flipper's stroke;
// a fine line riding over it, a pinstripe under the top edge, the DH cut out of the sweep under the backbox, and the
// name in the open band.
export function drawCabinetSide(width, height, { frontBottom = 0.77 } = {}) {
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const bottomAt = x => height - (height - frontBottom * height) * (x / width);
  // A point `along` the side from the front (0) to the back (1), `z` pixels above the bottom edge.
  const at = (along, z) => { const x = width * (1 - along); return [x, bottomAt(x) - z]; };
  g.fillStyle = '#141619';
  g.fillRect(0, 0, width, height);
  const low = height * 0.08, back = height * 0.56;
  const edge = [[0, low], [0.45, low * 0.8], [0.72, back * 0.55], [1, back]];
  const curve = (lift = 0) => {
    g.moveTo(...at(0, low + lift));
    g.bezierCurveTo(...edge.slice(1).flatMap(([a, z]) => at(a, z + lift)));
  };
  const fill = g.createLinearGradient(width, 0, 0, 0);
  fill.addColorStop(0, '#c9470c'); fill.addColorStop(0.55, COLORS.plasma); fill.addColorStop(1, '#ff9a55');
  g.beginPath(); g.moveTo(width, height); g.lineTo(...at(0, low)); curve(); g.lineTo(0, height); g.closePath();
  g.fillStyle = fill; g.fill();
  g.lineCap = 'round';
  g.strokeStyle = '#ffb27f'; g.lineWidth = height * 0.0065; g.beginPath(); curve(height * 0.03); g.stroke();
  g.strokeStyle = PLASMA(0.9); g.lineWidth = height * 0.008; g.beginPath(); g.moveTo(0, height * 0.045); g.lineTo(width, height * 0.045); g.stroke();
  // The mark, cut out of the sweep where it has grown tall.
  const markAt = 0.86, [mx] = at(markAt, 0), deep = back * 0.92;
  dotMark(g, mx, bottomAt(mx) - deep * 0.55, deep * 0.085, '#141619', 'rgba(20,22,25,0.18)');
  // The name in the open band between the sweep's line and the pinstripe.
  const [lx] = at(0.42, 0), band = bottomAt(lx) - (low * 0.9 + height * 0.03);
  const mid = (height * 0.045 + band) / 2;
  label(g, lx, mid - height * 0.035, 'Dylan Hughes', height * 0.12, '#f4f2ee', 'display');
  label(g, lx, mid + height * 0.06, 'Creative technologist', height * 0.032, PLASMA(0.95), 'mono');
  return c;
}

export function drawApronCard(kind, width) {
  const height = Math.round(width * (3.5 / 6.25));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 625;
  // Printed dark, like the rest of the apron: light type on ink, inside a plasma rim.
  g.fillStyle = '#17191c';
  g.fillRect(0, 0, width, height);
  g.strokeStyle = PLASMA(0.85);
  g.lineWidth = 3 * u;
  g.beginPath(); g.roundRect(14 * u, 14 * u, width - 28 * u, height - 28 * u, 14 * u); g.stroke();
  g.fillStyle = '#eceae6';
  g.textAlign = 'center';
  g.textBaseline = 'alphabetic';
  if (kind === 'instructions') {
    g.font = FONTS.display(30 * u, 760);
    g.fontStretch = 'expanded';
    g.fillText('How to play', width / 2, 66 * u);
    g.font = FONTS.body(20 * u, 500);
    g.textAlign = 'left';
    const lines = [
      '1  Send the problem to dyl.harrell@gmail.com',
      '2  Get a straight answer on whether',
      '    I’m the right person for it',
      '3  Build something useful together',
    ];
    lines.forEach((t, i) => g.fillText(t, 52 * u, (120 + i * 42) * u));
    g.font = FONTS.mono(13 * u);
    g.textAlign = 'center';
    g.fillStyle = PLASMA(0.9);
    g.fillText('DYLANHUGHES.DEV', width / 2, 316 * u);
  } else {
    g.font = FONTS.display(40 * u, 780);
    g.fontStretch = 'expanded';
    g.fillText('Free play', width / 2, 118 * u);
    g.font = FONTS.mono(15 * u);
    g.fillStyle = PLASMA(0.9);
    g.fillText('RICHMOND, VIRGINIA · EASTERN TIME', width / 2, 172 * u);
    g.fillStyle = '#eceae6';
    g.font = FONTS.body(20 * u, 500);
    g.fillText('Websites · Game software · Printed parts', width / 2, 232 * u);
    g.fillStyle = COLORS.plasma;
    g.fillRect(width / 2 - 40 * u, 270 * u, 80 * u, 6 * u);
  }
  return c;
}

// The apron's deck: graphite, an aluminium pinstripe along the lip, and the machine's name between the cards,
// where every game prints its logo. Canvas coordinates follow the deck's playfield millimetres.
export function drawApron(width) {
  const x0 = PF.rail, x1 = SHOOTER.laneLeft, y0 = -4, y1 = APRON.rightShoulder[1];
  const s = width / (x1 - x0);
  const c = canvas(width, (y1 - y0) * s);
  const g = c.getContext('2d');
  const X = x => (x - x0) * s, Y = y => (y1 - y) * s;
  const grad = g.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, '#1d2125');
  grad.addColorStop(1, '#141619');
  g.fillStyle = grad;
  g.fillRect(0, 0, c.width, c.height);
  // Fine brushed lines.
  for (let i = 0; i < c.height; i += Math.max(2, s * 0.6)) {
    g.fillStyle = `rgba(255,255,255,${0.012 + 0.012 * Math.sin(i * 0.37)})`;
    g.fillRect(0, i, c.width, 1);
  }
  // Pinstripe following the lip and the shoulders.
  g.strokeStyle = 'rgba(255,106,19,0.85)';
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
    g.fillStyle = on === '1' ? COLORS.plasma : 'rgba(255,255,255,0.07)';
    g.beginPath();
    g.arc(startX + (k * 5 + x + 0.5) * dot, startY + (y + 0.5) * dot, dot * 0.36, 0, Math.PI * 2);
    g.fill();
  })));
  g.fillStyle = COLORS.alu;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = FONTS.display(9 * s, 760);
  g.fontStretch = 'expanded';
  g.fillText('Dylan Hughes', cx, base + 6 * s);
  g.font = FONTS.mono(3.3 * s);
  g.letterSpacing = `${0.5 * s}px`;
  g.fillStyle = ALU(0.55);
  g.fillText('MODEL DH-26 · RICHMOND, VIRGINIA', cx, base + 17 * s);
  // The cabinet's sweep carried onto the apron: a glowing band along the front edge, with a fine line riding it.
  const sweep = g.createLinearGradient(X(x0), 0, X(x1), 0);
  sweep.addColorStop(0, '#ff8a3d'); sweep.addColorStop(0.5, '#b8400b'); sweep.addColorStop(1, '#ff8a3d');
  const wave = lift => { g.moveTo(X(x0), Y(10 + lift)); g.bezierCurveTo(X(x0 + 130), Y(1.5 + lift), X(x1 - 130), Y(1.5 + lift), X(x1), Y(10 + lift)); };
  g.fillStyle = sweep;
  g.beginPath(); g.moveTo(X(x0), Y(y0)); wave(0); g.lineTo(X(x1), Y(y0)); g.closePath(); g.fill();
  g.strokeStyle = PLASMA(0.7); g.lineWidth = 0.7 * s; g.beginPath(); wave(4.5); g.stroke();
  return c;
}

// Drop-target faces: the skill's dot icon above its name.
const DOT_ICONS = {
  Web: '1111111/1000001/1111111/1000001/1000001/1000001/1111111',
  Game: '0000000/0000000/1100011/0110110/0011100/0000000/0000000',
  Media: '1111111/1001001/1001101/1001111/1001101/1001001/1111111',
  Fab: '0011100/0111110/0000000/0111110/0000000/0111110/1111111',
};
export function drawTargetFace(name, width) {
  const height = Math.round(width * (DROPS.height / DROPS.width));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  g.fillStyle = '#ecede9';
  g.fillRect(0, 0, width, height);
  const rows = DOT_ICONS[name].split('/');
  const cell = width * 0.074, ox = width / 2 - (rows[0].length * cell) / 2, oy = height * 0.12;
  rows.forEach((row, y) => [...row].forEach((on, x) => {
    g.fillStyle = on === '1' ? COLORS.plasma : 'rgba(22,24,26,0.12)';
    g.beginPath(); g.arc(ox + (x + 0.5) * cell, oy + (y + 0.5) * cell, cell * 0.36, 0, Math.PI * 2); g.fill();
  }));
  g.fillStyle = COLORS.ink;
  g.font = FONTS.mono(width * 0.15, 600);
  g.letterSpacing = `${width * 0.01}px`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(name.toUpperCase(), width / 2, height * 0.83);
  return c;
}

// A pop bumper's cap decal: a printed disc under the cap's clear top, with the dot-matrix DH from the apron.
export function drawPopDecal(size) {
  const c = canvas(size, size);
  const g = c.getContext('2d');
  const m = size / 2;
  g.fillStyle = '#f1efe9';
  g.beginPath(); g.arc(m, m, m, 0, Math.PI * 2); g.fill();
  g.strokeStyle = COLORS.plasma;
  g.lineWidth = size * 0.07;
  g.beginPath(); g.arc(m, m, m * 0.88, 0, Math.PI * 2); g.stroke();
  g.strokeStyle = 'rgba(22,24,26,0.5)';
  g.lineWidth = size * 0.008;
  g.beginPath(); g.arc(m, m, m * 0.74, 0, Math.PI * 2); g.stroke();
  const D = ['1110', '1001', '1001', '1001', '1110'], H = ['1001', '1001', '1111', '1001', '1001'];
  const dot = size * 0.06, x0 = m - (9 * dot) / 2, y0 = m - (5 * dot) / 2 - size * 0.04;
  [D, H].forEach((glyph, k) => glyph.forEach((row, y) => [...row].forEach((on, x) => {
    g.fillStyle = on === '1' ? COLORS.ink : 'rgba(22,24,26,0.1)';
    g.beginPath(); g.arc(x0 + (k * 5 + x + 0.5) * dot, y0 + (y + 0.5) * dot, dot * 0.36, 0, Math.PI * 2); g.fill();
  })));
  g.fillStyle = COLORS.ink;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = FONTS.mono(size * 0.075, 600);
  g.fillText('1,000', m, m + size * 0.22);
  return c;
}

// The drop bank's front plate.
export function drawBankPlate(width, height) {
  const c = canvas(width, height);
  const g = c.getContext('2d');
  g.fillStyle = '#1b1e21';
  g.fillRect(0, 0, width, height);
  g.fillStyle = 'rgba(255,255,255,0.05)';
  for (let y = 0; y < height; y += 3) g.fillRect(0, y, width, 1);
  g.fillStyle = COLORS.plasma;
  g.fillRect(0, height * 0.86, width, height * 0.05);
  g.fillStyle = ALU(0.75);
  g.font = FONTS.mono(height * 0.13, 600);
  g.letterSpacing = `${height * 0.03}px`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('SKILLS · 4-BANK', width / 2, height * 0.16);
  return c;
}

// Plastic art for the sling covers: graphite with an aluminium edge line.
// A sling's printed plastic, drawn on its own outline (`pad` mm round the posts) at `ppm` pixels per millimetre: ink
// with a fine dot grid, and a plasma rim just inside the edge that reads as light caught in the plastic's cut edge.
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
  shade.addColorStop(0, '#2b2d31'); shade.addColorStop(1, '#131517');
  g.fillStyle = shade;
  g.fillRect(0, 0, c.width, c.height);
  g.save();
  path(outline); g.clip();
  g.fillStyle = ALU(0.09);
  for (let y = box[1]; y < box[3]; y += 4.2) for (let x = box[0]; x < box[2]; x += 4.2) { g.beginPath(); g.arc(X(x), Y(y), 0.42 * ppm, 0, Math.PI * 2); g.fill(); }
  g.restore();
  g.lineJoin = 'round';
  g.strokeStyle = PLASMA(0.95); g.lineWidth = 1.5 * ppm; path(roundedHull(posts, pad - 1.6, 10)); g.stroke();
  g.strokeStyle = PLASMA(0.32); g.lineWidth = 0.5 * ppm; path(roundedHull(posts, pad - 4.4, 10)); g.stroke();
  return { canvas: c, box };
}
