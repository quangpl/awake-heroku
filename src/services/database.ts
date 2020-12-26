import { getHomeDir } from "../utils/util";
import path from "path";
import { readFilePromise, writeFilePromise } from "./fs";

export default class ConfigService {
  public getDBPath() {
    const homeDir = getHomeDir();
    return path.join(homeDir, ".awake-heroku");
  }

  public async updateConfiguration(config: any) {
    const dbPath = this.getDBPath();
    const configPath = path.join(dbPath, "config.json");
    await writeFilePromise(configPath, config);
  }

  public async getConfiguration() {
    const dbPath = this.getDBPath();
    const configPath = path.join(dbPath, "config.json");
    return await readFilePromise(configPath);
  }
}
