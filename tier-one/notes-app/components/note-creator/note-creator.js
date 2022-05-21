/**
 * Manages note creation.
 */
class NoteCreator {
  #noteCreatorElement = null;

  #handleNoteCreation = null;

  /**
   * Constructs an instance of `NoteCreator`.
   * @param {String} noteCreatorSelector The relevant CSS selector.
   * @param {Object} handlers Event listener handlers.
   * @param {Function} handlers.handleNoteCreation Handles the creation of a new note.
   */
  constructor(noteCreatorSelector, { handleNoteCreation }) {
    this.#noteCreatorElement = document.querySelector(noteCreatorSelector);

    this.#handleNoteCreation = handleNoteCreation;

    this.#setEventListeners();
  }

  /**
   * Sets the event listeners.
   */
  #setEventListeners() {
    this.#noteCreatorElement.addEventListener("submit", (event) => {
      const noteContent = this.#noteCreatorElement.elements["note-input"].value;
      this.#handleNoteCreation(event, noteContent);
    });

    this.#noteCreatorElement.addEventListener("keydown", (event) => {
      const { validity, value } =
        this.#noteCreatorElement.elements["note-input"];

      if (validity.valid && event.code === "Enter") {
        this.#handleNoteCreation(event, value);
      }
    });
  }
}

export default NoteCreator;
