let seq = [1, 2, 3, 4, 5, 6];

// Expression Bodies

console.log(seq.map(x => x + 2));
console.log(seq.map(x => ({ x: x + 2 })));
console.log(seq.map((x, i) => x + i));
console.log(seq.map((x, i) => ({ x: x, i: i })));


// Statements Bodies

seq.map(x => {
  console.log("inside map x = " + x);
});

function arrowFunc() {
  this.seq = [1, 2, 3];
  this.seq.map(x => {
    console.log("access this, when x =  " + x);
    console.log(this.seq.length === 3);
  });
}

new arrowFunc();
console.log(this);
