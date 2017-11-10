'use strict';

(function (exports) {

  exports.afterEach = function (callback) {

    afterHelpers.addEach(callback);

  };

})(this);

(function (exports) {

  var _afterEachHelpers = [];

  function addEach(callback) {
    _afterEachHelpers.push([output.describeLevel(), callback]);
  };

  function runEach(describeLevel) {
    var level = describeLevel;
    _afterEachHelpers.forEach(function (helper) {
      var callback = helper[1];
      if (helper[0] <= level) callback();
    });
  };
  
  function resetEach(level) {
    var level = level;
    for (var i = 0; i < _afterEachHelpers.length; i++) {
      if (_afterEachHelpers[i][0] === level) {
        _afterEachHelpers.splice(i, 1);
      }
    }
  }

  exports.afterHelpers = {
    runEach: runEach,
    resetEach: resetEach,
    addEach: addEach,
  }

})(this);
