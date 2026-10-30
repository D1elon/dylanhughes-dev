// The renderer, the room the machine stands in, its lights and the bloom pass that makes lamps glow.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CABINET } from './machine.js';

export function createStage(canvas, quality) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: quality.antialias, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(quality.pixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = quality.shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07080a);
  scene.fog = new THREE.Fog(0x07080a, 3.2, 7.5);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.22;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(32, 1, 0.02, 20);

  // Lights: a soft key over the playfield, a cool rim from behind, and a low fill for the cabinet.
  const lights = {};
  lights.hemi = new THREE.HemisphereLight(0xcfd6e0, 0x0b0c0e, 0.12);
  scene.add(lights.hemi);
  lights.key = new THREE.SpotLight(0xfff1e2, 7.5, 6, 0.5, 0.85, 1.4);
  lights.key.position.set(0.55, 2.3, 1.1);
  lights.key.target.position.set(0, 0, 0.05);
  lights.key.castShadow = quality.shadows;
  lights.key.shadow.mapSize.set(quality.shadowSize, quality.shadowSize);
  lights.key.shadow.bias = -0.0004;
  lights.key.shadow.normalBias = 0.012;
  lights.key.shadow.radius = 4;
  lights.key.shadow.camera.near = 0.8;
  lights.key.shadow.camera.far = 4.5;
  scene.add(lights.key, lights.key.target);
  lights.rim = new THREE.DirectionalLight(0x9fb4ff, 0.55);
  lights.rim.position.set(-1.6, 1.4, -2.2);
  scene.add(lights.rim);
  lights.fill = new THREE.DirectionalLight(0xffe2c4, 0.12);
  lights.fill.position.set(1.4, 0.4, 2.2);
  scene.add(lights.fill);
  // The backbox throws a warm light down on the top of the playfield.
  lights.backbox = new THREE.PointLight(0xffa25e, 0, 1.6, 1.8);
  lights.backbox.position.set(0, 0.35, -0.42);
  scene.add(lights.backbox);

  // Floor with a soft pool of light under the machine.
  const floorTex = radialTexture();
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 12).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.92, metalness: 0, map: floorTex }),
  );
  floor.position.y = CABINET.floor;
  floor.receiveShadow = quality.shadows;
  scene.add(floor);

  // Post-processing: bloom on the brightest values only (lamps, the display, the backglass).
  let composer = null, bloom = null;
  if (quality.bloom) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.55, 0.5, 0.82);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  function resize(width, height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (composer) {
      composer.setPixelRatio(renderer.getPixelRatio());
      composer.setSize(width, height);
    }
  }

  function render() {
    if (composer) composer.render();
    else renderer.render(scene, camera);
  }

  return { renderer, scene, camera, lights, composer, bloom, resize, render, floor };
}

function radialTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  grad.addColorStop(0, '#5a5f66');
  grad.addColorStop(0.35, '#2a2d31');
  grad.addColorStop(1, '#0d0e10');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Picks a quality level from the device. Phones and small screens get fewer pixels, softer shadows and no bloom.
export function pickQuality() {
  const small = Math.min(innerWidth, innerHeight) < 700;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const cores = navigator.hardwareConcurrency || 4;
  const low = small || coarse || cores <= 4;
  return {
    low,
    pixelRatio: Math.min(devicePixelRatio || 1, low ? 1.5 : 2),
    antialias: !low,
    shadows: true,
    shadowSize: low ? 1024 : 2048,
    bloom: !low,
    playfieldScale: low ? 2.4 : 3.6,
    anisotropy: low ? 4 : 8,
  };
}
