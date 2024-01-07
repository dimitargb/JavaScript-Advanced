class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

const person = new Person('Jhon', 'Smith', 24, 'ogi@afv.bg')
console.log(person);// object from class Person;
//console.log(person.toString()); // string
const person1 = new Person('Ann', 'Tailor', 38, 'ani@afv.bg');
const person2 = new Person('Tom', 'Mardoc', 49, 'tom@afv.bg');

// обединяваме ги в един мсив
const people= [person, person1, person2];
console.log(people.join('\n')); // защото има метода toString();