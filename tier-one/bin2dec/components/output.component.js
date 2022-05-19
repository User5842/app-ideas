/**
 * Manages interactions with the output element.
 */
class Output {
  /**
   * Constructs an instance of `Output`.
   * @param {String} outputSelector The relevant CSS selector.
   */
  constructor(outputSelector) {
    this._outputElement = document.querySelector(outputSelector);
  }

  /**
   * Clears the output.
   */
  clearOutput() {
    this._outputElement.innerHTML = "";
  }

  /**
   * Sets the output message.
   * @param {String} message The output message.
   */
  setOutput(message) {
    this._outputElement.textContent = message;
  }
}

export default Output;
