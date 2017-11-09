'use strict';

(function(exports) {

  exports.NotepadController = function(containerId) {

    var notepad = new Notepad();
    var notepadView = new NotepadView(notepad);

    showNote();

    var page = document.getElementById(containerId);
    page.innerHTML = '<nav id="sidebar"></nav><section id="main"></section>'

    function renderCreateNoteBox() {
      var main = document.getElementById('main');
      main.innerHTML = '<textarea class="text-edit" id="my-text"></textarea>';
    }

    function saveNote() {
      var text = document.getElementById('my-text');
      notepad.addNote(new Note(text.value));
      // createTextArea('show-area');
      var sidebar = document.getElementById('sidebar');
      sidebar.innerHTML = notepadView.renderFullList();
    }

    function showNote() {
      console.log('hello');
      window.addEventListener('hashchange', showNoteForCurrentPage);
    }

    function showNoteForCurrentPage() {
      showSingleNote(getNoteFromUrl(window.location));
    }

    function getNoteFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showSingleNote(number) {
      var doc = document.getElementById('main');
      doc.innerHTML = notepadView.renderSingleNote(number);
    }


    return {
      renderCreateNoteBox: renderCreateNoteBox,
      saveNote: saveNote,
      showSingleNote: showSingleNote
    };

  };

})(this);
