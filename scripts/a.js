let a = [1, 2, 3, 4];
let b = ['a', 'b', 'c'];

for (let i = 0; i < a.length; i++) {
      const xx = "hello";
      let x = a[i]
      var aa = x;
      console.log(x);
}


console.log(typeof i);
console.log(typeof x);
console.log(typeof xx);
console.log(aa);

for (let i = 0; i < b.length; i++) {
      let y = b[i]
      console.log(y);
}

console.log(typeof y);

let callbacks = []
for (let i = 0; i <= 2; i++) {
      callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());


