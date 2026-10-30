// Printed artwork, drawn on canvases: the playfield, the backglass, the cabinet sides, the apron cards and the
// drop-target faces. The playfield is drawn like a cut plan: a graphite field, a fine grid, shot lines with their
// measured lengths, and labels where the site's sections live.
import {
  PF, POPS, POP, DROPS, LADDER, PLAY_AGAIN, RAMP_ARROWS, RAMPS, TOP_LANES, TOP_LANE_INSERTS, FLIPPERS, FLIPPER,
  SLINGS, GUIDES, APRON, ARCH, SHOOTER, LANE_LETTERS, RETURN_LANES,
} from './layout.js';

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

  // Field.
  g.fillStyle = COLORS.field;
  g.fillRect(0, 0, c.width, c.height);
  const glow = g.createRadialGradient(X(PF.cx), Y(560), 0, X(PF.cx), Y(560), S(620));
  glow.addColorStop(0, 'rgba(255,255,255,0.035)');
  glow.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = glow;
  g.fillRect(0, 0, c.width, c.height);

  // Grid: 10 mm and 50 mm.
  for (let mm = 0; mm <= Math.max(PF.w, PF.l); mm += 10) {
    const major = mm % 50 === 0;
    g.strokeStyle = ALU(major ? 0.075 : 0.032);
    g.lineWidth = Math.max(1, S(major ? 0.45 : 0.3));
    if (mm <= PF.w) { g.beginPath(); g.moveTo(X(mm), 0); g.lineTo(X(mm), c.height); g.stroke(); }
    if (mm <= PF.l) { g.beginPath(); g.moveTo(0, Y(mm)); g.lineTo(c.width, Y(mm)); g.stroke(); }
  }

  // Centre column: the strip the site scrolls down, from the drop bank to the play-again insert, ruled like a scale.
  const top = DROPS.y + 30, bottom = PLAY_AGAIN.y - 30, half = 46;
  const stripe = g.createLinearGradient(0, Y(top), 0, Y(bottom));
  stripe.addColorStop(0, ALU(0));
  stripe.addColorStop(0.2, ALU(0.045));
  stripe.addColorStop(1, ALU(0.015));
  g.fillStyle = stripe;
  g.fillRect(X(PF.cx - half), Y(top), S(half * 2), S(top - bottom));
  for (let mm = Math.ceil(bottom / 5) * 5; mm <= top; mm += 5) {
    const len = mm % 50 === 0 ? 6 : mm % 10 === 0 ? 3.5 : 2;
    g.strokeStyle = ALU(mm % 50 === 0 ? 0.4 : 0.2);
    g.lineWidth = S(0.45);
    for (const side of [-1, 1]) {
      const x0 = PF.cx + side * half;
      g.beginPath(); g.moveTo(X(x0), Y(mm)); g.lineTo(X(x0 - side * len), Y(mm)); g.stroke();
    }
  }

  // Shot lines: each flipper's tip to the opposite ramp, dashed and kept clear of the centre column.
  g.save();
  g.beginPath();
  g.rect(0, 0, c.width, c.height);
  g.rect(X(PF.cx + half + 4), Y(top + 4), -S(half * 2 + 8), S(top - bottom + 8));
  g.clip('evenodd');
  RAMPS.forEach((ramp, i) => {
    const f = FLIPPERS[1 - i];
    const a = (f.up * Math.PI) / 180;
    const tip = [f.x + Math.cos(a) * FLIPPER.length, f.y + Math.sin(a) * FLIPPER.length];
    const arrow = RAMP_ARROWS[i];
    shotLine(g, X, Y, S, tip, [arrow.x + (i ? 8 : -8), arrow.y + 30], i === 0 ? 'Left ramp' : 'Right ramp');
  });
  g.restore();

  // Pop bumper zone: rings around each pop.
  for (const p of POPS) {
    for (const [r, a] of [[POP.cap / 2 + 9, 0.22], [POP.cap / 2 + 15, 0.08]]) {
      g.strokeStyle = ALU(a);
      g.lineWidth = S(0.6);
      g.beginPath(); g.arc(X(p.x), Y(p.y), S(r), 0, Math.PI * 2); g.stroke();
    }
  }
  label(g, X(PF.cx), Y(726), 'About', S(10.5), ALU(0.88), 'display');
  label(g, X(PF.cx), Y(712), 'Pop bumpers · Ø 60', S(4.4), ALU(0.5), 'mono');

  // Ramp labels.
  RAMP_ARROWS.forEach((arrow, i) => {
    const name = i === 0 ? 'Deadbounce' : 'Tip Top';
    const x = arrow.x + (i === 0 ? -6 : 6);
    label(g, X(x), Y(arrow.y - 38), name, S(8.6), ALU(0.9), 'display');
    label(g, X(x), Y(arrow.y - 49), 'Case study', S(4.2), ALU(0.5), 'mono');
  });

  // Drop bank.
  label(g, X(PF.cx), Y(DROPS.y - 56), 'Skills', S(9.5), ALU(0.9), 'display');
  label(g, X(PF.cx), Y(DROPS.y - 67), '4-target bank', S(4), ALU(0.5), 'mono');

  // Ladder labels.
  label(g, X(PF.cx), Y(LADDER.top + 22), 'Experience', S(7), ALU(0.85), 'display');
  LADDER_LABELS.forEach(([year, name], i) => {
    const y = LADDER.top - i * LADDER.pitch;
    label(g, X(PF.cx - 28), Y(y), year, S(5.2), i === 0 ? PLASMA(0.95) : ALU(0.7), 'mono', 'right');
    label(g, X(PF.cx + 28), Y(y), name.toUpperCase(), S(4.6), ALU(0.7), 'mono', 'left');
  });

  // Legends printed under the inserts, read through the plastic: lane letters, return lanes, play again.
  const ink = 'rgba(16,18,20,0.9)';
  TOP_LANE_INSERTS.forEach((p, i) => label(g, X(p.x), Y(p.y), LANE_LETTERS[i], S(8), ink, 'display'));
  for (const l of RETURN_LANES) {
    if (l.kind === 'outlane') {
      g.save(); g.translate(X(l.x), Y(l.insertY)); g.rotate(-Math.PI / 2);
      label(g, 0, 0, 'SPECIAL', S(3.4), ink, 'mono'); g.restore();
    } else label(g, X(l.x), Y(l.insertY), '2X', S(5.5), ink, 'display');
  }
  label(g, X(PLAY_AGAIN.x), Y(PLAY_AGAIN.y), 'PLAY AGAIN', S(4.6), ink, 'mono');
  label(g, X(PF.cx), Y(PLAY_AGAIN.y - 22), 'Contact', S(8), ALU(0.75), 'display');

  // Insert bezels: a dark halo and a fine ring around every insert.
  for (const ins of insertList()) {
    const pts = ins.shape;
    const a = (ins.angle * Math.PI) / 180;
    const path = () => {
      g.beginPath();
      pts.forEach(([px, py], k) => {
        const rx = px * Math.cos(a) - py * Math.sin(a), ry = px * Math.sin(a) + py * Math.cos(a);
        k ? g.lineTo(X(ins.x + rx), Y(ins.y + ry)) : g.moveTo(X(ins.x + rx), Y(ins.y + ry));
      });
      g.closePath();
    };
    g.save();
    g.lineJoin = 'round';
    g.strokeStyle = 'rgba(0,0,0,0.55)'; g.lineWidth = S(5); path(); g.stroke();
    g.strokeStyle = ins.color === 'plasma' ? PLASMA(0.7) : ALU(0.55); g.lineWidth = S(0.8); path(); g.stroke();
    g.restore();
  }

  // Dimensions: the board's width along the top, its length up the left outlane.
  dimension(g, X, Y, S, [PF.rail + 30, ARCH.top - 18], [SHOOTER.laneRight - 30, ARCH.top - 18], '514.35', 'h');
  dimension(g, X, Y, S, [24, 460], [24, 760], '1066.8', 'v');

  // Chevrons down each return lane, toward the flippers.
  for (const l of RETURN_LANES) {
    for (let k = 0; k < 3; k++) {
      const y = 290 - k * 16;
      g.strokeStyle = ALU(0.18 + k * 0.08);
      g.lineWidth = S(1.1);
      g.beginPath(); g.moveTo(X(l.x - 6), Y(y + 4)); g.lineTo(X(l.x), Y(y - 2)); g.lineTo(X(l.x + 6), Y(y + 4)); g.stroke();
    }
  }

  // Registration marks.
  for (const [x, y] of [[20, 20], [PF.w - 20, 20], [20, PF.l - 20], [PF.w - 20, PF.l - 20]]) cross(g, X(x), Y(y), S(5), ALU(0.3), S(0.5));

  // Cut-plan outlines for the slings and flippers, faint, as Deadbounce prints them.
  g.strokeStyle = ALU(0.14);
  g.lineWidth = S(0.5);
  g.setLineDash([S(2), S(2)]);
  for (const s of SLINGS) { g.beginPath(); s.posts.forEach(([x, y], k) => (k ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y)))); g.closePath(); g.stroke(); }
  for (const f of FLIPPERS) {
    const r = S(FLIPPER.length + FLIPPER.tipR + 3);
    const a0 = -(Math.min(f.rest, f.up) * Math.PI) / 180, a1 = -(Math.max(f.rest, f.up) * Math.PI) / 180;
    g.beginPath(); g.arc(X(f.x), Y(f.y), r, a1, a0); g.stroke();
  }
  g.setLineDash([]);

  return c;
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

function shotLine(g, X, Y, S, from, to, name) {
  g.save();
  g.strokeStyle = PLASMA(0.55);
  g.lineWidth = S(0.8);
  g.setLineDash([S(4), S(3)]);
  g.beginPath(); g.moveTo(X(from[0]), Y(from[1])); g.lineTo(X(to[0]), Y(to[1])); g.stroke();
  g.setLineDash([]);
  const ang = Math.atan2(-(to[1] - from[1]), to[0] - from[0]);
  g.fillStyle = PLASMA(0.75);
  g.translate(X(to[0]), Y(to[1]));
  g.rotate(ang);
  g.beginPath(); g.moveTo(0, 0); g.lineTo(-S(5), -S(2.4)); g.lineTo(-S(5), S(2.4)); g.closePath(); g.fill();
  g.restore();
  if (name) {
    const len = Math.hypot(to[0] - from[0], to[1] - from[1]);
    const mx = from[0] + (to[0] - from[0]) * 0.8, my = from[1] + (to[1] - from[1]) * 0.8;
    g.save();
    g.translate(X(mx), Y(my));
    let rot = ang;
    if (rot > Math.PI / 2) rot -= Math.PI; else if (rot < -Math.PI / 2) rot += Math.PI;
    g.rotate(rot);
    g.translate(0, -S(4));
    label(g, 0, 0, `${name} · ${Math.round(len)} mm`, S(3.8), PLASMA(0.85), 'mono');
    g.restore();
  }
}

function dimension(g, X, Y, S, a, b, text, dir) {
  g.save();
  g.strokeStyle = ALU(0.28);
  g.fillStyle = ALU(0.45);
  g.lineWidth = S(0.45);
  g.beginPath(); g.moveTo(X(a[0]), Y(a[1])); g.lineTo(X(b[0]), Y(b[1])); g.stroke();
  for (const p of [a, b]) {
    g.beginPath();
    if (dir === 'h') { g.moveTo(X(p[0]), Y(p[1] - 3)); g.lineTo(X(p[0]), Y(p[1] + 3)); }
    else { g.moveTo(X(p[0] - 3), Y(p[1])); g.lineTo(X(p[0] + 3), Y(p[1])); }
    g.stroke();
  }
  const mx = X((a[0] + b[0]) / 2), my = Y((a[1] + b[1]) / 2);
  g.translate(mx, my);
  if (dir === 'v') g.rotate(-Math.PI / 2);
  g.fillStyle = COLORS.field;
  g.font = FONTS.mono(S(3.6));
  const w = g.measureText(text).width + S(4);
  g.fillRect(-w / 2, -S(2.6), w, S(5.2));
  label(g, 0, 0, text, S(3.6), ALU(0.6), 'mono');
  g.restore();
}

function cross(g, x, y, r, color, lw) {
  g.save();
  g.strokeStyle = color;
  g.lineWidth = lw;
  g.beginPath(); g.moveTo(x - r, y); g.lineTo(x + r, y); g.moveTo(x, y - r); g.lineTo(x, y + r); g.stroke();
  g.beginPath(); g.arc(x, y, r * 0.55, 0, Math.PI * 2); g.stroke();
  g.restore();
}

// --- Backglass ------------------------------------------------------------------------------------------------
// The left of the glass is kept dark for the hero copy, which the site lays over it as real text. The right holds a
// plan drawing of this machine's playfield, drawn from the same layout as the 3D parts.

export function drawBackglass(width) {
  const height = Math.round(width / 1.32);
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 1320; // design units: the glass is 1320 × 1000

  g.fillStyle = '#0b0c0d';
  g.fillRect(0, 0, width, height);

  // Backlight: a warm bloom behind the plan, falling off toward the copy.
  const light = g.createRadialGradient(980 * u, 470 * u, 0, 980 * u, 470 * u, 700 * u);
  light.addColorStop(0, 'rgba(255, 120, 40, 0.22)');
  light.addColorStop(0.45, 'rgba(255, 106, 19, 0.07)');
  light.addColorStop(1, 'rgba(255, 106, 19, 0)');
  g.fillStyle = light;
  g.fillRect(0, 0, width, height);

  // Dot-matrix screen over the whole glass.
  g.fillStyle = 'rgba(227, 229, 226, 0.05)';
  for (let y = 10 * u; y < height; y += 14 * u) for (let x = 10 * u; x < width; x += 14 * u) g.fillRect(x, y, 2 * u, 2 * u);

  // Frame and corner marks.
  g.strokeStyle = ALU(0.28);
  g.lineWidth = 1.5 * u;
  g.strokeRect(28 * u, 28 * u, width - 56 * u, height - 56 * u);
  for (const [x, y] of [[28, 28], [1292, 28], [28, 972], [1292, 972]]) cross(g, x * u, y * u, 14 * u, ALU(0.45), 1.5 * u);

  // The plan, rotated so the playfield's top points right, fitted into the right-hand panel.
  const plan = { x: 760, y: 120, w: 500, h: 780 };
  const s = Math.min(plan.w / PF.w, plan.h / PF.l) * u;
  g.save();
  g.translate((plan.x + plan.w / 2) * u, (plan.y + plan.h / 2) * u);
  g.translate(-PF.w * s / 2, PF.l * s / 2);
  const X = x => x * s, Y = y => -y * s;
  drawPlan(g, X, Y, s);
  g.restore();

  // Callouts beside the plan.
  g.font = FONTS.mono(15 * u);
  g.letterSpacing = `${1.6 * u}px`;
  g.fillStyle = ALU(0.55);
  g.textAlign = 'left';
  g.fillText('PLAYFIELD 514.35 × 1066.8 MM', 760 * u, 88 * u);
  g.fillText('PITCH 6.5°  ·  BALL Ø 27 MM', 760 * u, 935 * u);

  // Model plate, top left.
  g.fillStyle = PLASMA(0.9);
  g.beginPath(); g.arc(78 * u, 84 * u, 6 * u, 0, Math.PI * 2); g.fill();
  return c;
}

function drawPlan(g, X, Y, s) {
  const line = (a, w = 1.2) => { g.strokeStyle = ALU(a); g.lineWidth = w; };
  // Outline: rails and arch.
  line(0.75, 1.6);
  g.beginPath();
  g.moveTo(X(PF.rail), Y(0));
  g.lineTo(X(PF.rail), Y(ARCH.left.cy));
  g.arc(X(ARCH.left.cx), Y(ARCH.left.cy), ARCH.left.r * s, Math.PI, Math.PI * 1.5);
  g.lineTo(X(ARCH.right.cx), Y(ARCH.top));
  g.arc(X(ARCH.right.cx), Y(ARCH.right.cy), ARCH.right.r * s, Math.PI * 1.5, Math.PI * 2);
  g.lineTo(X(SHOOTER.laneRight), Y(0));
  g.stroke();
  line(0.4);
  g.beginPath(); g.moveTo(X(SHOOTER.laneLeft), Y(SHOOTER.apronTop)); g.lineTo(X(SHOOTER.laneLeft), Y(SHOOTER.dividerTop)); g.stroke();
  // Apron.
  g.beginPath();
  g.moveTo(X(APRON.leftShoulder[0]), Y(APRON.leftShoulder[1]));
  g.lineTo(X(APRON.lipLeft[0]), Y(APRON.lipLeft[1]));
  g.arc(X(PF.cx), Y(APRON.lipCy), APRON.lipR * s, Math.PI - Math.asin((APRON.lipCy - APRON.lipEndY) / APRON.lipR), Math.asin((APRON.lipCy - APRON.lipEndY) / APRON.lipR), true);
  g.lineTo(X(APRON.rightShoulder[0]), Y(APRON.rightShoulder[1]));
  g.stroke();
  // Guides and slings.
  for (const guide of GUIDES) { g.beginPath(); guide.forEach(([x, y], k) => (k ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y)))); g.stroke(); }
  line(0.65);
  for (const sl of SLINGS) { g.beginPath(); sl.posts.forEach(([x, y], k) => (k ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y)))); g.closePath(); g.stroke(); }
  // Flippers, lit.
  g.fillStyle = PLASMA(0.95);
  for (const f of FLIPPERS) {
    const a = (f.rest * Math.PI) / 180;
    g.save(); g.translate(X(f.x), Y(f.y)); g.rotate(-a);
    g.beginPath();
    g.arc(0, 0, FLIPPER.baseR * s, Math.PI / 2, Math.PI * 1.5);
    g.lineTo(FLIPPER.length * s, -FLIPPER.tipR * s);
    g.arc(FLIPPER.length * s, 0, FLIPPER.tipR * s, -Math.PI / 2, Math.PI / 2);
    g.closePath(); g.fill(); g.restore();
  }
  // Ramps.
  line(0.6);
  for (const r of RAMPS) {
    g.beginPath(); r.path.forEach(([x, y], k) => (k ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y))));
    const t = r.turn, dir = t.mirror ? -1 : 1;
    for (let k = 0; k <= 12; k++) { const a = (k / 12) * Math.PI; g.lineTo(X(t.cx + dir * Math.cos(a) * t.r), Y(t.cy + Math.sin(a) * t.r)); }
    g.stroke();
    g.setLineDash([3, 3]);
    g.beginPath(); r.wire.forEach(([x, y], k) => (k ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y)))); g.stroke();
    g.setLineDash([]);
  }
  // Pops, drops, lanes and inserts.
  g.fillStyle = PLASMA(0.85);
  for (const p of POPS) { g.beginPath(); g.arc(X(p.x), Y(p.y), (POP.cap / 2) * s, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = ALU(0.85);
  for (let i = 0; i < DROPS.count; i++) {
    const x = DROPS.cx + (i - (DROPS.count - 1) / 2) * DROPS.pitch;
    g.fillRect(X(x - DROPS.width / 2), Y(DROPS.y + 3), DROPS.width * s, 6 * s);
  }
  line(0.6);
  for (const x of TOP_LANES.guides) { g.beginPath(); g.moveTo(X(x), Y(TOP_LANES.guideFrom)); g.lineTo(X(x), Y(TOP_LANES.guideTo)); g.stroke(); }
  for (const ins of insertList()) {
    const a = (ins.angle * Math.PI) / 180;
    g.fillStyle = ins.color === 'plasma' ? PLASMA(0.9) : ALU(0.7);
    g.beginPath();
    ins.shape.forEach(([px, py], k) => {
      const rx = px * Math.cos(a) - py * Math.sin(a), ry = px * Math.sin(a) + py * Math.cos(a);
      k ? g.lineTo(X(ins.x + rx), Y(ins.y + ry)) : g.moveTo(X(ins.x + rx), Y(ins.y + ry));
    });
    g.closePath(); g.fill();
  }
}

// --- Cabinet, apron and targets ----------------------------------------------------------------------------------

export function drawCabinetSide(width, height) {
  const c = canvas(width, height);
  const g = c.getContext('2d');
  g.fillStyle = '#16191c';
  g.fillRect(0, 0, width, height);
  // An aluminium band along the side with a plasma pinstripe.
  const bandY = height * 0.34, bandH = height * 0.2;
  const band = g.createLinearGradient(0, bandY, 0, bandY + bandH);
  band.addColorStop(0, '#d5d8d6'); band.addColorStop(0.5, '#eceeeb'); band.addColorStop(1, '#c7cbc8');
  g.fillStyle = band;
  g.fillRect(0, bandY, width, bandH);
  g.fillStyle = COLORS.plasma;
  g.fillRect(0, bandY + bandH + height * 0.025, width, height * 0.012);
  // Name on the band, near the front.
  g.fillStyle = COLORS.ink;
  g.font = FONTS.display(bandH * 0.42, 760);
  g.fontStretch = 'expanded';
  g.textBaseline = 'middle';
  g.textAlign = 'left';
  g.fillText('Dylan Hughes', width * 0.06, bandY + bandH / 2);
  g.font = FONTS.mono(bandH * 0.16);
  g.textAlign = 'right';
  g.fillText('CREATIVE TECHNOLOGIST · RICHMOND, VIRGINIA', width * 0.94, bandY + bandH / 2);
  return c;
}

export function drawApronCard(kind, width) {
  const height = Math.round(width * (3.5 / 6.25));
  const c = canvas(width, height);
  const g = c.getContext('2d');
  const u = width / 625;
  g.fillStyle = '#ecede9';
  g.fillRect(0, 0, width, height);
  g.strokeStyle = COLORS.ink;
  g.lineWidth = 3 * u;
  g.strokeRect(14 * u, 14 * u, width - 28 * u, height - 28 * u);
  g.fillStyle = COLORS.ink;
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
    g.fillText('DYLANHUGHES.DEV', width / 2, 316 * u);
  } else {
    g.font = FONTS.display(40 * u, 780);
    g.fontStretch = 'expanded';
    g.fillText('Free play', width / 2, 118 * u);
    g.font = FONTS.mono(15 * u);
    g.fillText('RICHMOND, VIRGINIA · EASTERN TIME', width / 2, 172 * u);
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
export function drawPlastic(width, height) {
  const c = canvas(width, height);
  const g = c.getContext('2d');
  g.fillStyle = '#1b1f23';
  g.fillRect(0, 0, width, height);
  g.strokeStyle = 'rgba(255,106,19,0.9)';
  g.lineWidth = width * 0.02;
  g.strokeRect(width * 0.08, height * 0.08, width * 0.84, height * 0.84);
  return c;
}
