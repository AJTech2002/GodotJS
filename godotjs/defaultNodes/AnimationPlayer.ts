import { Node3D } from "../node";
import { AnimationClip, AnimationMixer } from "three";
import {
  AnimationLibraryResource,
} from "../resources/resourceTypes";
import { parseKey } from "../parser/parser";
export class AnimationPlayer extends Node3D {
  private _animations: AnimationClip[] = [];
  private _animationsMap: Map<string, AnimationClip> = new Map();

  private _root: Node3D | undefined;
  private _speedScale: number = 1;

  private animationMixer: AnimationMixer | undefined;
  private _currentAnimation: AnimationClip | undefined;

  private _libraryMap: Map<string, AnimationLibraryResource> = new Map();
  private _libraries: AnimationLibraryResource[] = [];

  constructor(objDef?: any, parent?: Node3D) {
    super(objDef, parent);

    // If no root - then apply to render graph
    this.animationMixer = new AnimationMixer(this.getObject3D());
    

    if (this.parent) this.root = this.parent; // By default, the root is the parent
  }

  public override awake(): void {
    super.awake();
    console.log(this.parent);
  }

  public set animations(animations: AnimationClip[]) {
    this._animations = animations;

    this._animationsMap.clear();

    this._animations.forEach((animation) => {
      this._animationsMap.set(animation.name, animation);
    });
  }

  public get animations(): AnimationClip[] {
    return this._animations;
  }

  public set speedScale(speedScale: number) {
    this._speedScale = speedScale;
    if (this.animationMixer) {
      this.animationMixer.timeScale = speedScale;
    }
  }

  public get speedScale(): number {
    return this._speedScale;
  }

  public set root(root: Node3D) {
    this._root = root;
    this.animationMixer = new AnimationMixer(root as any);
  }

  public set_root_node(node_path: {
    target: string
  }) {
    this.root = this.find(node_path.target);
    console.log(this.root);
  } 
  
  public set libraries(val: Record<string, AnimationLibraryResource>) {
    
    this._libraryMap.clear();
    this._libraries = [];

    for (const key in val) {
      const library = val[key];
      this._libraryMap.set(parseKey(key), library);
      this._libraries.push(library);
    }

    this.updateAnimations();
  }

  private updateAnimations() {
    // loop through all Libraries
    let allClips: AnimationClip[] = [];

    this._libraries.forEach((library) => {
      library.animations.forEach((animation) => {
        if (animation.clip.tracks.length === 0) return;
        allClips.push(animation.clip);
      });
    });
    
    this.animations = allClips;
  }

  public get root(): Node3D | undefined {
    return this._root;
  }

  public play(_animation: string | number) {
    if (this.animationMixer) {
      if (typeof _animation === "string") {
        const animation = this._animationsMap.get(_animation);
        if (animation) {
          this.animationMixer.stopAllAction();
          this._currentAnimation = animation;
          this.animationMixer.clipAction(animation).play();
        }
      } else if (typeof _animation === "number") {
        this.animationMixer.stopAllAction();
        this._currentAnimation = this._animations[_animation];
        this.animationMixer.clipAction(this._animations[_animation]).play();
      }
    }
  }

  public stop() {
    if (this.animationMixer && this._currentAnimation) {
      this.animationMixer.stopAllAction();
    }
  }

  public playAll() {
    if (this.animationMixer) {
      this.animationMixer.stopAllAction();
      this._animations.forEach((animation) => {
        if (this.animationMixer)
          this.animationMixer.clipAction(animation).play();
      });
    }
  }

  public update(dt: number): void {
    super.update(dt);
    if (this.animationMixer) {
      this.animationMixer.update(dt);
    }
  }
}
