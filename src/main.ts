import { ACESFilmicToneMapping, AmbientLight, AnimationMixer, DirectionalLight, Object3D, SRGBColorSpace, WebGPURenderer } from "three/webgpu";
import { AnimationPlayer, ImportedScene, Node3D, parseTscn } from "@godotjs";

// import SceneFile from "../public/godot/glb-model-scene.tscn?raw";
// import SceneFile from "../public/godot/simple_scene.tscn?raw";
// import SceneFile from "../public/godot/bare-minimum.tscn?raw";
import SceneFile from "../public/godot/test-animation.tscn?raw";

import RegisterComponents from "./components/register";
import { WebGLRenderer } from "three";
import { acesFilmicToneMapping } from "three/tsl";


const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("gfx-main")
);

const width = window.innerWidth,
height = window.innerHeight;
  
// Relative to the public golder
const scnDef = parseTscn(SceneFile, "godot");

RegisterComponents();

const scene = new ImportedScene(scnDef);
await scene.load();

// ADd ambient light
const ambientLight = new AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light
const directionalLight = new DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

const animPlayer : AnimationPlayer[] = scene.findNodesOfType<AnimationPlayer>(AnimationPlayer);
animPlayer.forEach((player) => {
  console.log("Playing animation", player.animations, player.parent?.name);
  if (player.animations.length > 0)
  player.play(1);
});
const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
renderer.outputColorSpace = SRGBColorSpace;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

renderer.debug.checkShaderErrors = true;

renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

function animate(time) {
  if (scene.activeCamera) {
    renderer.render(scene, scene.activeCamera);
  }
  // else {
    // console.log("No active camera");
  // }
}
