import { Camera, Mesh, Object3D } from "three";
import { Node3D } from "../../node";
import { Camera3D, MeshInstance3D } from "../../defaultNodes";


export function threeJsToNode(object: Object3D): Node3D {
  let _node: Node3D;

  if (object instanceof Mesh) {
    _node = new MeshInstance3D(object.name);
    (_node as MeshInstance3D).mesh3D = object;
  } else if (object instanceof Camera) {
    const cameraInstance = new Camera3D(object.name);
    cameraInstance.camera = object;
    _node = cameraInstance;
  } else {
    _node = new Node3D(object.name);
  }

  // Ensure the object’s world matrix is up-to-date before iterating children
  object.updateMatrixWorld(true);

  // Clone the children array before iteration to avoid modification issues
  const children = [...object.children];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const node = threeJsToNode(child);
    _node.add(node);
  }

  // Apply transformation
  _node.position.copy(object.position);
  _node.rotation.copy(object.rotation);
  _node.scale.copy(object.scale);

  object.position.set(0, 0, 0);
  object.rotation.set(0, 0, 0);
  object.scale.set(1, 1, 1);
  object.updateMatrix();

  return _node;
}
