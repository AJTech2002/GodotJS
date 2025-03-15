import { string } from "three/tsl";
import {Node3D} from "../node";
import { AnimationClip, AnimationMixer } from "three";
export class AnimationPlayer extends Node3D {
  
  private _animations: AnimationClip[] = [];
  private _animationsMap: Map<string, AnimationClip> = new Map();

  private _root: Node3D | undefined;
  private _speedScale: number = 1;

  private animationMixer: AnimationMixer | undefined;
  private _currentAnimation: AnimationClip | undefined;

  constructor(objDef: string | undefined) {
    super(objDef);
    this.animationMixer = new AnimationMixer(this.getObject3D());
  }

  public override awake(): void {
    super.awake();
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
    console.log("Animation Root", root);
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
      }
      else if (typeof _animation === "number") {
        this.animationMixer.stopAllAction();
        this._currentAnimation = this._animations[_animation];
        this.animationMixer.clipAction(this._animations[_animation])
        .play();
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