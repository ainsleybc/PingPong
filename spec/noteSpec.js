var Note = require('../src/note.js');

function assert() {
  return {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log('The test passes!');
      }
    },
    isThis: function(firstArg) {
      return {
        equalTo: function(secondArg) {
          return firstArg === secondArg;
        }
      };
    }
  };
}

(function(exports) {
  (function(text) {
    var note = new Note(text);
    assert().isTrue(note.contents() === text);
  })('hello');

  (function(numbersOneToTwentyFive) {
    var note = new Note(numbersOneToTwentyFive);
    assert().isThis(note.abbreviation().length).equalTo(20);
    assert().isThis(note.abbreviation()).equalTo('12345678910111213141');
  })('12345678910111213141516171819202122232425');

})(this);
