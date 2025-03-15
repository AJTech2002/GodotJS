import { Vector2, Vector3 } from "three";
import { resourceManager } from "../importedScene";
import { Resource } from "../resources/resource";
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
  }

  return parsedProp;
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
export function parseTscn(raw: string, projectRoot: string): SceneDef {
  const mainScene = parseTscnText(raw);
  console.log("Main Scene", mainScene);
  const nodes: NodeDef[] = [];
  const entities: TSCNEntity[] = []; // Index linked to nodes

  const nodeMap = new Map<string, NodeDef>(); // Map Node Path to NodeDef
  const extResources = new Map<string, Resource>(); // Map Resource ID to Resource
  const subResources = new Map<string, Resource>(); // Map Resource ID to Resource

  let rootNode: NodeDef | undefined;
  // First pass - assign nodes and ext_resources
  if (mainScene) {
    mainScene.content.entities.forEach((entity) => {
      if (entity.type === "node") {
        const node: NodeDef = {
          name: entity.heading.name!,
          parent: entity.heading.parent,
          type: entity.heading.type ?? "Node3D",
          enabled: true,
          children: [],
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
          extResources.set(
            resourceDef.id,
            resourceManager.createExtResource(resourceDef),
          );
        } else if (entity.type === "sub_resource") {
          subResources.set(
            resourceDef.id,
            resourceManager.createSubResource(resourceDef),
          );
        }
      }
    });
  }

  if (!rootNode) {
    throw new Error("Root node not found");
  }

  // Second pass - assign components, resources and children
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    let entity = entities[i];

    if (node.parent) {
      if (node.parent !== ".") {
        const parent = nodeMap.get(node.parent);
        if (parent) {
          parent.children.push(node);
        }
      } else {
        rootNode?.children.push(node);
      }
    }
    
    node.props = resolveProps(entity.props, extResources, subResources);
    if (entity.heading.instance) {
      node.props['instance'] = resolveProp(entity.heading.instance, extResources, subResources);
    }
  }

  console.log("Scene Def", { nodes: nodes });

  return {
    nodes: [...rootNode.children],
    resources: [...extResources.values(), ...subResources.values()],
  };
}
