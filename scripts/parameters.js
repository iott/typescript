function f (x, y = 7, z = 42) {
      return x + y + z
}
console.log(f(1) === 50);


// Rest Parameter

function f (x, y, ...a) {
  console.log("Rest Parameter");
  console.log(a[0] === "hello");
  console.log(a[2] === 7);
  console.log(a);
      return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7) === 9);


// 
