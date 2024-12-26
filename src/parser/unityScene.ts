import * as THREE from 'three';
import { UnitySceneDef } from './types';
import UnityGameObject from './unityGameObject';
import UnityComponent from './unityComponents';
import { UnityCameraComponent } from './unityDefaultComponents';

export default class UnityScene extends THREE.Scene {

    private def : UnitySceneDef;
    private unityObjects: UnityGameObject[];

    constructor(def: UnitySceneDef) {
        super();
        this.def = def;
        this.unityObjects = [];
        console.log("UnityScene", def);
        this.parse();
    }

    override add(...object: THREE.Object3D[]): this {
        object.forEach((obj) => {
            super.add(obj);
            if (obj instanceof UnityGameObject) {
                this.unityObjects.push(obj);
            }
            else {
                // TODO: Wrap normal threejs objects in a UnityGameObject with components (Transform, Mesh etc.)
            }
        });
        return this;
    }

    private parse() {
        this.def.gameObjects.forEach((gameObject) => {
            const unityObject = new UnityGameObject(gameObject);
            this.unityObjects.push(unityObject);
            this.add(unityObject);
        });
    }

    //TODO: Search normal objects too
    public findObjectOfType<T extends UnityComponent>(type: new (gameObject: UnityGameObject) => T) {
        for (let i = 0; i < this.unityObjects.length; i++) {
            const component = this.unityObjects[i].getComponent(type);
            if (component) {
                return component;
            }
        }
        return null;
      }

    public get activeCamera() : THREE.Camera | undefined {
        const camera = this.findObjectOfType(UnityCameraComponent);
        return camera?.camera;
    }
    

    onBeforeRender(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, geometry: THREE.BufferGeometry, material: THREE.Material, group: THREE.Group): void {
    }

    onAfterRender(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, geometry: THREE.BufferGeometry, material: THREE.Material, group: THREE.Group): void {
    }

}

