import * as THREE from "three";
import { UnitySceneDef } from "./types";
import { UnityGameObject } from "./unityGameObject";
import { UnityComponent } from "./unityComponents";
import { UnityCameraComponent } from "./unityDefaultComponents";

export class UnityScene extends THREE.Scene {
  private def: UnitySceneDef;
  public unityObjects: UnityGameObject[];

  constructor(def: UnitySceneDef) {
    super();
    this.def = def;
    this.unityObjects = [];
    console.log("UnityScene", def);
    this.parse();
  }

  override add(...object: THREE.Object3D[]): this {
    object.forEach((obj) => {
      console.log("Adding object", obj);
      super.add(obj);
      if (obj instanceof UnityGameObject) {
        this.unityObjects.push(obj);
      } else {
        // TODO: Wrap normal threejs objects in a UnityGameObject with components (Transform, Mesh etc.)
      }
    });

    // loop through all materials in scene

    return this;
  }

  remove(...object: THREE.Object3D[]): this {
    object.forEach((obj) => {
      super.remove(obj);
      if (obj instanceof UnityGameObject) {
        const index = this.unityObjects.indexOf(obj);
        if (index !== -1) {
          this.unityObjects.splice(index, 1);
        }
        obj.destroy();
      }
    });
    return this;
  }

  private parse() {
    this.def.gameObjects.forEach((gameObject) => {
      console.log("Parsing game object", gameObject);
      const unityObject = new UnityGameObject(this, gameObject);
      this.add(unityObject);
    });
  }

  //TODO: Search normal objects too
  public findObjectOfType<T extends UnityComponent>(
    type: any
  ) {
    for (let i = 0; i < this.unityObjects.length; i++) {
      const component = this.unityObjects[i].getComponent(type);
      if (component) {
        return component as T;
      }
    }
    return null;
  }

  public findObjectsOfType<T extends UnityComponent>(
    type: any
  ) {
    const components: T[] = [];
    for (let i = 0; i < this.unityObjects.length; i++) {
      const component = this.unityObjects[i].getComponent(type);
      if (component) {
        components.push(component as T);
      }
    }
    return components;
  }

  public findObjectByName(name: string) : UnityGameObject | null {
    for (let i = 0; i < this.unityObjects.length; i++) {
      if (this.unityObjects[i].name === name) {
        return this.unityObjects[i];
      }
    }
    return null;
  }

  public get activeCamera(): THREE.Camera | undefined {
    const camera = this.findObjectOfType<UnityCameraComponent>(UnityCameraComponent);
    return camera?.camera;
  }

  private _lastTime = 0;
  private _deltaTime = 0;

  public get time() {
    return performance.now() / 1000.0;
  }

  public get deltaTime() {
    return this._deltaTime;
  }

  onBeforeRender(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    group: THREE.Group
  ): void {
    const current = performance.now();
    this._deltaTime = (current - this._lastTime) / 1000.0;
    this._lastTime = current;

    for (let i = 0; i < this.unityObjects.length; i++) {
      this.unityObjects[i].update(this._deltaTime);
    }
  }

  onAfterRender(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    group: THREE.Group
  ): void {}
}
