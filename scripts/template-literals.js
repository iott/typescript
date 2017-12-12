
var assert = require('assert');

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

var world = "World";
var world1 = "World1";

var singleMessage = `Hello ${world}!`;
console.log(message);
console.log(singleMessage);

function tag(strings, world, ss) {
  console.log(strings + world + ss);
}

tag`string text line 1 \n string text line 2`;
tag`string text line 1 \n string text line 2${world}`;

tag`string text line 1${world} \n string text line 2${world1}`;


function quux (strings, ...values) {
    assert(strings[0] === "foo\n");
    assert(strings[1] === "bar")
    assert(strings.raw[0] === "foo\\n")
    assert(strings.raw[1] === "bar")
    console.log(values);
    assert(values[0] === 42)
}
quux `foo\n${ 42 }bar`
assert(String.raw `foo\n${ 42 }bar` === "foo\\n42bar")


function quux1 (strings, ...values) {
    assert(strings[0] === "foo\n");
    assert(strings[1] === "bar")
    assert(strings.raw[0] === "foo\\n")
    assert(strings.raw[1] === "bar")
    assert(values[0] === world)
    console.log(values);
}
quux1 `foo\n${ world }bar`


assert(String.raw `foo\n${ world }bar` === "foo\\nWorldbar")
