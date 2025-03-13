import { Node3D } from "./node";

export const componentTypes: Map<string, Function> = new Map();

export function registerType(type: Function) {
  componentTypes.set(type.name, type);
}

export class NodeScript {
  public node!: Node3D;

  constructor(node?: Node3D, params?: any) {
    if (node) {
      this.attach(node);
    }
    registerType(this.constructor);
  }

  attach(node: Node3D) {
    this.node = node;
  }

  awake() {}

  update(dt: number) {}

  destroy() {}

  onEnable() {}

  onDisable() {}

  onDestroy() {}
}
