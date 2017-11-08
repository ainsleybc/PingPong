(function (exports) {

  exports.it = function (string, callback) {

    try {
      callback();
      output.addPassingTest(string)
    }
    catch (err) {
      output.addFailedTest(string, err.stack);
    }

    output.testCount++;

  };

})(this);
