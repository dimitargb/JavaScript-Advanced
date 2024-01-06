// pop - removes last element
let arr = [22, 33, 75, 45, 35];
arr.pop();
console.log(arr);

// push - adds element to the end of the array
arr.push(24);
console.log(arr);

//shift removes first element for the array
arr.shift();
console.log(arr);

//unshift adds element in the beginning of the array
arr.unshift(2);
console.log(arr);

//splice - removing/replacing and adding new elements
console.log(arr.splice(2, 1)); // на втори индекс изтрий един елемент;
console.log(arr);
// добавяне на елемент - от втори индекс изтрий 0 елемент и добави числата - 11, 22, 65;
console.log(arr.splice(2, 0, 11, 22, 65));
console.log(arr);

//fill - запълва масива с една и съща стойност;
let arr1 = [1, 2, 3, 4];
console.log(arr1.fill(0,2,4)); // - запълни с 0 от втори индекс до края
console.log(arr1.fill(2, 1));// - запълни с 2 от първи индекс до края;
console.log(arr1.fill(8));// - запълни с 8 всички слотове

// reverse - обръща масива - оргиналния масив е променен.
let myArr = [ 2, 5, 8, 12, 17, 34];
console.log(myArr.reverse());

//sort
myArr.sort((a, b) => b -a);
let arr2 = ['bmw', 'Mercedess', 'Audi', 'toyota', 'VW', 'Opel']
//console.log(myArr);
arr2.sort((a, b) => a.localeCompare(b))
console.log(arr2);