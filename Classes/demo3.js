class Circle {
    constructor(radius) {
        this.radius = radius
    }
    diameter() {
        return this.radius * 2

    }

}
const myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter());