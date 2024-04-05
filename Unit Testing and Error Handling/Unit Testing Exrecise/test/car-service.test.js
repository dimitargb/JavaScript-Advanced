const { expect, assert} = require('chai');
const carService = require('./car-service');

describe("carService", function() {
    describe("isItExpensive", function() {
        it("should return 'The issue with the car is more severe and it will cost more money' when issue is 'Engine'", function() {
            assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
        });

        it("should return 'The issue with the car is more severe and it will cost more money' when issue is 'Transmission'", function() {
            assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
        });

        it("should return 'The overall price will be a bit cheaper' when issue is not 'Engine' or 'Transmission'", function() {
            assert.equal(carService.isItExpensive('Tire'), 'The overall price will be a bit cheaper');
        });
    });

    describe("discount", function() {
        it("should throw an error 'Invalid input' when numberOfParts is not a number", function() {
            assert.throw(function() { carService.discount('not a number', 100) }, 'Invalid input');
        });

        it("should throw an error 'Invalid input' when totalPrice is not a number", function() {
            assert.throw(function() { carService.discount(3, 'not a number') }, 'Invalid input');
        });

        it("should return 'You cannot apply a discount' when numberOfParts is smaller or equal to 2", function() {
            assert.equal(carService.discount(2, 100), 'You cannot apply a discount');
        });

        it("should return 'Discount applied! You saved 45$' when numberOfParts is higher than 2 and smaller or equal to 7", function() {
            assert.equal(carService.discount(5, 300), 'Discount applied! You saved 45$');
        });

        it("should return 'Discount applied! You saved 210$' when numberOfParts is higher than 7", function() {
            assert.equal(carService.discount(8, 700), 'Discount applied! You saved 210$');
        });
    });

    describe("partsToBuy", function() {
        it("should throw an error 'Invalid input' when partsCatalog is not an array", function() {
            assert.throw(function() { carService.partsToBuy('not an array', ['blowoff valve', 'injectors']) }, 'Invalid input');
        });

        it("should throw an error 'Invalid input' when neededParts is not an array", function() {
            assert.throw(function() { carService.partsToBuy([{ part: 'blowoff valve', price: 145 }, { part: 'coil springs', price: 230 }], 'not an array') }, 'Invalid input');
        });

        it("should return 0 when partsCatalog is empty", function() {
            assert.equal(carService.partsToBuy([], ['blowoff valve', 'injectors']), 0);
        });

        it("should return the total price of the parts that are equal to the neededParts", function() {
            assert.equal(carService.partsToBuy([{ part: 'blowoff valve', price: 145 }, { part: 'coil springs', price: 230 }, { part: 'injectors', price: 450 }], ['blowoff valve', 'injectors']), 595);
        });
    });
});