/// <reference types="node" />
import fs from "fs";
export declare const writeFilePromise: typeof fs.writeFile.__promisify__;
export declare const readFilePromise: typeof fs.readFile.__promisify__;
export declare const existsPromise: typeof fs.exists.__promisify__;
export declare const mkdirPromise: typeof fs.mkdir.__promisify__;
