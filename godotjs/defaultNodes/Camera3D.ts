import { PerspectiveCamera, Camera } from "three";
import { Node3D } from "../node";
import { ImportedScene } from "../importedScene";
import { NodeDef } from "../types";

export class Camera3D extends Node3D {
  private _camera!: PerspectiveCamera;

  constructor(scene: ImportedScene, objDef: NodeDef) {
    super(scene, objDef);
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      300,
    );
    this._camera = camera;
  }

  public override awake(): void {
    super.awake();
    this.add(this._camera);
    console.log("Added camera to scene");
  }

  public set fov(fov: number) {
    this._camera.fov = fov;
    this._camera.updateProjectionMatrix();
  }

  public get camera(): Camera {
    return this._camera;
  }
}
