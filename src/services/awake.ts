import https from "https";
import { DEFAULT_HEARTBEAT } from "../utils/constants";
import DataService from "./data";

class AwakeService {
  private interval: any;
  public start() {
    this.interval = setInterval(async () => {
      const apps = DataService.getAll();
      if (apps.length <= 0) {
        return;
      }
      for (const app of apps) {
        if (
          app.lastHeartBeat &&
          Date.now() - app.lastHeartBeat >= DEFAULT_HEARTBEAT
        ) {
          console.info(`Wakeup app : [${app.id}]: ${app.url}`);
          try {
            await https.get(app.url);
          } catch (e) {
            // Should ignore error here
          }
          app.lastHeartBeat = Date.now();
          DataService.update(app);
        }
      }
    }, DEFAULT_HEARTBEAT);
  }
  public stop() {
    clearInterval(this.interval);
  }
}

export default new AwakeService();
