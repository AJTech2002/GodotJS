import { Resource, ResourceHeading } from "../resource";
import {componentTypes, NodeScript} from "../../nodeComponent";
import { Node3D } from "../../node";

export class ScriptResource extends Resource {

  private _script: string = '';

  constructor(resourceDef: ResourceHeading) {
    super(resourceDef);
    if (resourceDef.path) {
      this._script = this.extractFilename(resourceDef.path);
    }
    else {
      this._script = '';
    }
  }

  private extractFilename(path: string) : string {
    return path.match(/\/([^\/]+)\./)?.[1] || "";
  }

  public createScript(node: Node3D) : NodeScript | undefined {
    try {

      if (!this._path) {
        return;
      }

      const scriptName = this._script;

      if (!scriptName) {
        return;
      }

      const scriptType = componentTypes.get(scriptName) as any;
      if (!scriptType) {
        return;
      }

      const script = new scriptType(node);

      if (script !== undefined) {
        const props = node.props;
        for (const key in props) {
          if (Object.prototype.hasOwnProperty.call(script, key)) {
            const element = props[key];
            (script as any)[key] = element;
          }
        }
      }

      return script;
    } catch (e) {
      console.error(e);
    }
  }

}