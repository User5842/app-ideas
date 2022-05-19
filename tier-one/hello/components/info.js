/**
 * Component class used to interact with the
 * info panel.
 */
class Info {
  /**
   * Constructs an instance of `Info`.
   * @param {String} infoSelector The relevant CSS selector.
   */
  constructor(infoSelector) {
    this._infoElement = document.querySelector(infoSelector);
  }

  /**
   * Clears the content of the info panel.
   */
  clear() {
    this._infoElement.innerHTML = "";
  }

  /**
   * Updates the content of the info panel.
   * @param {Object} data Response data.
   */
  updateInfo(data) {
    this._infoElement.textContent = JSON.stringify(data, null, 2);
  }
}

export default Info;
