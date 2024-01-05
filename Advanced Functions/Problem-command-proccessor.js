function commandProcessor(){
    let string = '';

    function append(str){
        string += str;
    }

    function removeStart(n){
        string = string.slice(n);
    }

    function removeEnd(n){
          string = string.slice(0, -n);
    }

    function print(){
        console.log(string);
    }

    return obj = {
        append,
        print,
        removeStart,
        removeEnd
    }
}

const myFunc = commandProcessor();
myFunc.append('hello');
myFunc.append('again');
myFunc.removeStart(3);
myFunc.removeEnd(4);
myFunc.print();