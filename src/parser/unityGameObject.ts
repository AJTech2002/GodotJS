import * as THREE from "three";
import { UnityCameraDef, UnityMeshDef, UnityObjectDef, UnityTransformDef } from "./types";
import UnityComponent from "./unityComponents";
import {
  UnityCameraComponent,
  UnityMeshComponent,
  UnityTransformComponent,
} from "./unityDefaultComponents";

export default class UnityGameObject extends THREE.Object3D {
  private components: UnityComponent[] = [];

  constructor(objDef: UnityObjectDef) {
    super();
    this.name = objDef.name;
    this.parse(objDef);
  }

  private parse(objDef: UnityObjectDef) {
    let transformComponentDef : UnityTransformDef | undefined = undefined;

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
            )
            this.addComponent(meshComponent);
            break;
        case "LightComponent":
          break;
        default:
      }
    });

    objDef.children.forEach((childDef) => {
        const child = new UnityGameObject(childDef);
        this.add(child);
    });

    if (transformComponentDef)
    {
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

  //#region UnityComponent Management
  private addComponent(component: UnityComponent) {
    this.components.push(component);
    component.awake();
  }

  public getComponent<T extends UnityComponent>(type: new (gameObject: UnityGameObject) => T) {
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

}
