"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./services/data"));
const awake_1 = __importDefault(require("./services/awake"));
exports.default = {
    add: async (app) => await data_1.default.add(app),
    remove: async (id) => await data_1.default.remove(id),
    get: async (id) => await data_1.default.get(id),
    getAll: async () => await data_1.default.getAll(),
    start: async () => await awake_1.default.start(),
    stop: async () => await awake_1.default.stop(),
};
