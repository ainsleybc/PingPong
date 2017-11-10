'use strict';

(function (exports) {

  exports.beforeEach = function (callback) {

    output.addBeforeEachHelper(callback);

  };

})(this);

// (function (exports) {

//   function addEach(callback) {
//     _beforeEachHelpers.push([_describeLevel, callback]);
//   };

//   function runEach(describeLevel) {
//     var level = describeLevel;
//     _beforeEachHelpers.forEach(function (helper) {
//       var callback = helper[1];
//       if (helper[0] <= level) callback();
//     });
//   };
  
//   function resetEach() {
//     for (var i = 0; i < _beforeEachHelpers.length; i++) {
//       if (_beforeEachHelpers[i][0] === _describeLevel) {
//         _beforeEachHelpers.splice(i, 1);
//       }
//     }
//   }

//   exports.beforeHelpers = {

//   }

// })
