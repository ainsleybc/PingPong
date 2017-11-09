'use strict';

function convertPlainText(content) {
  return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
describe('notepadController', function() {

  it('instantiates a new notepad', function() {
    var notepadController = new NotepadController('test-div');
    expect(notepad).toBe.instanceOf(Notepad);
  });

  it('displays the note creation form', function() {
    var notepadController = new NotepadController('test-div');

    var testDouble = document.getElementById('test-div');
    var form = '<form><input type="text" id="webnote" name="webnote"><input type="submit" id="add-note" value="add-note"></form>';
    testDouble.innerHTML = form;
    expect(convertPlainText(testDouble.innerHTML)).toEqual(convertPlainText(form));
  });

  it('displays a text area when the createNote button is clicked', function() {
    var notepadController = new NotepadController('test-div');
    notepadController.createTextArea('test-div');
    var html = convertPlainText(document.getElementById('test-div').innerHTML);
    var textArea = convertPlainText('<textarea class="text-edit" id="my-text"></textarea>');
    expect(html).toEqual(textArea);
  });

  it('adds a new note to the notepad when the submit button is clicked', function() {
    var notepadController = new NotepadController('test-div');
    submitNoteHTML()
    notepadController.createTextArea('test-div');
    var textBox = document.getElementById('my-text');
    textBox.value = 'hello my name is canace';
    expect(textBox.value).toEqual('hello my name is canace');

    var button = document.getElementsById('button');
    button.click();
  });


});

// describe('saveNote', function () {

//   var testDouble = document.getElementById('test-div');
//   var form = "<form><input type='text' id='webnote' name='webnote'><input type='submit' id='add-note' value='add-note'></form>";

//   it('saves a note with the given text', function () {
//     var notepad = new Notepad();
//     var inputField = document.getElementById("webnote");
//     inputField.textContent = 'this is a string';
//     document.getElementById("add-note").click();
//     expect(notepad.notes()).toInclude('this is a string');
//   });

// });

// describe('saveNote', function () {

//   var testDouble = document.getElementById('test-div');
//   var form = "<form><input type='text' id='webnote' name='webnote'><input type='submit' id='add-note' value='add-note'></form>";

//   it('saves a note with the given text', function () {
//     var notepad = new Notepad();
//     var inputField = document.getElementById("webnote");
//     inputField.textContent = 'this is a string';
//     document.getElementById("add-note").click();
//     expect(notepad.notes()).toInclude('this is a string');
//   });

// });
