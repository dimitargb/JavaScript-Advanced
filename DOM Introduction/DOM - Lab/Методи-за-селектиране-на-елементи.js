// Methods for Tagrgeting DOM Elements = Select(селектиране) - Методи за селектиране
 // 1 - getElementById(); // връща id на елемента или null ако няма такова id;
 // 2 - getElementsByClassName();// връща колекция, за да извадим първия елемент казваме getElementsByClassName()[0];
 // 3 - getelementsByTagName();//  връща колекция, за да извадим първия елемент казваме getelementsByTagName()[0];
 // 4 - by CSS selector - querySelector() - връща първто съвпадение или null ако го няма;
 //    Важно !!! за да се хване class с qerySelector трябва де се сложи точка и имвро на класа ('.highlight');
 //    за да хванем два класа се изреждат с точка примерно - document.querySelector('.row.highlight') = клас- row и клас - highlight
 // 5  -  querySelectorAll() - връща всички съвпадения или ако няма съвпадения ще върне празна колекция.
 //    Важно !!! за да се хване class с qerySelector трябва де се сложи точка и имвро на класа ('.highlight');
 //    за да хванем два класа се изреждат с точка примерно - document.querySelector('.row.highlight') = клас- row и клас - highlight
//     за да извадим първия елемент казваме querySelectorAll()[0];
//     ако търсим нещо което го няма връща празна колекция [] !!!
//      Важно!!!  ако искаме да хванем id слагаме отпред #  - document.querySelector('#id');
//  Ако искаме да хванем неща които са навърази в ДОМ дървото оствяме разтояние примерно id'conetnt' и div
//   пишем document.querySelector('#content div') - така хващаме първия div в id'conetnt'
//   Ако искаме да хванем всички елементи в клас 'note' и клас 'alet' отделно не заедно пишем -('.note,.alert') !!!

//   Можем да хващаме по атрибут ('input[name='login']') - това е input  с name = login - това означава хвани input element,
//   чиито atrubut name = login;
 // querySelectorAll - връща NodeList
 // останалите методи връщат HTML Collection

 // HTML Collection and NodeList Collection can be iterated

 // querySelectorAll - връща NodeList; останалите връщат HTML collection !!!