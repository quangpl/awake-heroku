import DataService from "./services/data";
import AwakeService from "./services/awake";
import { IAppInfo } from "./types";

export default {
    add: async (app: IAppInfo) => await DataService.add(app),
    remove: async (id: number) => await DataService.remove(id),
    get: async (id: number) => await DataService.get(id),
    getAll: async () => await DataService.getAll(),
    start: async () => await AwakeService.start(),
    stop: async () => await AwakeService.stop(),
}