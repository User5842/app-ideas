/**
 * Chat form manager.
 */
class ChatForm {
  #formElement;

  #handleFormSubmit;

  /**
   * Constructs an instance of `ChatForm`.
   * @param {Object} handlers Handlers for event listeners.
   * @param {Function} handlers.handleFormSubmit Handles the `submit` event on the form.
   */
  constructor({ handleFormSubmit }) {
    this.#formElement = document.getElementById("form");

    this.#handleFormSubmit = handleFormSubmit;

    this.#setEventListeners();
  }

  /**
   * Sets relevant event listeners.
   */
  #setEventListeners() {
    this.#formElement.addEventListener("submit", this.#handleFormSubmit);
  }
}

export default ChatForm;
