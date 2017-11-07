function Notepad() {
  this._listOfNotes = [];
}
Notepad.prototype.addNote = function(note) {
  this._listOfNotes.push(note);
};
Notepad.prototype.notes = function() {
  return this._listOfNotes;
};
module.exports = Notepad;
