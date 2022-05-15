/**
 * Component class used to interact with the
 * status text.
 */
class Status {
  /**
   * Constructs an instance of `Status`.
   * @param {String} statusSelector The relevant CSS selector.
   */
  constructor(statusSelector) {
    this._statusElement = document.querySelector(statusSelector);
  }

  /**
   * Updates the status text.
   * @param {String} statusText The status text.
   */
  updateStatus(statusText) {
    this._statusElement.textContent = statusText;
  }
}

export default Status;
