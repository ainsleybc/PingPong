PingPong
------

A simple Javascript testing framework & library modelled after Jasmine.

This was forked from the original project to publish independently.

Features
-----

- describe (can be nested)
- it
- before
- beforeEach 
- after
- afterEach

Usage
-----

- clone repo
- move contents of `package/` to the root of your project
- update `specRunner.html` to emulate source and spec files
- open `specRunner.html` to run tests

```javascript
describe('someClass', ()=> {

  beforeEach(()=> {
    // set up test
  })

  describe('someFunction', ()=> {

    it('does something', ()=> {
      expect('someFunction').toEqual('someValue);
    })

  })

})

```
