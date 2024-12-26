import { Object3D } from "three";
import UnityGameObject from "./unityGameObject";

export default class UnityComponent {

    public gameObject: UnityGameObject;

    constructor(gameObject: UnityGameObject) {
        this.gameObject = gameObject;
    }

    awake() {

    }

    start() {

    }

    update() {

    }

    destroy() {

    }

}
