import { NodeAttachment } from "@godotjs";

export default class RotateCube extends NodeAttachment {
  public rotationSpeed = 10;
  private randomOffset = Math.random() * 1000;
  private startPostion = this.node.position.clone();

  awake(): void {
    
  }

  public update(dt: number) {
    this.node.euler.y += this.rotationSpeed * dt;
    // move up and down to sin
    this.node.position.y = this.startPostion.y + Math.sin((Date.now() / 1000) + this.randomOffset) *
      0.2;
  }
}
