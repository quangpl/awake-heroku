import { IAppInfo } from "./types";
declare const _default: {
    add: (app: IAppInfo) => Promise<void>;
    remove: (id: number) => Promise<void>;
    get: (id: number) => Promise<IAppInfo | undefined>;
    getAll: () => Promise<IAppInfo[]>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
};
export default _default;
