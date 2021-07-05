"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilenameByUrl = void 0;
/**
 * Returns filename by an url string.
 *
 * @export
 * @param {string} url
 * @returns {(string | undefined)}
 */
function getFilenameByUrl(url) {
    if (url.startsWith('data:')) {
        return undefined;
    }
    return (url.split('/').pop() || '').split('#')[0].split('?')[0] || undefined;
}
exports.getFilenameByUrl = getFilenameByUrl;
//# sourceMappingURL=files-utils-filename.js.map