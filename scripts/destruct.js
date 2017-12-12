var assert = require("assert");

var list = [ 1, 2, 3 ]
var [ a, , b ] = list
console.log(a, b);
[ b, a ] = [ a, b ]
console.log(a, b);

var {c, d}   = {d: 1, c: 2};

console.log(c, d);


var {e, f: i}   = {e: 1, f: 2};

console.log(e, typeof f, i);

var {l: {
    m: n
}}   = {j: 1, j: 2, l: {m: 1}};

console.log(n);

// 默认值

var obj = { o: 1 }
var list = [ 1 ]
var { o, p = 2 } = obj
var [ x, y = 2 ] = list

// 参数匹配

function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })


// 软件解构

var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
assert(a === 7)
assert(b === 42)
assert(c === 3)
assert(d === undefined)