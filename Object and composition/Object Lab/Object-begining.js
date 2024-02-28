const info = {
    name: 'Peter',
    age: 35,
}
console.log(info['name']);// достъпване на обект;
console.log(info.age); // достъпване на обект;
info['age']=23; // можем да променин стойността на свойството
console.log(info);
// можем да зададем свойство извън обекта 

info.LastName = 'Petrson';
console.log(info);
// можем да изтриваме свойства
delete info['LastName']; // свойството LastName се е изтрило
console.log(info);