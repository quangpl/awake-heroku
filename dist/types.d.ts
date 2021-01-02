export interface IAppInfo {
    id?: number;
    url: string;
    lastHeartBeat?: number;
}
export interface IDataService {
    add: (appInfo: IAppInfo) => Promise<void>;
    remove: (id: number) => Promise<void>;
    get: (id: number) => Promise<IAppInfo | undefined>;
    getAll: () => IAppInfo[] | undefined | Promise<IAppInfo[]>;
}
export interface IAwakeService {
    start: () => Promise<void>;
    stop: () => Promise<void>;
}
export declare type IAwakeServiceManager = IDataService & IAwakeService;
