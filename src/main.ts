import { AmbientLight, DirectionalLight, WebGPURenderer } from "three/webgpu";
import { ImportedScene, parseTscn } from "@godotjs";
import SceneFile from "./scene/scenes.json";
import RegisterComponents from "./components/register";

const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("gfx-main")
);

const width = window.innerWidth,
  height = window.innerHeight;

const scnDef = parseTscn(SceneFile, "simple_scene");

RegisterComponents();

const scene = new ImportedScene(scnDef);

// ADd ambient light
const ambientLight = new AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light
const directionalLight = new DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

const renderer = new WebGPURenderer({ canvas: canvas, antialias: true });
renderer.debug.checkShaderErrors = true;

renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

function animate(time) {
  if (scene.activeCamera) {
    renderer.render(scene, scene.activeCamera);
  }
}
