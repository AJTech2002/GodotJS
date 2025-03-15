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
  }

  public async load() {
    await resourceManager.loadResources(this.def.resources);
    this.parse();
  }

  public addNode(node: Node3D) {
    this.nodes.push(node);
    node.attach(this);
  }

  private parse() {
    if (this.def && this.def.nodes)
      this.def.nodes.forEach((gameObject) => {
        const allComponents = componentTypes;
        const componentType = allComponents.get(gameObject.type) as any;
        if (componentType) {
          const componentInstance = new componentType(gameObject) as Node3D;
          this.addNode(componentInstance);
        }
      });

    this.updateMatrixWorld(true);

    setTimeout(() => {
      console.log("Scene", this);
    }, 1000);
    // Assign parents
  }

  //TODO: Search normal objects too
  public findNodeOfType<T extends Node3D>(
    type: new (...args: any[]) => T
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
    group: THREE.Group
  ): void {
    const current = performance.now();
    this._deltaTime = (current - this._lastTime) / 1000.0;
    this._lastTime = current;
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].update(this._deltaTime);
    }

    super.onBeforeRender(renderer, scene, camera, geometry, material, group);
  }

  onAfterRender(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    group: THREE.Group
  ): void {
    super.onAfterRender(renderer, scene, camera, geometry, material, group);
  }
}

// Type Registration
