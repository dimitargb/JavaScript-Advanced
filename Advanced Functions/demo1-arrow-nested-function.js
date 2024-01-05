const obj = {
    name: 'Peter',
    outer(){
        console.log(this);
        const inner = () =>{
            console.log(this);
        }
        inner();
    }
}
obj.outer();