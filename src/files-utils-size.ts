/**
 * Returns size of a Blob.
 *
 * @export
 * @param {Blob} o
 * @returns {number}
 */
export function getBlobSize(o: Blob): number {
  return o.size;
}

/**
 * Returns size of a File.
 *
 * @export
 * @param {File} o
 * @returns {number}
 */
export function getFileObjectSize(o: File): number {
  return o.size;
}

/**
 * Returns size of a File.
 *
 * @export
 * @param {ArrayBuffer} o
 * @returns {number}
 */
export function getArrayBufSize(o: ArrayBuffer): number {
  return o.byteLength;
}

/**
 * Returns size of a Buffer.
 *
 * @export
 * @param {Buffer} o
 * @returns {number}
 */
export function getBufferSize(o: Buffer): number {
  return o.byteLength;
}

/**
 * Returns a size of a data.
 *
 * @export
 * @param {(File | Blob | ArrayBuffer | Buffer)} o
 * @returns {(number | undefined)}
 */
export function getFileSize(
  o: File | Blob | ArrayBuffer | Buffer
): number | undefined {
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
