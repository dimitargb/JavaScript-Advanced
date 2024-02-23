function cityTaxes(name, population, treasury) {

    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
         },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
         },
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

const cityAsString = JSON.stringify(city) // using JSON - stringify - converting to string
console.log(cityAsString);
console.log(typeof cityAsString);

const json = '{"name":"Tortuga","population":7350,"treasury":72250,"taxRate":10}'

const obj = JSON.parse(json);// using JSON parse - conveting to object
console.log(obj);