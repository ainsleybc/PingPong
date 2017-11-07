var Notepad = require('../src/notepad.js');

(function(exports) {
  (function() {
    var notepad = new Notepad();
    if (notepad.notes().length !== 0) throw new Error("\x1b[31m",'No list of notes!');
    console.log("\x1b[32m",'Test passing!');
  })();
})(this);
