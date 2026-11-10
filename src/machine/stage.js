// The renderer, the studio the machine is photographed in, its lights, and the finishing passes: ambient occlusion,
// bloom on the lamps and a vignette.
import * as THREE from 'three';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { CABINET } from './machine.js';

// Khronos PBR Neutral keeps base colours true (ACES shifts saturated blues toward violet and cyan), with a one-step
// dither in display space so the near-black backdrop doesn't band.
THREE.ShaderChunk.tonemapping_pars_fragment = THREE.ShaderChunk.tonemapping_pars_fragment.replace(
  'vec3 CustomToneMapping( vec3 color ) { return color; }',
  `vec3 CustomToneMapping( vec3 color ) {
    color = NeutralToneMapping( color );
    vec3 s = mix( color * 12.92, 1.055 * pow( color, vec3( 0.41667 ) ) - 0.055, step( 0.0031308, color ) );
    s = max( s + ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0, 0.0 );
    return mix( s / 12.92, pow( ( s + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, s ) );
  }`,
);

// Highlights stop short of the bloom threshold, so only the lamps glow. The key is a point, and its reflection in
// chrome, the clear coat or a cover glass is otherwise bright enough to flare; capped, it stays a crisp white glint.
// The cap scales a pixel's whole specular (direct and reflected) together, so its colour holds.
const SPECULAR_CAP = '1.35';
THREE.ShaderChunk.lights_fragment_end += `
#if defined( STANDARD )
	{
		vec3 s = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
		float k = min( 1.0, ${SPECULAR_CAP} / max( max( max( s.r, s.g ), s.b ), 1e-4 ) );
		reflectedLight.directSpecular *= k;
		reflectedLight.indirectSpecular *= k;
		#ifdef USE_CLEARCOAT
			vec3 c = clearcoatSpecularDirect + clearcoatSpecularIndirect;
			float kc = min( 1.0, ${SPECULAR_CAP} / max( max( max( c.r, c.g ), c.b ), 1e-4 ) );
			clearcoatSpecularDirect *= kc;
			clearcoatSpecularIndirect *= kc;
		#endif
	}
#endif
`;

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
// Depth of field reads the ambient occlusion pass's depth (half resolution, opaque parts only) rather than drawing
// the whole scene a second time for its own: one fewer full pass over the machine every frame. Glass and clear plastic
// aren't in that depth, so the focus falls on what is seen through them.
class StageDoF extends BokehPass {
  constructor(scene, camera, params, ao) {
    super(scene, camera, params);
    this.ao = ao;
    this._renderTargetDepth.dispose();
    this.materialBokeh.defines.DEPTH_PACKING = 0;
    this.uniforms.tDepth.value = ao.depthTexture;
  }
  setSize(width, height) { this.uniforms.aspect.value = width / height; }
  render(renderer, writeBuffer, readBuffer) {
    this.uniforms.tColor.value = readBuffer.texture;
    this.uniforms.nearClip.value = this.camera.near;
    this.uniforms.farClip.value = this.camera.far;
    renderer.setRenderTarget(writeBuffer);
    renderer.clear();
    this._fsQuad.render(renderer);
  }
}
class SoftBloom extends UnrealBloomPass {
  setSize(width, height) { super.setSize(Math.ceil(width / 2), Math.ceil(height / 2)); }
}

// A dark cove with a few softboxes, placed where the playfield, chrome and cabinet reflect them from the stations'
// camera angles: one big overhead card behind the machine, two strips at the sides, a hot card on the key, and a low
// royal-blue strip behind, which the chrome, glass and clear plastics pick up as a blue edge. All neutral white but
// the key's card, which is a touch warm so the whites don't read clinical.
function studioEnvironment(renderer, size) {
  const env = new THREE.Scene();
  env.background = new THREE.Color(0.0036, 0.0042, 0.0058);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.016, 0.017, 0.021) }));
  ground.position.y = -2;
  env.add(ground);
  const card = (w, h, nits, hex, x, y, z) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(nits), side: THREE.DoubleSide }));
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  card(12, 12, 0.22, 0xf1f3f7, 0, 7, 0);
  card(6, 3, 3, 0xf6f7fa, 0, 5, -3.5);
  card(0.7, 5, 2.4, 0xffffff, -5, 2, -1);
  card(0.7, 5, 2.5, 0xe4eaff, 5, 2, -1.5);
  card(1.6, 1.6, 5, 0xfff8f1, 2, 6, 3.5);
  card(6, 2, 1.2, 0xf3f4f7, 0, 1.2, 6);
  card(9, 0.4, 0.32, 0x2b59ff, 0, 0.35, -5);
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
  scene.background = new THREE.Color(0x06070a);
  scene.fog = new THREE.Fog(0x06070a, 3.2, 7.5);
  const envMap = studioEnvironment(renderer, quality.low ? 256 : 512);
  scene.environment = envMap;
  scene.environmentIntensity = 0.6;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.02, 20);

  // Lights, in physical units: a clean, slightly warm white key over the playfield, aimed for about 2 lux of the
  // studio's scale on the wood, and a cool rim from behind. The environment does the fill.
  const lights = {};
  lights.key = new THREE.SpotLight(0xfff7ef, 14, 0, 0.45, 0.7, 2);
  lights.key.position.set(0.55, 2.3, 1.1);
  lights.key.target.position.set(0, -0.1, 0);
  lights.key.castShadow = quality.shadows;
  lights.key.shadow.mapSize.set(quality.shadowSize, quality.shadowSize);
  Object.assign(lights.key.shadow, { bias: -0.0004, normalBias: 0.003, radius: quality.low ? 2 : 3, focus: 0.7 });
  lights.key.shadow.camera.near = 1.2;
  lights.key.shadow.camera.far = 4.2;
  scene.add(lights.key, lights.key.target);
  lights.rim = new THREE.DirectionalLight(0xc3d0ff, 1.25);
  lights.rim.position.set(-1.2, 1.6, -2.4);
  scene.add(lights.rim);
  // Two low fills from the front corners, so the cabinet's stencils read in the dark room.
  lights.fill = [-1, 1].map(side => {
    const fill = new THREE.DirectionalLight(0xe6ebff, 0.42);
    fill.position.set(side * 2.2, 0.5, 2.4);
    scene.add(fill);
    return fill;
  });
  // The focus light: a soft spot that follows the camera to each part, the way a product shot lights its subject.
  lights.focus = new THREE.SpotLight(0xfff8f2, 0, 0, 0.42, 1, 2);
  scene.add(lights.focus, lights.focus.target);

  // The floor: a cool mid charcoal, so the key's cone and the machine's shadow make the pool of light.
  // Printed on it, as on the site's pages: a drawing's grid of registration crosses, lit royal blue from under the
  // machine.
  const floorMaps = floorTextures(quality);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 12).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: floorMaps.map, emissiveMap: floorMaps.glow, emissive: 0xffffff, emissiveIntensity: 0.5, roughness: 0.85 }));
  floor.position.y = CABINET.floor;
  floor.receiveShadow = quality.shadows;
  scene.add(floor);

  let ao = null, bloom = null, dof = null;
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
    // Depth of field: a shallow focus on the part the camera is framing. Everything within `range` (metres) of the
    // focus stays sharp, so a station can hold a whole screen or a whole assembly in focus and still let the
    // foreground and background go soft.
    dof = new StageDoF(scene, camera, { focus: 1, aperture: 0, maxblur: 0.005 }, ao);
    dof.uniforms.range = { value: 0 };
    dof.materialBokeh.fragmentShader = dof.materialBokeh.fragmentShader
      .replace('uniform float focus;', 'uniform float focus;\n\t\tuniform float range;')
      .replace('float factor = ( focus + viewZ );', 'float factor = ( focus + viewZ );\n\t\t\tfactor = sign( factor ) * max( 0.0, abs( factor ) - range );');
    renderer.setEffects([ao, dof, bloom, vignette]);
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

  // If frames run slow, step down once every few seconds: first the depth of field, then the ambient occlusion (whose
  // depth the depth of field needs), then resolution. Never back up.
  let ema = 16.7, prev = 0, settle = performance.now() + 4000;
  function govern(now) {
    if (prev) ema += (Math.min(100, now - prev) - ema) * 0.05;
    prev = now;
    if (now < settle || ema < 21) return;
    if (dof && dof.enabled) dof.enabled = false;
    else if (ao && ao.enabled) ao.enabled = false;
    else if (pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - 0.25); renderer.setPixelRatio(pixelRatio); resize(width, height); }
    settle = now + 2500;
    ema = 16.7;
  }

  // Points the focus light and the depth of field at the camera's subject. `amount` is 0 away from a station, 1 at it;
  // `sharp` (0–1) widens the band held in focus, for stations that show a picture or a whole assembly.
  const aim = new THREE.Vector3();
  function focusOn(target, distance, amount, sharp = 0) {
    aim.copy(camera.position).sub(target).setY(0).normalize();
    lights.focus.position.copy(target).addScaledVector(aim, 0.28).add(new THREE.Vector3(0, 0.62, 0));
    lights.focus.target.position.copy(target);
    lights.focus.intensity = 0.55 * amount;
    if (dof) {
      dof.uniforms.focus.value = distance;
      dof.uniforms.aperture.value = 0.012 * amount;
      dof.uniforms.range.value = 0.012 + 0.3 * sharp;
    }
  }

  return { renderer, scene, camera, lights, ao, bloom, dof, envMap, resize, render, govern, focusOn, floor };
}

// The floor's two prints, 12 m square: its colour with the grid of crosses, and the royal light pooled under the
// machine, which the crosses near it catch.
function floorTextures(quality) {
  const size = quality.low ? 1024 : 2048, cell = size / 40, arm = cell * 0.085;
  const make = () => { const c = document.createElement('canvas'); c.width = c.height = size; return c; };
  const crosses = (g, alpha) => {
    g.strokeStyle = `rgba(244, 245, 247, ${alpha})`; g.lineWidth = Math.max(1, size / 1400);
    g.beginPath();
    for (let y = cell / 2; y < size; y += cell) for (let x = cell / 2; x < size; x += cell) { g.moveTo(x - arm, y); g.lineTo(x + arm, y); g.moveTo(x, y - arm); g.lineTo(x, y + arm); }
    g.stroke();
  };
  const base = make(), g = base.getContext('2d');
  g.fillStyle = '#363a42'; g.fillRect(0, 0, size, size);
  crosses(g, 0.08);
  const glow = make(), e = glow.getContext('2d');
  e.fillStyle = '#000'; e.fillRect(0, 0, size, size);
  const pool = e.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size * 0.2);
  pool.addColorStop(0, 'rgba(43, 89, 255, 0.5)'); pool.addColorStop(0.5, 'rgba(43, 89, 255, 0.16)'); pool.addColorStop(1, 'rgba(43, 89, 255, 0)');
  e.fillStyle = pool; e.fillRect(0, 0, size, size);
  // The crosses, in royal, only where the pool reaches.
  const lit = make(), l = lit.getContext('2d');
  crosses(l, 1);
  l.globalCompositeOperation = 'source-in';
  const reach = l.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size * 0.26);
  reach.addColorStop(0, 'rgba(110, 140, 255, 0.7)'); reach.addColorStop(1, 'rgba(110, 140, 255, 0)');
  l.fillStyle = reach; l.fillRect(0, 0, size, size);
  e.drawImage(lit, 0, 0);
  const tex = c => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = quality.anisotropy; return t; };
  return { map: tex(base), glow: tex(glow) };
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
