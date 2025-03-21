import { PointLight, PointLightHelper } from "three";
import { Node3D } from "../node";

// In Godot, OmniLight3D is equivalent to a PointLight in Three.js
export class OmniLight3D extends Node3D {
  private _light: PointLight;
  private _helper?: PointLightHelper;
  
  constructor(name: string, parent?: Node3D) {
    super(name, parent);
    
    // Create the Three.js PointLight
    this._light = new PointLight();
    this._light.castShadow = true;
    
    // Configure shadow map defaults
    this._light.shadow.mapSize.width = 1024;
    this._light.shadow.mapSize.height = 1024;
    this._light.shadow.camera.near = 0.5;
    this._light.shadow.camera.far = 500;
    
    // Set default point light properties
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
  
  // Godot property: omni_range
  public set omni_range(range: number) {
    this._light.distance = range;
    this._light.shadow.camera.far = range;
  }
  
  // Godot property: omni_attenuation
  public set omni_attenuation(attenuation: number) {
    // Three.js decay parameter controls the light's distance-based falloff
    // In Godot, this ranges from 0-1, but Three.js uses different values
    // Default of 2 is physically accurate, but we adjust based on Godot's parameter
    if (attenuation < 0.25) {
      this._light.decay = 1; // Linear
    } else if (attenuation < 0.75) {
      this._light.decay = 2; // Quadratic (physically correct)
    } else {
      this._light.decay = 3; // Cubic (faster falloff)
    }
  }
  
  // Method to toggle debug helper visibility
  public showHelper(size: number = 1): void {
    if (this._helper) {
      this.getObject3D().remove(this._helper);
    }
    
    this._helper = new PointLightHelper(this._light, size);
    this.getObject3D().add(this._helper);
  }
  
  public hideHelper(): void {
    if (this._helper) {
      this.getObject3D().remove(this._helper);
      this._helper = undefined;
    }
  }
}
