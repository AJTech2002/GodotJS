import * as THREE from "three";
import { NodeDef } from "./types";
import { componentTypes, NodeScript, registerType } from "./nodeComponent";
import { ImportedScene } from "./importedScene";
import { Transform3D } from "./defaultComponents/Transform3D";

import * as ResourceTypes from "./resources/resourceTypes/index";

registerType(Transform3D);

export class Node3D extends THREE.Object3D {
  private instantiated = false;
  private _enabled = true;

  // Default properties of a Node
  private _transform!: Transform3D;
  private _script: NodeScript | undefined;
  private _props: Record<string, any> = new Map();

  public scene: ImportedScene;

  constructor(scene: ImportedScene, objDef: NodeDef) {
    super();
    this.name = objDef.name;
    this.scene = scene;
    this.enabled = objDef.enabled;

    this._transform = new Transform3D(this);

    this.parse(objDef);
  }

  private parse(objDef: NodeDef) {
    const props = objDef.props;
    this._props = objDef.props;

    for (const key in props) {
      if (key in this) {
        (this as any)[key] = props[key];
      }
    }

    objDef.children.forEach((childDef) => {
      const allComponents = componentTypes;
      const componentType = allComponents.get(childDef.type) as any;
      if (componentType) {
        const componentInstance = new componentType(
          this.scene,
          childDef,
        ) as Node3D;
        this.add(componentInstance);
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

  public set script(value: ResourceTypes.ScriptResource) {
    this._script = value.createScript(this);
  }

  public get enabled() {
    return this._enabled;
  }

  public set enabled(value: boolean) {
    this._enabled = value;
    this._enabled ? this.onEnable() : this.onDisable();
    this._enabled ? this._script?.onEnable() : this._script?.onDisable();
  }

  public getScript<T extends NodeScript>(type: new (gameObject: Node3D) => T) {
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

  public awake() {
    console.log("Awake called");
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

    for (let i = 0; i < this.children.length; i++) {
      if ((this.children[i] as any).update !== undefined) {
        const child = this.children[i] as Node3D;
        child.update(dt);
      }
    }
  }

  public destroy() {
    this._script?.destroy();
  }

  protected onEnable() {}
  protected onDisable() {}
}
