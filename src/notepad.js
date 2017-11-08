'use strict';

(function (exports) {

  exports.Notepad = function () {
    
    var _listOfNotes = [];
    
    function addNote(note) {
      _listOfNotes.push(note);
    };
    
    function notes() {
      return _listOfNotes;
    };

    function listHTML() {
      var html = '<ul>';
      for (var i = 0; i < notes().length; i++) {
        html += ('<li>' + notes()[i].abbreviation() + '</li>');
      }
      return html + '</ul>';
    };

    return {
      addNote: addNote,
      notes: notes,
      listHTML: listHTML
    };

  };

})(this);
