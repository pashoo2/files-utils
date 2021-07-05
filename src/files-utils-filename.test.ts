import {getFilenameByUrl} from './files-utils-filename';
describe('Filenames utilities', () => {
  describe('getFilenameByUrl', () => {
    it('Should return a filename string by an url string', () => {
      const filenameExpected = 'file.html';
      const url = `http://www.example.com/dir/${filenameExpected}`;
      expect(getFilenameByUrl(url)).toBe(filenameExpected);
    });
    it('Should return a filename string by an url string has a get parameters', () => {
      const filenameExpected = 'file.html';
      const url = `http://www.example.com/dir/${filenameExpected}?firstParam=1&secondParam=2&stringParam=${encodeURIComponent(
        'notExpectedFileName.html'
      )}#anchor`;
      expect(getFilenameByUrl(url)).toBe(filenameExpected);
    });
  });
});
