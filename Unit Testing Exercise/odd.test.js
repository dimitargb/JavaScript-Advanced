const{ expect, assert } = require('chai');
//function isOddOrEven(string) ;
const isOddOrEven = require('./odd.js');

describe('isOddOrEven', ()=>{
    it(`It should return even when string length is even`, ()=> {
      assert.equal(isOddOrEven('even'), 'even')
    });
    it(`It should return odd when string length is odd`, ()=> {
      assert.equal(isOddOrEven('odd'), 'odd')
    });
    it(`It should return undefined when the input is not a string`, ()=> {
      assert.equal(isOddOrEven(1), undefined)
    });
});