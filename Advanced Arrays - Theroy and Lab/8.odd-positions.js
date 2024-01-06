function findOddPosition(arr){
const result = arr.filter((e, i) => i % 2 !==0)
               .map(e => e * 2)
               .reverse()
               .join(' ');
 return result;
}
findOddPosition([10, 15, 20, 25]);
findOddPosition([3, 0, 10, 4, 7, 3]);