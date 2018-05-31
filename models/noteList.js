function NoteList() {
   this.notes = [];
}

NoteList.prototype.createNote = function (text, note = Note) {
  newNote = new note(text);
  this.notes.push(newNote);
};
