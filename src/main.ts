import { WebGPURenderer } from 'three/webgpu';
import { Scene } from './unityjs/unityScene';
import { componentTypes, UnityScene } from '@unityjs';
import RotateCubeComponent from './components/rotateCubeComponent';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gfx-main");

const width = window.innerWidth, height = window.innerHeight;
const scene = new UnityScene(Scene);


const renderer = new WebGPURenderer({canvas: canvas});
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );

const rotateCube = new RotateCubeComponent(0.1);

scene.findObjectByName("Cube")!.addComponent(rotateCube);

// console.log(componentTypes)

function animate( time ) {
    if (scene.activeCamera) {
	    
        renderer.render( scene, scene.activeCamera );

    }
}

