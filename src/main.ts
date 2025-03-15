import { AmbientLight, AnimationMixer, DirectionalLight, Object3D, WebGPURenderer } from "three/webgpu";
import { ImportedScene, Node3D, parseTscn } from "@godotjs";
import SceneFile from "../public/godot/glb-model-scene.tscn?raw";
//import SceneFile from "../public/godot/simple_scene.tscn?raw";
import RegisterComponents from "./components/register";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";


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

// const loader = new GLTFLoader();
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
// loader.setDRACOLoader(dracoLoader);
// const gltf = await loader.loadAsync("godot/RiggedSimple.glb");
// scene.add(gltf.scene);
// const animationMixer = new AnimationMixer(gltf.scene);
// animationMixer.clipAction(gltf.animations[0]).play();
// console.log("Loaded GLB CUSTOM", gltf, gltf.animations[0]);



const renderer = new WebGPURenderer({ canvas: canvas, antialias: true });
renderer.debug.checkShaderErrors = true;

renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

function animate(time) {
  if (scene.activeCamera) {
    renderer.render(scene, scene.activeCamera);
    // animationMixer.update(0.001);
  }
}
