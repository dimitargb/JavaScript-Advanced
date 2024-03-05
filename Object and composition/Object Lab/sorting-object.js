const phonebook = {
    'Dani': '003598884477',
    'Antony': '003598884445',
    'Ema': '003598884425'
}
const entries = Object.entries(phonebook);
entries.sort((a, b) => a[0].localeCompare(b[0]));
console.log(entries);

// превръщане на сортирания мсива обратно в обект
const sorted  = Object.fromEntries(entries);
console.log(sorted);