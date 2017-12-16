interface StringArray {
    [index: number]: string;
}

interface IntegerArray {
    [index: number]: number;
}

interface strArray {
    [index: void]: number;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);
let iArray: IntegerArray;
iArray = [ 1, 1];
console.log(iArray);


let strA : strArray;
strA = [1, 2];
console.log(iArray);
console.log(strA);

// Bob
