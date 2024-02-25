// Javascript Object Notation - формат за обмен на данни
// JSON се използва за трансфер на данни он лайн през http който е текстов протокол
// ключовете винаги са в кавички и те са двойни и нямаме право да слагаме - undifined
// данните идват като деойки - ключ - стойност
let info = {firtsName:'Jhon', secondName:'Smith'}
let emplyees = '{"firstName": "Jhon" ,"secondName": "Smith"}'

// валидни са двойни кавички, числа, ture, false, Null

// има два метода JSON.stringify - подаваме му обект и то го превръща в string
let obj = JSON.stringify(info);
console.log(obj);

//втория метод е да превърнем файла в обект - JSON.parse
let obj1 = JSON.parse(emplyees);
console.log(obj1);

// JSON for arrays
let arr = ['Jhon', 'Peter', 'Emma', 'Roberta']
let json =JSON.stringify(arr)
let myJSON = JSON.stringify(arr, null, 1); // това се прави да се отпечата едно под друго 
console.log(json);
console.log(myJSON)

// Не можем да вкараме функции в JSON