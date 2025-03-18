import { BoxGeometry, BufferGeometry, CapsuleGeometry, Mesh, PlaneGeometry, Vector2, Vector3 } from 'three';
import { Resource } from '../resource';
import { Material, MeshStandardMaterial, QuadMesh, SphereGeometry } from 'three/webgpu';
import { MaterialResource } from './materialResource';

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