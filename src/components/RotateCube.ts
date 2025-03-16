import { NodeAttachment } from "@godotjs";

export default class RotateCube extends NodeAttachment {
  public rotationSpeed = 10;

  public awake() {
    console.log("Rotate Cuve Awake", this.node.name);
  }

  public update(dt: number) {
    this.node.rotation.y += this.rotationSpeed * dt;
  }
}
