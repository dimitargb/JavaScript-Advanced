const phonebook = {
    'Jhon': '003598884477',
    'Michael': '003598884445',
    'Pamela': '003598884425'
}

for (const key in phonebook) {
    console.log(`${key} => ${phonebook[key]}`);       
    }
 
//за превръщане на обекта в масив се използава Object.    
const keys = Object.keys(phonebook); // получаваме масив от keys
console.log(keys);
const values = Object.values(phonebook);
console.log(values); //получаваме масив от стойности
const entries = Object.entries(phonebook);
console.log(entries);// получаваме 2 масива от свойстав и стойности;
console.log(entries[0]);
console.log(entries[1][0]);
