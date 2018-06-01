function Note(text) {
  this.text = text;
  this.shortText = this._shortenText(text);
}

Note.prototype._shortenText = function (text) {
  return `${text.slice(0, 20)}...`;
}
