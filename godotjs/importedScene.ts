import * as THREE from "three";
import { Node } from "./node";
import { Camera3D, MeshInstance3D, Transform3D } from "./defaultComponents";
import { NodeComponent, registerComponentType } from "./nodeComponent";
import { SceneDef } from "./types";

registerComponentType(Camera3D);
registerComponentType(Transform3D);
registerComponentType(MeshInstance3D);

export class ImportedScene extends THREE.Scene {
  private def: SceneDef;
  public nodes: Node[];

  constructor(def: SceneDef) {
    super();
    this.def = def;
    this.nodes = [];
    console.log("Scene", def);
    this.parse();
  }

  override add(...object: THREE.Object3D[]): this {
    object.forEach((obj) => {
      super.add(obj);
      if (obj instanceof Node) {
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
      if (obj instanceof Node) {
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
        const node = new Node(this, gameObject);
        this.add(node);
      });

    // Assign parents
  }

  //TODO: Search normal objects too
  public findObjectOfType<T extends NodeComponent>(type: any) {
    for (let i = 0; i < this.nodes.length; i++) {
      const component = this.nodes[i].getComponent(type);
      if (component) {
        return component as T;
      }
    }
    return null;
  }

  public findObjectsOfType<T extends NodeComponent>(type: any) {
    const components: T[] = [];
    for (let i = 0; i < this.nodes.length; i++) {
      const component = this.nodes[i].getComponent(type);
      if (component) {
        components.push(component as T);
      }
    }
    return components;
  }

  public findObjectByName(name: string): Node | null {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].name === name) {
        return this.nodes[i];
      }
    }
    return null;
  }

  public get activeCamera(): THREE.Camera | undefined {
    const camera = this.findObjectOfType<Camera3D>(Camera3D);
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
