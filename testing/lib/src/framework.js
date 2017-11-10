'use strict';

(function (exports) {
   
  var _html = '';
  var _describeLevel = 0;
  var _passedTestCount = 0;
  var _failedTestCount = 0;
  var _container = document.getElementById('spec-runner');
  var _stats = document.getElementById('test-info');  
  var _tests = [];

  function runSuite() {
    _tests.forEach(function (test) {
      beforeHelpers.runEach(test[0]);
      var string = test[1];
      var callback = test[2];
      try {
        callback();
        addPassingTest(string);
      }
      catch (err) {
        addFailedTest(string, err.stack);
      };
      afterHelpers.runEach(test[0]);      
    })
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
  };

  function startDescribe (text, counter) {
    _describeLevel++;
    _html += '<article><p class="describe_block">' + text + '</p>';
  };

  function endDescribe (counter) {
    runSuite();
    beforeHelpers.resetEach(_describeLevel);
    afterHelpers.resetEach(_describeLevel);    
    _describeLevel--;
    _html += '</article>';
    if (_describeLevel === 0) renderPage();
    _tests = [];
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
    _tests.push([_describeLevel, string, callback]);
  };

  function describeLevel() {
    return _describeLevel;
  };

  exports.output = {
    startDescribe: startDescribe,
    endDescribe: endDescribe,
    describeLevel: describeLevel,
    addTest: addTest,
  };

})(this);
