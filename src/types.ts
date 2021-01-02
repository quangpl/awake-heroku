export interface IAppInfo {
    id?: number;
    url: string;
    lastHeartBeat?: number;
}
export interface IDataService {
    add: (url: string) => Promise<void>;
    remove: (id: number) => Promise<void>;
    get: (id: number) => Promise<IAppInfo | undefined>;
    getAll: () => IAppInfo[] | undefined | Promise<IAppInfo[]>;
}

export interface IControlService {
    start: () => Promise<void>;
    stop: () => Promise<void>;
}

export type IAwakeService = IDataService & IControlService;