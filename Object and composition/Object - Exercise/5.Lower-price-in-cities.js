function lowerPrice(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const [town, product, price] = element.split(' | ');
        if (!obj[product]) obj[product] = {};
        obj[product][town] = Number(price);
    }
    let finalResult = [];

    for (const key in obj) {
        let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        finalResult.push(`${key} -> ${price} (${town})`)
        console.log(sorted);
    }
    console.log(finalResult.join('\n'))

}

lowerPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);