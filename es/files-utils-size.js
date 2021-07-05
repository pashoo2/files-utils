"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileSize = exports.getBufferSize = exports.getArrayBufSize = exports.getFileObjectSize = exports.getBlobSize = void 0;
var getBlobSize = function (o) { return o.size; };
exports.getBlobSize = getBlobSize;
var getFileObjectSize = function (o) { return o.size; };
exports.getFileObjectSize = getFileObjectSize;
var getArrayBufSize = function (o) { return o.byteLength; };
exports.getArrayBufSize = getArrayBufSize;
var getBufferSize = function (o) { return o.byteLength; };
exports.getBufferSize = getBufferSize;
var getFileSize = function (o) {
    if (o instanceof File) {
        return exports.getFileObjectSize(o);
    }
    if (o instanceof Blob) {
        return exports.getBlobSize(o);
    }
    if (o instanceof Buffer) {
        return exports.getBufferSize(o);
    }
    if (o instanceof ArrayBuffer) {
        return exports.getArrayBufSize(o);
    }
    return undefined;
};
exports.getFileSize = getFileSize;
//# sourceMappingURL=files-utils-size.js.map