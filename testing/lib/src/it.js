(function (exports) {

  function it(string, callback) {

    var container = document.getElementById('spec-runner').lastChild;

    try {
      callback();
      container.innerHTML += "<div><p class='passes'>" + string + "</p></div>";
    }
    catch (err) {
      container.innerHTML += "<div><p class='fails'>" + err + "</p></div>";
    }

  };

  exports.it = it;

})(this);
