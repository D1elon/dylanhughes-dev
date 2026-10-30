// The renderer, the studio the machine is photographed in, its lights, and the finishing passes: ambient occlusion,
// bloom on the lamps and a vignette.
import * as THREE from 'three';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js';
import { CABINET } from './machine.js';

// Khronos PBR Neutral keeps base colours true (ACES pushes the plasma orange toward yellow), with a one-step dither in
// display space so the near-black backdrop doesn't band.
THREE.ShaderChunk.tonemapping_pars_fragment = THREE.ShaderChunk.tonemapping_pars_fragment.replace(
  'vec3 CustomToneMapping( vec3 color ) { return color; }',
  `vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`,
);

// Ambient occlusion at half resolution. Glass and clear plastic stay out of its depth buffer, so the parts under
// them are still grounded.
class StageAO extends GTAOPass {
  setSize(width, height) { super.setSize(Math.ceil(width / 2), Math.ceil(height / 2)); }
  _overrideVisibility() {
    super._overrideVisibility();
    this.scene.traverseVisible(o => {
      if (o.isMesh && (o.userData.noAO || [].concat(o.material).some(m => m.transparent))) { o.visible = false; this._visibilityCache.push(o); }
    });
  }
}
class SoftBloom extends UnrealBloomPass {
  setSize(width, height) { super.setSize(Math.ceil(width / 2), Math.ceil(height / 2)); }
}

// A dark cove with a few softboxes, placed where the playfield, chrome and cabinet reflect them from the stations'
// camera angles: one big overhead card behind the machine, two strips at the sides and a hot card on the key.
function studioEnvironment(renderer, size) {
  const env = new THREE.Scene();
  env.background = new THREE.Color(0.004, 0.0045, 0.005);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.018, 0.018, 0.02) }));
  ground.position.y = -2;
  env.add(ground);
  const card = (w, h, nits, hex, x, y, z) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(nits), side: THREE.DoubleSide }));
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  card(12, 12, 0.22, 0xf2f0ee, 0, 7, 0);
  card(6, 3, 3, 0xfff6ec, 0, 5, -3.5);
  card(0.7, 5, 2.4, 0xffffff, -5, 2, -1);
  card(0.7, 5, 2.5, 0xdfe7ff, 5, 2, -1.5);
  card(1.6, 1.6, 5, 0xfff1e2, 2, 6, 3.5);
  card(6, 2, 1.2, 0xffe6cc, 0, 1.2, 6);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const target = pmrem.fromScene(env, 0.015, 0.1, 50, { size });
  pmrem.dispose();
  env.traverse(o => { o.geometry?.dispose(); o.material?.dispose(); });
  return target.texture;
}

export function createStage(canvas, quality) {
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, alpha: false, powerPreference: 'high-performance',
    outputBufferType: quality.effects ? THREE.HalfFloatType : THREE.UnsignedByteType,
  });
  let pixelRatio = quality.pixelRatio;
  renderer.setPixelRatio(pixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.CustomToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = quality.shadows;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07080a);
  scene.fog = new THREE.Fog(0x07080a, 3.2, 7.5);
  const envMap = studioEnvironment(renderer, quality.low ? 256 : 512);
  scene.environment = envMap;
  scene.environmentIntensity = 0.6;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.02, 20);

  // Lights, in physical units: a warm key over the playfield, aimed for about 2 lux of the studio's scale on the
  // wood, and a cool rim from behind. The environment does the fill.
  const lights = {};
  lights.key = new THREE.SpotLight(0xfff3e6, 14, 0, 0.45, 0.7, 2);
  lights.key.position.set(0.55, 2.3, 1.1);
  lights.key.target.position.set(0, -0.1, 0);
  lights.key.castShadow = quality.shadows;
  lights.key.shadow.mapSize.set(quality.shadowSize, quality.shadowSize);
  Object.assign(lights.key.shadow, { bias: -0.0004, normalBias: 0.003, radius: quality.low ? 2 : 3, focus: 0.7 });
  lights.key.shadow.camera.near = 1.2;
  lights.key.shadow.camera.far = 4.2;
  scene.add(lights.key, lights.key.target);
  lights.rim = new THREE.DirectionalLight(0xbfd0ff, 1.4);
  lights.rim.position.set(-1.2, 1.6, -2.4);
  scene.add(lights.rim);

  // The floor: mid charcoal, so the key's cone and the machine's shadow make the pool of light.
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 12).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.85 }));
  floor.position.y = CABINET.floor;
  floor.receiveShadow = quality.shadows;
  scene.add(floor);

  let ao = null, bloom = null;
  if (quality.effects) {
    ao = new StageAO(scene, camera, 1, 1, undefined,
      { radius: 0.035, distanceExponent: 1.5, thickness: 0.04, distanceFallOff: 1, scale: 1.1, samples: 12 },
      { lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
    ao.blendIntensity = 0.7;
    bloom = new SoftBloom(new THREE.Vector2(1, 1), 0.22, 0.2, 1.6);
    bloom.highPassUniforms.smoothWidth.value = 0.5;
    const vignette = new ShaderPass(VignetteShader);
    vignette.uniforms.offset.value = 0.85;
    vignette.uniforms.darkness.value = 1;
    renderer.setEffects([ao, bloom, vignette]);
  }

  let width = 1, height = 1;
  function resize(w, h) {
    width = w; height = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  // Shadows are drawn once a frame, before the scene, rather than again inside the ambient occlusion pass.
  function render() {
    renderer.shadowMap.needsUpdate = true;
    renderer.render(scene, camera);
  }

  // If frames run slow, step down once every few seconds: first the ambient occlusion, then resolution. Never back up.
  let ema = 16.7, prev = 0, settle = performance.now() + 4000;
  function govern(now) {
    if (prev) ema += (Math.min(100, now - prev) - ema) * 0.05;
    prev = now;
    if (now < settle || ema < 21) return;
    if (ao && ao.enabled) ao.enabled = false;
    else if (pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - 0.25); renderer.setPixelRatio(pixelRatio); resize(width, height); }
    settle = now + 2500;
    ema = 16.7;
  }

  return { renderer, scene, camera, lights, ao, bloom, envMap, resize, render, govern, floor };
}

// Picks a quality level from the device. Phones and small screens render directly with fewer pixels and no passes.
export function pickQuality() {
  const small = Math.min(innerWidth, innerHeight) < 700;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const low = small || coarse;
  return {
    low,
    effects: !low,
    pixelRatio: Math.min(devicePixelRatio || 1, 1.5),
    shadows: true,
    shadowSize: low ? 1024 : 2048,
    playfieldScale: low ? 2.4 : 3.6,
    anisotropy: low ? 4 : 8,
  };
}
