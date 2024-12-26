export interface UnityComponentDef {
    name: string;
    props?: any;
    // default?: any;
}

export interface UnityTransformDef {
    name: "TransformComponent";
    props: {
        position: [number, number, number];
        rotation: [number, number, number, number];
        scale: [number, number, number];
    }
    default: {}
}

export interface UnityCameraDef {
    name: "CameraComponent"
}

export interface UnityLightDef {
    name: "LightComponent",
    props: {
        lightType: "Directional" | "Point" | "Spot";
        color: string;
        intensity: number;
    }
}

export interface UnityMeshDef {
    name: "MeshComponent",
    props: {
        primitive: boolean;
        color: string;
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