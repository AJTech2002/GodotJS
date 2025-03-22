import { DirectionalLight, DirectionalLightHelper, Vector3 } from "three";
import { Node3D } from "../node";

export class DirectionalLight3D extends Node3D {
  private _light: DirectionalLight;
  private _helper?: DirectionalLightHelper;
  
  constructor(name: string, parent?: Node3D) {
    super(name, parent);
    
    // Create the Three.js DirectionalLight
    this._light = new DirectionalLight();
    this._light.castShadow = true;
    
    // Configure shadow map defaults
    this._light.shadow.mapSize.width = 1024;
    this._light.shadow.mapSize.height = 1024;
    this._light.shadow.camera.near = 0.5;
    this._light.shadow.camera.far = 500;

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
  
  // Godot property: directional_shadow_max_distance
  public set directional_shadow_max_distance(distance: number) {
    this._light.shadow.camera.far = distance;
  }
  
  // Method to toggle debug helper visibility
  public showHelper(size: number = 1): void {
    if (this._helper) {
      this.getObject3D().remove(this._helper);
    }
    
    this._helper = new DirectionalLightHelper(this._light, size);
    this.getObject3D().add(this._helper);
  }
  
  public hideHelper(): void {
    if (this._helper) {
      this.getObject3D().remove(this._helper);
      this._helper = undefined;
    }
  }
  
  override update(dt: number): void {
     super.update(dt);
    //  if (this.object) {
    //   const direction = new Vector3();
    //   this.object.getWorldDirection(direction);
    //   this._light.target.position.copy(this._light.position).add(direction.multiplyScalar(-1));
    //  }
 
  }

}
