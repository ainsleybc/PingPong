'use strict';

(function (exports) {

  exports.NotepadView = function (notepad) {
    
    function renderFullList() {
      var html = '<ul>';
      for (var i = 0; i < notepad.notes().length; i++) {
        html += ('<li>' + notepad.notes()[i].abbreviation() + '</li>');
      }
      return html + '</ul>';
    };

    function renderSingleNote(index) {
      var noteText = notepad.notes()[index].contents();
      return '<textarea class="text-edit" id="my-text" value="' + noteText + '"></textarea>'
    }

    return {
      renderFullList: renderFullList,
      renderSingleNote: renderSingleNote
    }

  }

})(this);
