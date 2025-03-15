import { Resource, ResourceHeading } from "../resource";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import { Node3D } from "../../node";
import { AnimationMixer } from "three/webgpu";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";
import {threeJsToNode} from "./threejsToNode";

export enum PackedSceneType {
  TSCN = "TSCN",
  GLB = "GLB",
  GLTF = "GLTF",
}

export class PackedSceneResource extends Resource {
  public PackedSceneType: PackedSceneType | undefined;

  private loaded = false;
  private loadedScene: any | undefined = undefined;

  constructor(resourceDef: ResourceHeading) {
    super(resourceDef);

    if (resourceDef.path) {
      let ext = this.extractExtension(resourceDef.path);

      if (ext === "glb") {
        this.PackedSceneType = PackedSceneType.GLB;
      } else if (ext === "gltf") {
        this.PackedSceneType = PackedSceneType.GLTF;
      } else {
        this.PackedSceneType = PackedSceneType.TSCN;
      }
    }

    this.load();
  }

  private extractExtension(path: string): string {
    return path.match(/\.([^\.]+)$/)?.[1] || "";
  }

  public async load() {
    if (this.PackedSceneType === PackedSceneType.GLB) {
      await this.extractGlb();
    }
  }


  private getGlbScene() : Node3D {
    const glbScene = this.loadedScene as GLTF;
    
    const root = new Node3D(glbScene.scene.name);
    root.animations = glbScene.animations;

    const cloned = SkeletonUtils.clone(glbScene.scene);
    console.log("Cloned", cloned);
  
    for (let i = 0; i < cloned.children.length; i++) {
      const child = cloned.children[i];
      const node = threeJsToNode(child);
      root.add(node);
    }


    // const mixer = new AnimationMixer(root);
    // if (glbScene.animations && glbScene.animations.length > 0) {
    //   mixer.clipAction(glbScene.animations[0]).play();
          
    //   const runAnim = (dt) => {
    //     mixer.update(0.01);
    //     requestAnimationFrame(runAnim);
    //   }

    //   runAnim(0);
    
    // }


    return root;
  }

  public get scene() : Node3D {
    if (this.PackedSceneType === PackedSceneType.GLB) {
      return this.getGlbScene();
    }
    else {
      return new Node3D({
        name : "Empty Scene",
        enabled : true,
        props : {},
        children : [],
        parent : "",
        type : "Node3D"
      });
    }
  }

  private async extractGlb() {
    if (!this._path) {
      console.error("No path provided for GLB file");
      return;
    }

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
    loader.setDRACOLoader(dracoLoader);

    try {
      const gltf = await loader.loadAsync(this._path);
      this.loadedScene = gltf;
      this.loaded = true;
      console.log("Loaded GLB", gltf);
    }
    catch (e) {
      console.error(e);
    }

    return;
  }
}
