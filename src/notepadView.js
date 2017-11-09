'use strict';

(function (exports) {

  exports.NotepadView = function (notepad) {

    function renderFullList() {
      var html = '<ul>';
      for (var i = 0; i < notepad.notes().length; i++) {
        html += ('<a href="#' + i +'"><li>' + notepad.notes()[i].abbreviation() + '</li></a>');
      }
      return html + '</ul>';
    };

    function showNote(number){
      return notepad.notes()[number];
    }

    return {
      renderFullList: renderFullList,
      showNote: showNote, 
    }



  }

})(this);
