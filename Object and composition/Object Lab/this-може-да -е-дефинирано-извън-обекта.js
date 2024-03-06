function sayHi(){
    console.log(`${this.name} says hi!`);
}

const info = {
    name: 'Peter',
    age: 35,
    sayHi,
}

const info2 = {
    name: 'Jhon',
    age:24,
    sayHi,
}
info.sayHi();
info2.sayHi();