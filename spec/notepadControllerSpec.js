'use strict';

function convertPlainText(content) {
  return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

describe('notepadController', function () {
  
  it('creates a nav bar and main section', function () {
    var notepadController = new NotepadController('test-div');
    expect(document.getElementById('test-div').innerHTML).toInclude('<nav id="navBarText"></nav><section id="main"></section>');
  });

  describe('renderCreateNoteBox', function () {

    it('displays the note input text area', function () {
      var notepadController = new NotepadController('test-div');
      var testDouble = document.getElementById('main');
      var form = '<textarea class="text-edit" id="my-text"></textarea>';
      notepadController.renderCreateNoteBox();
      expect(convertPlainText(testDouble.innerHTML)).toEqual(convertPlainText(form));
      testDouble.innerHTML = '';
    });

  });

  describe('saveNote', function () {
    
    it('adds a new note to the notepad', function() {
      var notepadController = new NotepadController('test-div');
      notepadController.renderCreateNoteBox();
      var textBox = document.getElementById('my-text');
      textBox.value = 'hi, my name is Hugo';
      notepadController.saveNote();
      var noteList = document.getElementById('navBarText').innerHTML;
      expect(noteList).toInclude('hi, my name is Hugo');
    });

  })

});
