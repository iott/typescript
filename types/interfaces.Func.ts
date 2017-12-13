interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}


// 不同的参数名仍可以
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

// 没有声明返回类型

mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
// Bob
console.log(myStr);

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}


// Error: indexing with a 'string' will sometimes get you an Animal!
interface Okay {
    [x: number]: Animal;
    // [x: string]: Dog;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}
