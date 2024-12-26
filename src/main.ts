import { WebGPURenderer } from 'three/webgpu';
import { Scene } from './unityjs/unityScene';
import { componentTypes, UnityScene } from '@unityjs';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gfx-main");

const width = window.innerWidth, height = window.innerHeight;
const scene = new UnityScene(Scene);


const renderer = new WebGPURenderer({canvas: canvas});
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );

console.log(componentTypes)

function animate( time ) {
    if (scene.activeCamera) {
	    
        renderer.render( scene, scene.activeCamera );

    }
}

