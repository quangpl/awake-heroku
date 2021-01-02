import DataService from "./services/data";
import AwakeService from "./services/awake";
import { IAppInfo, IAwakeService } from "./types";

const AwakeHerokuService: IAwakeService = {
    add: async (url: string) => await DataService.add(url),
    remove: async (id: number) => await DataService.remove(id),
    get: async (id: number) => await DataService.get(id),
    getAll: async () => await DataService.getAll(),
    start: async () => await AwakeService.start(),
    stop: async () => await AwakeService.stop(),
}

export default AwakeHerokuService;