//вместо да изпълни функцията веднага връща нейно копие в което this е фиксиран
function greet(a, b, c){
    console.log(this.name);//  тук се подава с this
    console.log(a+b+c);
}

let person = {name:'Alex'};

const bound = greet.bind(person, 2, 3, 5); // bind не работи с масив затова се слагат само аргументите
bound(); // извиване на променливата bound където сме запаили bind