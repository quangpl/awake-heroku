"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const fs_1 = require("./native/fs");
const util_1 = require("../utils/util");
class DataService {
    async add(newApp) {
        const data = await fs_1.readFilePromise(constants_1.AH_DATA_PATH);
        let apps = util_1.parseDataFromBuffer(data);
        const foundApp = apps.find((app) => app.url === newApp.url);
        if (!foundApp) {
            apps.push(Object.assign(newApp, {
                id: apps.length,
                lastHeartBeat: Date.now(),
            }));
            await fs_1.writeFilePromise(constants_1.AH_DATA_PATH, JSON.stringify(apps));
        }
    }
    async remove(id) {
        const data = await fs_1.readFilePromise(constants_1.AH_DATA_PATH);
        let apps = util_1.parseDataFromBuffer(data);
        apps = apps.filter((app) => app.id !== id);
        await fs_1.writeFilePromise(constants_1.AH_DATA_PATH, JSON.stringify(apps));
    }
    async get(id) {
        const data = await fs_1.readFilePromise(constants_1.AH_DATA_PATH);
        let apps = util_1.parseDataFromBuffer(data);
        const foundApp = apps.find(app => app.id === id);
        return foundApp;
    }
    async getAll() {
        const data = await fs_1.readFilePromise(constants_1.AH_DATA_PATH);
        let apps = util_1.parseDataFromBuffer(data);
        return apps;
    }
}
exports.default = new DataService();
