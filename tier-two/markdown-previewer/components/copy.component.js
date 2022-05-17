/**
 * Manages copy actions.
 */
class Copy {
  #copyElement = null;
  #handleCopy = null;

  /**
   * Constructs an instance of `Copy`.
   * @param {String} copySelector Relevant CSS selector.
   * @param {Object} handlers Action handlers
   * @param {Function} handlers.handleCopy Handles the copy action.
   */
  constructor(copySelector, {handleCopy}) {
    this.#copyElement = document.querySelector(copySelector);

    this.#handleCopy = handleCopy;

    this.#setEventListeners();
  }

  /**
   * Sets the relevant event listeners.
   */
  #setEventListeners() {
    this.#copyElement.addEventListener('click', () => this.#handleCopy());
  }
}

export default Copy;
