const info = {
    'name': 'Peter',
    'age': 35,
    'last name': 'Peterson'
}
// за достъпване на свойства които са стрингове се използва индексиращия оператор[];
console.log(info['last name']);
const newAge = 'age';
info[newAge]= 25; //промяна на стойността на age с нова променлива
console.log(info);