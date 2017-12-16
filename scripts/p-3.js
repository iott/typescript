var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

console.log(other);

function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, ...params) === 9)
console.log(f(...other) === 9)

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
