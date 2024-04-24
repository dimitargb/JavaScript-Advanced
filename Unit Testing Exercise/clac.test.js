const { expect, assert } = require('chai');
const mathEnforcer = require('./calc.js');

describe('addFive', () => {
    it('It should return undefined if first parameter is not a number', () => {
        assert.equal(mathEnforcer.addFive('test'), undefined);
    });
    it('It should return 10 if first parameter is 5', () => {
        assert.equal(mathEnforcer.addFive(5), 10);
    });
    it('It should return undefined if first parameter is missing', () => {
        assert.equal(mathEnforcer.addFive(), undefined);
    });
    it('It should return 8.05 if first parameter is 3.05', () => {
        assert.equal(mathEnforcer.addFive(3.05), 8.05);
    });
    it('It should return -7.35 if first parameter is -12.35', () => {
        assert.equal(mathEnforcer.addFive(-12.35), -7.35);
    });
    it('It should return zero if first parameter is -5', () => {
        assert.equal(mathEnforcer.addFive(-5), 0);
    });
});

describe('subtractTen', () => {
    it('It should return undefined if first parameter is not a number', () => {
        assert.equal(mathEnforcer.subtractTen('test'), undefined);
    });
    it('It should return zero if first parameter is 10', () => {
        assert.equal(mathEnforcer.subtractTen(10), 0);
    });
    it('It should return -1.5 if first parameter is 8.5', () => {
        assert.equal(mathEnforcer.subtractTen(8.5), -1.5);
    });
    it('It should return -22.02 if first parameter is -12.02', () => {
        assert.equal(mathEnforcer.subtractTen(-12.02), -22.02);
    });
    it('It should return zero if first parameter is 10', () => {
        assert.equal(mathEnforcer.subtractTen(10), 0);
    });
});

describe('sum', () => {
    it('It should return undefined if first parameter is not a number',() =>{
        assert.equal(mathEnforcer.sum('test'), undefined);
    });
    it('It should return undefined if bouth parameters are not a number',() =>{
        assert.equal(mathEnforcer.sum('test','test'), undefined);
    });
    it('It should return undefined if second parameter is not a number',() =>{
        assert.equal(mathEnforcer.sum('test',2), undefined);
    });
    it('It should return -4 if both parameters are a numbers',() =>{
        assert.equal(mathEnforcer.sum(2,-6), -4);
    });
    it('It should return -4 if both parameters floating numbers',() =>{
        assert.closeTo(mathEnforcer.sum(2.5,-6.9), -4.4, 0.01);
    });
    it('It should return -12 if both parameters are negative numbers',() =>{
        assert.closeTo(mathEnforcer.sum(-4,-8), -12, 0.01);
    });
    it('It should return zero if both parameters are numbers',() =>{
        assert.equal(mathEnforcer.sum(-4,4), 0);
    });
});