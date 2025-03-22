import * as THREE from "three";
import { Node3D } from "./node";
import {  registerType } from "./nodeComponent";
import { SceneDef } from "./types";
import { Camera3D } from "./defaultNodes";
import { ResourceManager } from "./resources/resourceManager";
import { parseTscn } from "./parser/parser";
import { registerResource } from "./resources/resource";

export const resourceManager = new ResourceManager();

export class GodotScene extends THREE.Scene {

  private sceneFile: string | undefined;
  private rawScene: string | undefined;
  private godotRoot: string;
  public loaded = false;
  
  public nodes: Node3D[];

  /**
   * Constructs an instance of the imported scene.
   * 
   * @param godotRoot - The root directory of the Godot project in the public folder.
   * @param sceneFileRelativePath - The relative path to the scene file within the Godot project .
   * @param supportedComponents - An optional array of component constructors to be registered.
   * @param supportedResources - An optional array of resource constructors to be registered.
   * @example
   * ```typescript
   * const scene = new GodotScene("godot", "scenes/MainScene.tscn", [CustomComponentA], [CustomResourceB, CustomResourceC]);
   * scene.load();
   * ```
   */
  constructor(godotRoot: string, sceneFileRelativePath: string | undefined, sceneRaw: string | undefined, supportedComponents?: Function[], supportedResources?: Function[]) {
    super();

    if (supportedComponents)
      for (let i = 0; i < supportedComponents.length; i++) {
        registerType(supportedComponents[i]);
      }

    if (supportedResources)
      for (let i = 0; i < supportedResources.length; i++) {
        registerResource(supportedResources[i]);
      }

    this.sceneFile = sceneFileRelativePath;
    this.rawScene = sceneRaw;
    this.godotRoot = godotRoot;
    this.nodes = [];
  }

  public async load() {
    // fetch the scene file
    if (this.loaded) {
      return;
    }

    try {

      if (!this.rawScene) {
        const response = await fetch(this.godotRoot+"/"+this.sceneFile)
        const data = await response.text();
        this.rawScene = data;
        console.log("Scene Data", {"data": data});
      }

      const def = await parseTscn(this.rawScene, this.godotRoot);
      this.loadFromDef(def);
      this.loaded = true;
    }
    catch (e) {
      console.error("Error loading scene", e);
    }
  }


  public addNode(node: Node3D) {
    this.nodes.push(node);
    node.attach(this);
  }

  private loadFromDef(def: SceneDef) {
    if (def && def.nodes)
      def.nodes.forEach((gameObject) => {
        this.addNode(gameObject);
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

  public findNodesOfType<T extends Node3D>(type: any) {
    const nodes: T[] = [];
    for (let i = 0; i < this.nodes.length; i++) {
      const found: T[] | null = this.nodes[i].findNodesInChildren(type);
      if (found) {
        nodes.push(...found);
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

  private _activeCamera: THREE.Camera | undefined;

  public get activeCamera(): THREE.Camera | undefined {

    if (this._activeCamera) {
      return this._activeCamera;
    }

    const camera = this.findNodeOfType<Camera3D>(Camera3D);
    this._activeCamera = camera?.camera;
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
  
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].lateUpdate(this._deltaTime);
    }
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
