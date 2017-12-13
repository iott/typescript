interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): void {
    // ...
}

let mySquare1 = createSquare({ colour: "red", width: 100 } as SquareConfig);

var obj = { colour: "red", width: 100 };
let mySquare = createSquare(obj);
