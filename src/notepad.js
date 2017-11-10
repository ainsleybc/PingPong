'use strict';

(function(exports) {

  exports.Notepad = function() {

    var _listOfNotes = [];

    function addNote(note) {
      _listOfNotes.push(note);
    }

    function notes() {
      return _listOfNotes;
    }

    function updateNote(index, newContents) {
      _listOfNotes[index].updateContents(newContents);
    }

    return {
      addNote: addNote,
      notes: notes,
      updateNote: updateNote
    };

  };

})(this);
