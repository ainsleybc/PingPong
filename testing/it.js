(function (exports) {

  function it(string, callback) {
    console.log(string)
    callback();
  }

  exports.it = it;

})(this);
