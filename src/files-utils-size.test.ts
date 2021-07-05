import {getFileSize} from './files-utils-size';
describe('Utilities to define a file size', () => {
  describe('getFileSize', () => {
    it("Should return a Blob's size", () => {
      const blobStub = new Blob([JSON.stringify({hello: 'world'}, null, 2)], {
        type: 'application/json',
      });
      expect(getFileSize(blobStub)).toBeGreaterThan(0);
    });
    it("Should return an ArrayBuffer's size", () => {
      const expectedArrayBufferLength = 100;
      const arrayBuffer = new ArrayBuffer(expectedArrayBufferLength);
      expect(getFileSize(arrayBuffer)).toBe(expectedArrayBufferLength);
    });
    it("Should return a Buffer's size", () => {
      const expectedArrayBufferLength = 100;
      const arrayBuffer = Buffer.alloc(expectedArrayBufferLength);
      expect(getFileSize(arrayBuffer)).toBe(expectedArrayBufferLength);
    });
    it("Should return a File's size", () => {
      const file = new File(['something'], 'filename.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      });
      expect(getFileSize(file)).toBeGreaterThan(0);
    });
  });
});
