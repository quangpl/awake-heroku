#!/usr/bin/env node
import { IAppInfo, IAwakeService } from "../types";
import axios from "axios";
import { DEFAULT_HEARTBEAT, INTERVAL } from "../util/constants"
class AwakeService implements IAwakeService {
    listApp : IAppInfo[] = [];
    constructor(){
       setInterval(()=>{
           this.listApp.forEach((app: IAppInfo) => {
               if (app.lastHeartBeat && Date.now() - app.lastHeartBeat >= DEFAULT_HEARTBEAT) {
                   this.awake(app);
                   app.lastHeartBeat = Date.now();
               }
           });
       }, INTERVAL)
    }
    add(newApp:IAppInfo){
        this.listApp.push(Object.assign(newApp, {
            id: this.listApp.length,
            lastHeartBeat: Date.now()
        })) 
    }
    remove(id: number) {
        this.listApp = this.listApp.filter((app: IAppInfo) => app.id !== id);
    }
    show(id: number) {
        const  currentApp = this.listApp.filter((app: IAppInfo)=>app.id === id)
        return currentApp.length > 0 ? currentApp[0] : undefined ;
    }
    showAll() {
        return this.listApp;
    }
    awake(app: IAppInfo){
        console.info(`Awake : ${app.url}`)
        axios.get(app.url).then((err: any)=>{
            if(err){
                console.log(err);
            }
        })
    }
}

export default new AwakeService();