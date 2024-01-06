// можем да обхождаме елементите с два for цикъла
let arr = [22, 33, 75, 38,];

// стандартен цикъл

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])  
}
console.log(` ............... -> ..............`);

// for of цикъл - само когато ни интерсува стойността на елемента

for (const element of arr) {
    console.log(element);
}