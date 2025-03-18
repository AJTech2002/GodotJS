import { AmbientLight } from "three";
import { Node3D } from "../node";

export class AmbientLight3D extends Node3D {
  private _light: AmbientLight;
  
  constructor(name: string, parent?: Node3D) {
    super(name, parent);
    
    // Create the Three.js AmbientLight
    this._light = new AmbientLight();
    
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
  
  // Note: AmbientLight3D in Godot doesn't support shadows
  // so no shadow properties are implemented here
}