import { BoxGeometry, BufferGeometry, CapsuleGeometry, Mesh, PlaneGeometry, Vector2, Vector3 } from 'three';
import { Resource } from '../resource';
import { Material, MeshStandardMaterial, QuadMesh, SphereGeometry } from 'three/webgpu';
import { MaterialResource } from './materialResource';
import { Font, FontLoader, TextGeometry } from 'three/examples/jsm/Addons.js';

export class MeshResource extends Resource {
  public type: string = 'Mesh';
  private _material : Material = new MeshStandardMaterial();

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public getGeometry() : BufferGeometry {
    return new BufferGeometry();
  }

  public getMaterial() : Material {
    return this._material;
  }

  public set material(material: MaterialResource) {
    this._material = material.getMaterial();
  }

}

export class QuadMeshResource extends MeshResource {
  public type: string = 'QuadMesh';
  private _size: Vector2 = new Vector2(1, 1);

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set size(value: Vector2) {
    this._size = value;
  }

  public getGeometry() : BufferGeometry {
    return new PlaneGeometry(this._size.x, this._size.y);
  }

}

export class BoxMeshResource extends MeshResource {
  public type: string = 'BoxMesh';
  private _size: Vector3 = new Vector3(1, 1, 1);

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set size(value: Vector3) {
    this._size = value;
  }

  public getGeometry() : BufferGeometry {
    return new BoxGeometry(this._size.x, this._size.y, this._size.z);
  }

}

export class CapsuleMeshResource extends MeshResource {
  public type: string = 'CapsuleMesh';

  private _radius: number = 0.5;
  private _height: number = 2;
  private _radialSegments: number = 16;

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set radius(value: number) {
    this._radius = value;
  }

  public set height(value: number) {
    this._height = value;
  }

  public set radialSegments(value: number) {
    this._radialSegments = value;
  }

  public getGeometry() : BufferGeometry {
    return new CapsuleGeometry(this._radius, this._height/2, undefined, this._radialSegments);
  }

}

export class SphereMeshResource extends MeshResource {
  public type: string = 'SphereMesh';

  private _radius: number = 0.5;
  private _widthSegments: number = 16;
  private _heightSegments: number = 12;

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set radius(value: number) {
    this._radius = value;
  }

  public set radialSegments(value: number) {
    this._widthSegments = value;
  }

  public set heightSegments(value: number) {
    this._heightSegments = value;
  }

  public getGeometry() : BufferGeometry {
    return new SphereGeometry(this._radius, this._widthSegments, this._heightSegments);
  }

}

export class FontFileResource extends Resource {
  private _font: Font | undefined;

  public load(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log("Loading font", this._path+".json");
      
      // Make sure the path points to a JSON font file, not TTF
      const fontLoader = new FontLoader();
      
      // Option 1: If you've converted the font to JSON format
      fontLoader.load(this._path!+".json", (font) => {
        console.log("Font loaded", font, this._path);
        this._font = font;
        resolve();
      }, undefined, (err) => {
        console.error("Ensure you have converted the font to JSON format and saved in same director with {fontName.tff}.json, you may use facetype.js to convert :)");
        console.error("Error loading font:", err);
        reject(err);
      });
      
      // Option 2: If you need to use TTF directly, you'll need a different approach
      // using FontFace API if in browser context
    });
  }

  public getFont(): Font {
    if (!this._font) {
      throw new Error("Font not loaded yet");
    }
    return this._font;
  }
}

export class TextMeshResource extends MeshResource {
  public type: string = 'TextMesh';

  private _text: string = '';
  private _size: number = 1;
  private _font: FontFileResource | undefined;
  private _depth: number = 0.05;

  constructor(resourceDef: any) {
    super(resourceDef);
  }

  public set text(value: string) {
    this._text = value;
  }

  public set font_size(value: number) {
    this._size = value / 100;
  }

  public set depth (value : number) {
    console .log("Setting depth", value);
    this._depth = value;
  } 

  public set font (font : FontFileResource) {
    this._font = font;
  }

  public getGeometry() : BufferGeometry {

    console.log("Creating text geometry", this._text, this._font, this._size, this._depth);

    return new TextGeometry(this._text, {
      font: this._font!.getFont(),
      size: this._size,
      depth: this._depth,
    });

  }

}