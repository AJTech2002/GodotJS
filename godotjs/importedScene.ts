import * as THREE from "three";
import { Node3D } from "./node";
import { componentTypes } from "./nodeComponent";
import { SceneDef } from "./types";
import { Camera3D } from "./defaultNodes";
import { Transform3D } from "./defaultComponents/Transform3D";
import { ResourceManager } from "./resources/resourceManager";

export const resourceManager = new ResourceManager();

export class ImportedScene extends THREE.Scene {
  private def: SceneDef;
  public nodes: Node3D[];

  constructor(def: SceneDef) {
    super();
    this.def = def;
    this.nodes = [];
    this.parse();
  }

  override add(...object: THREE.Object3D[]): this {
    object.forEach((obj) => {
      super.add(obj);
      if (obj instanceof Node3D) {
        console.log("Adding node", obj);
        this.nodes.push(obj);
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
      if (obj instanceof Node3D) {
        const index = this.nodes.indexOf(obj);
        if (index !== -1) {
          this.nodes.splice(index, 1);
        }
        obj.destroy();
      }
    });
    return this;
  }

  private parse() {
    if (this.def && this.def.nodes)
      this.def.nodes.forEach((gameObject) => {
        const allComponents = componentTypes;
        const componentType = allComponents.get(gameObject.type) as any;
        if (componentType) {
          const componentInstance = new componentType(
            this,
            gameObject,
          ) as Node3D;
          this.add(componentInstance);
        }
      });

    console.log(this);
    // Assign parents
  }

  //TODO: Search normal objects too
  public findNodeOfType<T extends Node3D>(
    type: new (...args: any[]) => T,
  ): T | null {
    for (let i = 0; i < this.nodes.length; i++) {
      const found: T | null = this.nodes[i].findNodeInChildren(type);
      if (found) {
        return found;
      }
    }
    return null;
  }

  public findObjectsOfType<T extends Node3D>(type: any) {
    const nodes: T[] = [];
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] instanceof type) {
        nodes.push(this.nodes[i] as T);
      }
    }
    return nodes;
  }

  public findObjectByName(name: string): Node3D | null {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].name === name) {
        return this.nodes[i];
      }
    }
    return null;
  }

  public get activeCamera(): THREE.Camera | undefined {
    const camera = this.findNodeOfType<Camera3D>(Camera3D);
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
    group: THREE.Group,
  ): void {
    const current = performance.now();
    this._deltaTime = (current - this._lastTime) / 1000.0;
    this._lastTime = current;
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].update(this._deltaTime);
    }
  }

  onAfterRender(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    group: THREE.Group,
  ): void {}
}

// Type Registration
