function subSum(arr, startIndex, endIndex) {

    // Array.isArray  =detrmons whether the passed value is an array.
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.lengtyh - 1) {
        endIndex = arr.length - 1;
    }

    return arr.slice(startIndex, endIndex + 1).map(Number).reduce((acc, x) => acc + x, 0)


}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));