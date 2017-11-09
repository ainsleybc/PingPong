'use strict';

(function (exports) {
  
  exports.NotepadController = function(containerId) {
    
    var notepad = new Notepad();
    var notepadView = new NotepadView(notepad);
    
    var page = document.getElementById(containerId);
    page.innerHTML = '<nav id="navBarText"></nav><section id="main"></section>'

    function renderCreateNoteBox() {
      var main = document.getElementById('main');
      main.innerHTML = '<textarea class="text-edit" id="my-text"></textarea>';
    }

    // function renderPageTemplate() {
      
    // }

    function saveNote() {
      var text = document.getElementById('my-text');
      notepad.addNote(new Note(text.value));
      // createTextArea('show-area');
      var navBar = document.getElementById('navBarText');
      navBar.innerHTML = notepadView.renderFullList();
    }

    // function notesList() {
    //   return notepad.notes();
    // }

    return {
      // notesList: notesList,
      // createTextArea: createTextArea,
      renderCreateNoteBox: renderCreateNoteBox,
      saveNote: saveNote
    };

  };

})(this);
