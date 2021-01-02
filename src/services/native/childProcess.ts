import { exec, spawn, fork } from "child_process";
import { promisify } from "util";

export const execPromise = promisify(exec);
export const spawnPromise = promisify(spawn);
export const forkPromise = promisify(fork);
