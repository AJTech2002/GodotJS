import { Node3D } from "../node";
import { registerType } from "../nodeComponent";
import { Camera3D } from "./Camera3D";
import { MeshInstance3D } from "./MeshInstance3D";
import { AnimationPlayer } from "./AnimationPlayer";
import { DirectionalLight3D } from "./DirectionalLight3D";
import { SpotLight3D } from "./SpotLight3D";
import { OmniLight3D } from "./OmniLight3D";
import { AmbientLight3D } from "./AmbientLight3D";

export * from "./Camera3D";
export * from "./MeshInstance3D";
export * from "./AnimationPlayer";
export * from "./DirectionalLight3D";
export * from "./SpotLight3D";
export * from "./OmniLight3D";
export * from "./AmbientLight3D";

registerType(Node3D);
registerType(Camera3D);
registerType(MeshInstance3D);
registerType(AnimationPlayer);
registerType(DirectionalLight3D);
registerType(SpotLight3D);
registerType(OmniLight3D);
registerType(AmbientLight3D);
