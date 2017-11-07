var Notepad = require('../src/notepad.js');
var assert = require('../testing/assert.js');
var noteSpy = {
  contents: 'contents'
};

(function(exports) {
  (function() {
    var notepad = new Notepad();
    assert.isThis(notepad.notes().length).equalTo(0);
  })();
})(this);

(function(exports) {
  (function() {
    var notepad = new Notepad();
    notepad.addNote(noteSpy);
    assert.isThis(notepad.notes().length).equalTo(1);
    assert.isThis(notepad.notes()[0].contents).equalTo('contents');
  })();
})(this);
