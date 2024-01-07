class Person {
    constructor(name){// конструктора може да приема параметри като наприме име
        console.log(`executing constructor`);
        this.name = name;// class MyClass вече име име прикачено към него име;
    }
    sayHello(){// вградена функция в обекта; деклариране на метод вътре в класа, тук обаче не се слага точка и запетая!!!
        console.log(`${this.name} syas hi!`);
    }
}

//new MyClass();// така извикваме класа
const peter = new Person('Peter'); //класa се създаде, но в него иам прикачено име 'Peter';
const jhon = new Person('Jhon');

console.log(peter);
console.log(jhon);
peter.sayHello();
jhon.sayHello();