// Shared physically based materials. Colours come from the site's palette: graphite, aluminium and plasma orange.
// Lamps (inserts, pop caps, bulbs) carry a gain in userData that evens out their brightness by luminance, so an
// orange lamp blooms as much as a white one.
import * as THREE from 'three';

const gainFor = color => {
  const c = new THREE.Color(color);
  return 1.15 / (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b);
};

// Reflection only, added over what's behind: glass shows nothing but its glare, with no sorting or darkening.
const reflectOnly = (envMap, intensity, roughness) => new THREE.MeshStandardMaterial({
  color: 0x000000, metalness: 0, roughness, envMap, envMapIntensity: intensity,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
});

export function makeMaterials(envMap) {
  const M = {};
  M.cabinet = new THREE.MeshPhysicalMaterial({ color: 0x15181b, roughness: 0.45, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.07 });
  M.cabinetInner = new THREE.MeshStandardMaterial({ color: 0x0a0b0c, roughness: 0.95, envMap, envMapIntensity: 0.2 });
  M.aluminium = new THREE.MeshStandardMaterial({ color: 0xc6cacd, roughness: 0.42, metalness: 1, roughnessMap: brushed() });
  M.trim = new THREE.MeshStandardMaterial({ color: 0x2b2f33, roughness: 0.38, metalness: 0.9 });
  M.chrome = new THREE.MeshStandardMaterial({ color: 0xdcdfe2, roughness: 0.06, metalness: 1 });
  M.ball = new THREE.MeshStandardMaterial({ color: 0xd6dadd, roughness: 0.05, metalness: 1, envMap, envMapIntensity: 1.15 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0xbfc4c8, roughness: 0.34, metalness: 1, roughnessMap: brushed() });
  M.darkSteel = new THREE.MeshStandardMaterial({ color: 0x34383b, roughness: 0.4, metalness: 1 });
  M.rubber = new THREE.MeshStandardMaterial({ color: 0x0e0f10, roughness: 0.6 });
  M.rubberOrange = new THREE.MeshStandardMaterial({ color: 0xff6a13, roughness: 0.55 });
  M.whitePlastic = new THREE.MeshStandardMaterial({ color: 0xf1f1ec, roughness: 0.3 });
  M.graphitePlastic = new THREE.MeshStandardMaterial({ color: 0x1e2226, roughness: 0.35 });
  M.postPlastic = new THREE.MeshPhysicalMaterial({ color: 0xe25a17, roughness: 0.28, clearcoat: 0.6, clearcoatRoughness: 0.08 });
  // Clear ramp plastic: mostly reflection, with just enough body to read its edges.
  M.clearPlastic = new THREE.MeshPhysicalMaterial({
    color: 0xdbe6ee, roughness: 0.05, metalness: 0, envMap, envMapIntensity: 0.8, clearcoat: 1, clearcoatRoughness: 0.03,
    transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false,
  });
  M.glass = reflectOnly(envMap, 0.45, 0.02);
  M.wood = new THREE.MeshStandardMaterial({ color: 0xc4a174, roughness: 0.78 });
  M.cardPaper = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 });
  M.popCap = new THREE.MeshPhysicalMaterial({ color: 0xff7a2a, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.05, emissive: 0xff5a10, emissiveIntensity: 0.25 });
  M.popCap.userData.gain = gainFor(0xff5a10) * 0.5;
  M.popBody = new THREE.MeshStandardMaterial({ color: 0xf3f2ec, roughness: 0.3, emissive: 0xffd8b0, emissiveIntensity: 0.06 });
  M.popBody.userData.gain = gainFor(0xffd8b0) * 0.5;
  M.bulb = new THREE.MeshStandardMaterial({ color: 0xfff4e4, roughness: 0.1, emissive: 0xffc98e, emissiveIntensity: 0 });
  M.bulb.userData.gain = gainFor(0xffc98e);
  M.speaker = new THREE.MeshStandardMaterial({ color: 0x0e1012, roughness: 0.65, metalness: 0.4 });
  return M;
}

// The playfield's lacquer: a satin print under a hard, glossy clear coat.
export function lacquer(map) {
  return new THREE.MeshPhysicalMaterial({ map, roughness: 0.6, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.06 });
}

// An insert: plastic sanded flush with the wood, lit from beneath. Its `emissiveIntensity` is the lamp.
export function insertMaterial(color) {
  const tint = new THREE.Color(color === 'plasma' ? 0xff6a13 : 0xe9ece9);
  const m = new THREE.MeshPhysicalMaterial({
    color: tint.clone().multiplyScalar(0.12), roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.03,
    emissive: tint, emissiveIntensity: 0.06, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2,
  });
  m.userData.gain = gainFor(tint);
  return m;
}

// Brushed metal: fine streaks along one direction, as a roughness map scaling the material's own roughness.
function brushed(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < 1400; i++) {
    const v = Math.round(200 + Math.random() * 55);
    g.fillStyle = `rgb(${v},${v},${v})`;
    g.fillRect(0, Math.random() * size, size, 0.6 + Math.random());
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(4, 4);
  return t;
}
