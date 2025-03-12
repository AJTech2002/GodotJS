import { registerComponentType } from "../nodeComponent";

import { Camera3D } from "./Camera3D";
import { MeshInstance3D } from "./MeshInstance3D";
import { Transform3D } from "./Transform3D";

function registerDefaultComponents() {
  console.log("Registering default components");
  registerComponentType(Camera3D);
  registerComponentType(MeshInstance3D);
  registerComponentType(Transform3D);
}

export { registerDefaultComponents, Camera3D, MeshInstance3D, Transform3D };
