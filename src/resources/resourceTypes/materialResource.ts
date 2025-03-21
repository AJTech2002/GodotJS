import {Color, Material, MeshPhysicalMaterial, MeshStandardMaterial, Vector2 } from 'three/webgpu';
import { Resource } from '../resource';
import { Texture2DResource } from './textureResource';

export class MaterialResource extends Resource {
  public type: string = 'Material';

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public getMaterial() : Material {
    return new MeshStandardMaterial();
  }

}

export class ColorProperty {

  public r: number = 0;
  public g: number = 0;
  public b: number = 0;
  public a: number = 0;
  private onUpdate: (
    r: number,
    g: number,
    b: number,
    a: number
  ) => void;

  constructor (onUpdate: (
    r: number,
    g: number,
    b: number,
    a: number
  )  => void) {
    this.onUpdate = onUpdate;
  }

  fromArray(array : number[], offset = 0) {
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    this.a = array[offset + 3];
    this.onUpdate(this.r, this.g, this.b, this.a);
    return this;
  }
  
  toArray(array : number[], offset = 0) {
    if (array === undefined) array = [];
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    array[offset + 3] = this.a;
    return array;
  }
}

export class StandardMaterial3DResource extends MaterialResource {
  public type: string = 'StandardMaterial3D';
  private _material: MeshPhysicalMaterial = new MeshPhysicalMaterial();
  private albedo_color: ColorProperty = new ColorProperty((r: number,g: number,b: number,a: number) => {
    this._material.color = new Color(r,g,b);
    this._material.opacity = a;
  });

  private emission : ColorProperty = new ColorProperty((r: number,g: number,b: number,a: number) => {
    this._material.emissive = new Color(r,g,b);
    this._material.emissiveIntensity = a;
  });

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set_albedo_color(value: [number, number, number, number]) {
    this.albedo_color.fromArray(value);
  }

  public set albedo_texture(value: Texture2DResource) {
    this._material.map = value.getTexture();
    console.log("Albedo Texture", value, value.getTexture());
    this._material.needsUpdate = true;
  }

  public set_metallic(value: number) {
    this._material.metalness = value;
  }

  public set metallic (value: number) {
    this._material.metalness = value;
    console.log("Metallic", value);
  }

  public get metallic () {
    return this._material.metalness;
  }

  public set_transparency(value: number) {
    if (value === 1) {
      this._material.transparent = true;
    }
  }

  public set_emission(value: [number, number, number, number]) {
    this.emission.fromArray(value);
  }

  public set_emission_energy_multiplier(value: number) {
    this._material.emissiveIntensity = value;
  }

  public set emission_energy_multiplier (value: number) {
    this._material.emissiveIntensity = value;
  }

  public get emission_energy_multiplier () {
    return this._material.emissiveIntensity;
  }

  public set normal_texture(value: Texture2DResource) {
    this._material.normalMap = value.getTexture();
    this._material.needsUpdate = true;
  }

  public set normal_scale(value: number) {
    this._material.normalScale = new Vector2(value, value);
  }

  public set roughness(value: number) {
    this._material.roughness = value;
  }

  public set metallic_specular(value: number) {
    this._material.metalness = value;
  }

  public set clearcoat(value: number) {
    this._material.clearcoat = value;
  }

  public getMaterial(): Material {
    return this._material;
  }

}