import NoteCreator from "./components/note-creator/note-creator.js";
import Note from "./components/note/note.js";
import Notes from "./components/notes/notes.js";
import { getTodaysDate } from "./utils/utils.js";

const note = new Note("#note-template");
const notes = new Notes(".notes");

new NoteCreator(".note-creator", {
  handleNoteCreation: (event, noteContent) => {
    event.preventDefault();
    event.currentTarget.reset();

    notes.addNote(
      note.generateNote(
        { date: getTodaysDate(), content: noteContent },
        {
          handleNoteRemoval: function () {
            this.closest(".note").remove();
          },
        }
      )
    );
  },
});
