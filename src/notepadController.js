'use strict';
(function(exports) {
  exports.NotepadController = function(containerId) {

    var container = document.getElementById(containerId);
    // var form = '<form><input type="text" id="webnote" name="webnote"><input type="submit" id="add-note" value="add-note"></form>';

    var notepad = new Notepad();
    // container.innerHTML = form;

    function createTextArea(elementId) {
      var j = document.getElementById(elementId);
      j.innerHTML = '<textarea class="text-edit" id="my-text"></textarea>';
    }

    function createNote() {
      var text = document.getElementById('my-text');
      notepad.addNote(new Note(text.value));
      createTextArea('show-area');
      var navBar = document.getElementById('navBarText');
      navBar.innerHTML = notepad.listHTML();
    }

    function notesList() {
      return notepad.notes();
    }

    return {
      notesList: notesList,
      createTextArea: createTextArea,
      createNote: createNote
    };
  };
})(this);
