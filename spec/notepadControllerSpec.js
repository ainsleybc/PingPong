'use strict';

function convertPlainText(content) {
  return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

describe('notepadController', function() {

  it('renders the page & main section', function() {
    var notepadController = new NotepadController('test-div');
    expect(document.getElementById('test-div').innerHTML).toInclude('<nav id="sidebar"></nav><section id="main"><textarea class="text-edit" id="my-text"></textarea></section>');
  });

  describe('renderCreateNoteBox', function() {

    it('displays the note input text area', function() {
      var notepadController = new NotepadController('test-div');
      var testDouble = document.getElementById('main');
      var form = '<textarea class="text-edit" id="my-text"></textarea>';
      expect(convertPlainText(testDouble.innerHTML)).toEqual(convertPlainText(form));
      testDouble.innerHTML = '';
    });

  });

  describe('saveNote', function() {

    it('adds a new note to the notepad', function() {
      var notepadController = new NotepadController('test-div');
      var textBox = document.getElementById('my-text');
      textBox.value = 'hi, my name is Hugo';
      notepadController.saveNote();
      var noteList = document.getElementById('sidebar').innerHTML;
      expect(noteList).toInclude('hi, my name is Hugo');
      document.getElementById('test-div').innerHTML = '';
    });

  })

  it('should display a single note when clicked on', function() {
    var notepadController = new NotepadController('test-div');

    var textBox = document.getElementById('my-text');
    textBox.textContent = 'hi, my name is Hugo';
    notepadController.saveNote();
    notepadController.renderCreateNoteBox();
    textBox = document.getElementById('my-text');
    textBox.textContent = 'hi, my name is Jon';
    notepadController.saveNote();
    var link = document.getElementById('note0');
    link.click();
    textBox = document.getElementById('my-text');    
    console.log(textBox.textContent);
    expect(textBox.textContent).toInclude('hi, my name is Hugo');

  });

});
