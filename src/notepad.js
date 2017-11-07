'use strict';

function Notepad() {
  this._listOfNotes = [];
}
Notepad.prototype.addNote = function(note) {
  this._listOfNotes.push(note);
};
Notepad.prototype.notes = function() {
  return this._listOfNotes;
};
Notepad.prototype.listHTML = function() {
  var html = '<ul>';
  for (var i = 0; i < this._listOfNotes.length; i++) {
    html += ('<li>' + this.notes()[i].abbreviation + '</li>');
  }
  return html + '</ul>';
};
