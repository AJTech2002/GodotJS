import {
  KeyframeTrack,
  InterpolateLinear,
  InterpolateSmooth,
  InterpolateDiscrete,
  InterpolationModes,
  Vector3,
  Quaternion,
  VectorKeyframeTrack,
  BooleanKeyframeTrack,
  AnimationClip,
  QuaternionKeyframeTrack,
  PropertyBinding,
} from "three";
import { Resource } from "../resource";
import { parseKey } from "../../parser/parser";

export enum TrackType {
  VALUE = "value",
}

export class Track {
  private _type: TrackType = TrackType.VALUE;
  private _enabled: boolean = true;
  private _path: string;
  private _interp: number = 1;
  private _loop_wrap: boolean = false;
  private _keys: Record<string, any> = {};

  private _keyframeTrack: KeyframeTrack | undefined;

  public set type(type: string) {
    if (type === "value") {
      this._type = TrackType.VALUE;
    }
  }

  public get type(): string {
    return this._type;
  }

  public set enabled(enabled: boolean) {
    this._enabled = enabled;
  }

  public get enabled(): boolean {
    return this._enabled;
  }
  public set path(path: string) {
    // replace all .: with .
    // this._path = path.replace(/\.:/g, ".");
    // // replace all : with .
    // this._path = this._path.replace(/:/g, ".");

    // // take the final and make it a property if there are more than one, a.b[c]
    // let split = this._path.split(".");
    // if (split.length > 2) {
    //   let last = split.pop();
    //   this._path = split.join(".");
    //   this._path = this._path + "[" + last + "]";
    // }
    
    this._path = path;
  }

  public get path(): string {
    return this._path;
  }

  public set interp(interp: number) {
    this._interp = interp;
  }

  public get interp(): number {
    return this._interp;
  }

  public set loop_wrap(loop_wrap: boolean) {
    this._loop_wrap = loop_wrap;
  }

  public get loop_wrap(): boolean {
    return this._loop_wrap;
  }

  private getKeys(values: any): any[] {
    let arra: any[] = [];

    // any is an object, loop through the keys
    if (typeof values === "object") {
      for (const key in values) {
        arra.push(values[key]);
      }
    } else {
      arra.push(values);
    }

    return arra;
  }

  private parseValues(_values: any): any[] {
    let values: any[] = this.getKeys(_values);

    const firstValue = values[0];
    let flattenedValues;
    // check if array
    if (Array.isArray(firstValue)) {
      const merged = [];
      for (let i = 0; i < values.length; i++) {
        merged.push(...this.parseValues(values[i]));
      }
      flattenedValues = merged;
      return flattenedValues;
    } 

    if (firstValue instanceof Vector3) {
      flattenedValues = values.flatMap((v: Vector3) => [v.x, v.y, v.z]);
    } else if (firstValue instanceof Quaternion) {
      flattenedValues = values.flatMap((q: Quaternion) => [q.x, q.y, q.z, q.w]);
    }
    else if (typeof firstValue === "number") {
      flattenedValues = values;
    } else {
      flattenedValues = values;
      console.warn("Unknown value type for keyframeTrack", firstValue);
    }

    return flattenedValues;
  }

  public set keys(keys: Record<string, any>) {
    this._keys = keys;
  }

  public get keyframeTrack(): KeyframeTrack {
    let times = this.keys["times"] as Float32Array;
    let values = this.keys["values"] as any[];

    let interpolationMode: InterpolationModes = InterpolateLinear;

    switch (this._interp) {
      case 0:
        interpolationMode = InterpolateDiscrete;
        break;
      case 1:
        interpolationMode = InterpolateLinear;
        break;
      case 2:
        interpolationMode = InterpolateSmooth;
        break;
    }

    if (values.length === 0) {
      console.warn("No values for keyframeTrack", this._path);
      return new KeyframeTrack(this._path, [], []);
    }

    const parsedValues = this.parseValues(values);
    this._keyframeTrack = new KeyframeTrack(
      this._path,
      times,
      new Float32Array(parsedValues),
      interpolationMode,
    );

    

    return this._keyframeTrack;
  }
  

  public get keys(): Record<string, any> {
    return this._keys;
  }
}


export class TrackList {
  private _tracks: Map<string, Track> = new Map();
  private _trackList: Track[] = [];

  constructor() {
    return new Proxy(this, {
      get: (target, prop: string) => {
        if (prop in target) {
          return (target as any)[prop];
        }
        return target.get(prop); // Call `get` method when accessing a dynamic key
      },
      set: (target, prop: string, value) => {
        target._tracks.set(prop, value);
        target._trackList.push(value);
        return true;
      },
    });
  }

  public get tracks(): Map<string, Track> {
    return this._tracks;
  }

  public get trackList(): Track[] {
    return this._trackList;
  }

  get(key: string): Track {
    if (this.tracks.has(key)) {
      return this.tracks.get(key) as Track;
    } else {
      const newTrack = new Track();
      this.tracks.set(key, newTrack);
      return newTrack;
    }
  }
}

export class AnimationLibraryResource extends Resource {
  public animations: Map<string, AnimationResource> = new Map();

  public set _data(data: Record<string, AnimationResource>) {
    this.animations.clear();

    // loop through
    for (const key in data) {
      // remove all instances of & and " from the key
      this.animations.set(parseKey(key), data[key]);
    }
  }
}

export class AnimationResource extends Resource {
  public name: string = "";
  public tracks: TrackList = new TrackList();

  public set resource_name(name: string) {
    this.name = name;
  }

  public get clip(): AnimationClip {
    let tracks: KeyframeTrack[] = [];

    for (const [key, track] of this.tracks.tracks) {
      tracks.push(track.keyframeTrack);
    }

    //TODO: Handle duration & blend modes
    return new AnimationClip(this.name, undefined, tracks, undefined);
  }
}
