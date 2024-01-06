let matrix = [
          [2, 4, 8, 1],
          [5, 7, -1],
          [3, 6],
          [8, 5, 9, 12],
         ]
//console.log(arr[2][1]);

// обхождане на всички елементи от матрицата
for( let row of matrix){
    for(let el of row){
        console.log(el);
    }
}