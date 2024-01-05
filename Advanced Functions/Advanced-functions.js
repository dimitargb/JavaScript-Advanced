const obj = {
    name: 'Peter',
    outer(){
        console.log(this);
        inner();
        function inner(){
            console.log(this);
        }
    }
}
console.log(obj); // така се извиква обекта 
const func = obj.outer; // функцията е еизкарана извън обекта
func();// така се извивка глобалния обект защото функцията е изкарана извън контекста;
