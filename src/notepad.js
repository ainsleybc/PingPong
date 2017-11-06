function Notepad() {
  var listOfNotes = [];

  Notepad.prototype.notes = function() {
    return listOfNotes;
  };
}
module.exports = Notepad;
