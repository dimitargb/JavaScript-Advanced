function sortNums(arr){
    // Unit Testing checks if pice of code work corrctly!!
     arr.sort((a, b) => a - b);

    let nums = [2, 15. -2, 4];
    sortNums(nums);
    
    if(JSON.stringify(nums) === '[2, 15. -2, 4]'){
        console.log('They are equal');
    }


}