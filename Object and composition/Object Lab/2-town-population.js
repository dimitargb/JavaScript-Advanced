function registryOfTowns(townsAsStrings) {
    // create collaction where to keep result - колекцията ще бъде речник
    const result = {};
    // parse input
    for (let line of townsAsStrings) {
        const token = line.split('<->');
        const name = token[0];
        const population = Number(token[1]);
       // in is like hasOwnProperty
        //ckeck if key exsists
        if (name in result) {
            result[name] += population //обръщаме от масив в обект
        }
        else {
            result[name] = population // обръщаме от масив в обект
        }
    }
    //print result
    for (const key in result) {
        console.log(`${key}: ${result[key]}`);
    }
}
registryOfTowns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
registryOfTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])