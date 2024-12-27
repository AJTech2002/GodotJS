import {
  BoxGeometry,
  Camera,
  Matrix4,
  Mesh,
  MeshNormalMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector3,
} from "three";
import { UnityCameraDef, UnityMeshDef, UnityTransformDef } from "./types";
import {UnityComponent} from "./unityComponents";
import {UnityGameObject} from "./unityGameObject";
import { MeshMatcapNodeMaterial } from "three/webgpu";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export class UnityTransformComponent extends UnityComponent {
  constructor(gameObject: UnityGameObject, def?: UnityTransformDef) {
    super(gameObject);
    if (def) {
      gameObject.position.fromArray(def.props.position);
      gameObject.setRotationFromQuaternion(
        new Quaternion(
          def.props.rotation[0],
          def.props.rotation[1],
          def.props.rotation[2],
          def.props.rotation[3]
        )
      );
      gameObject.scale.fromArray([
        def.props.scale[0],
        def.props.scale[1],
        def.props.scale[2],
      ]);
    }
  }

  public get position(): Vector3 {
    return this.gameObject.position;
  }

  public get rotation(): Quaternion {
    return this.gameObject.quaternion;
  }

  public get scale(): Vector3 {
    return this.gameObject.scale;
  }

}

export class UnityCameraComponent extends UnityComponent {
  private _camera: PerspectiveCamera;

  constructor(gameObject: UnityGameObject, def?: UnityCameraDef) {
    super(gameObject);
    const camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      200
    );

    this.gameObject.add(camera);

    this._camera = camera;
    // this.camera.scale.setZ(-1);
    // rotate around y axis 180 degrees
    // this.camera.lookAt(new Vector3(0,0,-1));
    // this.camera.rotateY(Math.PI);
  }

  public get camera(): Camera {
    return this._camera;
  }
}

export class UnityMeshComponent extends UnityComponent {
  protected _mesh?: Mesh;
  protected _material?: MeshStandardMaterial;

  constructor(gameObject: UnityGameObject, meshDef?: UnityMeshDef) {
    super(gameObject);
    if (meshDef) {
      this.setup(meshDef);
    }
  }

  private setup(def: UnityMeshDef) {
    const color = def.props.color;
    // const material = new MeshMatcapNodeMaterial({
    //   color: parseInt(color, 16),
    // });
    const material = new MeshNormalMaterial();

    if (def.props.primitive) {
      if (def.props.primitiveShape === "Cube") {
        const geometry = new BoxGeometry(1, 1, 1);

        this._mesh = new Mesh(geometry, material);

        //Inject GameObject into THREE Mesh to allow access from Raycasts ex.
        let tempMesh = this._mesh as any;
        tempMesh.gameObject = this.gameObject;
        // this._mesh.scale.setZ(-1);
        // this._mesh.lookAt(new Vector3(0,0,-1));

        this.gameObject.add(this._mesh);
      }
    } else {
      const loader = new GLTFLoader();
      loader.load(def.props.assetPath, (gltf) => {
        // console.log("Loaded:", gltf, this.gameObject);

        let model: Object3D | null = null;

        // // Navigate to the desired model using modelChildPath
        let modelChildPath = def.props.modelPath;
        let split = modelChildPath.split("/");

        for (let i = 0; i < split.length; i++) {
          let index = parseInt(split[i]);

          if (model === null) {
            model = gltf.scene.children[index];
          } else {
            model = model.children[index];
          }
        }

        // Check if the model is a Mesh
        if (model instanceof Mesh) {
          this._mesh = model as Mesh;

          // Set material
          this._mesh.material = material;

          // Remove all children
          while (this._mesh.children.length) {
            this._mesh.remove(this._mesh.children[0]);
          }

          // Scale down by 100
          // this.scaleFactor = 0.01;
          // this.rotationOffset = new Euler(0, Math.PI , 0);

          let tempMesh = this._mesh as any;
          tempMesh.gameObject = this.gameObject;

          this._mesh.scale.set(1, 1, 1);
          this._mesh.position.set(0, 0, 0);

          // set the forward to the opposite direction
          this._mesh.lookAt(new Vector3(0, 0, -1));

          this.gameObject.add(this._mesh);

          // console.log("Updated:", model, modelChildPath, gltf, this.gameObject);
        } else {
          console.warn("Model is not a mesh:", model);
        }
      });
    }
  }

  public get mesh(): Mesh {
    return this._mesh as Mesh;
  }

  public get material(): MeshStandardMaterial {
    return this._material as MeshStandardMaterial;
  }

  update(dt: number): void {
  }
}
