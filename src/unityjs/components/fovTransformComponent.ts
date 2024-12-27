import { UnityCameraComponent, UnityComponent } from "@unityjs";
import { PerspectiveCamera } from "three";
import { lerp } from "three/src/math/MathUtils.js";

export default class FovTransformComponent extends UnityComponent {

  public speed: number = 0;
  private camera: UnityCameraComponent | null = null;

  awake(): void {
    this.camera = this.gameObject.getComponent<UnityCameraComponent>(UnityCameraComponent);
  }

  update(dt: number) {
    if (this.camera) {
      (this.camera.camera as PerspectiveCamera).fov = lerp(100, 180, Math.cos(this.gameObject.scene.time * this.speed) * 0.5 + 0.5);
      (this.camera.camera as PerspectiveCamera).updateProjectionMatrix();
    }
  }
}