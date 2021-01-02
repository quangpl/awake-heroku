"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkdirPromise = exports.existsPromise = exports.readFilePromise = exports.writeFilePromise = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
exports.writeFilePromise = util_1.promisify(fs_1.default.writeFile);
exports.readFilePromise = util_1.promisify(fs_1.default.readFile);
exports.existsPromise = util_1.promisify(fs_1.default.exists);
exports.mkdirPromise = util_1.promisify(fs_1.default.mkdir);
