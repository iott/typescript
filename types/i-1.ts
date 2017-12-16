interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): void {
}

let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

let obj = { colour: "red", widath: 100 };
let mySquare1 = createSquare(obj);
