function composeObject(arr){

     return arr.reduce((acc, curr, index) => {
        if(index % 2 === 0) acc[curr] = Number(arr[index + 1]);
       return acc;  
    }, {}); 
}
console.log(composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));