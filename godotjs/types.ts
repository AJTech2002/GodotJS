import { Color, Quaternion, Vector3 } from "three";

export type EntityType =
  | "gd_scene"
  | "sub_resource"
  | "resource"
  | "ext_resource"
  | "node";

export interface TSCNHeading {
  type?: string;
  name?: string;
  id?: string;
  parent?: string;
  uid?: string;
  path?: string;
  instance?: TSCNProp; // Matches instances in the JSON
}

export interface TSCNProp {
  type: string;
  params: any[];
}

export interface TSCNEntity {
  type: string;
  heading: TSCNHeading;
  props?: Record<string, TSCNProp | any>; // Allows flexibility for optional properties
}

export interface TSCNDescriptor {
  type: string;
  heading: {
    load_steps: number;
    format: number;
    uid: string;
  };
}

export interface TSCNScene {
  name: string;
  content: {
    descriptor: TSCNDescriptor;
    entities: TSCNEntity[];
  };
}

export interface TSCNFile {
  scenes: TSCNScene[];
}

export interface ComponentDef {
  name: string;
  props?: any;
  // default?: any;
}

export interface NodeDef {
  name: string;
  path: string;
  parent: string | undefined;
  enabled: boolean;
  tag: string;
  components: ComponentDef[];
  children: NodeDef[];
}

export interface SceneDef {
  nodes: NodeDef[];
}
