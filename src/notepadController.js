'use strict';

(function(exports) {

  exports.NotepadController = function(containerId) {

    var notepad = new Notepad();
    var notepadView = new NotepadView(notepad);

    showNote();
    renderPage();
    renderCreateNoteBox();

    function renderPage() {
      var page = document.getElementById(containerId);
      page.innerHTML = '<nav id="sidebar"></nav><section id="main"></section>';
    };

    function renderCreateNoteBox() {
      var main = document.getElementById('main');
      main.innerHTML = '<textarea class="text-edit" id="my-text"></textarea>';
    };

    function saveNote() {
      var text = document.getElementById('my-text');
      notepad.addNote(new Note(text.value));
      renderSideBar();
      renderCreateNoteBox();
      window.location.hash = '';
    };

    function showNote() {
      window.addEventListener('hashchange', showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
      if (window.location.hash !== '') {
        showSingleNote(getNoteFromUrl(window.location));
      }
    };

    function getNoteFromUrl(location) {
      return location.hash.split('#')[1];
    };

    function showSingleNote(number) {
      var doc = document.getElementById('main');
      doc.innerHTML = notepadView.renderSingleNote(number);
    };

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
