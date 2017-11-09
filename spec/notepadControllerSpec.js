'use strict';

function convertPlainText(content) {
  return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

describe('notepadController', function() {

  it('renders the page & main section', function() {
    var notepadController = new NotepadController('test-div');
    var container = document.getElementById('test-div');
    expect(container.innerHTML).toInclude('<nav id="sidebar"></nav><section id="main"><textarea class="text-edit" id="my-text"></textarea></section>');
    container.innerHTML = '';
  });

  describe('renderCreateNoteBox', function() {

    it('displays the note input text area', function() {
      var notepadController = new NotepadController('test-div');
      var testDouble = document.getElementById('main');
      var form = '<textarea class="text-edit" id="my-text"></textarea>';
      expect(convertPlainText(testDouble.innerHTML)).toEqual(convertPlainText(form));
      document.getElementById('test-div').innerHTML = '';
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
    textBox.value = 'hi, my name is Hugo';
    notepadController.saveNote();
    textBox = document.getElementById('my-text');
    textBox.value = 'hi, my name is Jon';
    notepadController.saveNote();
    document.getElementById('note1').click();

    setTimeout(function() {
      textBox = document.getElementById('my-text');  
      expect(textBox.textContent).toInclude('hi, my name is Hugo');
      document.getElementById('test-div').innerHTML = '';
    }, 500)      
    
  });

});
