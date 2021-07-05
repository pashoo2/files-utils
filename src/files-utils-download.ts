import {getFilenameByUrl} from './files-utils-filename';

/**
 * Start download of a file by it's url and an optional filename.
 *
 * @export
 * @param {string} url
 * @param {string} [filename='']
 */
export function downloadFileByUrl(url: string, filename = ''): void {
  const anchor = document.createElement('a');

  anchor.download = filename || getFilenameByUrl(url) || 'unknown';
  anchor.href = url;
  anchor.target = '_blank';
  document.body.appendChild(anchor);
  anchor.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(anchor);
}

/**
 * Start downloading of a file in a browser
 *
 * @param file
 */
export function downloadFile(file: File): void {
  const url = window.URL.createObjectURL(file);

  downloadFileByUrl(url, file.name || url);
}
