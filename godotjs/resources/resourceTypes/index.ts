import { registerResource } from "../resource";
import { BoxMeshResource, CapsuleMeshResource, MeshResource, QuadMeshResource } from "./meshResources";
import { ScriptResource } from "./scriptResource";

export * from "./meshResources";
export * from "./scriptResource";

export function registerResources() {
  registerResource(MeshResource);
  registerResource(BoxMeshResource);
  registerResource(QuadMeshResource);
  registerResource(CapsuleMeshResource);
  registerResource(ScriptResource);
}