import https from "https";
import { AH_DATA_PATH, DEFAULT_HEARTBEAT } from "../utils/constants";
import DataService from "./data";
import { writeFilePromise } from "./native/fs";

class AwakeService {
    private interval: any;
    public async start() {
        this.interval = setInterval(async () => {
            const apps = await DataService.getAll();
            if (apps.length <= 0) {
                return;
            }
            apps.forEach(async (app) => {
                if (
                    app.lastHeartBeat &&
                    Date.now() - app.lastHeartBeat >= DEFAULT_HEARTBEAT
                ) {
                    console.info(`Wakeup app : [${app.id}]: ${app.url}`)
                    await https.get(app.url);
                    app.lastHeartBeat = Date.now();
                    await writeFilePromise(AH_DATA_PATH, JSON.stringify(apps));
                    console.log("RUN")
                }
            })
        }, DEFAULT_HEARTBEAT)
    }
    public stop() {
        clearInterval(this.interval);
    }
}

export default new AwakeService();