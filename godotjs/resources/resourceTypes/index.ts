import { registerResource } from "../resource";
import { AnimationLibraryResource, AnimationResource } from "./animationResources";
import {
  BoxMeshResource,
  CapsuleMeshResource,
  MeshResource,
  QuadMeshResource,
} from "./meshResources";
import { PackedSceneResource } from "./packedSceneResource";
import { ScriptResource } from "./scriptResource";

export * from "./meshResources";
export * from "./scriptResource";
export * from "./packedSceneResource";
export * from "./animationResources";

export function registerResources() {
  registerResource(PackedSceneResource);
  registerResource(MeshResource);
  registerResource(BoxMeshResource);
  registerResource(QuadMeshResource);
  registerResource(CapsuleMeshResource);
  registerResource(ScriptResource);
  registerResource(AnimationResource);
  registerResource(AnimationLibraryResource);
}
