enum Color {Red, Green, Blue}
let a: Color = Color.Blue;    // 0
let b: Color = Color.Red;    // 0
let c: Color = Color.Green;  // 1


enum S {
    AA = 'AA',
    BB = 'bb'
}


console.log(a, b, c);
console.log(Color[0], Color[1], Color[2]);
console.log(Color);
console.log(S);

