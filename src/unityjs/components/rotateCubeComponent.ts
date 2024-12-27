import { registerComponentType, UnityComponent, UnityGameObject, UnityMeshComponent } from "@unityjs";
import { Color, Vector3 } from "three";


export default class RotateCubeComponent extends UnityComponent {

    public speed: number = 0;
    public horizontalSpeed: number = 0;
    public newProp: string = "newProp";
    public v3Test: Vector3 = new Vector3(1, 2, 3);
    public dwd: boolean = true;
    public cameraReferenc2e: UnityGameObject | null = null;
    public numberARR: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public color: Color = new Color(0x00ff00);

    constructor(speed?: number) {
        super();
        this.speed = speed || 0;
    }

    awake() {
    }

    update(dt: number) {
        // this.gameObject.scale.copy(new Vector3(0.2, 0.2, 0.2).multiplyScalar(Math.sin(this.gameObject.rotation.y * 0.5) * 0.5 + 1));
        
        this.gameObject.rotation.y += dt * this.horizontalSpeed;

        if (this.gameObject.name !== "Main Camera") {
            const cameraObj = this.gameObject.scene.findObjectByName("Main Camera");
            if (cameraObj) {
                const mesh =  this.gameObject.getComponent<UnityMeshComponent>(UnityMeshComponent)?.mesh;
                mesh?.lookAt(cameraObj.position);
            }
        }
        else {
            this.gameObject.position.y = Math.sin(this.gameObject.scene.time * 0.2) * 5;
            // this.gameObject.lookAt(new Vector3(0, 0, 0));
            this.gameObject.rotation.x += dt * this.speed;
            // this.gameObject.rotation.y += dt * this.speed;


        }
    }

    destroy() {
        console.log("RotateCubeComponent destroy");
    }

}

registerComponentType(RotateCubeComponent);