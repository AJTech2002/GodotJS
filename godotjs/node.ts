import * as THREE from "three";
import { NodeDef } from "./types";
import { componentTypes, NodeComponent } from "./nodeComponent";
import { Transform3D } from "./defaultComponents";
import { ImportedScene } from "./importedScene";

export class Node extends THREE.Object3D {
  private components: NodeComponent[] = [];
  private instantiated = false;
  private _enabled = true;
  private _transform: Transform3D | undefined;

  public scene: ImportedScene;
  private childNodes: Node[] = [];

  constructor(scene: ImportedScene, objDef: NodeDef) {
    super();
    this.name = objDef.name;
    this.scene = scene;
    this.enabled = objDef.enabled;
    this.parse(objDef);
  }

  private parse(objDef: NodeDef) {
    objDef.components.forEach((component) => {
      const allComponents = componentTypes;
      const componentType = allComponents.get(component.name) as any;
      if (componentType) {
        const componentInstance = new componentType(this, component.params);

        if (component.name === "Transform3D") {
          this._transform = componentInstance;
        }

        // get all the props from the component definition
        const props = component.props;
        for (const key in props) {
          if (Object.prototype.hasOwnProperty.call(componentInstance, key)) {
            const element = props[key];
            componentInstance[key] = element;
          }
        }

        this.addComponent(componentInstance);
      }
    });

    if (!this._transform) {
      this._transform = this.addComponent(new Transform3D(this));
    }

    objDef.children.forEach((childDef) => {
      const child = new Node(this.scene, childDef);
      this.add(child);
    });
  }

  public get transform(): Transform3D {
    return this.getComponent(Transform3D)!;
  }

  public get enabled() {
    return this._enabled;
  }

  public set enabled(value: boolean) {
    this._enabled = value;
    this.components.forEach((component) => {
      this._enabled ? component.onEnable() : component.onDisable();
    });
  }

  //#region UnityComponent Management
  public addComponent<T extends NodeComponent>(component: T): T {
    this.components.push(component);
    component.attach(this);
    if (this.instantiated) {
      component.awake();
    }
    return component as any;
  }

  public getComponent<T extends NodeComponent>(
    type: new (gameObject: Node) => T,
  ) {
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] instanceof type) {
        return this.components[i] as T;
      }
    }
    return null;
  }

  public removeComponent(component: NodeComponent) {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }
  //#endregion

  public awake() {
    this.components.forEach((component) => {
      component.awake();
    });
  }

  public update(dt: number) {
    if (!this._enabled) {
      return;
    }

    if (!this.instantiated) {
      this.awake();
      this.instantiated = true;
    }

    for (let i = 0; i < this.components.length; i++) {
      this.components[i].update(dt);
    }

    for (let i = 0; i < this.children.length; i++) {
      if ((this.children[i] as any).update !== undefined) {
        const child = this.children[i] as Node;
        child.update(dt);
      }
    }
  }

  public destroy() {
    this.components.forEach((component) => {
      component.destroy();
    });
  }
}
