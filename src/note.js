'use strict';

(function(exports) {

  exports.Note = function(text) {

    var _content = text;

    function contents() {
      return _content;
    }

    function abbreviation() {
      if (_content.length > 20) return (_content.slice(0, 17) + '...');
      return _content;
    }

    return {
      contents: contents,
      abbreviation: abbreviation
    };

  };

})(this);
