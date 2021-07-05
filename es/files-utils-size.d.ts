/// <reference types="node" />
export declare const getBlobSize: (o: Blob) => number;
export declare const getFileObjectSize: (o: File) => number;
export declare const getArrayBufSize: (o: ArrayBuffer) => number;
export declare const getBufferSize: (o: Buffer) => number;
export declare const getFileSize: (o: File | Blob | ArrayBuffer | Buffer) => number | undefined;
