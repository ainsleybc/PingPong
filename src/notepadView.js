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

    return {
      renderFullList: renderFullList
    }

  }

})(this);
