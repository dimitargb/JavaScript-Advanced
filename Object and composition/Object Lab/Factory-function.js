function collectTaxes() {
    this.treasury += this.taxRate * this.population;
}

function applyGrowth(percentage) {
    this.population += Math.floor(this.population * percentage / 100);
 }

function applyRecession(percentage) {
    this.treasury -= Math.ceil(this.treasury * percentage / 100);

 }

 // Factory function - когато функциите са изнесени извън обекта
 function cityTaxes(name, population, treasury) {

    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    }

    return result;
}
const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);

city.applyRecession(15);
console.log(city.treasury);