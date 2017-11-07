// 'use strict';

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

(function(exports) {
  (function() {
    var notepad = new Notepad();
    notepad.addNote({
      abbreviation: 'hello'
    });
    notepad.addNote({
      abbreviation: 'my'
    });
    notepad.addNote({
      abbreviation: 'name'
    });
    notepad.addNote({
      abbreviation: 'is'
    });
    notepad.addNote({
      abbreviation: 'Canace'
    });
    expect(notepad.listHTML()).toEqual('<ul><li>hello</li><li>my</li><li>name</li><li>is</li><li>Canace</li></ul>');
  })();
})(this);
