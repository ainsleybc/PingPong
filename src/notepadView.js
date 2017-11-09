'use strict';

(function(exports) {

  exports.NotepadView = function(notepad) {

    function renderFullList() {
      var html = '<ol>';
      for (var i = 0; i < notepad.notes().length; i++) {
        html += ('<li><a id="note' + i + '" href="#' + i + '">' + notepad.notes()[i].abbreviation() + '</a></li>');
      }
      return html + '</ol>';
    }

    function renderSingleNote(index) {
      var noteText = notepad.notes()[index].contents();
      console.log(noteText);
      return '<textarea class="text-edit" id="my-text" value="' + noteText + '"></textarea>';
    }

    return {
      renderFullList: renderFullList,
      renderSingleNote: renderSingleNote
    }

  }

})(this);
