export interface IAppInfo {
    id?: number;
    url: string;
    lastHeartBeat?: number;
}
export interface IAwakeService {
    listApp: IAppInfo[];
    add: (appInfo: IAppInfo) => void;
    remove: (id: number) => void;
    show: (id: number) => IAppInfo | undefined;
    showAll: () => IAppInfo[] | undefined;
    awake: (appInfo: IAppInfo) => void;
}
