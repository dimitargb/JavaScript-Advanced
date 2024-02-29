// комбиниране на прости обекти в по-сложни
// в обекта може да имаме други обекти

let student = {
    name: 'Maria',
    lastName: 'Smith',
    location: {lat: 24, ling: 23}
}
console.log(student.location.lat) // достъпване на обект в обекта

let name = 'Sofia';
let popultaion = 2335475;
let country = 'Bulgaria';
let address = {name, popultaion, country}
console.log(address.name);

// adding location
address.location = {lat: 25, ling: 35} // добавяне на обект и достъпване на обект в обекта
console.log(address);
console.log(address.location.ling);