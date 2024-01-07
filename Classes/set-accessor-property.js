class Circle{
    constructor(radius){
        this.radius = radius;
    }
     get diameter(){ // достъпваме diameter  с get
        return this.radius * 2;
    }

    set diameter(value){
       this.radius = value / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);

myCircle.radius = 8;

console.log(myCircle.radius);
console.log(myCircle.diameter);

myCircle.diameter = 20;
console.log(myCircle.radius);
console.log(myCircle.diameter);