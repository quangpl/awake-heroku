export interface IAppInfo {
  id?: number;
  url: string;
  lastHeartBeat?: number;
}
export interface IDataService {
  add: (url: string) => void;
  remove: (id: number) => void;
  get: (id: number) => IAppInfo | undefined;
  getAll: () => IAppInfo[] | undefined;
}

export interface IControlService {
  start: () => void;
  stop: () => void;
}

export type IAwakeService = IDataService & IControlService;
