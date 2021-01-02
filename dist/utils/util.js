"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDataFromBuffer = void 0;
function parseDataFromBuffer(buf) {
    return JSON.parse(buf.toString());
}
exports.parseDataFromBuffer = parseDataFromBuffer;
