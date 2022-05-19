/**
 * Manages HTML output.
 */
class Output {
  #cleanHTML = null;
  #outputElement = null;

  /**
   * Constructs an instance of `Output`.
   * @param {String} outputSelector The relevant CSS selector.
   */
  constructor(outputSelector) {
    this.#outputElement = document.querySelector(outputSelector);
  }

  /**
   * Returns the purified HTML.
   * @return {String} Purified HTML.
   */
  getCleanHTML() {
    return this.#cleanHTML;
  }

  /**
   * Renders purified HTML into the element.
   * @param {String} dirty Unpurified HTML.
   */
  render(dirty) {
    this.#cleanHTML = DOMPurify.sanitize(dirty, {
      USE_PROFILES: { html: true },
    });
    this.#outputElement.innerHTML = this.#cleanHTML;
  }
}

export default Output;
