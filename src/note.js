function Note(text) {
  this.content = text;
}
Note.prototype.contents = function() {
  return this.content;
};


module.exports = Note;
