'use strict';

describe('notes', function() {

  it('saves some text', function() {
    var text = 'this is some text';
    var note = new Note(text);
    expect(note.contents()).toEqual(text);
  });

  it('abbreviates the thing', function() {
    var note = new Note('12345678910111213141516171819202122232425');
    expect(note.abbreviation().length).toEqual(20);
    expect(note.abbreviation()).toEqual('12345678910111213...');
  });

})
