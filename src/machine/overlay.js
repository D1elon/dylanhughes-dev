// Lays HTML onto a flat surface in the scene: the hero copy on the backglass. Each frame the surface's four corners
// are projected to the screen and the element gets the exact perspective transform (a homography) that maps its
// rectangle onto them, so the text stays real, sharp, selectable HTML that sits on the glass.
import * as THREE from 'three';

export const GLASS_DESIGN = { width: 1320, height: 1000 };

// The projective transform taking the unit square's corners (0,0) (1,0) (1,1) (0,1) to the quad p0..p3.
function squareToQuad(p) {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = p;
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  let g = 0, h = 0;
  if (Math.abs(dx3) > 1e-9 || Math.abs(dy3) > 1e-9) {
    const den = dx1 * dy2 - dx2 * dy1;
    g = (dx3 * dy2 - dx2 * dy3) / den;
    h = (dx1 * dy3 - dx3 * dy1) / den;
  }
  return {
    a: x1 - x0 + g * x1, b: x3 - x0 + h * x3, c: x0,
    d: y1 - y0 + g * y1, e: y3 - y0 + h * y3, f: y0,
    g, h,
  };
}

export class SurfaceOverlay {
  // `anchor` is an Object3D at the surface's centre, facing +Z; `size` is its [width, height] in metres.
  constructor(element, anchor, size, design = GLASS_DESIGN) {
    this.element = element;
    this.anchor = anchor;
    this.size = size;
    this.design = design;
    this.opacity = -1;
    this.attached = false;
    this.corners = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
    this.scratch = new THREE.Vector3();
  }

  attach() {
    if (this.attached) return;
    this.attached = true;
    const s = this.element.style;
    s.position = 'fixed';
    s.left = '0';
    s.top = '0';
    s.width = this.design.width + 'px';
    s.height = this.design.height + 'px';
    s.transformOrigin = '0 0';
    s.willChange = 'transform, opacity';
    this.element.classList.add('on-glass');
  }

  detach() {
    if (!this.attached) return;
    this.attached = false;
    this.element.classList.remove('on-glass');
    for (const prop of ['position', 'left', 'top', 'width', 'height', 'transform', 'transform-origin', 'will-change', 'opacity', 'visibility', 'pointer-events']) this.element.style.removeProperty(prop);
    this.opacity = -1;
  }

  // Screen pixels per design pixel, measured across the projected top edge: used to judge readability.
  scaleOn(camera, width) {
    const [a, b] = this.project(camera, width, 1);
    return a && b ? Math.hypot(b[0] - a[0], b[1] - a[1]) / this.design.width : 0;
  }

  project(camera, width, height) {
    const [w, h] = this.size;
    const local = [[-w / 2, h / 2], [w / 2, h / 2], [w / 2, -h / 2], [-w / 2, -h / 2]];
    this.anchor.updateWorldMatrix(true, false);
    return local.map(([x, y], i) => {
      const v = this.corners[i].set(x, y, 0).applyMatrix4(this.anchor.matrixWorld);
      const view = this.scratch.copy(v).applyMatrix4(camera.matrixWorldInverse);
      if (view.z > -0.01) return null; // behind the camera
      v.project(camera);
      return [(v.x + 1) / 2 * width, (1 - v.y) / 2 * height];
    });
  }

  update(camera, width, height, opacity) {
    if (!this.attached) return;
    const quad = this.project(camera, width, height);
    const visible = opacity > 0.01 && quad.every(Boolean);
    this.setOpacity(visible ? opacity : 0);
    if (!visible) return;
    const m = squareToQuad(quad);
    const W = this.design.width, H = this.design.height;
    const f = n => n.toFixed(6);
    this.element.style.transform = `matrix3d(${f(m.a / W)},${f(m.d / W)},0,${f(m.g / W)},${f(m.b / H)},${f(m.e / H)},0,${f(m.h / H)},0,0,1,0,${f(m.c)},${f(m.f)},0,1)`;
  }

  setOpacity(value) {
    if (Math.abs(value - this.opacity) < 0.002) return;
    this.opacity = value;
    const s = this.element.style;
    s.opacity = value.toFixed(3);
    s.visibility = value < 0.02 ? 'hidden' : 'visible';
    s.pointerEvents = value < 0.5 ? 'none' : 'auto';
  }
}
