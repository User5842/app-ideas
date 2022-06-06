/**
 * Chat input manager.
 */
class ChatInput {
  /**
   * The input element.
   */
  #inputElement;

  /**
   * Constructs an instance of `ChatInput`.
   */
  constructor() {
    this.#inputElement = document.getElementById("input");
  }

  /**
   * Whether or not the input value is empty.
   * @return {Boolean} Denotes whether or not the input value is empty.
   */
  isEmpty() {
    return this.#inputElement.value == null;
  }

  /**
   * Retrieves the input element value.
   */
  get value() {
    return this.#inputElement.value;
  }

  /**
   * Sets the input element value.
   * @param {String} text The input element value.
   */
  set value(text) {
    this.#inputElement.value = text;
  }
}

export default ChatInput;
