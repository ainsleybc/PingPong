(function(exports) {

  function describe(string, callback) {

    var container = document.getElementById('spec-runner');

    container.innerHTML += "<article><p class='describe_block'>" + string + "</p></article>";
    callback();

  }

  exports.describe = describe;

})(this);
