document.addEventListener('DOMContentLoaded', () => {
  const noteList = new NoteList();
  const currentNotes = noteList.notes;
  const noteContainer = document.getElementById('notes');
  const button = document.getElementById('submit');

  button.onclick = function click() {
    const text = document.getElementById('noteform').value;
    noteList.createNote(text);
  };
  currentNotes.forEach((note) => {
    const newDiv = document.createElement('div');
    const text = document.createTextNode(note);
    newDiv.appendChild(text);
    noteContainer.appendChild(newDiv);
  });
});
