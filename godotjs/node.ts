import { NodeDef } from "./types";
import { componentTypes, NodeAttachment, registerType } from "./nodeComponent";
import { EulerProxy, Transform3D } from "./defaultComponents/Transform3D";
import { Object3D } from "three/webgpu";
import * as ResourceTypes from "./resources/resourceTypes/index";
import { ImportedScene } from "./importedScene";
import { applyProps } from "./parser/parser";

registerType(Transform3D);

export class Node3D {
  private instantiated = false;
  private _enabled = true;

  // Default properties of a Node
  private _transform!: Transform3D;
  private _script: NodeAttachment | undefined;
  private _props: Record<string, any> = new Map();

  public name: string = "Node";
  public children: Node3D[] = [];
  public parent: Node3D | null = null;

  private _ref: Object3D | undefined;

  protected _scene: ImportedScene | null = null;

  constructor(objDef: string, parent?: Node3D) {
    this._transform = new Transform3D(this);

    if (parent) {
      this.parent = parent;
    }

    if (objDef) {
      if (typeof objDef === "string") {
        this.name = objDef;
        return;
      }

      this.name = objDef;
      console.log("Node3D", this.name);
    }
  }

  public attach(scene: ImportedScene) {
    scene.add(this.getObject3D());
    this.scene = scene;
    // set scene for children
  }

  public set scene(scene: ImportedScene) {
    this._scene = scene;
    this.children.forEach((child) => {
      child.scene = scene;
    });
  }

  public add(child: Node3D) {
    if (child instanceof Node3D) {
      this.children.push(child);
      child.parent = this;
      this.getObject3D().add(child.getObject3D());
      child.getObject3D().parent = this.getObject3D();
    }
  }

  public remove(child: Node3D) {
    if (child instanceof Node3D) {
      const index = this.children.indexOf(child);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
      this.getObject3D().remove(child.getObject3D());
    }
  }

  private parse(objDef: NodeDef) {
    const props = objDef.props;
    this._props = objDef.props;

    applyProps.bind(this)(props, this);

    objDef.children.forEach((childDef) => {
      const allComponents = componentTypes;
      const componentType = allComponents.get(childDef.type) as any;
      if (componentType) {
        const componentInstance = new componentType(childDef.name, this) as Node3D;
        this.add(componentInstance);
        
        componentInstance.parse(childDef);
      }
    });
  }

  public get props() {
    return this._props;
  }

  public set transform(matrix3x3: number[]) {
    this._transform = new Transform3D(this, matrix3x3);
  }

  public get transform(): Transform3D {
    return this._transform;
  }

  public get position() {
    return this._transform.position;
  }


  public get rotation() : EulerProxy {
    return this.transform.rot;
  }

  public get euler() : EulerProxy {
    return this._transform.euler;
  }

  public get quaternion() {
    return this._transform.rotation;
  }

  public get scale() {
    return this._transform.scale;
  }

  public set script(value: ResourceTypes.ScriptResource) {
    // this._script = value.createScript(this);
  }

  public set instance(value: ResourceTypes.PackedSceneResource) {
    this.add(value.scene);
  }

  public get enabled() {
    return this._enabled;
  }

  public set enabled(value: boolean) {
    this._enabled = value;
    this._enabled ? this.onEnable() : this.onDisable();
    this._enabled ? this._script?.onEnable() : this._script?.onDisable();
  }

  public getScript<T extends NodeAttachment>(type: new (gameObject: Node3D) => T) {
    if (this._script instanceof type) {
      return this._script as T;
    } else {
      // search immediate parent
      const parent = this.parent as Node3D;
      parent.children.forEach((child) => {
        if (child instanceof Node3D && child.getScript(type)) {
          return child.getScript(type);
        }
      });
    }
    return null;
  }

  public find(path: string, currentNode: any = this): any {
    if (!path) return null;

    const parts = path.split('/');
    let node = currentNode;

    for (const part of parts) {
        if (part === '..') {
            // Move to the parent node if possible
            if (node.parent) {
                node = node.parent;
            } else {
                return null; // Parent doesn't exist
            }
        } else if (part === '.' || part === '') {
            // Stay in the current node (ignore)
            continue;
        } else {
            // Search for the child with the given name
            let found = null;
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].name === part) {
                    found = node.children[i];
                    break;
                }
            }
            if (!found) return null; // If child not found, return null
            node = found;
        }
    }

    return node;
  }

  public findNodeInChildren<T extends Node3D>(
    type: new (...args: any[]) => T,
  ): T | null {
    // recursive search

    if (this instanceof type) {
      return this as T;
    }

    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i] instanceof type) {
        return this.children[i] as T;
      } else {
        if (this.children[i] instanceof Node3D) {
          const child = this.children[i] as Node3D;
          const found: T | null = child.findNodeInChildren(type);
          if (found) {
            return found;
          }
        }
      }
    }
    return null;
  }

  public removeComponent() {
    this._script?.onDestroy();
    this._script = undefined;
  }
  //#endregion

  public getObject3D(): Object3D {
    if (this._ref === undefined) {
      this.setObject3D(new Object3D());
    }

    // console.log("Node3D.getObject3D", this._ref);
    return this._ref!;
  }

  public setObject3D(object: Object3D) {
    // If it exists, remove the old object from scene
    const parent = this._ref?.parent;
    const children = this._ref?.children;
    if (this._ref) {
      if (this.scene) {
        this.scene.remove(this._ref);
      }

      if (parent) {
        parent.remove(this._ref);
      }
    }

    this._ref = object;
    this._ref.name = this.name;

    if (parent) {
      parent.add(this._ref);
    }

    if (children) {
      children.forEach((child) => {
        this._ref?.add(child);
      });
    }
  }

  public awake() {
    this._script?.awake();
  }

  public update(dt: number) {
    if (!this._enabled) {
      return;
    }

    if (!this.instantiated) {
      this.awake();
      this.instantiated = true;
    }

    this._script?.update(dt);
    this.transform.update(dt);

    // apply transform to object3D
    if (this._transform && this._ref) {
      this._ref.position.copy(this._transform.position);
      this._ref.quaternion.copy(this._transform.rotation);
      this._ref.scale.copy(this._transform.scale);
      this._ref.updateMatrix();
    }


    for (let i = 0; i < this.children.length; i++) {
      if ((this.children[i] as any).update !== undefined) {
        const child = this.children[i] as Node3D;
        child.update(dt);
      }
    }
  }

  public lateUpdate(dt: number) {
    this._script?.lateUpdate(dt);
  }

  public destroy() {
    this._script?.destroy();
  }

  protected onEnable() {}
  protected onDisable() {}
}
