const info = {
    name: 'Peter',
    age: 35,
    sayHi: function(){
        console.log('Hello!')
    },
}

// функцията от един обект може да се ползва в друг обект
const myFunction = info.sayHi;

const info2 = {
    name: 'Moris',
    age: 24,
    sayHi: myFunction,
}
info.sayHi()
info2.sayHi()