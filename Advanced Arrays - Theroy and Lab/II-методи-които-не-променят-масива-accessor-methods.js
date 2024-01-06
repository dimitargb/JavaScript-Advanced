// join - creates new string by concatinating all elements separated by separator
let arr = [22, 33, 75, 45, 35];
//console.log(arr.join(' '));
//console.log(arr.join('\n'));

// два масива в един нов масив
let arr1 = [ 1, 3, 19, 34]

const result = [...arr, ...arr1];
console.log(result);

// concat - method to merge 2 or more arrays - обединява няколко масива в един масив
 const num1 = [ 1, 3, 5];
 const num2 = [12, 4, 56];
 const num3 = [75, 23, 12];
 const numbers = num1.concat(num2, num3);
 console.log(numbers);

 //slice - изрязва елементи от масива от посочения индекс до посочен индекс и спира преди него
 // slice can do a shallow copy - ако не му е зададена стоиност
const myArr = arr.slice(1, 3);
console.log(myArr)
const newArr = arr.slice();
console.log(newArr) // - this is a shallow copy of the array
// ако подадем отрицателна стойност - започва от зад напред като -1 е прдпоследния елемент от масива

console.log(`......   ->  -------`);
const elements = [2, 4, 8, 20, 24, 38, 62];
const myElements = elements.slice(1);
console.log(myElements);

// includes = проверка true or false ще ни каже дали дадена стойност се намира вътре в масива
console.log(myElements.includes(8,));
// приема и втори параметър който означва от кой индекс нататъка да тръси в примера долу търси от 3 индекс нататък
console.log(elements.includes(8, 3));

// indexOf - да намерим каъде се намира елемента в масива
console.log(elements.indexOf(8))
// ако търсим нещо което го няма в масива ще върне -1;
console.log(elements.indexOf(95)) // ресултата е -1, защото числото 95 го няма в масива;
// indexOf приема втори параметър както при includes, който означва от кой индекс нататъка да тръси
console.log(elements.indexOf(24, 1))

//map - does not chnage the array, but creates a new array, map ще запази резултата
const a = [1, 2, 3, 4, 5]
const res = a.map((e)=> e + 2);
console.log(res);

//some = дали накой от елементите в масива отговаря на определено условие, записано като функция.
console.log(a.some(e => e % 2 === 0));

// find - връща стойносстта която отговаря на условието и ще върне първата стойност която съвпада
const b=[4, 8, 12, 16, 24]
console.log(b.find(e => e % 2===0));

// filter - ще върне масив със всички съвпадения, които отговраят на тази функция
console.log(b.filter(e => e % 2===0));
// ако метода filter  не намери съвпадения, ще върне празен масив.

//every - ще върне true само ако всички елементи отговраят на условито.
console.log(b.every(e => e % 2===0));