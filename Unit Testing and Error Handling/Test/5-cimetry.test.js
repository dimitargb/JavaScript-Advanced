const { expect } = require('chai');
const isSymmetric = require('./5-cimerty');

describe('Symmerty checker', function(){
  it('return true for symmetric array', ()=>{
     const arr = [1,2,2,1];
     expect(isSymmetric(arr)).to.be.true;
  })
  it('returns false for none symetric array', ()=>{
    const arr = [1,2,2,3];
    expect(isSymmetric(arr)).not.to.be.true;
  });
  it('returns false if array in not an array', ()=> {
    const arr = 123;
    expect(isSymmetric(arr)).to.be.false;
  });
  it('return true if length is odd', ()=>{
    const arr = [1,2,1];
    expect(isSymmetric(arr)).to.be.true;
  });
  it('returns false for for arguments which are not array', ()=>{
    const arr = '1,2,2,1';
    expect(isSymmetric(arr)).to.be.false;
  });
  it('returns false if one of the input arguments is string',  ()=>{
    const arr = [1,2,2,'1'];
    expect(isSymmetric(arr)).to.be.false
  });
});
