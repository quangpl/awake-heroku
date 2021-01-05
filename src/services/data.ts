import { IAppInfo, IDataService } from "../types";

class DataService implements IDataService {
  apps: IAppInfo[] = [];
  public add(url: string) {
    if (!url) {
      return;
    }
    const foundApp = this.apps.find((a) => a.url === url);
    if (foundApp) {
      return;
    }
    this.apps.push({
      id: this.apps.length,
      url,
      lastHeartBeat: Date.now(),
    });
  }

  public remove(id: number) {
    this.apps = this.apps.filter((app: IAppInfo) => app.id !== id);
  }

  public update(app: IAppInfo) {
    this.apps = this.apps.map((a: IAppInfo) => {
      if (app.id === a.id) {
        a.url = app.url;
        a.lastHeartBeat = app.lastHeartBeat;
      }
      return a;
    });
  }

  public get(id: number) {
    return this.apps.find((app) => app.id === id);
  }

  public getAll() {
    return this.apps;
  }
}
export default new DataService();
