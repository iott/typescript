let assert = require("assert");

let target = {
  foo: "Welcome, foo"
}
let proxy = new Proxy(target, {
  get (receiver, name) {
    return name in receiver ? receiver[name] : `Hello, ${name}`
  }
})
assert(proxy.foo   === "Welcome, foo")
assert(proxy.world === "Hello, world")
console.log(proxy.yyy)
console.log(proxy.ooo)

