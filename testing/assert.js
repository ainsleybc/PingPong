module.exports = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('The test passes!');
    }
  },
  isThis: function(firstArg) {
    return {
      equalTo: function(secondArg) {
        if (firstArg === secondArg) {
          console.log('The test passes!');
        } else {
          throw new Error("Assertion failed: " + firstArg + " is not equal to " + secondArg + '.');
        }
      },
      notEqualTo: function(secondArg) {
        if (firstArg !== secondArg) {
          console.log('The test passes!');
        } else {
          throw new Error("Assertion failed: " + firstArg + " is equal to " + secondArg + '.');
        }
      }
    };
  }
};
