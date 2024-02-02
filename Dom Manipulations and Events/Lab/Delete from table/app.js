function deleteByEmail() {
    // read input value;
    const query = document.querySelector('input[name="email"]').value;
    // get all rows;
    const rows = document.querySelectorAll('#customers tbody tr');
    // iterate rows and compare content to input;
    const rowsArray = Array.from(rows);

    let deleted = false;

    for (let row of rowsArray) {
        const list = row.children[1];

        if (list.textContent == query) {
            // remove matching row;
            row.remove();
            deleted = true;
        }

    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}