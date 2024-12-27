import { Color, Quaternion, Vector3 } from "three";

export interface UnityComponentDef {
    name: string;
    props?: any;
    // default?: any;
}

export interface UnityTransformDef {
    name: "TransformComponent";
    props: {
        position: Vector3;
        rotation: Quaternion;
        scale: Vector3;
    }
    default: {}
}

export interface UnityCameraDef {
    name: "CameraComponent",
    props: {
        fov: number;
    }
}

export interface UnityLightDef {
    name: "LightComponent",
    props: {
        lightType: "Directional" | "Point" | "Spot";
        color: Color;
        intensity: number;
    }
}

export interface UnityMeshDef {
    name: "MeshComponent",
    props: {
        primitive: boolean;
        color: Color;
        primitiveShape: "Cube" | "Sphere" | "Cylinder" | "Plane";
        assetPath: string;
        modelPath: string;
    }
}

export interface UnityObjectDef {
    name: string;
    parent: string | number;
    enabled: boolean;
    tag: string;
    id: number;
    components: UnityComponentDef[];
    defaultComponents: UnityComponentDef[];
    children: UnityObjectDef[];
}

export interface UnitySceneDef {
    gameObjects: UnityObjectDef[];
}