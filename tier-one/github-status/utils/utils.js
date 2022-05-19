/**
 * Receives an HTML string and parses it into a `Document`.
 * @param {string} statusPageText The Github status page text.
 * @return {Document} Document representing the Github operations.
 */
function parseStatusPage(statusPageText) {
  const parser = new DOMParser();
  return parser.parseFromString(statusPageText, "text/html");
}

export { parseStatusPage };
