/**
 * Messages manager.
 */
class Messages {
  /**
   * The messages element.
   */
  #messagesElement;

  /**
   * Constructs an instance of `Messages`.
   */
  constructor() {
    this.#messagesElement = document.getElementById("messages");
  }

  /**
   * Appends a {@see Message} to the list of Messages.
   * @param {Message} message An HTMLLIElement "Message".
   */
  addNewMessage(message) {
    this.#messagesElement.append(message);
    this.#messagesElement.scrollTo(0, this.#messagesElement.scrollHeight);
  }
}

export default Messages;
