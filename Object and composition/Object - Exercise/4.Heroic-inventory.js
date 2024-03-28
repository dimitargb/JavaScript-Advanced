function inventoryRegister(arr){
const result = arr.reduce((acc, currentElement) => {
    const[name, level, items] = currentElement.split(' / ');
    const hero = {
        name,
        level: Number(level),
        items: items ? items.split(', ') : [],
    }
    acc.push(hero);
    return acc;
    
},[])
  return JSON.stringify(result);

}
inventoryRegister(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

inventoryRegister(['Jake / 1000 / Gauss, HolidayGrenade']);