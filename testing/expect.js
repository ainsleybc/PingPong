module.exports = function(firstArg) {
  return {
    toBeTrue: function() {
      if (!firstArg) {
        throw new Error("Assertion failed: " + firstArg + " is not truthy");
      } else {
        console.log('The test passes!');
      }
    },

    toEqual: function(secondArg) {
      if (firstArg === secondArg) {
        console.log('The test passes!');
      } else {
        throw new Error("Assertion failed: " + firstArg + " is not equal to " + secondArg + '.');
      }
    },
    toNotEqual: function(secondArg) {
      if (firstArg !== secondArg) {
        console.log('The test passes!');
      } else {
        throw new Error("Assertion failed: " + firstArg + " is equal to " + secondArg + '.');
      }
    }
  };

};
