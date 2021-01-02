"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const data_1 = __importDefault(require("./data"));
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("./native/fs");
class AwakeService {
    async start() {
        this.interval = setInterval(async () => {
            const apps = await data_1.default.getAll();
            if (apps.length <= 0) {
                return;
            }
            apps.forEach(async (app) => {
                if (app.lastHeartBeat &&
                    Date.now() - app.lastHeartBeat >= constants_1.DEFAULT_HEARTBEAT) {
                    console.info(`Wakeup app : [${app.id}]: ${app.url}`);
                    await axios_1.default.get(app.url);
                    app.lastHeartBeat = Date.now();
                    await fs_1.writeFilePromise(constants_1.AH_DATA_PATH, JSON.stringify(apps));
                }
            });
        }, constants_1.DEFAULT_HEARTBEAT);
    }
    stop() {
        clearInterval(this.interval);
    }
}
exports.default = new AwakeService();
