import { Object3D } from "three";
import {UnityGameObject} from "./unityGameObject";

export const componentTypes : Map<string, Function> = new Map();

export function registerComponentType(type: Function) {
    componentTypes.set(type.name, type);
}

export class UnityComponent {

    public gameObject: UnityGameObject;

    constructor(gameObject: UnityGameObject) {
        this.gameObject = gameObject;
        registerComponentType(this.constructor);
    }

    awake() {

    }

    start() {

    }

    update(dt: number) {

    }

    destroy() {

    }

}
