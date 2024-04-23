const { expect, assert } = require('chai');
const lookupChar = require('./char.js');

describe('lookupChar', () => {
    it('It should return undefined if first argument is not a string', () => {
        assert.equal(lookupChar(1), undefined);
    });
    it('It should return undefined if second argument is not an integer', () => {
        assert.equal(lookupChar('string', 1.5), undefined);
    });
    it('It should return undefined if second argument is not correct', () => {
        assert.equal(lookupChar('test', 'test'), undefined);
    });
    it('It should return Incorrect Index if index is lower than zero', () => {
        assert.equal(lookupChar('test', -1), 'Incorrect index');
    });
    it('It should return Incorrect Index if index is greater than string length', () => {
        assert.equal(lookupChar('test', 10), 'Incorrect index');
    });
    it('It should return the correct char at index 0', () => {
        assert.equal(lookupChar('test', 0), 't');
    });
    it('It should return the correct char at the last index', () => {
        assert.equal(lookupChar('test', 3), 't');
    });
    it('It should return the correct charachter', () => {
        assert.equal(lookupChar('argument', 0), 'a');
    });

    it('It should return the correct charachter at correct index', () => {
        assert.equal(lookupChar('Tom', 1), 'o');
    });
    it('It should return undefined if first parameter is not a string', () => {
        assert.equal(lookupChar(123, 1), undefined);
    });
});