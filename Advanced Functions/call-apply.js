function greet(a, b, c){
    console.log(this.name);//  тук се подава с this
    console.log(a+b+c);
}

let person = {name:'Alex'}; // call извиква външна на функцията с променлива
greet.call(person, 2, 3, 5) // в call изброяваме само аргуметите
greet.apply(person,[2, 3, 5]) // apply очаква да получи един аргумрнт който е масив от аргумнети

// ако имаме подаден само apply и го заменим с call и сложим sped оператора ... може да се приложи метода call
greet.call(person,...[2, 3, 5])