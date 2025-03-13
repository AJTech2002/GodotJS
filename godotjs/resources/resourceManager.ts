import { TSCNResource } from "../types";
import { Resource, resourceTypes } from "./resource";
import { registerResources } from "./resourceTypes";

registerResources();

export class ResourceManager {

  private createResource (resourceDef: TSCNResource): Resource {
    const resource = new Resource(resourceDef);
    let resourceType = resourceDef.type + 'Resource';
    if (resourceTypes.has(resourceType)) {
      const resource = new  (resourceTypes.get(resourceType) as any)(resourceDef);
      for (const key in resourceDef.props) {
        if (key in resource) {
          (resource as any)[key] = resourceDef.props[key];
        }
      }
        console.log('resource', resource, resourceType);
      return resource;
    }
    return resource;
  }

  public createExtResource(resourceDef: TSCNResource): Resource {
    const resource = this.createResource(resourceDef);
    return resource;
  }

  public createSubResource(resourceDef: TSCNResource): Resource {
    const subResource = this.createResource(resourceDef);
    return subResource;
  }
}
