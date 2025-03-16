import {Color, Material, MeshStandardMaterial } from 'three';
import { Resource } from '../resource';

export class MaterialResource extends Resource {
  public type: string = 'Material';

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public getMaterial() : Material {
    return new MeshStandardMaterial();
  }

}

export class StandardMaterial3DResource extends MaterialResource {
  public type: string = 'StandardMaterial3D';
  private color: Color = new Color(0xffffff);

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set albedo_color(value: { r: number, g: number, b: number, a: number }) {
    this.color = new Color(value.r, value.g, value.b);
  }

  public getMaterial(): Material {
    return new MeshStandardMaterial(
      {
        color: this.color
      }
    );
  }

}