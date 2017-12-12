let a = [1, 2, 3, 4];
let b = ['a', 'b', 'c'];

for (let i = 0; i < a.length; i++) {
      let x = a[i]
}
for (let i = 0; i < b.length; i++) {
      let y = b[i]
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
      callbacks[i] = function () { return i * 2 }
}
console.log("scoped variables");
console.log(callbacks[0]() === 0);
console.log(callbacks[1]() === 2);
console.log(callbacks[2]() === 4);


// Scoped Functions

console.log("scoped functions");
{
  function foo () { return 1 }
  console.log( foo() === 1);
  {
    function foo () { return 2 }
    console.log(foo() === 2);
  }
  console.log(foo() === 1);
}

