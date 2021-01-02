import fs from "fs";
import { promisify } from "util";
export const writeFilePromise = promisify(fs.writeFile);
export const readFilePromise = promisify(fs.readFile);
export const existsPromise = promisify(fs.exists);
export const mkdirPromise = promisify(fs.mkdir);

