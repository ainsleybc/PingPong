'use strict';

(function (exports) {
  
  exports.expect = function (firstArg) {

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

    function toEqual (secondArg) {
      executeTest({
        assertion: (firstArg === secondArg),
        errorOperator: (" to equal "),
        secondArg: secondArg
      });
    };

    function toNotEqual (secondArg) {
      executeTest({
        assertion: (firstArg !== secondArg),
        errorOperator: (" not to equal "),
        secondArg: secondArg
      });
    };

    function toInclude (secondArg) {
      executeTest({
        assertion: (firstArg.includes(secondArg)),
        errorOperator: (" to contain "),
        secondArg: secondArg
      });
    };

    function truthy () {
      executeTest({
        assertion: (!firstArg),
        errorOperator: (" is not true"),
        errorType: 'single comparison'
      });
    };
    
    function instanceOf (secondArg) {
      executeTest({
        assertion: (firstArg instanceof secondArg),
        errorOperator: (" to be an instance of "),
        secondArg: secondArg
      })
    };
    
    return {
      toEqual: toEqual,
      toNotEqual: toNotEqual,
      toInclude: toInclude,
      toBe: { true: truthy, instanceOf: instanceOf }
    }

  };

})(this);
