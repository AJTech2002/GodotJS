export interface ResourceHeading {
  id: string;
  type: string;
  uid?: string;
  path?: string;
}

export const resourceTypes: Map<string, Function> = new Map();

export function registerResource(type: Function) {
  resourceTypes.set(type.name, type);
}

export class Resource {
  protected _id: string;
  protected _type: string;
  protected _uid?: string;
  protected _path?: string;

  constructor(heading: ResourceHeading) {
    this._id = heading.id;
    this._type = heading.type;
    this._uid = heading.uid;
    this._path = heading.path;
  }
}
