import {Color, Material, MeshPhysicalMaterial, MeshStandardMaterial, Vector2 } from 'three';
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

export class StandardMaterial3DResource extends MaterialResource {
  public type: string = 'StandardMaterial3D';
  private _material: MeshPhysicalMaterial = new MeshPhysicalMaterial();

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set albedo_color(value: [number, number, number, number]) {
    this._material.color = new Color(value[0], value[1], value[2]);
    if (value.length === 4) {
      this._material.opacity = value[3];
    }
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
    this._material.emissive = new Color(value[0], value[1], value[2]);
  }

  public set emission (value: [number, number, number, number]) {
    // this._material.emissive = new Color(value[0], value[1], value[2]);
    // this._material.emissiveIntensity = value[3];
    console.log("Emission", value);
  }

  public set_emission_energy_multiplier(value: number) {
    this._material.emissiveIntensity = value;
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