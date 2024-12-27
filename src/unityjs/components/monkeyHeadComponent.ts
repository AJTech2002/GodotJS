import { UnityComponent, UnityMeshComponent } from "@unityjs";

export default class MonkeyHeadComponent extends UnityComponent {
  public speed: number = 0;
  private mesh: UnityMeshComponent | null = null;

  awake(): void {
    this.mesh = this.gameObject.getComponent<UnityMeshComponent>(UnityMeshComponent);
  }

  update(dt: number) {
    if (this.mesh && this.mesh.mesh) {
      this.mesh.mesh.scale.x = Math.sin(this.gameObject.scene.time * 5) * 0.5 + 1;
    }
  }
}