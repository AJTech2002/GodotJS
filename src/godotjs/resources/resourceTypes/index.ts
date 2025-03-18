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
import { TextureResource, Texture2DResource } from "./textureResource";


export * from "./meshResources";
export * from "./scriptResource";
export * from "./packedSceneResource";
export * from "./animationResources";
export * from "./materialResource";
export * from "./textureResource";

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

  // Textures
  registerResource(TextureResource);
  registerResource(Texture2DResource);
}
