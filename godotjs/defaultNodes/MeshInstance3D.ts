import { Mesh, MeshStandardMaterial } from "three";
import { Node3D } from "../node";
import { MeshResource } from "../resources/resourceTypes";

export class MeshInstance3D extends Node3D {
  protected _mesh?: Mesh;
  protected _material?: MeshStandardMaterial;

  public override awake(): void {
    
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

  public set mesh(meshResource: MeshResource) {
    if (this._mesh) {
      this.remove(this._mesh);
    }

    const material = new MeshStandardMaterial();
    this._material = material;
    this._mesh = new Mesh(meshResource.getGeometry(), material);
    this.add(this._mesh);
  }

  public set mesh3D(mesh: Mesh) {
    if (this._mesh) {
      this.remove(this._mesh);
    }

    this._mesh = mesh;
    this.add(this._mesh);
  }

  public get mesh3D(): Mesh | undefined {
    return this._mesh as Mesh;
  }

  public get material(): MeshStandardMaterial {
    return this._material as MeshStandardMaterial;
  }

}
