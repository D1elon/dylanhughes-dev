// Shared physically based materials, in the site's palette: black, white and royal blue, with chrome and steel for the
// hardware. Lamps (inserts, pop caps, bulbs) carry a gain in userData that evens out their brightness by
// luminance, so a royal-blue lamp, which has about a seventh of white's luminance, blooms as much as a white one.
import * as THREE from 'three';
import { hex } from './palette.js';

// Relative luminance of a colour, in linear light (the weights the bloom pass uses).
export const luminance = color => {
  const c = new THREE.Color(color);
  return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
};
// The emissive intensity that gives `color` a luminance of `target`.
export const glow = (color, target) => target / luminance(color);
const gainFor = color => glow(color, 1.15);

export const ROYAL = hex('royal'), LIGHT = hex('light'), DEEP = hex('deep');
// The lamps' white: a clean, very slightly cool LED white.
export const LAMP_WHITE = 0xeef2ff;

// Reflection only, added over what's behind: glass shows nothing but its glare, with no sorting or darkening.
const reflectOnly = (envMap, intensity, roughness) => new THREE.MeshStandardMaterial({
  color: 0x000000, metalness: 0, roughness, envMap, envMapIntensity: intensity,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
});

export function makeMaterials(envMap) {
  const M = {};
  // The cabinet: gloss black paint under a hard clear coat.
  M.cabinet = new THREE.MeshPhysicalMaterial({ color: hex('black1'), roughness: 0.45, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.07 });
  M.cabinetInner = new THREE.MeshStandardMaterial({ color: hex('black'), roughness: 0.95, envMap, envMapIntensity: 0.2 });
  M.aluminium = new THREE.MeshStandardMaterial({ color: 0xc6cacd, roughness: 0.42, metalness: 1, roughnessMap: brushed() });
  // Black anodised armour: the side rails, lockdown bar and legs. Satin, so the key light makes a soft line along each
  // edge rather than a white glare.
  M.armour = new THREE.MeshStandardMaterial({ color: 0x30343c, roughness: 0.5, metalness: 0.85, roughnessMap: brushed() });
  M.trim = new THREE.MeshStandardMaterial({ color: hex('black3'), roughness: 0.38, metalness: 0.9 });
  M.chrome = new THREE.MeshStandardMaterial({ color: 0xdcdfe2, roughness: 0.06, metalness: 1 });
  M.ball = new THREE.MeshStandardMaterial({ color: 0xd6dadd, roughness: 0.05, metalness: 1, envMap, envMapIntensity: 1.15 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0xb4b9bf, roughness: 0.48, metalness: 1, roughnessMap: brushed() });
  M.zinc = new THREE.MeshStandardMaterial({ color: 0xc2c6c9, roughness: 0.5, metalness: 1 });
  M.darkSteel = new THREE.MeshStandardMaterial({ color: 0x34383d, roughness: 0.4, metalness: 1 });
  M.rubber = new THREE.MeshStandardMaterial({ color: 0x0b0c0f, roughness: 0.6 });
  // Royal-blue rubber: the flipper rings and the shooter's knob.
  M.rubberRoyal = new THREE.MeshStandardMaterial({ color: ROYAL, roughness: 0.5 });
  M.whitePlastic = new THREE.MeshStandardMaterial({ color: hex('paper'), roughness: 0.3 });
  M.graphitePlastic = new THREE.MeshStandardMaterial({ color: hex('black2'), roughness: 0.35 });
  // Posts: tinted clear blue plastic, glossy, with a little light caught inside it.
  M.postPlastic = new THREE.MeshPhysicalMaterial({
    color: DEEP, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.04, emissive: ROYAL, emissiveIntensity: glow(ROYAL, 0.035),
    sheen: 0.6, sheenColor: LIGHT, sheenRoughness: 0.4,
  });
  // Clear ramp plastic: mostly reflection, with just enough body to read its edges.
  M.clearPlastic = new THREE.MeshPhysicalMaterial({
    color: 0xdde6f2, roughness: 0.05, metalness: 0, envMap, envMapIntensity: 0.8, clearcoat: 1, clearcoatRoughness: 0.03,
    transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false,
  });
  M.glass = reflectOnly(envMap, 0.45, 0.02);
  M.wood = new THREE.MeshStandardMaterial({ color: 0xc4a174, roughness: 0.78 }); // the ply's cut edge, left natural
  M.cardPaper = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 });
  // Pop caps: royal-blue plastic, lit from inside by the bumper's lamp.
  M.popCap = new THREE.MeshPhysicalMaterial({ color: ROYAL, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.04, emissive: ROYAL, emissiveIntensity: 0.25 });
  M.popCap.userData.gain = gainFor(ROYAL) * 0.5;
  M.popBody = new THREE.MeshStandardMaterial({ color: hex('paper'), roughness: 0.3, emissive: LAMP_WHITE, emissiveIntensity: 0.06 });
  M.popBody.userData.gain = gainFor(LAMP_WHITE) * 0.5;
  M.bulb = new THREE.MeshStandardMaterial({ color: 0xf7f9ff, roughness: 0.1, emissive: LAMP_WHITE, emissiveIntensity: 0 });
  M.bulb.userData.gain = gainFor(LAMP_WHITE);
  M.speaker = new THREE.MeshStandardMaterial({ color: hex('black1'), roughness: 0.65, metalness: 0.4 });
  return M;
}

// The playfield's lacquer: a satin print under a hard, glossy clear coat.
export function lacquer(map) {
  return new THREE.MeshPhysicalMaterial({ map, roughness: 0.6, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.06 });
}

// An insert: plastic sanded flush with the wood, lit from beneath. Its `emissiveIntensity` is the lamp. Lamp colours:
// royal blue, the deeper royal, the light tint and white.
const LAMPS = { royal: ROYAL, deep: DEEP, light: LIGHT, white: LAMP_WHITE };
export function insertMaterial(color) {
  const tint = new THREE.Color(LAMPS[color] ?? LAMPS.white);
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
