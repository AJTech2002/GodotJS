import { WebGPURenderer } from 'three/webgpu';
import { Scene } from './unityjs/scene';
import * as THREE from 'three';
import { componentTypes, UnityScene } from '@unityjs';
import { WebGLRenderer } from 'three';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gfx-main");

const width = window.innerWidth, height = window.innerHeight;

const scene = new UnityScene(Scene);


const renderer = new WebGLRenderer({canvas: canvas, antialias: true});
renderer.debug.checkShaderErrors = true;

renderer.setSize( width, height );
renderer.setAnimationLoop( animate );


// scene.findObjectByName("Cube")!.addComponent(rotateCube);

// console.log(componentTypes)

function animate( time ) {

    if (scene.activeCamera) {
	    
        renderer.render( scene, scene.activeCamera );
    
    }

}

