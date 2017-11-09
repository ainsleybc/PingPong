'use strict';

(function (exports) {
   
  var _html = ''
  var _describeCounter = 0;
  var _passedTestCount = 0;
  var _failedTestCount = 0;
  var _container = document.getElementById('spec-runner');
  var _stats = document.getElementById('test-info');  
  
  exports.output = {
     
    startDescribe: function (text, counter) {
      _describeCounter++;
      _html += '<article><p class="describe_block">' + text + '</p>';
    },

    endDescribe: function (counter) {
      _describeCounter--;
      _html += '</article>';
      if (_describeCounter === 0) output._renderPage();
    },
    
    addPassingTest: function (text) {
      _html += "<div class='passes'><p>it " + text + "</p></div>";
      _passedTestCount++;
    },

    addFailedTest: function (text, err) {
      _html += "<div class='fails'><p>it " + text + "</p><p>" + err + "</p></div>";
      _failedTestCount++;
    },

    _renderPage: function () {
      _container.innerHTML += _html;
      _html = '';
      output._renderStats();
    },

    _renderStats: function () {
      var total = document.getElementById('total');
      var failed = document.getElementById('failed');
      total.textContent = _passedTestCount + _failedTestCount + ' tests,';
      failed.textContent = _failedTestCount + ' failures';
    }

  };

})(this);
