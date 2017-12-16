interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(aa: number, source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return "ssss";
}

interface callbackPrototype {
   (err: Error, ...arg):void
}

let cb: callbackPrototype;

