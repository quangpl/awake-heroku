"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkPromise = exports.spawnPromise = exports.execPromise = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
exports.execPromise = util_1.promisify(child_process_1.exec);
exports.spawnPromise = util_1.promisify(child_process_1.spawn);
exports.forkPromise = util_1.promisify(child_process_1.fork);
