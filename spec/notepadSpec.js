'use strict';

var noteSpy = {
  contents: 'contents'
};

(function(exports) {
  (function() {
    var notepad = new Notepad();
    expect(notepad.notes().length).toEqual(0);
  })();
})(this);

(function(exports) {
  (function() {
    var notepad = new Notepad();
    notepad.addNote(noteSpy);
    expect(notepad.notes().length).toEqual(1);
    expect(notepad.notes()[0].contents).toEqual('contents');
  })();
})(this);
