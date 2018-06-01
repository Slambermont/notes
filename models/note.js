function Note(text) {
  this.text = text;
  this.shortText = _shortenText(text);
}

function _shortenText(text) {
  return `${text.slice(0, 19)}...`;
}
