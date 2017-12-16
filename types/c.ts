interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
}


console.log(new Clock(1, 2));

interface Shape {
    color: string;
    area: number;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.area = 100;

console.log(square);


interface PenStroke {
    penWidth: number;
}

interface SquareWithPen extends Shape, PenStroke {
    sideLength: number;
}

let squarePen = <SquareWithPen>{};
squarePen.color = "blue";
squarePen.sideLength = 10;
squarePen.penWidth = 5.0;
console.log(squarePen);



