import { createElement } from "../../scripts/utils.js";

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
    return createElement("li", { textContent: messageContent });
  }

  /**
   * Creates an `li` element to be appended to the list of messages.
   * @param {String} user Represents the username.
   * @param {String} messageContent The content for the element.
   * @return {HTMLLIElement} A list element.
   */
  static createUserMessage(user, messageContent) {
    const message = createElement("li");
    const username = createElement(
      "span",
      { textContent: `${user}: ` },
      { color: "yellow", fontWeight: "bold" }
    );

    message.append(username, messageContent);

    return message;
  }
}

export default Message;
