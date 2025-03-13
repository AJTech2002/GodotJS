import { Node3D } from "../node";
import { registerType } from "../nodeComponent";
import { Camera3D } from "./Camera3D";
import { MeshInstance3D } from "./MeshInstance3D";

export * from "./Camera3D";
export * from "./MeshInstance3D";

registerType(Node3D);
registerType(Camera3D);
registerType(MeshInstance3D);
