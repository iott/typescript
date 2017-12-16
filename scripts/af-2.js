
function arrowFunc() {
    this.seq = [1, 2, 3];
    this.seq.map(x => {
          console.log("access this, when x =  " + x);
          console.log(this.seq.length === 3);
        });
}

arrowFunc();



