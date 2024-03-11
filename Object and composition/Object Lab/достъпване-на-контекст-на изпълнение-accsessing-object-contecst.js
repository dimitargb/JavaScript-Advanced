// достъпа се осъщестявява с думата - this
// this означава достъпи текущия констест на изпълнение
// достъпи текущя обект в който се намираме
const info = {
    name: 'Peter',
    age: 35,
    sayHi: function(){
        console.log(`${this.name} says hi!`) // this сочи към обекта към който е дефинирана функцията sayHi
    },
};
info.sayHi() // насочва към свойството name на обекта в случея Peter, който казва says hi,
// this е все едно info = името на обекта.

const myFunction = info.sayHi;
myFunction()

const info2 = {
    name: 'Jhon',
    sayHi: myFunction,
}
info2.sayHi()