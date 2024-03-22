function assembleCar(carObject) {
    const resultCarObj = {
        model: '',
        engine: {
            power: 0,
            volume: 0,
        },
        carriage: {
            type: '',
            color: '',
        },
        wheels: '',
    }
 
    // Set the power and volume of the engine
    if (carObject.power <= 90) {
        resultCarObj.engine.power = 90;
        resultCarObj.engine.volume = 1800;
    } else if (carObject.power <= 120) {
        resultCarObj.engine.power = 120;
        resultCarObj.engine.volume = 2400;
    } else if (carObject.power <= 200) {
        resultCarObj.engine.power = 200;
        resultCarObj.engine.volume = 3500;
    }
 
    // Check if the wheel size is an even number. The size can only be an odd number
    if (carObject.wheelsize % 2 === 0) {
        // Round down any requirements you receive to the nearest odd number
        carObject.wheelsize--;
    }
 
    resultCarObj.model = carObject.model;
    resultCarObj.carriage.type = carObject.carriage;
    resultCarObj.carriage.color = carObject.color;
    resultCarObj.wheels = [carObject.wheelsize, carObject.wheelsize, carObject.wheelsize, carObject.wheelsize];
 
     return resultCarObj;
}
assembleCar({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });

assembleCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });