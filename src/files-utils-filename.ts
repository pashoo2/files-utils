/**
 * Returns filename by an url string.
 *
 * @export
 * @param {string} url
 * @returns {(string | undefined)}
 */
export function getFilenameByUrl(url: string): string | undefined {
  if (url.startsWith('data:')) {
    return undefined;
  }
  return (url.split('/').pop() || '').split('#')[0].split('?')[0] || undefined;
}
