import {
  BoxGeometry,
  Camera,
  Matrix4,
  Mesh,
  MeshNormalMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector3,
} from "three";
import { Node } from "./node";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { NodeComponent } from "./nodeComponent";

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

export class MeshInstance3D extends NodeComponent {
  protected _mesh?: Mesh;
  protected _material?: MeshStandardMaterial;

  constructor(gameObject: Node) {
    super(gameObject);
    // create cube
  }

  awake(): void {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    this._mesh = cube;
    this._material = material;
    this.node.add(cube);
  }

  onEnable(): void {
    if (this._mesh) {
      this._mesh!.visible = true;
    }
  }

  onDisable(): void {
    if (this._mesh) {
      this._mesh!.visible = false;
    }
  }

  public get mesh(): Mesh | undefined {
    return this._mesh as Mesh;
  }

  public get material(): MeshStandardMaterial {
    return this._material as MeshStandardMaterial;
  }

  update(dt: number): void {}
}
