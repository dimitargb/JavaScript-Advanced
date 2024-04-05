const { expect, assert} = require('chai');
const lookupChar = require('./char');

describe('Char', function(){
    it('should return undifined if first argument is not a string' , ()=>{
        expect(lookupChar(2)).to.be.undefined
    });
    it('should return undifined if second argument is not a number' , ()=>{
        expect(lookupChar(2, 'string')).to.be.undefined
    });
    it('should return undifined if both  arguments are strings' , ()=>{
        expect(lookupChar('string', 'string')).to.be.undefined
    });
      it('should return undifined if both  arguments are correct, but index is less than zero' , ()=>{
        expect(lookupChar('string', 1.5)).to.be.undefined;
    });
    it('should return Incorrect index if both parameters are correct, the value of the index is incorrect ' , ()=>{
        assert.equal(lookupChar('string', 7), 'Incorrect index');
    });
    it('should return Incorrect index if both parameters are correct, the value of the index less than zero ' , ()=>{
        assert.equal(lookupChar('string', -1), 'Incorrect index');
    });
    it('should return the char at the specified index ' , ()=>{
        assert.equal(lookupChar('string', 2), 'r');
    });
    
    it('should return undefined if both parameters are numbers ' , ()=>{
        assert.equal(lookupChar(25, 3), undefined);
    });
});