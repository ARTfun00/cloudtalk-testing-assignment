import { pathToFileURL } from "node:url";
import { register } from "node:module";

register("ts-node/esm", pathToFileURL("./src/service.ts"));