'use strict';

(function (exports) {
   
  var _html = ''
  var container = document.getElementById('spec-runner');
  var describeCounter = 0;
  
  exports.output = {

    testCount: 0,
     
    startDescribe: function (text, counter) {
      describeCounter++;
      _html += '<article><p class="describe_block">' + text + '</p>';
    },

    endDescribe: function (counter) {
      describeCounter--;
      _html += '</article>';
      if (describeCounter === 0) output.renderPage();
    },
    
    addPassingTest: function (text) {
      _html += "<div class='passes'><p>" + text + "</p></div>";
    },

    addFailedTest: function (text, err) {
      _html += "<div class='fails'><p>" + text + "</p><p>" + err + "</p></div>";
    },

    renderPage: function () {
      container.innerHTML += _html;
      _html = '';
    }

  };

})(this);
