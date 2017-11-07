var Note = require('../src/note.js');
var expect = require('../testing/expect.js');

(function(exports) {
  (function(text) {
    var note = new Note(text);
    expect(note.contents()).toEqual(text);
  })('hello');

  (function(numbersOneToTwentyFive) {
    var note = new Note(numbersOneToTwentyFive);
    expect(note.abbreviation().length).toEqual(20);
    expect(note.abbreviation()).toEqual('12345678910111213141');
  })('12345678910111213141516171819202122232425');
})(this);
