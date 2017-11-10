'use strict';

(function(exports) {

  exports.NotepadController = function(containerId) {

    var notepad = new Notepad();
    var notepadView = new NotepadView(notepad);

    addListenerForSingleNote();
    renderPage();
    renderCreateNoteBox();

    function renderPage() {
      var page = document.getElementById(containerId);
      page.innerHTML = '<nav id="sidebar"></nav><section id="main"></section>';
    }

    function renderCreateNoteBox() {
      var main = document.getElementById('main');
      main.innerHTML = '<textarea class="text-edit" id="my-text"></textarea>';
      window.location.hash = '#';
    }

    function saveNote() {
      var text = document.getElementById('my-text');
      notepad.addNote(new Note(text.value));
      renderSideBar();
      renderCreateNoteBox();
    }

    function addListenerForSingleNote() {
      window.addEventListener('hashchange', showSingleNote);
    }

    function getNoteIndexFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showSingleNote() {
      var doc = document.getElementById('main');
      var noteNumber = getNoteIndexFromUrl(window.location);
      if (noteNumber > 0) doc.innerHTML = notepadView.renderSingleNote(noteNumber);
    }

    function renderSideBar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.innerHTML = notepadView.renderFullList();
    }

    return {
      renderCreateNoteBox: renderCreateNoteBox,
      saveNote: saveNote,
      showSingleNote: showSingleNote
    };

  };

})(this);
