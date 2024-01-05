// фунцията в JS е просто прпменлива и може да се сложи навсякъде където може да отиде груга стойност.
// може да я подаваме като аргумент с всички array методи = map, filter, reduse и т.н.

// Една функция може да върне друга функция
function sayHello(){
    return 'Hello'
}

console.log(sayHello(), 'JavaScript' );

const write = function(){
    return 'Hello JS!'
}
console.log(write()); // връща функция във функция които приемат фунция като параметър;

// Higher order functions или функции от по - висок ред!!!

const hello = function(){
    return function(){
        console.log('Hello');
    }
}
const myFunc = hello();
myFunc();