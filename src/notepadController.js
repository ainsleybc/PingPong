'use strict';

var notepad;

function NotepadController(containerId) {
    
  var container = document.getElementById(containerId);
  var form = '<form><input type="text" id="webnote" name="webnote"><input type="submit" id="add-note" value="add-note"></form>';

  notepad = new Notepad();
  container.innerHTML = form;

};
