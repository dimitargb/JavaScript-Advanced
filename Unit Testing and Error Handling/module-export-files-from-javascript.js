function sum(a, b){
    return a + b;
}

function substarct(a, b){
    return a - b;
}

//  Към  module.exports се подава обект от двете функций !!!

module.exports = {
    sum,
    substarct,
};