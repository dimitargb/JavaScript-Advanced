function sum(a, b){
    return a + b;
}

describe('Main test', function(){
    it('works with whole numbers', function(){
        if(sum(3, 5) !== 8 ) {
            throw new Error('Incorrect sum');
        }
    });
    it('works with floating point numbers', function(){
       if(sum(0.1, 0.2) !== 0.3){
        throw new Error('Incorrect sum')
       }
    });
});