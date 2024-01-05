function createCounter(counter) {
    function increment() {
        counter++;
    }

    function decrement() {
        counter++;
    }

    function get() {
        return counter;
    }

    const methods = {
        increment,
        decrement,
        get
    }

    return methods
}

const counter1 = createCounter(1);
const counter2 = createCounter(2);

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1);
console.log(counter1.get());