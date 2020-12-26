import os from "os";
import path from "path";

export function getHomeDir() {
  return os.homedir();
}

export function getConfigurationPath() {
  const homeDir = getHomeDir();
  return path.join(homeDir, ".awake-heroku", "config.json");
}

export function normalizeAction(action?: string) {
  return action ? action.toLowerCase() : "";
}
