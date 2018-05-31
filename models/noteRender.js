document.addEventListener("DOMContentLoaded", () => {
  const notes = ['Note1', 'Note2'];

  const noteContainer = document.getElementById('notes')

  notes.forEach((note) => {
    const newDiv = document.createElement('div')
    const text = document.createTextNode(note);
    newDiv.appendChild(text);
    noteContainer.appendChild(newDiv);
  });
});
