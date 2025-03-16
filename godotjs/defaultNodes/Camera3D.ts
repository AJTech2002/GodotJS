import { PerspectiveCamera, Camera } from "three/webgpu";
import { Node3D } from "../node";

export class Camera3D extends Node3D {
  private _camera!: Camera;

  constructor(objDef: string, parent?: Node3D) {
    super(objDef, parent);
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      300,
    );
    this.camera = camera;
  }

  public override awake(): void {
    super.awake();
    console.log("Added camera to scene");
  }

  public get fov(): number {
    return this._camera instanceof PerspectiveCamera ? this._camera.fov : 0;
  }

  public set fov(fov: number) {
    if (!this._camera) {
      return;
    }

    if (this._camera instanceof PerspectiveCamera) {
      this._camera.fov = fov;
      this._camera.updateProjectionMatrix();
    }
  }

  public get camera(): Camera {
    return this._camera;
  }

  public set camera(camera: Camera) {
    this._camera = camera;
    this.setObject3D(camera);
  }
}
