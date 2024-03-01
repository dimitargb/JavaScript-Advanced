//свойство което в себе си съхранява функция го наричаме метод.
const info = {
    name: 'Peter',
    age: 35,
    sayHi: function(){
        console.log('Hello!')
    },
    howAreYou: hi,
}
// достъпване на функцията 
info.sayHi();
const myFunction = info.sayHi
myFunction()

//можем да добавим функция извън обекта
function hi(){
    console.log('How are you?');
};
info.howAreYou();