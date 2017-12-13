function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");

console.log(output);

let output1 = identity("myString 1");  // type of output will be 'string'

console.log(output1);


function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
console.log(loggingIdentity(['string']));

function Identity<T>(arg: T): T {
    return arg;
}

let myIdentity: (<T>(arg: T) => T )= identity;

console.log(myIdentity);
console.log(myIdentity([1]));

let myIdentity1: <B>(arg: B) => B = identity;
let myIdentity2: <为>(arg: 为) => 为 = identity;

console.log(myIdentity1([12]));
console.log(myIdentity2(['aaa']));

let myIdentity3: {<T>(arg: T): T} = identity;

console.log(myIdentity3(['aaa']));

interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity4: GenericIdentityFn<number> = identity;

console.log(myIdentity4(1));

interface Lengthwise {
    length: number;
}

function loggingIdentityW<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// 参数是泛型时，类型检测又变宽了
loggingIdentityW({length: 10, value: 3});








