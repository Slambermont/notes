describe('note', () => {
  const note = new Note('This is an extremely long note');
  const anotherText = new Note('This is a different long message, very long')

  it('has a text attribute', () => {
    expect(note.text).toEqual('This is an extremely long note');
  });

  it('has a has a short text attribute', () => {
    expect(note.shortText).toEqual('This is an extremely...');
  });

  it('has a has a short text attribute for different text', () => {
    expect(anotherText.shortText).toEqual('This is a different ...');
  });
});
