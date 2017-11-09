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

    return {
      addNote: addNote,
      notes: notes,
    };

  };

})(this);
