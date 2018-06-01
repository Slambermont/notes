document.addEventListener('DOMContentLoaded', () => {
  const noteList = new NoteList();
  const currentNotes = noteList.notes;
  const noteContainer = document.getElementById('noteContainer');
  const button = document.getElementById('submit');

  function replaceNoteList() {
    const oldNotes = document.getElementById('notes');
    const newNotes = document.createElement('div');
    newNotes.setAttribute('id', 'notes');
    noteContainer.replaceChild(newNotes, oldNotes);
  }

  function renderNotes() {
    const notes = document.getElementById('notes');
    currentNotes.forEach((note) => {
      const text = document.createTextNode(note.shortText);
      const article = document.createElement('article');
      article.appendChild(text);
      notes.appendChild(article);
    });
  }

  button.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    const text = document.getElementById('noteform').value;
    noteList.createNote(text);
    replaceNoteList();
    renderNotes();
    document.getElementById('noteform').value = '';
  });
});
