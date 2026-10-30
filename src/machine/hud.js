// Callouts: leader lines from parts of the machine to the copy that talks about them, drawn like the dimension
// lines on a cut plan. Any element with data-anchor="x,y,h" (playfield millimetres) gets a line from that point to
// its nearest edge; the line draws on as its station arrives and follows the part as the camera moves.
const SVG = 'http://www.w3.org/2000/svg';

export class Hud {
  constructor(svg, stations, toWorld) {
    this.svg = svg;
    this.links = [];
    stations.forEach((station, index) => {
      for (const el of station.querySelectorAll('[data-anchor]')) {
        const [x, y, h] = el.dataset.anchor.split(',').map(Number);
        const g = document.createElementNS(SVG, 'g');
        g.setAttribute('class', 'hud-link');
        const path = document.createElementNS(SVG, 'path');
        path.setAttribute('pathLength', '1');
        path.setAttribute('class', 'hud-line');
        const ring = document.createElementNS(SVG, 'circle');
        ring.setAttribute('r', '9');
        ring.setAttribute('class', 'hud-ring');
        const dot = document.createElementNS(SVG, 'circle');
        dot.setAttribute('r', '3');
        dot.setAttribute('class', 'hud-dot');
        const tick = document.createElementNS(SVG, 'circle');
        tick.setAttribute('r', '2');
        tick.setAttribute('class', 'hud-tick');
        g.append(path, ring, dot, tick);
        svg.append(g);
        this.links.push({ index, el, world: toWorld(x, y, h), g, path, ring, dot, tick, primary: !el.closest('li'), shown: -1, d: '' });
      }
    });
    this.p = null;
  }

  // reveal[i]: 0–1 for each station. Draws visible links; hides the rest.
  update(camera, width, height, reveal, tall) {
    for (const link of this.links) {
      let r = reveal[link.index] || 0;
      // One line per section, plus one to the list entry its part is showing now.
      if (!link.primary && (tall || !link.el.classList.contains('current'))) r = 0;
      if (r < 0.01) {
        if (link.shown !== 0) { link.g.style.display = 'none'; link.shown = 0; }
        continue;
      }
      const v = link.world.clone().project(camera);
      const rect = link.el.getBoundingClientRect();
      if (v.z > 1 || rect.height === 0) { link.g.style.display = 'none'; link.shown = 0; continue; }
      if (link.shown === 0) link.g.style.display = '';
      const ax = (v.x + 1) / 2 * width, ay = (1 - v.y) / 2 * height;
      // The line meets the copy at the side facing the part, level with its first line of text.
      const right = rect.left > ax;
      const tx = right ? rect.left - 14 : rect.right + 14;
      const ty = rect.top + Math.min(rect.height / 2, 16);
      const knee = right ? tx - 36 : tx + 36;
      const d = tall
        ? `M${ax.toFixed(1)},${ay.toFixed(1)}L${ax.toFixed(1)},${(rect.top - 18).toFixed(1)}`
        : `M${ax.toFixed(1)},${ay.toFixed(1)}L${knee.toFixed(1)},${ty.toFixed(1)}L${tx.toFixed(1)},${ty.toFixed(1)}`;
      if (d !== link.d) { link.path.setAttribute('d', d); link.d = d; }
      const end = tall ? [ax, rect.top - 18] : [tx, ty];
      link.ring.setAttribute('cx', ax.toFixed(1)); link.ring.setAttribute('cy', ay.toFixed(1));
      link.dot.setAttribute('cx', ax.toFixed(1)); link.dot.setAttribute('cy', ay.toFixed(1));
      link.tick.setAttribute('cx', end[0].toFixed(1)); link.tick.setAttribute('cy', end[1].toFixed(1));
      if (Math.abs(r - link.shown) > 0.003) {
        const e = r * r * (3 - 2 * r);
        link.path.style.strokeDashoffset = (1 - e).toFixed(3);
        link.ring.style.transform = `scale(${e.toFixed(3)})`;
        link.ring.style.transformOrigin = `${ax.toFixed(1)}px ${ay.toFixed(1)}px`;
        link.g.style.opacity = Math.min(1, r * 1.6).toFixed(3);
        link.shown = r;
      } else {
        link.ring.style.transformOrigin = `${ax.toFixed(1)}px ${ay.toFixed(1)}px`;
      }
      link.g.classList.toggle('lit', link.el.classList.contains('lit') || link.primary);
    }
  }
}
