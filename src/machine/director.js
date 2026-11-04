// The camera. Each station is a pose: a target, a direction to look from and a box to keep in frame. Scrolling moves
// a float through the stations: it holds still at each one while its placard is read, and travels between them.
import * as THREE from 'three';

const DEG = Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const smooth = t => t * t * t * (t * (t * 6 - 15) + 10);

export class Director {
  constructor(camera) {
    this.camera = camera;
    this.poses = [];
    this.anchors = [];
    this.holds = [];
    this.current = null;
    this.parallax = { x: 0, y: 0, tx: 0, ty: 0 };
    this.view = { width: 1, height: 1, header: 64, layout: 'wide', panelTop: 0, panelLeft: 0 };
  }

  setPoses(poses) { this.poses = poses; }

  // Scroll positions where the camera holds at each station, and for how long, on wide screens: a placard sticks
  // beside its subject, so the hold is centred on its section. A station with data-hold holds that many times
  // longer, for one with a camera move of its own inside it (Skills).
  measure(elements, viewportHeight) {
    const y = scrollY;
    const top = el => el.getBoundingClientRect().top + y;
    const factor = el => +el.dataset.hold || 1;
    this.anchors = elements.map(el => top(el) + el.offsetHeight / 2 - viewportHeight / 2);
    this.anchors[0] = 0;
    this.holds = elements.map((el, i) => {
      const prev = i > 0 ? this.anchors[i] - this.anchors[i - 1] : Infinity;
      const next = i < elements.length - 1 ? this.anchors[i + 1] - this.anchors[i] : Infinity;
      return Math.min(Math.min(prev, next, el.offsetHeight) * 0.42 * factor(el), Math.min(prev, next) * 0.75);
    });
  }

  // Panel layouts (phones, tablets, short landscape screens): each station's hold is given, from the top of its
  // section, and the section is as long as its hold plus the travel to the next.
  setStops(elements, holds) {
    const y = scrollY;
    this.holds = holds.slice();
    this.anchors = elements.map((el, i) => el.getBoundingClientRect().top + y + holds[i] / 2);
  }

  // Station float: an integer while holding at a station, fractional while travelling.
  floatAt(y) {
    const a = this.anchors, h = this.holds, n = a.length;
    if (!n) return 0;
    if (y <= a[0] + h[0] / 2) return 0;
    for (let i = 0; i < n - 1; i++) {
      const start = a[i] + h[i] / 2, end = a[i + 1] - h[i + 1] / 2;
      if (y < start) return i;
      if (y <= end) return i + smooth(clamp((y - start) / Math.max(1, end - start)));
    }
    return n - 1;
  }

  // Progress through a station's hold, 0 → 1, for things scrubbed by scroll such as the drop targets.
  holdProgress(i, y) {
    const start = this.anchors[i] - this.holds[i] / 2;
    return clamp((y - start) / Math.max(1, this.holds[i]));
  }

  setView(width, height, header) {
    this.view.width = width;
    this.view.height = height;
    this.view.header = header;
    // Wide: the copy beside the part. Tall (portrait) and side (landscape phones and short windows): the copy in a
    // panel of its own, under the scene or beside it, so it never covers the part.
    const landscape = width / height > 1.05;
    this.view.layout = landscape ? (width >= 900 && height >= 540 ? 'wide' : 'side') : 'tall';
    this.view.panelTop = Math.round(Math.max(height * 0.47, height - 460));
    this.view.panelLeft = Math.round(width * 0.54);
  }

  // Where on screen a pose's target should sit, and how much of the screen it fills. The scene is always
  // full-bleed: on wide screens the part sits across from the copy; in the panel layouts, above or beside the panel.
  frame(pose) {
    const { width: W, height: H, header, layout } = this.view;
    const top = header / H;
    if (pose.side === 'center') return { cx: 0.5, cy: 0.5, fx: 0.9, fy: 0.9 };
    if (layout === 'wide') {
      if (pose.side === 'hero') return { cx: 0.5, cy: top / 2 + 0.5, fx: 0.96, fy: (1 - top) * 0.97 };
      const copy = Math.min(0.42, (Math.min(560, W * 0.4) + 80) / W);
      const cx = pose.side === 'left' ? copy + (1 - copy) / 2 : (1 - copy) / 2;
      return { cx, cy: top / 2 + 0.5, fx: (1 - copy) * 0.98, fy: (1 - top) * 0.98 };
    }
    // Panel layouts: the part fills the scene's share of the screen.
    if (layout === 'side') { const right = this.view.panelLeft / W; return { cx: right / 2, cy: (top + 1) / 2, fx: right * 0.94, fy: (1 - top) * 0.92 }; }
    const bottom = this.view.panelTop / H;
    return { cx: 0.5, cy: (top + bottom) / 2, fx: 0.96, fy: (bottom - top) * 0.92 };
  }

  // A pose resolved for the current screen: camera position, target, field of view and view offset. A pose's `tall`
  // overrides some of it on tall screens, where the scene has only the top of the screen.
  resolve(pose) {
    if (this.view.layout === 'tall' && pose.tall) pose = { ...pose, ...pose.tall };
    const f = this.frame(pose);
    const fov = (pose.fov || 32) * DEG;
    const aspect = this.view.width / this.view.height;
    const tan = Math.tan(fov / 2);
    const d = Math.max(pose.fit[1] / (2 * tan * f.fy), pose.fit[0] / (2 * tan * aspect * f.fx)) * (pose.zoom || 1);
    return { target: pose.target.clone(), az: pose.az * DEG, el: pose.el * DEG, d, fov: pose.fov || 32, cx: f.cx, cy: f.cy, sharp: pose.sharp || 0 };
  }

  // Blends resolved poses a → b by t, with an optional crane lift (degrees of extra elevation mid-way).
  blend(a, b, t, lift = 0) {
    const out = {
      target: a.target.clone().lerp(b.target, t),
      az: a.az + (b.az - a.az) * t,
      el: a.el + (b.el - a.el) * t + Math.sin(Math.PI * t) * lift * DEG,
      d: Math.exp(Math.log(a.d) + (Math.log(b.d) - Math.log(a.d)) * t),
      fov: a.fov + (b.fov - a.fov) * t,
      cx: a.cx + (b.cx - a.cx) * t,
      cy: a.cy + (b.cy - a.cy) * t,
      sharp: a.sharp + (b.sharp - a.sharp) * t,
    };
    return out;
  }

  // The resolved pose for a station float.
  at(f) {
    const n = this.poses.length;
    const i = Math.min(n - 1, Math.floor(f));
    const t = f - i;
    const a = this.resolve(this.poses[i]);
    if (t <= 0 || i >= n - 1) return a;
    const b = this.resolve(this.poses[i + 1]);
    return this.blend(a, b, t, this.poses[i + 1].lift || 0);
  }

  pointer(x, y) { this.parallax.tx = x; this.parallax.ty = y; }

  // Applies a resolved pose to the camera, easing toward it so motion stays smooth.
  apply(goal, dt, { damping = 9, instant = false } = {}) {
    const k = instant ? 1 : 1 - Math.exp(-dt * damping);
    if (!this.current || instant) this.current = { ...goal, target: goal.target.clone() };
    const c = this.current;
    c.target.lerp(goal.target, k);
    c.az += (goal.az - c.az) * k;
    c.el += (goal.el - c.el) * k;
    c.d += (goal.d - c.d) * k;
    c.fov += (goal.fov - c.fov) * k;
    c.cx += (goal.cx - c.cx) * k;
    c.cy += (goal.cy - c.cy) * k;
    c.sharp += (goal.sharp - c.sharp) * k;
    const p = this.parallax;
    const kp = instant ? 1 : 1 - Math.exp(-dt * 3);
    p.x += (p.tx - p.x) * kp;
    p.y += (p.ty - p.y) * kp;

    const az = c.az + p.x * 1.6 * DEG, el = c.el - p.y * 1.0 * DEG;
    const cam = this.camera;
    cam.position.set(
      c.target.x + Math.sin(az) * Math.cos(el) * c.d,
      c.target.y + Math.sin(el) * c.d,
      c.target.z + Math.cos(az) * Math.cos(el) * c.d,
    );
    cam.lookAt(c.target);
    cam.fov = c.fov;
    const { width: W, height: H } = this.view;
    cam.setViewOffset(W, H, W * (0.5 - c.cx), H * (0.5 - c.cy), W, H);
    cam.updateProjectionMatrix();
  }
}
