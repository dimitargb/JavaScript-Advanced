
function hello(){
    console.log('Hello!');
}

const info = {
    name: 'Peter',
    age: 35,
    sayHi: hello,
}

const info2 = {
    name: 'Moris',
    age: 25,
    sayHi: hello,
}
info2.sayHi()