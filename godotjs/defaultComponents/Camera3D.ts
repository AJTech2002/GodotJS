import { PerspectiveCamera, Camera } from "three";
import { NodeComponent } from "../nodeComponent";
import { Node } from "../node";

export class Camera3D extends NodeComponent {
  private _camera: PerspectiveCamera;

  constructor(gameObject: Node) {
    super(gameObject);
    const camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      300,
    );

    this.node.add(camera);

    this._camera = camera;
  }

  public set fov(fov: number) {
    this._camera.fov = fov;
    this._camera.updateProjectionMatrix();
  }

  public get camera(): Camera {
    return this._camera;
  }
}
