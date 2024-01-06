function arrangeNumbers(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join('\n'));
}
arrangeNumbers([7, -2, 8, 9]);
arrangeNumbers([3, -2, 0, -1]);