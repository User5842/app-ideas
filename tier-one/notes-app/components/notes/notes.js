/**
 * Manages a collection of notes.
 */
class Notes {
  #notesElement = null;

  /**
   * Constructs an instance of `Notes`.
   * @param {String} notesSelector The relevant CSS selector.
   */
  constructor(notesSelector) {
    this.#notesElement = document.querySelector(notesSelector);
  }

  /**
   * Adds a single note to the notes container.
   * @param {HTMLDivElement} note An element representing a note.
   */
  addNote(note) {
    this.#notesElement.append(note);
  }
}

export default Notes;
