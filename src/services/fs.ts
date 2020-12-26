import fs from "fs";
import { promisify } from "util";
export const writeFilePromise = promisify(fs.writeFile);
export const readFilePromise = promisify(fs.readFile);
