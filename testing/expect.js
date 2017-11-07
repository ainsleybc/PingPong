'use strict';

var expect = function(firstArg) {

  function testPassing() {
    console.log('The test passes!');
  }

  function executeTest(options) {
    if (options.assertion) {
      testPassing();
    } else {
      throw new Error(options.errorMessage);
    }
  }

  return {

    toBeTrue: function() {
      executeTest({
        assertion: (!firstArg),
        errorMessage: ("Test failed: " + firstArg + " is not true.")
      });
    },

    toEqual: function(secondArg) {
      executeTest({
        assertion: (firstArg === secondArg),
        errorMessage: ("Test failed: expected " + firstArg + " to equal " + secondArg + '.')
      });
    },

    toNotEqual: function(secondArg) {
      executeTest({
        assertion: (firstArg !== secondArg),
        errorMessage: ("Test failed: expected " + firstArg + " not to equal " + secondArg + '.')
      });
    },

    toInclude: function(secondArg) {
      executeTest({
        assertion: (firstArg.includes(secondArg)),
        errorMessage: ("Test failed: expected " + firstArg + " to contain " + secondArg + ".")
      });
    }
  };
};
