(function (exports) {

  function it(string, callback) {

    var container = document.getElementById('spec-runner').lastChild;   
    
    try {
      callback();
      container.innerHTML += "<div><p>" + string + "</p></div>";
    }
    catch (err) {
      container.innerHTML += "<div><p>" + err + "</p></div>";      
    }
    
  };

  exports.it = it;

})(this);
