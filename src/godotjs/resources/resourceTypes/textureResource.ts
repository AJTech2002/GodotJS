import {Color, Material, MeshPhysicalMaterial, MeshStandardMaterial, SRGBColorSpace, Texture, TextureLoader, ImageBitmapLoader } from 'three';
import { Resource } from '../resource';

export class TextureResource extends Resource {
  public type: string = 'Texture';

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public getTexture() : Texture {
    return new Texture();
  }

}

export class Texture2DResource extends TextureResource {
  public type: string = 'Texture2D';
  private _texture: Texture | undefined;
  private _loader: ImageBitmapLoader = new ImageBitmapLoader();
  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public load(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._loader.load(this._path!, (texture) => {
        console.log("Texture loaded", texture, this._path );
        this._texture = new Texture(texture);
        this._texture.colorSpace = SRGBColorSpace;
        this._texture.needsUpdate = true;
        resolve();
      }, undefined, (err) => {
        console.error(err);
        reject();
      });
    });
  }

  public getTexture() : Texture {
    return this._texture;
  }
}