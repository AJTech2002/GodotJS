import { Matrix4, Vector3, Quaternion } from "three";
import { NodeComponent } from "../nodeComponent";
import { Node } from "../node";

export class Transform3D extends NodeComponent {
  constructor(gameObject: Node, params?: number[]) {
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

  public set position(v: Vector3) {
    this.node.position.copy(v);
  }

  public set rotation(q: Quaternion) {
    this.node.quaternion.copy(q);
  }

  public set scale(v: Vector3) {
    this.node.scale.copy(v);
  }

  public set euler(e: Vector3) {
    this.node.rotation.setFromVector3(e.clone());
  }

  public get position(): Vector3 {
    return this.node.position;
  }

  public get rotation(): Quaternion {
    return this.node.quaternion;
  }

  public get scale(): Vector3 {
    return this.node.scale;
  }
}
