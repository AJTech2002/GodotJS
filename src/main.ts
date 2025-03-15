import { AmbientLight, AnimationMixer, DirectionalLight, Object3D, WebGPURenderer } from "three/webgpu";
import { ImportedScene, Node3D, parseTscn } from "@godotjs";

// import SceneFile from "../public/godot/glb-model-scene.tscn?raw";
// import SceneFile from "../public/godot/simple_scene.tscn?raw";
// import SceneFile from "../public/godot/bare-minimum.tscn?raw";
import SceneFile from "../public/godot/test-animation.tscn?raw";

import RegisterComponents from "./components/register";
import { WebGLRenderer } from "three";


const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("gfx-main")
);

const width = window.innerWidth,
height = window.innerHeight;
  
// Relative to the public golder
const scnDef = parseTscn(SceneFile, "godot");

RegisterComponents();

const scene = new ImportedScene(scnDef);
scene.load();

// ADd ambient light
const ambientLight = new AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light
const directionalLight = new DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);



const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
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
