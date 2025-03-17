import { SpotLight, SpotLightHelper } from "three";
import { Node3D } from "../node";

export class SpotLight3D extends Node3D {
  private _light: SpotLight;
  private _helper?: SpotLightHelper;
  
  constructor(name: string, parent?: Node3D) {
    super(name, parent);
    
    // Create the Three.js SpotLight
    this._light = new SpotLight();
    this._light.castShadow = true;
    
    // Configure shadow map defaults
    this._light.shadow.mapSize.width = 1024;
    this._light.shadow.mapSize.height = 1024;
    this._light.shadow.camera.near = 0.5;
    this._light.shadow.camera.far = 500;
    
    // Set default spot light properties
    this._light.angle = Math.PI / 6; // 30 degrees in radians (Godot default)
    this._light.penumbra = 0.2; // Soft edge default
    this._light.decay = 2; // Physically correct falloff
    
    this.setObject3D(this._light);
  }
  
  // Godot property: light_color
  public set light_color(color: number[]) {
    if (color && color.length >= 3) {
      this._light.color.setRGB(color[0], color[1], color[2]);
    }
  }
  
  // Godot property: light_energy
  public set light_energy(energy: number) {
    this._light.intensity = energy;
  }
  
  // Godot property: shadow_enabled
  public set shadow_enabled(enabled: boolean) {
    this._light.castShadow = enabled;
  }
  
  // Godot property: shadow_bias
  public set shadow_bias(bias: number) {
    this._light.shadow.bias = bias;
  }
  
  // Godot property: spot_range
  public set spot_range(range: number) {
    this._light.distance = range;
    this._light.shadow.camera.far = range;
  }
  
  // Godot property: spot_angle
  public set spot_angle(angleDegrees: number) {
    // Convert degrees to radians
    this._light.angle = (angleDegrees * Math.PI) / 180;
  }
  
  // Godot property: spot_angle_attenuation
  public set spot_angle_attenuation(attenuation: number) {
    // Map attenuation to penumbra (soft edges)
    this._light.penumbra = Math.min(attenuation, 1);
  }
  
  // Method to toggle debug helper visibility
  public showHelper(): void {
    if (this._helper) {
      this.getObject3D().remove(this._helper);
    }
    
    this._helper = new SpotLightHelper(this._light);
    this.getObject3D().add(this._helper);
  }
  
  public hideHelper(): void {
    if (this._helper) {
      this.getObject3D().remove(this._helper);
      this._helper = undefined;
    }
  }
}
