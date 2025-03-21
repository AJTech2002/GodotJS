import { Resource, ResourceHeading } from "../resource";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import { Node3D } from "../../node";
import { AnimationMixer, Group } from "three/webgpu";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";
import {threeJsToNode} from "./threejsToNode";
import { AnimationPlayer } from "../../defaultNodes";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

export enum PackedSceneType {
  TSCN = "TSCN",
  GLB = "GLB",
  GLTF = "GLTF",
  FBX = "FBX"
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
      } 
      else if (ext === "fbx") {
        this.PackedSceneType = PackedSceneType.FBX;
      }
      else {
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
    else if (this.PackedSceneType === PackedSceneType.FBX) {
      await this.extractFbx();
    }
  }




  private getGlbScene() : Node3D {
    const glbScene = this.loadedScene as GLTF;
    
    const root = new Node3D(glbScene.scene.name);
    
    const cloned = SkeletonUtils.clone(glbScene.scene);

    for (let i = 0; i < cloned.children.length; i++) {
      console.log(cloned.children[i], "CLONED CHILD");
      root.add(threeJsToNode(cloned.children[i]));
    }

    if (glbScene.animations) {

      if (glbScene.animations.length > 0) {

        const player = new AnimationPlayer("AnimationPlayer");
        player.animations = glbScene.animations;
        player.root = root;
        root.add(player);

      }
    }
    return root;
  }

  private getFbxScene() : Node3D {
    const fbxScene = this.loadedScene as Group;
    const cloned = SkeletonUtils.clone(fbxScene);
    const root = new Node3D("Fbx-Root");
    
    for (let i = 0; i < cloned.children.length; i++) {
      root.add(threeJsToNode(cloned.children[i]));
    }

    console.log(root, cloned, "FBX EXPORT");
    // if (cloned.animations) {
    //   if (cloned.animations.length > 0) {
    //     const player = new AnimationPlayer("AnimationPlayer");
    //     player.animations = cloned.animations;
    //     player.root = root;
    //     root.add(player);
    //   }
    // }

    return root;
  }

  public get scene() : Node3D {
    if (this.PackedSceneType === PackedSceneType.GLB) {
      return this.getGlbScene();
    }
    else if (this.PackedSceneType === PackedSceneType.FBX) {
      return this.getFbxScene();
    }
    else {
      return new Node3D("Node");
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
    }
    catch (e) {
      console.error(e);
    }

    return;
  }

  private async extractFbx() {
    if (!this._path) {
      console.error("No path provided for FBX file");
      return;
    }

    const loader = new FBXLoader();
    try {
      const fbx = await loader.loadAsync(this._path);
      this.loadedScene = fbx;
      console.log(fbx, "FBX LOADED");
      this.loaded = true;
    }
    catch (e) {
      console.error(e);
    }

    return;
  }

}
