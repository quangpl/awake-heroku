import { IAppInfo, IAwakeService, IDataService } from "../types";
import axios from "axios";
import { AH_DATA_PATH, DEFAULT_HEARTBEAT, INTERVAL } from "../utils/constants";
import { readFilePromise, writeFilePromise } from "./native/fs";
import { parseDataFromBuffer } from "../utils/util";

class DataService implements IDataService {

  public async add(newApp: IAppInfo) {
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    const foundApp = apps.find((app: IAppInfo) => app.url === newApp.url);
    if (!foundApp) {
      apps.push(
        Object.assign(newApp, {
          id: apps.length,
          lastHeartBeat: Date.now(),
        })
      );
      await writeFilePromise(AH_DATA_PATH, JSON.stringify(apps));
    }
  }

  public async remove(id: number) {
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    apps = apps.filter((app: IAppInfo) => app.id !== id);
    await writeFilePromise(AH_DATA_PATH, JSON.stringify(apps));
  }

  public async get(id: number) {
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    const foundApp = apps.find(app => app.id === id);
    return foundApp;
  }

  public async getAll() {
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    return apps;
  }
}
export default new DataService();
