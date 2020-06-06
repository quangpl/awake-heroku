#!/usr/bin/env node
import { IAppInfo, IAwakeService } from "../types";
import axios from "axios";
import { DEFAULT_HEARTBEAT } from "../util/constants"
class AwakeService implements IAwakeService {
    listApp : IAppInfo[] = [];
    constructor(){
       while(true){
         
           this.listApp.forEach((app: IAppInfo) => {
               console.log(this.listApp.length)
               if (Date.now() - app.lastHeartBeat >= DEFAULT_HEARTBEAT){
                   this.awake(app);
                   app.lastHeartBeat = Date.now();
               }
           });
       }
    }
    add(newApp:IAppInfo){
        console.log("add")
        this.listApp.push(Object.assign(newApp, {
            id: this.listApp.length,
            lastHeartBeat: Date.now()
        })) 
        console.log(this.listApp)
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
        axios.get(app.url).then((err)=>{
            if(err){
                console.log(err);
            }
        })
    }
}

export default AwakeService;