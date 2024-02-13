// we can create, append and remove elements form HTML dynamically
// append = да добавим едно дете към DOM дървото - appendChild()
// remove = изтриване на дете от дървото - removeChild() или remove като преди това сме взели рефернцията;
// replace = да заменим едно дете с друго - replaceChild()

// !!! create Element = document.createElement(вид на елемента); създаване на елемент.
// appendChild() - adds new Child as the last Child
// prepend - adds new Cild as first Child

// можем да направим копие - 
 let li = document.getElementById('fast');
 let newLi = li.cloneNode(true);// - копие на елемент!
 // като направим нов елемент - той съществуеа само в паметта на страницата, за да стане видим го закачаме за дървото с appnedChild();
 
// append and appendChild - разликата е че на append може да му подадем текст или стринг и той автоматично ще го закачи,на appndChild не става
 // appendChild
 let p = document.createElement('p');
 let h = document.createElement('h');

 h.appendChild(p); // adds newCild as the last Child;

 //prependChild;// adds newCild as first Child;
 let ul = document.createElement('myList');
 let d = document.createElement('li');

 ul.prepend(d); // adds newCild as first Child
