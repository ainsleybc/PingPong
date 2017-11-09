function submitNoteHTML() {
  var submit = document.createElement('div');
  submit.setAttribute('id', 'submitButton');
  submit.innerHTML = html;

  var button = document.createElement('button');
  button.setAttribute('id', 'button');
  button.setAttribute('onclick', 'notepadController.createNote()');

  var navBarText = document.createElement('scan');
  navBarText.setAttribute('id', 'navBarText');
}


var html = "<button id='button' name='submitNote' onclick='notepadController.createNote()>Submit</button>";
