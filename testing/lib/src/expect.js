'use strict';

(function (exports) {
  
  function expect(firstArg) {

    function executeTest(options) {
      if (!options.assertion) {
        throw new Error(errorMessage(options.errorType, options.errorOperator, options.secondArg));
      };
    };

    function errorMessage(errorType, errorOperator, secondArg) {
      if (errorType === 'single comparison') {
        return "Test failed: " + firstArg + " is not true.";
      } else {
        return 'Test failed: expected ' + firstArg + errorOperator + secondArg + '.';
      }
    };

    return {

      toBe: {
      // function () {

        // return {

          true: function () {
            executeTest({
              assertion: (!firstArg),
              errorOperator: (" is not true"),
              errorType: 'single comparison'
            });
          },

          instanceOf: function (secondArg) {
            executeTest({
              assertion: (firstArg instanceof secondArg),
              errorOperator: (" to be an instance of "),
              secondArg: secondArg
            })
          }

        // }

      },

      toEqual: function (secondArg) {
        executeTest({
          assertion: (firstArg === secondArg),
          errorOperator: (" to equal "),
          secondArg: secondArg
        });
      },

      toNotEqual: function (secondArg) {
        executeTest({
          assertion: (firstArg !== secondArg),
          errorOperator: (" not to equal "),
          secondArg: secondArg
        });
      },

      toInclude: function (secondArg) {
        executeTest({
          assertion: (firstArg.includes(secondArg)),
          errorOperator: (" to contain "),
          secondArg: secondArg
        });
      }
    };
  };
<<<<<<< HEAD
};
=======

  exports.expect = expect;

})(this);
>>>>>>> 973d3f39e60873fa17cd90238784c9e674cbb3fd
