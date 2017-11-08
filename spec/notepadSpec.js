// 'use strict';

describe('notepad', function() {

  var noteSpy = {
    contents: 'contents'
  };

  it('instantiates with an empty list of notes', function() {
    var notepad = new Notepad();
    expect(notepad.notes().length).toEqual(0);
  });

  it('saves a created note', function() {
    var notepad = new Notepad();
    notepad.addNote(noteSpy);
    expect(notepad.notes().length).toEqual(1);
    expect(notepad.notes()[0].contents).toEqual('contents');
  });

  it('prints a list notes', function() {
    var notepad = new Notepad();
    notepad.addNote({
      abbreviation: function() {
        return 'hello';
      }
    });
    notepad.addNote({
      abbreviation: function() {
        return 'my';
      }
    });
    notepad.addNote({
      abbreviation: function() {
        return 'name';
      }
    });
    notepad.addNote({
      abbreviation: function() {
        return 'is';
      }
    });
    notepad.addNote({
      abbreviation: function() {
        return 'Canace';
      }
    });
    expect(notepad.listHTML()).toEqual('<ul><li>hello</li><li>my</li><li>name</li><li>is</li><li>Canace</li></ul>');
  });

});
