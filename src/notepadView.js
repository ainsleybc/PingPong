'use strict';

(function(exports) {

  exports.NotepadView = function(notepad) {

    function renderFullList() {
      var html = '<ol>';
      for (var i = 1; i < notepad.notes().length + 1; i++) {
        html += ('<li><a id="note' + i + '" href="#' + i + '">' + notepad.notes()[i-1].abbreviation() + '</a></li>');
      }
      return html + '</ol>';
    }

    function renderSingleNote(number) {
      var noteText = notepad.notes()[number-1].contents();
      return '<textarea class="text-edit" id="my-text">' + noteText + '</textarea>';
    }

    return {
      renderFullList: renderFullList,
      renderSingleNote: renderSingleNote
    }

  }

})(this);
