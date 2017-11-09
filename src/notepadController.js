'use strict';

var notepad;

function NotepadController(containerId) {

  var container = document.getElementById(containerId);
  // var form = '<form><input type="text" id="webnote" name="webnote"><input type="submit" id="add-note" value="add-note"></form>';

  notepad = new Notepad();
  // container.innerHTML = form;

  NotepadController.prototype.createTextArea = function(elementId) {
    var j = document.getElementById(elementId);
    j.innerHTML = '<textarea class="text-edit" id="my-text"></textarea>';
  };

  NotepadController.prototype.createNote = function() {
    var text = document.getElementById('my-text');
    notepad.addNote(new Note(text.value));
    var navBar = document.getElementById("navBarText");
    var notepadview = new NotepadView(notepad);
    navBar.innerHTML = notepadview.renderFullList();
  };

  NotepadController.prototype.showNote = function () {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  NotepadController.prototype.showNoteForCurrentPage = function() {
  return showNote(getNoteFromUrl(window.location));
  };

  NotepadController.prototype.getNoteFromUrl = function (location) {
  return location.hash.split("#")[1];
  };

  NotepadController.prototype.showNote = function (number) {
  var notepadview = new NotepadView(notepad);
  document
    .getElementById("note-area")
    .innerText = notepadview.showNote(number);
  };

}
