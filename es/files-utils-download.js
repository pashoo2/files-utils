"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.downloadFileByUrl = void 0;
var files_utils_filename_1 = require("./files-utils-filename");
/**
 * Start download of a file by it's url and an optional filename.
 *
 * @export
 * @param {string} url
 * @param {string} [filename='']
 */
function downloadFileByUrl(url, filename) {
    if (filename === void 0) { filename = ''; }
    var anchor = document.createElement('a');
    anchor.download = filename || files_utils_filename_1.getFilenameByUrl(url) || 'unknown';
    anchor.href = url;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(anchor);
}
exports.downloadFileByUrl = downloadFileByUrl;
/**
 * Start downloading of a file in a browser
 *
 * @param file
 */
function downloadFile(file) {
    var url = window.URL.createObjectURL(file);
    downloadFileByUrl(url, file.name || url);
}
exports.downloadFile = downloadFile;
//# sourceMappingURL=files-utils-download.js.map