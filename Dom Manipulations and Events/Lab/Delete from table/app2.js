function deleteByEmail() {
    // read input value;
    const query = document.querySelector('input[name="email"]').value;
    // get all rows;
    const rows = document.querySelectorAll('#customers tbody tr');
    // iterate rows and compare content to input;
    const rowsArray = Array.from(rows);

  
    
    const match = rowsArray.find(row => row.children[1].textContent==query);

    if(match){
        match.remove();
        document.getElementById('result').textContent = 'Deleted.';
    }
        

    document.getElementById('result').textContent = 'Not found.';
}