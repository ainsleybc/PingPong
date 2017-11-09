'use strict';

describe('notepadView', function () {
  
  it('renders the HTML for a list of notes', function () {
    var notepad = new Notepad();
    var view = new NotepadView(notepad);
    var note = new Note('ThisIsTwentySevenCharacters');
    notepad.addNote(note);
    expect(view.renderFullList()).toEqual('<ul><li>ThisIsTwentySevenCha</li></ul>');
  });

  it('renders the HTML for a single note', function () {
    var notepad = new Notepad();
    var view = new NotepadView(notepad);
    var note = new Note('ThisIsTwentySevenCharacters');
    notepad.addNote(note);
    expect(view.renderSingleNote(0)).toEqual('<textarea class="text-edit" id="my-text" value="' + note.contents() + '"></textarea>');
  });
  
});
