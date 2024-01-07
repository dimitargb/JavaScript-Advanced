// аксесор методите се достъват като свойства, не като функция
// accessor propertys се нарича също cslculated property
class Circle{
    constructor(radius){
        this.radius = radius;
        
    }
     get diameter(){ // достъпваме diameter  с get
        return this.radius * 2;
    }
}

const myCircle = new Circle(5);


console.log(myCircle.radius);
console.log(myCircle.diameter);
//console.log(circle.area); // достъпване на accessor метод !!!

// accessor methods се правят с думите get и set;