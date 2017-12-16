class Shape {
  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
}

var s = new Shape(1, 10, 20);
s.move(20, 40)
console.log(s);

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y)
    this._width  = width
    this._height = height
  }
  static defaultRectangle () {
    return new Rectangle("default", 0, 0, 100, 100)
  }
  hello() {
    console.log("hello");
  }
  set width  (width)  { this._width = width               }
  get width  ()       { return this._width                }
  set height (height) { this._height = height             }
  get height ()       { return this._height               }
  get area   ()       { return this._width * this._height }
}

var rect = new Rectangle(2, 10, 20, 30, 40)

console.log(rect);
console.log(Rectangle.defaultRectangle());
console.log(rect.hello());
console.log(rect.area);
console.log('start width');
console.log(rect.width);
rect.width = 100;
console.log(rect.width);
console.log('end width');
console.log(rect.area);
// console.log(rect.defaultRectangle());
// console.log(Rectangle.hello());

