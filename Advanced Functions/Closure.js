// Когато върешаната функция е затворена в скоупа на външната функция.
function outer(counter) {
    let name = 'Peter';
    


    function func(a, b) {
        const result = counter + a + b;
        counter++;
        console.log(name);
        return result;
    }
    
    return func;
}

const inner1 = outer(2);
const inner2 = outer(0);

console.log(inner1(2, 3));
console.log(inner2(2, 3));
