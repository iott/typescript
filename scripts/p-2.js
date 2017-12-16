function f (x, y, ...a) {
  console.log(x, y);
  console.log(typeof a);
  console.log(a instanceof Array);
  console.log(a);
  console.log("Rest Parameter");
  console.log(a[0] === "hello");
  console.log(a[2] === 7);
  console.log(a);
      return (x + y) * a.length
}

console.log(f(1, 2, "hello", true, 7) === 9);
