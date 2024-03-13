function createObject(arr) {
    let myObj = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const calories = arr[i + 1];

        if (i % 2 === 0) {
            myObj[element] = Number(calories);
        }
    }
   return myObj;
}
createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
createObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])