import { IAppInfo, IDataService } from "../types";
import { AH_DATA_PATH } from "../utils/constants";
import {
  existsPromise,
  mkdirPromise,
  readFilePromise,
  writeFilePromise,
} from "./native/fs";
import { parseDataFromBuffer } from "../utils/util";
import path from "path";
class DataService implements IDataService {
  public async add(url: string) {
    if (!(await this.isDataExist())) {
      await mkdirPromise(path.dirname(AH_DATA_PATH), {
        recursive: true,
      });
      await writeFilePromise(
        AH_DATA_PATH,
        JSON.stringify([
          {
            id: 0,
            lastHeartBeat: Date.now(),
            url,
          },
        ])
      );
      return;
    }
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    const foundApp = apps.find((app: IAppInfo) => app.url === url);
    if (!foundApp) {
      apps.push({
        id: apps.length,
        lastHeartBeat: Date.now(),
        url,
      });
      await writeFilePromise(AH_DATA_PATH, JSON.stringify(apps));
    }
  }

  public async remove(id: number) {
    if (!(await this.isDataExist())) {
      return;
    }
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    apps = apps.filter((app: IAppInfo) => app.id !== id);
    await writeFilePromise(AH_DATA_PATH, JSON.stringify(apps));
  }

  public async get(id: number) {
    if (!(await this.isDataExist())) {
      return;
    }
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    const foundApp = apps.find((app) => app.id === id);
    return foundApp;
  }

  public async getAll() {
    if (!(await this.isDataExist())) {
      return [];
    }
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    return apps;
  }
  public async isDataExist() {
    return await existsPromise(AH_DATA_PATH);
  }
}
export default new DataService();
