import { Color, Vector2, Vector3 } from "three";
import { resourceManager } from "../importedScene";
import { Resource } from "../resources/resource";
import { PackedSceneResource } from "../resources/resourceTypes/packedSceneResource.js";
import {
  NodeDef,
  SceneDef,
  TSCNEntity,
  TSCNResource,
  TSCNFile,
  TSCNProp,
  TSCNScene,
} from "../types";
import * as parser from "../tscn.js";
import { Node3D } from "../node.js";
import { componentTypes } from "../nodeComponent.js";

export function applyProps(props: Record<string, any>, target: any) {
  for (const key in props) {
    // support nested props (prop/prop/prop)
    const keys = key.split("/");
    if (keys.length > 1) {
      let nestedTarget = target;
      for (let i = 0; i < keys.length - 1; i++) {
        const nestedKey = keys[i];
        try {
          nestedTarget = nestedTarget[nestedKey];
        } catch (e) {
          console.warn("parser.ts", "Nested Key Error", e);
        }
      }

      try {
        
        let _nestedKey = keys[keys.length - 1];

        // check if fn set_key exists
        if ("set_"+_nestedKey in nestedTarget) {
          nestedTarget["_set"+_nestedKey](props[key]);
        } else {
          nestedTarget[_nestedKey] = props[key];
        }
      } catch (e) {
        console.warn("parser.ts", "Nested Key Error", e);
      }
    }

    try {
      if ("set_"+key in target) {
        target["set_"+key](props[key]);
      }
      else {
        target[key] = props[key];
      }
    } catch (e) {
      console.warn("parser.ts", "Prop Error", e);
    }
  }
}

export function resolveProp(
  prop: TSCNProp | any,
  extResources: Map<string, Resource>,
  subResources: Map<string, Resource>,
) {
  let parsedProp = prop;

  if (prop.type === "ExtResource") {
    const extResource = extResources.get(prop.params[0]);
    if (extResource) {
      parsedProp = extResources.get(prop.params[0]);
    }
  } else if (prop.type === "SubResource") {
    const extResource = subResources.get(prop.params[0]);
    if (extResource) {
      parsedProp = subResources.get(prop.params[0]);
    }
  } else if (prop.type === "Transform3D") {
    const transformMatrix3x3 = prop.params as number[];
    parsedProp = transformMatrix3x3;
  } else if (prop.type === "Vector3") {
    const vector3 = prop.params as number[];
    parsedProp = new Vector3(vector3[0], vector3[1], vector3[2]);
  } else if (prop.type === "Vector2") {
    const vector2 = prop.params as number[];
    parsedProp = new Vector2(vector2[0], vector2[1]);
  } // check if the prop is a dictionary/any with nested props
  else if (prop.type === "PackedFloat32Array") {
    parsedProp = new Float32Array(prop.params);
  } else if (prop.type === "NodePath") {
    let path = prop.params[0];

    let pathSplit = path.split(":");

    let target = pathSplit[0];
    let property = pathSplit[1];

    return {
      target: target,
      property: property,
    };
  } 
  else if (prop.type === "Color") {
    const color = prop.params as number[];
    parsedProp = {
      r: color[0],
      g: color[1],
      b: color[2],
      a: color[3],
    };
  }
  else if (typeof prop === "object") {
    parsedProp = resolveProps(prop, extResources, subResources);
  }

  return parsedProp;
}

export function parseKey(key: string): string {
  const newKey = key.replace(/&|"/g, "");
  return newKey;
}

export function resolveProps(
  entityProps: any,
  extResources: Map<string, Resource>,
  subResources: Map<string, Resource>,
): Record<string, TSCNProp | any> {
  if (!entityProps) {
    return {};
  }

  let props: Record<string, TSCNProp | any> = {};

  for (const key in entityProps) {
    if (Object.prototype.hasOwnProperty.call(entityProps, key)) {
      const prop = entityProps[key];
      props[key] = resolveProp(prop, extResources, subResources);
    }
  }
  return props;
}

function parseTscnText(text: string): TSCNScene {
  return {
    name: "MainScene",
    content: parser.peg$parse(text) as any,
  };
}

// Parse TSCN Godot scene file into a SceneDef object
export async function parseTscn(raw: string, projectRoot: string): Promise<SceneDef> {
  const mainScene = parseTscnText(raw);
  const nodes: NodeDef[] = []; // Definition of nodes
  const entities: TSCNEntity[] = []; // Index linked to nodes
  const node3Ds: Node3D[] = []; // Instance of Node3D

  const nodeMap = new Map<string, NodeDef>(); // Map Node Path to NodeDef
  const resources: TSCNResource[] = [];
  const extResources = new Map<string, Resource>();
  const subResources = new Map<string, Resource>();
  console.log("Main Scene", mainScene);
  let rootNode: NodeDef | undefined;
  // First pass - assign nodes and ext_resources
  if (mainScene) {
    for (let i = 0; i < mainScene.content.entities.length; i++) {
      const entity = mainScene.content.entities[i];
      if (entity.type === "node") {
        const node: NodeDef = {
          name: entity.heading.name!,
          parent: entity.heading.parent,
          type: entity.heading.type ?? "Node3D",
          enabled: true,
          props: {},
        };

        if (
          entity.heading.parent === undefined ||
          entity.heading.parent === ""
        ) {
          node.parent = undefined;
          rootNode = node;
        }

        nodes.push(node);
        entities.push(entity);

        let path = "";

        if (entity.heading.parent) {
          const parentPath = nodeMap.get(entity.heading.parent);
          if (parentPath) {
            path = parentPath.name + "/";
          }
        }

        path += node.name;

        nodeMap.set(path, node);
      } else if (
        entity.type === "ext_resource" ||
        entity.type === "sub_resource"
      ) {
        const resourceDef: TSCNResource = {
          type: entity.heading.type!,
          id: entity.heading.id!,
          props: {},
        };

        if (entity.heading.uid) {
          resourceDef.uid = entity.heading.uid;
        }

        if (entity.heading.path) {
          resourceDef.path = entity.heading.path;
          // resolve the path
          if (resourceDef.path.startsWith("res://")) {
            resourceDef.path = resourceDef.path.replace(
              "res://",
              projectRoot + "/",
            );
          }
        }

        resourceDef.props = resolveProps(
          entity.props,
          extResources,
          subResources,
        );

        if (entity.type === "ext_resource") {
          const resource = resourceManager.createExtResource(resourceDef);
          extResources.set(
            resourceDef.id,
            resource,
          );
          resources.push(resourceDef);
          await resourceManager.loadResource(
            resource
          );
        } else if (entity.type === "sub_resource") {
          const resource = resourceManager.createSubResource(resourceDef);
          subResources.set(
            resourceDef.id,
            resource,
          );
          resources.push(resourceDef);
          await resourceManager.loadResource(
            resource
          );
        }
      }
    }
  }

  if (!rootNode) {
    throw new Error("Root node not found");
  }

  let rootNode3D : Node3D | undefined = undefined;

  // Second pass - assign components, resources and children
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    let entity = entities[i];
    let parentPath : string | undefined = node.parent;
    

    node.props = resolveProps(entity.props, extResources, subResources);
    let instance : any | undefined; 

    // Handle instance swapping here
    if (entity.heading.instance) {
      const instanced_scene : PackedSceneResource = resolveProp(
        entity.heading.instance,
        extResources,
        subResources,
      );

      instance = instanced_scene.scene;
      instance.name = node.name;
    }

    let nodeInstance = componentTypes.get(node.type) as any;
    if (nodeInstance) {

      const parentNode : Node3D | undefined = rootNode3D?.find(parentPath ?? ".");

      if (parentNode?.find(node.name)) {
        instance = parentNode?.find(node.name);
      }

      if (instance === undefined) {
        instance = new nodeInstance(node.name, parentNode);
      }

      instance._props = node.props; // This is used to store the props for scripts
      applyProps(node.props, instance);
      parentNode?.add(instance);

      node3Ds.push(instance);

      if (rootNode === node) {
        rootNode3D = instance;
      }
    }
  }

  console.log("Scene Def", {
    nodes: [rootNode3D as Node3D],
    resources: [...extResources.values(), ...subResources.values()],
  });

  return {
    nodes: [rootNode3D as Node3D],
    resources: [...extResources.values(), ...subResources.values()],
  };
}
