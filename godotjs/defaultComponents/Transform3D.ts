import { Matrix4, Vector3, Quaternion, Euler } from "three";
import { NodeScript as NodeAttachment } from "../nodeComponent";
import { Node3D } from "../node";

export class Transform3D extends NodeAttachment {
  constructor(gameObject: Node3D, params?: number[]) {
    super(gameObject);

    if (params) {
      let matrix = new Matrix4();
      const [
        xx,
        xy,
        xz, // X basis
        yx,
        yy,
        yz, // Y basis
        zx,
        zy,
        zz, // Z basis
        ox,
        oy,
        oz, // Position
      ] = params;

      // Three.js uses ROW-major order
      matrix.set(
        xx,
        xy,
        xz,
        0, // First row
        yx,
        yy,
        yz,
        0, // Second row
        zx,
        zy,
        zz,
        0, // Third row
        0,
        0,
        0,
        1, // Fourth row (default identity)
      );

      matrix.setPosition(new Vector3(ox, oy, oz));

      const position = new Vector3();
      const rotation = new Quaternion();
      const scale = new Vector3();

      // decompose matrix into position, rotation, scale
      matrix.decompose(position, rotation, scale);

      this.position = position;
      this.rotation = rotation;
      this.scale = scale;
    }
  }

  public position: Vector3 = new Vector3(0,0,0);
  public rotation: Quaternion = new Quaternion(0,0,0,1);
  public scale: Vector3 = new Vector3(1,1,1);

  public get euler(): Euler {
    return new Euler().setFromQuaternion(this.rotation);
  }

  public set euler(euler: Euler) {
    this.rotation.setFromEuler(euler);
  }
  
}
