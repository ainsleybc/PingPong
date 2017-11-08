// 'use strict';

describe('Web spec', function() {

  it('tests the web', function() {
    var button = document.getElementById('button');
    button.click();
    var headerText = document.getElementById('test').textContent;
    expect(headerText).toEqual('button clicked');
  });

});
