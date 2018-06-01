describe('note', () => {
  const note = new Note('This is a note.');

  it('has a text attribute', () => {
    expect(note.text).toEqual('This is a note.');
  });
});
