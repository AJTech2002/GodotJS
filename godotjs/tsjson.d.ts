import { TSCNDef } from "./types";

declare module "*.tsjson" {
  const scenes: TSCNDef[];
}
