const arr = [10, 20, 30 , 40];

console.log(arr.reduce((a, b) => a + b, 0));

// function sum(accumulator, element){
//     console.log(`${accumulator} + ${element} = ${accumulator + element}`);

//     return accumulator + element;
// }
// как да изчислим средно аритметична стойност на числата от масива

console.log(arr.reduce((a, b, i, arr) => a + b/ arr.length, 0))