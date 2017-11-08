'use strict';

var notepad;

function NotepadController(containerId) {

  var container = document.getElementById(containerId);
  // var form = '<form><input type="text" id="webnote" name="webnote"><input type="submit" id="add-note" value="add-note"></form>';

  notepad = new Notepad();
  // container.innerHTML = form;

  NotepadController.prototype.createTextArea = function(elementId) {
    var j = document.getElementById(elementId);
    j.innerHTML = "<textarea class='text-edit' id='my-text'></textarea>";
  };

  NotepadController.prototype.createNote = function() {
    var text = document.getElementById('my-text');
    notepad.addNote(new Note(text.value));
    this.createTextArea();
    var navBar = document.getElementById('navBarText');
    navBar.innerHTML = notepad.listHTML();
  };
}
