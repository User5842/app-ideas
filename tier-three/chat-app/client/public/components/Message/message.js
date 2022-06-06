/**
 * Message manager.
 */
class Message {
  /**
   * Creates an `li` element to be appended to the list of messages.
   * @param {String} messageContent The content for the element.
   * @return {HTMLLIElement} A list element.
   */
  static createMessage(messageContent) {
    const message = document.createElement("li");
    message.textContent = messageContent;
    return message;
  }
}

export default Message;
