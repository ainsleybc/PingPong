'use strict';

describe('notepadView', function () {
  
  it('renders the HTML for list of notes', function () {
    var notepad = new Notepad();
    var view = new NotepadView(notepad);
    var note = new Note('ThisIsTwentySevenCharacters');
    notepad.addNote(note);
    expect(view.renderFullList()).toEqual('<ul><li>ThisIsTwentySevenCha</li></ul>');
  })
  
})
