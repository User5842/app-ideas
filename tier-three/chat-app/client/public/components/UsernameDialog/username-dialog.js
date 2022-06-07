/**
 * Username Dialog manager.
 */
class UsernameDialog {
  /**
   * The dialog element.
   */
  #dialogElement;

  /**
   * The form contained within the dialog.
   */
  #formElement;

  /**
   * Form submit event handler.
   */
  #handleFormSubmit;

  /**
   * Constructs an instance of `UsernameDialog`.
   * @param {Object} handlers Event handlers for the dialog.
   * @param {Function} handlers.handleFormSubmit Form submit event handler.
   */
  constructor({ handleFormSubmit }) {
    this.#dialogElement = document.getElementById("dialog");
    this.#formElement = this.#dialogElement.querySelector("#dialog-form");

    this.#handleFormSubmit = handleFormSubmit;

    this.#setEventListeners();
  }

  /**
   * Closes the dialog modal.
   */
  close() {
    this.#dialogElement.close();
  }

  /**
   * Shows the dialog modal.
   */
  show() {
    this.#dialogElement.showModal();
  }

  /**
   * Set relevant event listeners.
   */
  #setEventListeners() {
    this.#formElement.addEventListener("submit", this.#handleFormSubmit);
  }
}

export default UsernameDialog;
