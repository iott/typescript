function f (x, y = 7, z = 40) {
  console.log(x, y, z);
      return x + y + z
}
console.log(f(1) === 50);

function f2(x, y=100) {
  console.log(x, y);
}

f2()
f2(100, 20)
f2(100)
