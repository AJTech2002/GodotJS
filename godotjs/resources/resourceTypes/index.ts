import { registerResource } from "../resource";
import { AnimationLibraryResource, AnimationResource } from "./animationResources";
import {
  BoxMeshResource,
  CapsuleMeshResource,
  MeshResource,
  QuadMeshResource,
  SphereMeshResource,
} from "./meshResources";
import { PackedSceneResource } from "./packedSceneResource";
import { ScriptResource } from "./scriptResource";
import { MaterialResource, StandardMaterial3DResource } from "./materialResource";
export * from "./meshResources";
export * from "./scriptResource";
export * from "./packedSceneResource";
export * from "./animationResources";

export function registerResources() {
  //GLBS and External Scenes
  registerResource(PackedSceneResource);
  
  // Meshes
  registerResource(MeshResource);
  registerResource(BoxMeshResource);
  registerResource(QuadMeshResource);
  registerResource(CapsuleMeshResource);
  registerResource(SphereMeshResource);

  // Scripts
  registerResource(ScriptResource);

  // Animations
  registerResource(AnimationResource);
  registerResource(AnimationLibraryResource);
  
  // Materials
  registerResource(MaterialResource);
  registerResource(StandardMaterial3DResource);
}
