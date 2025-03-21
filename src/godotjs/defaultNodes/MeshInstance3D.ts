import { Material, Mesh, MeshStandardMaterial } from "three";
import { Node3D } from "../node";
import { MeshResource } from "../resources/resourceTypes";
import { MaterialResource } from "../resources/resourceTypes/materialResource";

export class SurfaceOverrides {
  constructor(root: MeshInstance3D) {
    return new Proxy(this, {
      get: (target, prop: string) => {
        // prop to number
        const index = parseInt(prop);
        if (isNaN(index)) {
          return null;
        }

        const meshes = root.findNodesInChildren<MeshInstance3D>(MeshInstance3D);
        if (!meshes) {
          return;
        }

        if (index >= meshes.length) {
          return null;
        }

        return meshes[index];

      },
      set: (target, prop: string, value) => {
        // prop to number
        const index = parseInt(prop);
        if (isNaN(index)) {
          return false;
        }

        const meshes = root.findNodesInChildren<MeshInstance3D>(MeshInstance3D);
        if (!meshes) {
          return;
        }

        if (index >= meshes.length) {
          return false;
        }

        meshes[index].set_material_override(value);
        return true;
      },
    });
  }
}

export class MeshInstance3D extends Node3D {
  protected _mesh?: Mesh;
  protected _material?: Material;

  // keep this here for animation purposes
  private material_override: MaterialResource; // For single material meshes
  public surface_material_override: SurfaceOverrides = new SurfaceOverrides(this); // For mesh groups (multiple materials)
  public isGroup: boolean = false; // Stores a group of meshes, for mesh with multiple materials

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
    if (this.isGroup) {
      const meshes = this.findNodesInChildren<MeshInstance3D>(MeshInstance3D);
      if (!meshes) {
        return;
      }
      meshes.forEach((mesh) => {
        mesh.set_material_override(material);
      });
    }
    else {
      this._material = material.getMaterial();
      this.material_override = material;
      
      if (this._mesh) {
        this._mesh.material = this._material;
      }
      else {
      }
    }
  }

  public set mesh3D(mesh: Mesh) {
    this._mesh = mesh;
    if (this._material !== undefined) {
      this._mesh.material = this._material;
      console.log("Material Override", this._material);
    }
    // console.log("Mesh Override", this._mesh, this._mesh.material);
    this.setObject3D(this._mesh);
  }

  public get mesh3D(): Mesh | undefined {
    return this._mesh as Mesh;
  }

  public get material(): MeshStandardMaterial {
    return this._material as MeshStandardMaterial;
  }

}
