import { ComponentDef, NodeDef, SceneDef, TSCNEntity, TSCNFile } from "./types";

interface ExtResource {
  type: string;
  uid?: string;
  path?: string;
  id: string;
}

// Parse TSCN Godot scene file into a SceneDef object
export function parseTscn(sceneFile: TSCNFile, main: string): SceneDef {
  const nodes: NodeDef[] = [];
  const entities: TSCNEntity[] = []; // Index linked to nodes
  const rootNodes: NodeDef[] = [];

  const nodeMap = new Map<string, NodeDef>(); // Map Node Path to NodeDef
  const extResources = new Map<string, any>(); // Map Resource ID to Resource

  const mainScene = sceneFile.scenes.find((scene) => scene.name === main);

  // First pass - assign nodes and ext_resources
  if (mainScene) {
    mainScene.content.entities.forEach((entity) => {
      if (entity.type === "node") {
        const node: NodeDef = {
          name: entity.heading.name!,
          parent: entity.heading.parent,
          tag: "",
          enabled: true,
          components: [],
          children: [],
          path: "",
        };

        if (
          entity.heading.parent === "." ||
          entity.heading.parent === undefined ||
          entity.heading.parent === ""
        ) {
          node.parent = undefined;
          rootNodes.push(node);
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
      } else if (entity.type === "ext_resource") {
        const extResource: ExtResource = {
          type: entity.heading.type!,
          id: entity.heading.id!,
        };

        if (entity.heading.uid) {
          extResource.uid = entity.heading.uid;
        }

        if (entity.heading.path) {
          extResource.path = entity.heading.path;
        }

        extResources.set(extResource.id, extResource);
      }
    });
  }

  console.log("Paths Mapped", nodeMap);

  // Second pass - assign components and children
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    let entity = entities[i];

    let components: ComponentDef[] = [];
    let props: any = {};

    if (node.parent) {
      const parent = nodeMap.get(node.parent);
      if (parent) {
        parent.children.push(node);
      }
    }

    if (entity.heading) {
      if (entity.heading.type && entity.heading.type !== "Node3D") {
        // Custom node type like Camera3D, Light3D, etc. - these are treated as components
        components.push({
          name: entity.heading.type,
          props: {},
        });
      }
    }

    if (entity.props) {
      for (const key in entity.props) {
        if (Object.prototype.hasOwnProperty.call(entity.props, key)) {
          const prop = entity.props[key];
          if (key === "script") {
            let scriptId = prop.params[0]; // Resource Index
            let script = extResources.get(scriptId);
            if (script) {
              let path = script.path;
              // get file name
              let parts = path.split("/");
              let fileName = parts[parts.length - 1];
              // remove . extentions
              fileName = fileName.split(".")[0];
              components.push({
                name: fileName,
                props: {},
              });
            }
          } else if (prop.type !== undefined) {
            components.push({
              name: prop.type,
              props: {},
              params: prop.params,
            });
          } else {
            props[key] = prop;
          }
        }
      }
    }

    if (components.length > 0) {
      components.forEach((component) => {
        component.props = props;
      });
    }

    node.components = components;
  }

  console.log("Scene Def", { nodes: nodes });

  return {
    nodes: rootNodes,
  };
}
