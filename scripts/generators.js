// Fibonacci

let fibonacci = {
    *[Symbol.iterator]() {
        let pre = 0, cur = 1
        for (; ;) {
            [pre, cur] = [cur, pre + cur]
            yield cur
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}

// range

function* range(start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i) // 0, 2, 4, 6, 8
}

// Match

let fibonacci1 = function* (numbers) {
    let pre = 0, cur = 1
    while (numbers-- > 0) {
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}

for (let n of fibonacci1(10))
    console.log(n)

let numbers = [...fibonacci1(10)]

let [n1, n2, n3, ...others] = fibonacci1(10)

console.log(others);

// aaa

function async(proc, ...params) {
    var iterator = proc(...params)
    return new Promise((resolve, reject) => {
        let loop = (value) => {
            let result
            try {
                result = iterator.next(value)
            }
            catch (err) {
                reject(err)
            }
            if (result.done)
                resolve(result.value)
            else if (typeof result.value === "object"
                && typeof result.value.then === "function")
                result.value.then((value) => {
                    loop(value)
                }, (err) => {
                    reject(err)
                })
            else
                loop(result.value)
        }
        loop()
    })
}

//  application-specific asynchronous builder
function makeAsync(text, after) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), after)
    })
}

//  application-specific asynchronous procedure
async(function* (greeting) {
    let foo = yield makeAsync("foo", 300)
    let bar = yield makeAsync("bar", 200)
    let baz = yield makeAsync("baz", 100)
    return `${greeting} ${foo} ${bar} ${baz}`
}, "Hello").then((msg) => {
    console.log("RESULT:", msg) // "Hello foo bar baz"
})


class Clz {
    * bar() {
        console.log("inside");
        yield;
        console.log("inside 2");
        yield

    }
}
let Obj = {
    * foo() {
        console.log("inside o 1");
        yield;
        console.log("inside o 2");
        yield
    }
}

let a = new Clz();
a.bar().next()
a.bar().next()

Obj.foo().next();

Obj.foo().next();
var i = 0;

function* aaaa() {
    return yield i++;
}

aaaa().next();
console.log(i)
aaaa().next();
console.log(i)