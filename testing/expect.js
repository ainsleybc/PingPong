'use strict';

var expect = function (firstArg) {

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

    toBeTrue: function () {
      executeTest({
        assertion: (!firstArg),
        errorMessage: ("Assertion failed: " + firstArg + " is not truthy")
      });
    },

    toEqual: function (secondArg) {
      executeTest({
        assertion: (firstArg === secondArg),
        errorMessage: ("Test failed: expected " + firstArg + " to equal " + secondArg + '.')
      });
    },

    toNotEqual: function (secondArg) {
      executeTest({
        assertion: (firstArg !== secondArg),
        errorMessage: ("Test failed: expected " + firstArg + " not to equal " + secondArg + '.')
      });
    }

  }

};
