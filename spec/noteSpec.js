var Note = require('../src/note.js');

(function(exports) {
  (function(text) {
    var note = new Note(text);
    if (note.contents() !== text) throw new Error('Contents do not match!');
    console.log('test passing!');
  })('hello');

  (function() {
    var note = new Note();

  })();
})(this);
