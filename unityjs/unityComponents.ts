import { Object3D } from "three";
import {UnityGameObject} from "./unityGameObject";

export const componentTypes : Map<string, Function> = new Map();

export function registerComponentType(type: Function) {
    componentTypes.set(type.name, type);
}

export class UnityComponent {

    public gameObject!: UnityGameObject;

    constructor(gameObject? : UnityGameObject) {
        if (gameObject) {
            this.attach(gameObject);
        }
        registerComponentType(this.constructor);
    }

    attach (gameObject: UnityGameObject) {
        this.gameObject = gameObject;
    }

    awake() {

    }

    update(dt: number) {

    }

    destroy() {

    }

}
