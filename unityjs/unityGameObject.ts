import * as THREE from "three";
import {
  UnityCameraDef,
  UnityMeshDef,
  UnityObjectDef,
  UnityTransformDef,
} from "./types";
import { componentTypes, UnityComponent } from "./unityComponents";
import {
  UnityCameraComponent,
  UnityMeshComponent,
  UnityTransformComponent,
} from "./unityDefaultComponents";
import {UnityScene} from "./unityScene";

export  class UnityGameObject extends THREE.Object3D {
  private components: UnityComponent[] = [];
  private instantiated = false;

  public scene: UnityScene;

  constructor(scene: UnityScene, objDef: UnityObjectDef) {
    super();
    this.name = objDef.name;
    this.scene = scene;
    scene.unityObjects.push(this);
    this.parse(objDef);
  }

  private parse(objDef: UnityObjectDef) {
    let transformComponentDef: UnityTransformDef | undefined = undefined;

    objDef.defaultComponents.forEach((component) => {
      switch (component.name) {
        case "TransformComponent":
          transformComponentDef = component as UnityTransformDef;
          break;
        case "CameraComponent":
          const cameraComponent = new UnityCameraComponent(
            this,
            component as UnityCameraDef
          );
          this.addComponent(cameraComponent);
          break;
        case "MeshComponent":
          const meshComponent = new UnityMeshComponent(
            this,
            component as UnityMeshDef
          );
          this.addComponent(meshComponent);
          break;
        case "LightComponent":
          break;
        default:
      }
    });

    objDef.components.forEach((component) => {  
      const allComponents = componentTypes;
      const componentType = allComponents.get(component.name) as any;
      if (componentType) {
        const componentInstance = new componentType(this);

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

    objDef.children.forEach((childDef) => {
      const child = new UnityGameObject(this.scene, childDef);
      this.add(child);
    });

    if (transformComponentDef) {
      // Do this last so that the transform component is applied to all components that need it
      const transformComponent = new UnityTransformComponent(
        this,
        transformComponentDef as UnityTransformDef
      );
      this.addComponent(transformComponent);
    }

    console.log("Children : " + this.name, objDef.children);
    // Children gameObjects
  }

  public get transform(): UnityTransformComponent {
    return this.getComponent(UnityTransformComponent)!;
  }

  //#region UnityComponent Management
  public addComponent(component: UnityComponent) {
    this.components.push(component);
    component.attach(this);
    component.awake();
  }

  public getComponent<T extends UnityComponent>(
    type: new (gameObject: UnityGameObject) => T
  ) {
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] instanceof type) {
        return this.components[i] as T;
      }
    }
    return null;
  }

  public removeComponent(component: UnityComponent) {
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

    if (!this.instantiated) {
      this.awake();
      this.instantiated = true;
    }

    for (let i = 0; i < this.components.length; i++) {
      this.components[i].update(dt);
    }
  }
  
  public destroy() {
    this.components.forEach((component) => {
      component.destroy();
    });
  }
}
