// DOM - Document Object Model
// API - Application Programming Interface - интерфейс за програмиране на приложения
// за да дотъпим DOM - пишем в консолата window.document - нарича се global в Node.js иначе се нарича window.
// всичко закачено за window се нарича глобална рефернция и не нужно да пишем window отпред за да го достъпим
// примерно в конзолата за да го дoстъпим пишем само document или history  и location и т.н.
// document връща DOM !!!
// Elements == Inspector do Console там се вижда DOM дървото
// DOM  представялва визли сързани с обекти
// DOM дървото има методи ( Methods ) действия кото можем да извършваме върху HTML елементите и свойства( Properties) с кото ние можем да четем данни и да ги променяме.
// With DOM methods we can create or delete HTML elements.
// За да променим с код  дървото трябва да да имаме рефернция към някой от тези елементи
// Е Elements натискаме с дясно копче на мишката и отиваме на Store as global!!! variable друг браузер се нарича Use in console.

// 1 метод за изпълняване на код с inline script показано в примера с HTML
// 2 метод за изпълняване на код с импортиране на външен файл - най добрия метод !
// Firefox можем да сложим - Privacy Badger; Ghostery; uBlockOrigin// можем да ползваме браузера Brave

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
 // querySelectorAll - връща NodeList
 // останалите методи връщат HTML Collection

 // HTML Collection and NodeList Collection can be iterated