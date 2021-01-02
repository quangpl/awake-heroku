import path from "path";
import os from "os";
/**
 * AwakeHeroku : AH
 */
export const DEFAULT_HEARTBEAT = 2 * 1000; //miliseconds
export const INTERVAL = 2000;
export const AH_DATA_PATH = path.join(os.homedir(), ".awake-heroku", "data.json")
export const AH_CONFIG_PATH = path.join(os.homedir(), ".awake-heroku", "config.json")
export enum ACTIONS {
  ADD = "ADD",
  REMOVE = "REMOVE",
  SHOW = "SHOW",
  LIST = "LIST",
  START = "START",
  STOP = "STOP",
}
