import { IAppInfo, IDataService } from "../types";
import { AH_DATA_PATH } from "../utils/constants";
import { readFilePromise, writeFilePromise } from "./native/fs";
import { parseDataFromBuffer } from "../utils/util";

class DataService implements IDataService {

  public async add(url: string) {
    const data = await readFilePromise(AH_DATA_PATH);
    let apps = parseDataFromBuffer<IAppInfo[]>(data);
    const foundApp = apps.find((app: IAppInfo) => app.url === url);
    if (!foundApp) {
      apps.push(
        {
          id: apps.length,
          lastHeartBeat: Date.now(),
          url
        }
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
