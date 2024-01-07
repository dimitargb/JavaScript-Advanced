//Подобен на map, но нямае ключове в него.
// В него имаме само уникални стойности
const collection = new Set();
collection.add(7) // добавяме стойност
collection.add(2)
collection.add(5)
console.log(collection);

// с метода has казва дали дадена стойност съшествуава в колекцията
console.log(collection.has(5));
// с delete изтрива стойността
collection.delete(5)
console.log(collection);
// iteration
for(let value of collection){
    console.log(value);
};
console.log((collection.size));