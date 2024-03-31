const { expect, assert } = require('chai');
const sum = require('./app.js');

describe('Main test', function (){
 
    it('works with whole numbers', function(){
        expect(sum(3, 5)).to.equal(8);
    });

    it('works with floating point numbers', function(){
       assert.equal(sum(0.1, 0.2), 0.3)
    });

});