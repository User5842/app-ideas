/**
 * Manages interactions with the binary form.
 */
class Binary {
  /**
   * Constructs an instance of `Binary`.
   * @param {String} binarySelector The relevant CSS selector.
   * @param {Object} handlers Handler object.
   * @param {Function} handlers.handleInput Handles the input event.
   */
  constructor(binarySelector, {handleInput}) {
    this._binaryElement = document.querySelector(binarySelector);
    this._binaryInput = this._binaryElement.querySelector('#binary');

    this._handleInput = handleInput;

    this._setEventListeners();
  }

  /**
   * Sets relevant event listeners.
   */
  _setEventListeners() {
    this._binaryInput.addEventListener('input', (e) => this._handleInput(e));
  }
}

export default Binary;
