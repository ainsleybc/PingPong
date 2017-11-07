(function (exports) {
  
  function describe(string, callback) {

    var container = document.getElementById('spec-runner');

    container.innerHTML += "<article><p>" + string + "</p></article>";
    callback();
    
  }

  exports.describe = describe;
  
})(this);
  