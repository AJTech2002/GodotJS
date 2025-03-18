import { Matrix4, Vector3, Quaternion, Euler } from "three";
import {  NodeAttachment } from "../nodeComponent";
import { Node3D } from "../node";

export class Transform3D extends NodeAttachment {
  public rot : EulerProxy;

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

    this.rot = new EulerProxy(this.rotation);
  }

  public position: Vector3 = new Vector3(0,0,0);
  public rotation: Quaternion = new Quaternion(0,0,0,1);
  public scale: Vector3 = new Vector3(1,1,1);
  

  public get euler(): EulerProxy {
    return this.rot;
  }

  public set euler(euler: Euler) {
    this.rot.set(euler.x, euler.y, euler.z);
  }

  public update(dt: number): void {
    this.rot.update();
  }
  
}

export class EulerProxy {

  private _euler: Euler;
  private _quaternion: Quaternion;

  constructor(_quaternion: Quaternion) {
    this._quaternion = _quaternion;
    this._euler = new Euler().setFromQuaternion(_quaternion);
  }

  public update() {
    this._euler = this._euler.setFromQuaternion(this._quaternion);
  }

  public get x() {
    return this._euler.x;
  }

  public set x(x: number) {
    this._euler.x = x;
    this._quaternion.setFromEuler(this._euler);
  }

  public get y() {
    return this._euler.y;
  }

  public set y(y: number) {
    this._euler.y = y;
    this._quaternion.setFromEuler(this._euler);
  }

  public get z() {
    return this._euler.z;
  }

  public set z(z: number) {
    this._euler.z = z;
    this._quaternion.setFromEuler(this._euler);
  }

  public set(x: number, y: number, z: number) {
    this._euler.set(x, y, z);
    this._quaternion.setFromEuler(this._euler);
  }
  
  fromArray(array : number[], offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  
  toArray(array : number[], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
}