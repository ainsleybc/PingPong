var Notepad = require('../src/notepad.js');
var assert = require('../testing/assert.js');

(function(exports) {
  (function() {
    var notepad = new Notepad();
    assert.isThis(notepad.notes().length).equalTo(0);
  })();
})(this);
