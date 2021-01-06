import DataService from "./services/data";
import AwakeService from "./services/awake";
import { IAwakeService } from "./types";

export const AwakeHeroku: IAwakeService = {
  add: (url: string) => DataService.add(url),
  remove: (id: number) => DataService.remove(id),
  get: (id: number) => DataService.get(id),
  getAll: () => DataService.getAll(),
  start: () => AwakeService.start(),
  stop: () => AwakeService.stop(),
};
