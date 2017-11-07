module.exports = {
  assert: function() {
    return {
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
            return firstArg === secondArg;
          }
        };
      }
    };
  }
}
