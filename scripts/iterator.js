let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
           next () {
               [ pre, cur ] = [ cur, pre + cur ]
               return { done: false, value: cur }
           }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}

for (let n of [1, 2, 3, 4]) {
  console.log(n);
}

for(var i = 0; i < [1, 2, 3, 4].length; i++) {
}
