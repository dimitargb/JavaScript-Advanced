function printBiggerHalf(arr){
// sort input
 arr.sort((a, b)=> a-b);

 // determine half 
 let start = Math.floor(arr.length / 2);

 //create new array with half length, starting from middle
 let result = [];
 
for(let i = start; i < arr.length; i++){
 result.push(arr[i]); 
} 
 return result;
}
console.log(printBiggerHalf([4, 7, 2, 5]));
console.log(printBiggerHalf([3, 19, 14, 7, 2, 19, 6]))