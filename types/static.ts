class P {
    static i: number = 0;
    static instance: P;
    p: number = 0;
    static getIntance() {
        console.log(this.instance);
        if (!P.instance) {
            P.instance = new P();
        }
        console.log(this.instance);
        return P.instance;
    }
    private constructor() {

    }
    inc() {
        return P.i++;
    }
}



let p:P = P.getIntance();
let q = P.getIntance();

console.log(p.inc());

console.log(q.inc());
console.log(p.inc());
console.log(q.inc());
