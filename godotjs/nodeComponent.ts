import { Object3D } from "three";
import { Node } from "./node";

export const componentTypes: Map<string, Function> = new Map();

export function registerComponentType(type: Function) {
  componentTypes.set(type.name, type);
}

export class NodeComponent {
  public node!: Node;

  constructor(node?: Node, params?: any) {
    if (node) {
      this.attach(node);
    }
    registerComponentType(this.constructor);
  }

  attach(node: Node) {
    this.node = node;
  }

  awake() {}

  update(dt: number) {}

  destroy() {}

  onEnable() {}

  onDisable() {}
}
