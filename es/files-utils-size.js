"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileSize = exports.getBufferSize = exports.getArrayBufSize = exports.getFileObjectSize = exports.getBlobSize = void 0;
/**
 * Returns size of a Blob.
 *
 * @export
 * @param {Blob} o
 * @returns {number}
 */
function getBlobSize(o) {
    return o.size;
}
exports.getBlobSize = getBlobSize;
/**
 * Returns size of a File.
 *
 * @export
 * @param {File} o
 * @returns {number}
 */
function getFileObjectSize(o) {
    return o.size;
}
exports.getFileObjectSize = getFileObjectSize;
/**
 * Returns size of a File.
 *
 * @export
 * @param {ArrayBuffer} o
 * @returns {number}
 */
function getArrayBufSize(o) {
    return o.byteLength;
}
exports.getArrayBufSize = getArrayBufSize;
/**
 * Returns size of a Buffer.
 *
 * @export
 * @param {Buffer} o
 * @returns {number}
 */
function getBufferSize(o) {
    return o.byteLength;
}
exports.getBufferSize = getBufferSize;
/**
 * Returns a size of a data.
 *
 * @export
 * @param {(File | Blob | ArrayBuffer | Buffer)} o
 * @returns {(number | undefined)}
 */
function getFileSize(o) {
    if (o instanceof File) {
        return getFileObjectSize(o);
    }
    if (o instanceof Blob) {
        return getBlobSize(o);
    }
    if (o instanceof Buffer) {
        return getBufferSize(o);
    }
    if (o instanceof ArrayBuffer) {
        return getArrayBufSize(o);
    }
    return undefined;
}
exports.getFileSize = getFileSize;
//# sourceMappingURL=files-utils-size.js.map