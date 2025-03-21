import { Camera, Group, Mesh, Object3D } from "three";
import { Node3D } from "../../node";
import { Camera3D, MeshInstance3D } from "../../defaultNodes";


export function threeJsToNode(object: Object3D): Node3D {
  let _node: Node3D;
  if (object instanceof Mesh) {
    _node = new MeshInstance3D(object.name);
    (_node as MeshInstance3D).mesh3D = object;
  } 
  else if (object instanceof Group) {
    // check if all chilren are meshes
    let allMeshes = true;
    for (let i = 0; i < object.children.length; i++) {
      if (!(object.children[i] instanceof Mesh)) {
        allMeshes = false;
        break;
      }
    }

    if (allMeshes) {
      _node = new MeshInstance3D(object.name);
      _node.isGroup = true;
    }
  }
  else if (object instanceof Camera) {
    const cameraInstance = new Camera3D(object.name);
    cameraInstance.camera = object;
    _node = cameraInstance;
  } else {
    _node = new Node3D(object.name);
    _node.setObject3D(object);
  }

  // Ensure the object’s world matrix is up-to-date before iterating children
  object.updateMatrixWorld(true);

  // Clone the children array before iteration to avoid modification issues
  const children = [...object.children];

   // Apply transformation
   _node.transform.position.copy(object.position);
   _node.transform.euler = object.rotation;
   _node.transform.scale.copy(object.scale);
   
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const node = threeJsToNode(child);
    _node.add(node);
  }

  console.log("threeJsToNode", object, _node);


 

  return _node;
}
