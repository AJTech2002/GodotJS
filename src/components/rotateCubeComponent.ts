import { registerComponentType, UnityComponent, UnityGameObject } from "@unityjs";


export default class RotateCubeComponent extends UnityComponent {

    public speed: number = 0;

    constructor(speed?: number) {
        super();
        this.speed = speed || 0;
    }

    awake() {
        console.log("RotateCubeComponent awake");
    }

    update(dt: number) {
        this.gameObject.rotation.y += this.speed * dt;
    }

    destroy() {
        console.log("RotateCubeComponent destroy");
    }

}

registerComponentType(RotateCubeComponent);