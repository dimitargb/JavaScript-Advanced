let arr = [22, 33, 75, 45, 35];
console.log(arr);
console.log(arr[2]); // достъпване по индекс
// променяне на стойност 
 arr[4] = 21;

 console.log(arr.length);

 // можем да променим дължината като зададем стойност;
 arr.length = 3;
 console.log(arr);// изтри последните два елемента
 // можем да добавим още елементи,но другите вече са изтрити;
 arr.length = 6;
 console.log(arr)

arr[6]=35;
console.log(arr);
// можем да извикаме индекса с функция
function getIndex(){
    return 1;
}
console.log(arr[getIndex()]);