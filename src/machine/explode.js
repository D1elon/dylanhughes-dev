// The exploded view: a pop bumper taken apart along its axis like a CAD drawing, with a chain-dashed centre line and
// a numbered callout for each part, then put back together. Scrolling drives it: `update(e)` with e from 0
// (assembled) to 1 (fully apart).
import * as THREE from 'three';
import { MM } from './geo.js';

const smooth = t => t * t * (3 - 2 * t);
const clamp = v => Math.min(1, Math.max(0, v));

export class Exploded {
  constructor(pop, layer) {
    this.pop = pop;
    const group = pop.group;
    group.updateMatrixWorld(true);
    const box = new THREE.Box3();
    this.parts = pop.parts.map((holder, k) => {
      // Each part's middle and reach, in the bumper's own frame, for placing its callout.
      box.setFromObject(holder);
      const mid = group.worldToLocal(box.getCenter(new THREE.Vector3()));
      const size = box.getSize(new THREE.Vector3());
      return { holder, k, lift: holder.userData.lift, label: holder.userData.label, mid, reach: Math.max(size.x, size.z) / 2 };
    });
    const n = this.parts.length;
    const top = this.parts[n - 1];
    const line = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -8 * MM, 0), new THREE.Vector3(0, top.mid.y + (top.lift + 18) * MM, 0)]);
    this.axis = new THREE.Line(line, new THREE.LineDashedMaterial({ color: 0xff8a4a, dashSize: 7 * MM, gapSize: 2 * MM, transparent: true, opacity: 0, depthWrite: false }));
    this.axis.computeLineDistances();
    this.axis.visible = false;
    group.add(this.axis);

    this.el = document.createElement('div');
    this.el.className = 'cad';
    this.el.setAttribute('aria-hidden', 'true');
    for (const p of this.parts) {
      p.tag = document.createElement('span');
      p.tag.className = 'cad-tag';
      const num = document.createElement('i');
      num.textContent = String(p.k + 1).padStart(2, '0');
      p.tag.append(num, document.createTextNode(p.label));
      this.el.append(p.tag);
    }
    layer.append(this.el);
    this.shown = -1;
    this.v = new THREE.Vector3();
  }

  // Top parts lead on the way out and follow on the way back, so the stack peels apart from the cap down.
  amountFor(p, e) {
    const n = this.parts.length, stagger = 0.06;
    return smooth(clamp(e * (1 + stagger * (n - 1)) - (n - 1 - p.k) * stagger));
  }

  update(e, camera, width, height, side) {
    if (e < 0.001 && this.shown === 0) return;
    for (const p of this.parts) p.holder.position.y = p.lift * this.amountFor(p, e) * MM;
    const show = smooth(clamp((e - 0.2) / 0.35));
    this.axis.visible = e > 0.01;
    this.axis.material.opacity = 0.85 * smooth(clamp(e / 0.3));
    this.el.style.opacity = show.toFixed(3);
    this.el.classList.toggle('left', side !== 'left');
    this.shown = e < 0.001 ? 0 : e;
    if (show < 0.01) return;
    // Callouts sit beside each part, on the side away from the copy.
    const out = side !== 'left' ? -1 : 1;
    for (const p of this.parts) {
      const lift = p.lift * this.amountFor(p, e);
      this.v.set(out * (p.reach + 14 * MM), p.mid.y + lift * MM, 0).applyMatrix4(this.pop.group.matrixWorld).project(camera);
      const x = (this.v.x + 1) / 2 * width, y = (1 - this.v.y) / 2 * height;
      p.tag.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    }
  }
}
