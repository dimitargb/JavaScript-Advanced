
function addItem() {
    // read input value
    const text = document.getElementById('newItemText').value;

    // create new <li>
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener(('click'), () => li.remove());

    // obtain reference to list element
    const list = document.getElementById('items');



    // add new li to list
    list.appendChild(li);

    // optional: clear input field
}