let arr = [22, 33, 75, 45, 35];
//const [a,b,...rest]= arr;
//console.log(a,b,rest);
//а и b  са дефинирани останалите са в отедлен масив rest[];
// ако вземем всички елементи в rest ще напарвим т.н. плитко копие на масива, но той ще има различна рефернция от първия масив
//затова масивите не са еднакви и дава false = масивите са съхранени на различни места в паметта.
const [a,...rest] = arr;
console.log(rest);
//console.log(arr);
console.log(arr == rest);