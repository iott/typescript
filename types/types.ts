enum Color { Red, Green, Blue = 10 };
let c: Color = Color.Green;
let b: Color = Color.Red;    // 0
let a: Color = Color.Blue;    // 0


console.log(c);
console.log(b);
console.log(a);

let unusable: void = undefined;
let u: void = null;
console.log(unusable);
console.log(u);

try {
    let u1: void = null;
} catch (e) {
    console.log(e);
}


let un: undefined = undefined;
let n: null = null;

