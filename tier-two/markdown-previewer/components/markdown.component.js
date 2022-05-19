/**
 * Manages interactions with the markdown preview textarea.
 */
class Markdown {
  #handleInput = null;
  #markdownElement = null;

  /**
   * Constructs an instance of `Markdown`.
   * @param {String} markdownSelector The relevant CSS selector.
   */
  constructor(markdownSelector, { handleInput }) {
    this.#markdownElement = document.querySelector(markdownSelector);

    this.#handleInput = handleInput;

    this.#setEventListeners();
  }

  /**
   * Ensures that parsing is only triggered until the user
   * has stopped entering markdown for at least a second.
   * @return {Function} Debounced input handler.
   */
  #debouncedInput() {
    let id;
    return (...args) => {
      if (id) clearTimeout(id);
      id = setTimeout(() => this.#handleInput(...args), 1000);
    };
  }

  /**
   * Sets the relevant event listeners.
   */
  #setEventListeners() {
    this.#markdownElement.addEventListener("input", this.#debouncedInput());
  }
}

export default Markdown;
