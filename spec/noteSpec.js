var Note = require('../src/note.js');
var assert = require('../testing/assert.js');

(function(exports) {
  (function(text) {
    var note = new Note(text);
    assert.isThis(note.contents()).equalTo(text);
  })('hello');

  (function(numbersOneToTwentyFive) {
    var note = new Note(numbersOneToTwentyFive);
    assert.isThis(note.abbreviation().length).equalTo(20);
    assert.isThis(note.abbreviation()).equalTo('12345678910111213141');
  })('12345678910111213141516171819202122232425');
})(this);
