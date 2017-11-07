'use strict';

var expect = function(firstArg) {

  function testPassing() {
    console.log('The test passes!');
  };

  function executeTest(options) {
    var assertion = options.assertion;
    var errorOperator = options.errorOperator;
    var errorType = options.errorType;
    var secondArg = options.secondArg

    if (options.assertion) {
      testPassing();
    } else {
      throw new Error(errorMessage(errorType, errorOperator, secondArg));
    }
  };

  function errorMessage(errorType, errorOperator, secondArg) {
    if (errorType === 'single comparison') {
      return "Test failed: " + firstArg + " is not true.";
    } else {
      return 'Test failed: expected ' + firstArg + errorOperator + secondArg + '.';        
    }
  };

  return {

    toBeTrue: function() {
      executeTest({
        assertion: (!firstArg),
        errorOperator: (" is not true"),
        errorType: 'single comparison'
      });
    },

    toEqual: function(secondArg) {
      executeTest({
        assertion: (firstArg === secondArg),
        errorOperator: (" to equal "),
        secondArg: secondArg
      });
    },

    toNotEqual: function(secondArg) {
      executeTest({
        assertion: (firstArg !== secondArg),
        errorOperator: (" not to equal "),
        secondArg: secondArg        
      });
    },

    toInclude: function(secondArg) {
      executeTest({
        assertion: (firstArg.includes(secondArg)),
        errorOperator: (" to contain "),
        secondArg: secondArg        
      });
    }
  };

};
