interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log(start);
        return "Hello World!";
     };
    // counter.interval = 123;
    // counter.reset = function () { };
    return counter;
}
let c = getCounter();
console.log(c);
console.log(c(10));
// c.reset();
// c.interval = 5.0;
