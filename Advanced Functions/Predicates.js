let arr1 = [2, 8, 10, 12, 15]
let found = arr1.find(isFound);// isFound is predicate
// когато функцията връща булева стойност й казваме predicate = предикат

function isFound(element){
    return element > 10;
}
console.log(found);