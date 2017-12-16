function getCounter() {
    var counter = function (start) {
        console.log(start);
        return "Hello World!";
    };
    // counter.interval = 123;
    // counter.reset = function () { };
    return counter;
}
var c = getCounter();
console.log(c);
console.log(c(10));
// c.reset();
// c.interval = 5.0;
