const { expect } = require('chai');
const createCalculator = require('./calc');

describe('Calculator', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns zero initial value', () => {
        expect(calc.get()).to.equal(0);
    });
    it('can add numbers', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1)
    });
    it('can add more tahn one number', () => {
        calc.add(1);
        calc.add(1);
        expect(calc.get()).to.equal(2)
    });
    it('can substract numbers', () => {
        calc.subtract(2);
        expect(calc.get()).to.equal(-2)
    });
    it('can add and substract numbers', () => {
        calc.subtract(1);
        calc.add(2);
        expect(calc.get()).to.equal(1)
    });
    it('can add number as asting', () => {

        calc.add('2');
        expect(calc.get()).to.equal(2)
    });

});