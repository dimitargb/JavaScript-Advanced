// map collection - в реда на вкарване в тоьи вид ще бъдат съхранени;
// itarate with for off което връща [key, value] масив с два елемента ключ и стойност;
// ключа може да е всеки един елемент - число, стринг, рефернтен тип, функция и т.н.

const collection = new Map;
console.log(collection);

// нов елемент се добавя с set !!!
collection.set('Peter', '00035988842511');
collection.set('Jhon', '00035988843257')
console.log(collection);

// достъпването на елемнтите става с get
console.log(collection.get('Peter')); // това връща стойността (value) която е съхранена срещу ключа 'Peter'

// обхождане 
for (let [key, value] of collection){
    console.log([key, value]);
}
for (let entry of collection){
    console.log(entry);
}
// превъщане в обект

const myObj = Object.fromEntries([...collection.entries()]);
console.log(myObj);

// проверка дали нещо съществува в масива е с has
console.log(collection.has('Adam'));
// delete element
collection.delete('Peter');
console.log(collection);

// колекциата има свойство size което ще каже коко елементс има вътре.
console.log(collection.size);