'use strict';

(function (exports) {

  exports.Note = function (text) {

    var _content = text;

    function contents() {
      return _content;
    };

    function abbreviation() {
      return _content.slice(0, 20);
    };

    return {
      contents: contents,
      abbreviation: abbreviation
    };

  }

})(this);
