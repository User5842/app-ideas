/**
 * Manages interactions with the validation element.
 */
class Validation {
  /**
   * Constructs an instance of `Validation`.
   * @param {String} validationSelector The relevant CSS selector.
   */
  constructor(validationSelector) {
    this._validationElement = document.querySelector(validationSelector);
  }

  /**
   * Clears the validation message.
   */
  clearValidationMessage() {
    this._validationElement.innerHTML = '';
  }

  /**
   * Sets the validation message.
   * @param {String} message The validation message.
   */
  setValidationMessage(message) {
    this._validationElement.textContent = message;
  }
}

export default Validation;
