/**
 * Simple wrapper around `document.createElement`.
 * @param {String} tag String representing valid HTML tag.
 * @param {Object} options Represents "first-level" options.
 * @param {Object} styles Represents `style` properties.
 * @return {Element} An HTMLElement given the desired options.
 */
function createElement(tag, options = {}, styles = {}) {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(options)) {
    element[key] = value;
  }

  for (const [key, value] of Object.entries(styles)) {
    element.style[key] = value;
  }

  return element;
}

export { createElement };
