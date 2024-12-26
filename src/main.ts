import * as THREE from 'three';
import { WebGPURenderer } from 'three/webgpu';
import SceneDef from './unityjs/scene.json';
import { UnitySceneDef } from './parser/types';
import UnityScene from './parser/unityScene';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gfx-main");
let lastTime = 0;

const width = window.innerWidth, height = window.innerHeight;

console.log("Preconverted", SceneDef);

const unityScene : UnitySceneDef = SceneDef;
const scene = new UnityScene(unityScene);

// const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
// camera.position.z = 1;

const geometry = new THREE.BoxGeometry( 1, 1, 1);
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh);
mesh.scale.setZ(-1);


const renderer = new WebGPURenderer({canvas: canvas});
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// animation

function animate( time ) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;
    if (scene.activeCamera) {
	    renderer.render( scene, scene.activeCamera );
    }
}

