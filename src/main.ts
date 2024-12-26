import * as THREE from 'three';
import { WebGPURenderer } from 'three/webgpu';
import SceneDef from './unityjs/scene.json';
import { UnitySceneDef } from './parser/types';
import UnityScene from './parser/unityScene';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gfx-main");

const width = window.innerWidth, height = window.innerHeight;
const scene = new UnityScene(SceneDef as UnitySceneDef);


const renderer = new WebGPURenderer({canvas: canvas});
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );

function animate( time ) {
    if (scene.activeCamera) {
	    renderer.render( scene, scene.activeCamera );
    }
}

