/**
 * Manages an instance of a single `Note`.
 */
class Note {
  #noteTemplateElement = null;

  /**
   * Constructs an instance of `Note`.
   * @param {String} noteTemplateSelector The relevant CSS selector.
   */
  constructor(noteTemplateSelector) {
    this.#noteTemplateElement = document.querySelector(noteTemplateSelector);
  }

  /**
   * Retrieves the `Note` template element and generates a new `Note`
   * with its own date and content.
   * @param {String} date The date the note was created.
   * @param {String} content The content of the note.
   * @param {Object} handlers Event listener handlers.
   * @param {Function} handlers.handleNoteRemoval Handles the removal of an existing note.
   * @return {HTMLDivElement} A template-generated note.
   */
  generateNote({ date, content }, { handleNoteRemoval }) {
    const element = this.#getNoteElement();

    element.querySelector(".note-time").textContent = date;
    element.querySelector(".note-content").textContent = content;

    element
      .querySelector(".note-trash")
      .addEventListener("click", handleNoteRemoval);

    return element;
  }

  /**
   * Clones the `Note` template and returns its content.
   * @return {HTMLDivElement} An empty element representing a `Note`.
   */
  #getNoteElement() {
    return this.#noteTemplateElement.content
      .cloneNode(true)
      .querySelector(".note");
  }
}

export default Note;
