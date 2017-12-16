let seq = [1, 2, 3, 4, 5, 6];

// Expression Bodies

console.log(seq.map(x => x + 2));
console.log(seq.map(x => ({ x: x + 2 })));
console.log(seq.map((x, i) => x + i));
console.log(seq.map((x, i) => ({ x: x, i: i })));

seq.map(x => {
    console.log("inside map x = " + x);
});



