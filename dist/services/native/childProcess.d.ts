/// <reference types="node" />
import { exec } from "child_process";
export declare const execPromise: typeof exec.__promisify__;
export declare const spawnPromise: (arg1: string, arg2: readonly string[], arg3: import("child_process").SpawnOptions) => Promise<unknown>;
export declare const forkPromise: (arg1: string, arg2: readonly string[] | undefined, arg3: import("child_process").ForkOptions | undefined) => Promise<unknown>;
