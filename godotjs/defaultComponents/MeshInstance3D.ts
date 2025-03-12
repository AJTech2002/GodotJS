import { Mesh, MeshStandardMaterial, BoxGeometry } from "three";
import { NodeComponent } from "../nodeComponent";
import { Node } from "../node";

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
    console.log(this);
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
