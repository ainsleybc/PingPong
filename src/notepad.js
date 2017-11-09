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

    function showNote(number){
      return _listOfNotes[number];
    }

    return {
      addNote: addNote,
      notes: notes,
      showNote: showNote,
    };

  };

})(this);
