'use strict';

(function (exports) {
   
  var _html = ''
  var _describeCounter = 0;
  var _passedTestCount = 0;
  var _failedTestCount = 0;
  var _container = document.getElementById('spec-runner');
  var _stats = document.getElementById('test-info');  
  var _tests = [];

  function runTests () {
    _tests.forEach(function (test) {
      var string = test[0];
      var callback = test[1];
      try {
        callback();
        addPassingTest(string);
      }
      catch (err) {
        addFailedTest(string, err.stack);
      };
    })
    _tests = [];
  };
  
  function renderPage() {
    _container.innerHTML += _html;
    _html = '';
    renderStats();
  };
  
  function renderStats () {
    var total = document.getElementById('total');
    var failed = document.getElementById('failed');
    total.textContent = _passedTestCount + _failedTestCount + ' tests,';
    failed.textContent = _failedTestCount + ' failures';
  }

  function startDescribe (text, counter) {
    _describeCounter++;
    _html += '<article><p class="describe_block">' + text + '</p>';
  };

  function endDescribe (counter) {
    runTests();
    _describeCounter--;
    _html += '</article>';
    if (_describeCounter === 0) renderPage();
  };
  
  function addPassingTest (text) {
    _html += "<div class='passes'><p>it " + text + "</p></div>";
    _passedTestCount++;
  };

  function addFailedTest (text, err) {
    _html += "<div class='fails'><p>it " + text + "</p><p>" + err + "</p></div>";
    _failedTestCount++;
  };
  
  function addTest (string, callback) {
    _tests.push([string, callback]);
  };

  exports.output = {
    startDescribe: startDescribe,
    endDescribe: endDescribe,
    addTest
  };

})(this);
