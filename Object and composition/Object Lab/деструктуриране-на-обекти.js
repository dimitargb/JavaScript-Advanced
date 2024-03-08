const department = {
    departmentName: 'Engineering',
    director: 'Ted Thompson',
    employeeCount: 25
};

const { departmentName, employeeCount, director } = department; // деструктуриране на обект
console.log(departmentName, employeeCount, director);

function hello(){
    console.log('Hello!');
}

const info = {
    name: 'Peter',
    age: 35,
    sayHi: hello,
}
 
const {sayHi} = info;
console.log(sayHi);
