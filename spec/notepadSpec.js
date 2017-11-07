'use strict';

describe('notepad', function () {

  var noteSpy = {
    contents: 'contents'
  };
  
  it('instantiates with an empty list of notes', function () {
    var notepad = new Notepad();
    expect(notepad.notes().length).toEqual(0);
  });

  it('saves a created note', function () {
    var notepad = new Notepad();
    notepad.addNote(noteSpy);
    expect(notepad.notes().length).toEqual(1);
    expect(notepad.notes()[0].contents).toEqual('contents');
  });

});
