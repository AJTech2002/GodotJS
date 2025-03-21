import { ACESFilmicToneMapping, AmbientLight, AnimationMixer, DirectionalLight, EquirectangularReflectionMapping, Fog, Object3D, SRGBColorSpace, Vector2, WebGPURenderer } from "three/webgpu";
import { AnimationPlayer, GodotScene, Node3D, parseTscn } from "@godotjs";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// import SceneFile from "../public/godot/glb-model-scene.tscn?raw";
// import SceneFile from "../public/godot/simple_scene.tscn?raw";
// import SceneFile from "../public/godot/bare-minimum.tscn?raw";
// import SceneFile from "../public/godot/test-animation.tscn?raw";
// import SceneFile from "../public/godot/test-materials.tscn?raw";
// import SceneFile from "../public/godot/test-materials-clone.tscn?raw";
import SceneFile from "../public/godot/demo/godotjs-demo.tscn?raw";

import { WebGLRenderer } from "three";
import RotateCube from "./components/RotateCube";


const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("gfx-main")
);

const width = window.innerWidth,
height = window.innerHeight;
  
// Relative to the public golder

const scene = new GodotScene("godot", "test-materials.tscn", SceneFile, [RotateCube]);
await scene.load();



const loader = new RGBELoader();
loader.load('godot/sky.hdr', function (texture) {
    texture.mapping = EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
    scene.environmentIntensity = 0.4;
    scene.backgroundIntensity = 0.1;
});

// const animPlayer : AnimationPlayer[] = scene.findNodesOfType<AnimationPlayer>(AnimationPlayer);
// console.log("Animation Players", animPlayer);
// animPlayer.forEach((player) => {
//   console.log(player);
//   if (player.animations.length > 0) {
//     setTimeout(() => {
//       // player.play(0);
//       player.playAll();
//     }, Math.random() * 100);
//   }
// });
const renderer = new WebGPURenderer({ canvas: canvas, antialias: true });
renderer.outputColorSpace = SRGBColorSpace;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

renderer.debug.checkShaderErrors = true;

renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

// const composer = new EffectComposer(renderer);
// composer.addPass(new RenderPass(scene, scene.activeCamera!));

const bloomPass = new UnrealBloomPass(
    new Vector2(window.innerWidth, window.innerHeight),
    0.1, // Bloom strength
    0.1, // Radius
    1.5 // Threshold
);
// composer.addPass(bloomPass);

// add fog
// 108, 105, 97 = 0x6c6961
scene.fog = new Fog(0x000000, 2, 18);


function animate(time) {
  if (scene.activeCamera) {
    renderer.render(scene, scene.activeCamera);
    // composer.render();
  }
  // else {
    // console.log("No active camera");
  // }
}
