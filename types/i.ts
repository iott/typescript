interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface Point {
readonly x: number;
readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

p1['z'] = 5; // error!
console.log(p1);
