class P {
  public a: string;
  private b: string;
  protected c: string;

  constructor(a) {
    this.a = a;
    this.b = a;
    this.c = a;
  }
  getB() {
  return this.b;
  }
  getC() {
  return this.c;
  }
}

class S extends P {
   getD() {
   return this.c;
   }
}



let p = new P('100');
console.log(p.a);
console.log(p.getB());
console.log(p.getC());
let c = new S('aaa');
console.log(c.getC());
console.log(c.getD());


class Octopus {
    readonly numberOfLegs: number = 8;
    constructor (readonly theName: string) {
        console.log(theName);
        theName = '1000';
        console.log(theName);
        theName = '1111000';
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

