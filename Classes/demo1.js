
// класа започва с галвна буква
class Person {
    constructor(){// конструктора може да приема параметри като наприме име
        console.log(`executing constructor`);
        this.name = 'Peter';// class MyClass вече име име прикачено към него;
    }
}

//new MyClass();// така извикваме класа
const instance = new Person(); //класес се създаде, но в него няма нищо;
console.log(instance);