'use strict';

function Note(text) {
  this._content = text;
}
Note.prototype.contents = function() {
  return this._content;
};

Note.prototype.abbreviation = function() {
  return this._content.slice(0, 20) + '...';
};
