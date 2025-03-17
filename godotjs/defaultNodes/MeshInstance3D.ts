import { Material, Mesh, MeshStandardMaterial } from "three";
import { Node3D } from "../node";
import { MeshResource } from "../resources/resourceTypes";
import { MaterialResource } from "../resources/resourceTypes/materialResource";

export class MeshInstance3D extends Node3D {
  protected _mesh?: Mesh;
  protected _material?: Material;

  // keep this here for animation purposes
  private material_override: MaterialResource;

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

    if (this._material === undefined) {
      this._material = meshResource.getMaterial();
    }

    this._mesh = new Mesh(meshResource.getGeometry(), this._material);
    this.setObject3D(this._mesh);
  }

  public set_material_override(material: MaterialResource) {
    this._material = material.getMaterial();
    this.material_override = material;
    if (this._mesh) {
      this._mesh.material = this._material;
    }
  }

  public set mesh3D(mesh: Mesh) {
    this._mesh = mesh;
    console.log("Mesh Override", this._mesh, this._mesh.material);
    this.setObject3D(this._mesh);
  }

  public get mesh3D(): Mesh | undefined {
    return this._mesh as Mesh;
  }

  public get material(): MeshStandardMaterial {
    return this._material as MeshStandardMaterial;
  }

}
