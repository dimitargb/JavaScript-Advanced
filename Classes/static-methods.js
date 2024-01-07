// статичния метод се извиква без tis. отпред
// той е част от класа, но не е инстанция
// пример с 4 задача
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2){
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;

        return Math.sqrt(dx**2 + dy**2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1,p2)); // статичния метод се извивка през името на класа, а не през името на инстанцията;