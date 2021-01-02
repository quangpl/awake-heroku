"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIONS = exports.AH_CONFIG_PATH = exports.AH_DATA_PATH = exports.INTERVAL = exports.DEFAULT_HEARTBEAT = void 0;
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
/**
 * AwakeHeroku : AH
 */
exports.DEFAULT_HEARTBEAT = 2 * 1000; //miliseconds
exports.INTERVAL = 2000;
exports.AH_DATA_PATH = path_1.default.join(os_1.default.homedir(), ".awake-heroku", "data.json");
exports.AH_CONFIG_PATH = path_1.default.join(os_1.default.homedir(), ".awake-heroku", "config.json");
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["ADD"] = "ADD";
    ACTIONS["REMOVE"] = "REMOVE";
    ACTIONS["SHOW"] = "SHOW";
    ACTIONS["LIST"] = "LIST";
    ACTIONS["START"] = "START";
    ACTIONS["STOP"] = "STOP";
})(ACTIONS = exports.ACTIONS || (exports.ACTIONS = {}));
