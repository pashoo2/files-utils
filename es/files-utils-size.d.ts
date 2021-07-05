/// <reference types="node" />
/**
 * Returns size of a Blob.
 *
 * @export
 * @param {Blob} o
 * @returns {number}
 */
export declare function getBlobSize(o: Blob): number;
/**
 * Returns size of a File.
 *
 * @export
 * @param {File} o
 * @returns {number}
 */
export declare function getFileObjectSize(o: File): number;
/**
 * Returns size of a File.
 *
 * @export
 * @param {ArrayBuffer} o
 * @returns {number}
 */
export declare function getArrayBufSize(o: ArrayBuffer): number;
/**
 * Returns size of a Buffer.
 *
 * @export
 * @param {Buffer} o
 * @returns {number}
 */
export declare function getBufferSize(o: Buffer): number;
/**
 * Returns a size of a data.
 *
 * @export
 * @param {(File | Blob | ArrayBuffer | Buffer)} o
 * @returns {(number | undefined)}
 */
export declare function getFileSize(o: File | Blob | ArrayBuffer | Buffer): number | undefined;
