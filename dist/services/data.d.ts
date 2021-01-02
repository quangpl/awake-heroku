import { IAppInfo, IDataService } from "../types";
declare class DataService implements IDataService {
    add(newApp: IAppInfo): Promise<void>;
    remove(id: number): Promise<void>;
    get(id: number): Promise<IAppInfo | undefined>;
    getAll(): Promise<IAppInfo[]>;
}
declare const _default: DataService;
export default _default;
