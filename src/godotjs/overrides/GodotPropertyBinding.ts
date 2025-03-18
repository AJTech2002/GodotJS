import { PropertyBinding } from "three";
import { Node3D } from "../node";

const OldCreate = PropertyBinding.create;

//PATCH: Support Godot property bindings for animations
PropertyBinding.create = function (root, path, parsedPath) {
  
  if (path.startsWith("godot://")) {
    return new GodotPropertyBinding(root, path);
  }

  return OldCreate(name, parent);
}

enum GodotPropertyBindingType {
  FromToArray,
  Direct,
}

export class GodotPropertyBinding {

  private targetNode : Node3D | undefined = undefined;
  private root : Node3D | undefined = undefined;
  private targetProperty : any | undefined = undefined;
  private path : string;
  private type : GodotPropertyBindingType = GodotPropertyBindingType.Direct;

  private rootProperty : any | undefined = undefined;
  private targetPropertyName : string | undefined = undefined;

	constructor( root, path ) {

    if (root instanceof Node3D) {

      this.root = root;
      this.path = path;
      
      this.bind();
    }
    else {
      console.error( 'Root is not a Node3D' );
    }
	}

	getValue( array, offset ) {

    if ( !this.targetProperty )
		  this.bind();

    if ( this.type === GodotPropertyBindingType.Direct ) {
      if (this.rootProperty && this.targetPropertyName) {
        return (this.rootProperty as any)[this.targetPropertyName];
      }
    } else if ( this.type === GodotPropertyBindingType.FromToArray ) {
      const arr = [];
      this.targetProperty.toArray(arr, offset);
      return arr;
    }
    
	}

	setValue( array, offset ) {
    if ( !this.targetProperty )
		  this.bind();

    if ( this.type === GodotPropertyBindingType.Direct ) {
      if (this.rootProperty && this.targetPropertyName) {
        (this.rootProperty as any)[this.targetPropertyName] = array[0];
      }
    } else if ( this.type === GodotPropertyBindingType.FromToArray ) {
      this.targetProperty.fromArray( array, offset );
    }

	}

	bind() {

    
    let path = this.path.replace( 'godot://', '' );
    let pathParts = path.split(':');

    let nodePath = pathParts[0];

   this.targetNode = this.root.find( nodePath );

    if ( !this.targetNode ) {
      console.error( 'Could not find node:', nodePath );
      return;
    }
    
   let targetProperty : any = (this.targetNode as any);
   let rootProperty : any = (this.targetNode as any);
    // now find property
    for (let i = 1; i < pathParts.length; i++) {
      let property = pathParts[i];
      try {
        targetProperty = targetProperty[property];
        if ( i < pathParts.length - 1 )
          rootProperty = rootProperty[property];
      }
      catch (e) {
        console.error( 'Could not find property:', property );
        return;
      }
    }

    if (targetProperty === undefined) {
      console.error( 'Could not find property:', pathParts[pathParts.length - 1] );
      return;
    }

    // check if has fromArray and toArray method
    if ( targetProperty.fromArray && targetProperty.toArray ) {
      this.type = GodotPropertyBindingType.FromToArray;
    } else {
      this.type = GodotPropertyBindingType.Direct;
    }

    this.targetProperty = targetProperty;
    this.rootProperty = rootProperty;
    this.targetPropertyName = pathParts[pathParts.length - 1];

	}

	unbind() {

		console.log( 'unbind' );
	}

}