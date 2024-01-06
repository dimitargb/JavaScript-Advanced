function sumFirtsandLastelement(arr) {
    const firstElement = Number(arr.shift());
    const lastElement = Number(arr.pop());
    return firstElement + lastElement
}

function sumFirtsandLastelement(arr) {
    const firstElement = Number(arr[0]);
    const lastElement = Number(arr[arr.length - 1]);
    return firstElement + lastElement

}
sumFirtsandLastelement(['20', '30', '40'])
sumFirtsandLastelement(['5', '10'])