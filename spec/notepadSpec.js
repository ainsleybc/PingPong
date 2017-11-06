var Notepad = require('../src/notepad.js');

(function(exports) {
  (function() {
    var notepad = new Notepad();
    if (notepad.notes().length !== 0) throw new Error('No list of notes!');
    console.log('Test passing!');
  })();
})(this);
