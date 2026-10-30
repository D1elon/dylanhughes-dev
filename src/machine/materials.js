// Shared physically based materials. Colours come from the site's palette: graphite, aluminium and plasma orange.
import * as THREE from 'three';

export function makeMaterials() {
  const M = {};
  M.cabinet = new THREE.MeshPhysicalMaterial({ color: 0x15181b, roughness: 0.42, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.25 });
  M.cabinetInner = new THREE.MeshStandardMaterial({ color: 0x0a0b0c, roughness: 0.95, envMapIntensity: 0.2 });
  M.aluminium = new THREE.MeshStandardMaterial({ color: 0xb9bdc0, roughness: 0.38, metalness: 1 });
  M.trim = new THREE.MeshStandardMaterial({ color: 0x2b2f33, roughness: 0.38, metalness: 0.9 });
  M.satin = new THREE.MeshStandardMaterial({ color: 0x8d9296, roughness: 0.45, metalness: 1 });
  M.chrome = new THREE.MeshStandardMaterial({ color: 0xf2f4f6, roughness: 0.07, metalness: 1 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0xb6bcc0, roughness: 0.28, metalness: 1 });
  M.darkSteel = new THREE.MeshStandardMaterial({ color: 0x2a2e31, roughness: 0.4, metalness: 0.85 });
  M.rubber = new THREE.MeshStandardMaterial({ color: 0x121314, roughness: 0.82 });
  M.rubberOrange = new THREE.MeshStandardMaterial({ color: 0xff6a13, roughness: 0.6, emissive: 0x2a0d00 });
  M.whitePlastic = new THREE.MeshPhysicalMaterial({ color: 0xf1f1ec, roughness: 0.28, clearcoat: 0.5 });
  M.graphitePlastic = new THREE.MeshPhysicalMaterial({ color: 0x1e2226, roughness: 0.35, clearcoat: 0.6 });
  M.postPlastic = new THREE.MeshPhysicalMaterial({ color: 0xff6a13, roughness: 0.25, clearcoat: 0.8, emissive: 0x3a1200, transparent: true, opacity: 0.94 });
  M.clearPlastic = new THREE.MeshPhysicalMaterial({
    color: 0xdfe8f0, roughness: 0.05, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04,
    transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false,
  });
  M.rampEdge = new THREE.MeshPhysicalMaterial({ color: 0xf3f6f8, roughness: 0.1, clearcoat: 1, transparent: true, opacity: 0.7, depthWrite: false });
  M.glass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.02, metalness: 0, transparent: true, opacity: 0.06, depthWrite: false, clearcoat: 1,
  });
  M.wood = new THREE.MeshStandardMaterial({ color: 0x9a7b55, roughness: 0.7 });
  M.cardPaper = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 });
  M.popCap = new THREE.MeshPhysicalMaterial({
    color: 0xff7a2a, roughness: 0.18, clearcoat: 1, emissive: 0xff5a10, emissiveIntensity: 0.25, transparent: true, opacity: 0.96,
  });
  M.popBody = new THREE.MeshPhysicalMaterial({ color: 0xf3f2ec, roughness: 0.22, clearcoat: 0.6, emissive: 0xffd8b0, emissiveIntensity: 0.06 });
  M.bulb = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd9a8).multiplyScalar(0.55) });
  M.speaker = new THREE.MeshStandardMaterial({ color: 0x0e1012, roughness: 0.65, metalness: 0.4 });
  return M;
}

// An insert: translucent plastic whose lamp lights it from beneath. Its `emissiveIntensity` is the lamp.
export function insertMaterial(color) {
  const tint = color === 'plasma' ? 0xff6a13 : 0xe9ece9;
  return new THREE.MeshPhysicalMaterial({
    color: tint, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05, transparent: true, opacity: 0.6,
    emissive: tint, emissiveIntensity: 0.06,
  });
}
