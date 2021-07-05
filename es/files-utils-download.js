"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.downloadFileByUrl = exports.getFilenameByUrl = void 0;
var path_browserify_1 = __importDefault(require("path-browserify"));
var getFilenameByUrl = function (url) {
    if (url.startsWith('data:')) {
        return undefined;
    }
    return (path_browserify_1.default.basename(url) ||
        (url.split('/').pop() || '').split('#')[0].split('?')[0] ||
        undefined);
};
exports.getFilenameByUrl = getFilenameByUrl;
var downloadFileByUrl = function (url, filename) {
    if (filename === void 0) { filename = ''; }
    var anchor = document.createElement('a');
    anchor.download = filename || exports.getFilenameByUrl(url) || 'unknown';
    anchor.href = url;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(anchor);
};
exports.downloadFileByUrl = downloadFileByUrl;
var downloadFile = function (file) {
    var url = window.URL.createObjectURL(file);
    exports.downloadFileByUrl(url, file.name || url);
};
exports.downloadFile = downloadFile;
//# sourceMappingURL=files-utils-download.js.map