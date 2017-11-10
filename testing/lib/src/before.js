'use strict';

(function (exports) {

  exports.beforeEach = function (callback) {

    beforeHelpers.addEach(callback);

  };

})(this);

(function (exports) {

  var _beforeEachHelpers = [];

  function addEach(callback) {
    _beforeEachHelpers.push([output.describeLevel(), callback]);
  };

  function runEach(describeLevel) {
    var level = describeLevel;
    _beforeEachHelpers.forEach(function (helper) {
      var callback = helper[1];
      if (helper[0] <= level) callback();
    });
  };
  
  function resetEach(level) {
    var level = level;
    for (var i = 0; i < _beforeEachHelpers.length; i++) {
      if (_beforeEachHelpers[i][0] === level) {
        _beforeEachHelpers.splice(i, 1);
      }
    }
  }

  exports.beforeHelpers = {
    runEach: runEach,
    resetEach: resetEach,
    addEach: addEach,
  }

})(this);
