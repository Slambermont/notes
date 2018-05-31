describe('Note List', () => {
  const noteList = new NoteList();
  it('initialises an empty array of notes', () => {
    expect(noteList.notes).toEqual([]);
  });

  it('creates a note', () => {
    function FakeNote() {
    }
    const newFakeNote = new FakeNote()
    noteList.createNote('This is not a note.', FakeNote);
    expect(noteList.notes[0]).toEqual(newFakeNote);
  });
});
