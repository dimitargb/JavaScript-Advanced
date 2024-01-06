function smallestNaumbers(arr){
 let result = arr.sort((a, b) => a-b).slice(0, 2)

console.log(result.join(' '));
}
smallestNaumbers([30, 15, 50, 5]);
smallestNaumbers([3, 0, 10, 4, 7, 3]);