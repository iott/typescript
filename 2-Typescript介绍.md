<!--
$theme: gaia
template: gaia
-->

TypeScript基础<p style="text-align:right;font-size:28px;margin-right:50px;color:#cFc;">:star: by calidion</p>
===
---
环境建立
===
```
npm install -g typescript
npm install -g ts-node
```
---
类型强弱
===
强类型的语言：
C/C++， Java, Pascal/Delphi， C#
弱类型的语言：
js, php, python, perl, lua

---
为什么要使用TypeScript?
===
1. 它是有类型约束的语言
2. 快速定位，提供出错

---

数据类型
===
不包括ES6已经有的类型


1. Turple

一种类型固定的值串

```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```
---

2. Enum

更加友好的类型

```
enum Color {Red, Green, Blue}
let b: Color = Color.Red;    // 0
let c: Color = Color.Green;  // 1
```

3. Any

用于定义未知类型，尽量避免

```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

---

4. Void

与Any相关，表示没有东西。

```
function warnUser(): void {
    alert("This is my warning message");
}
```

只能赋值, undefined和null

```
let unusable: void = undefined;
```

---

5. Null 和 Undefined

```
let u: undefined = undefined;
let n: null = null;
```

默认是所有类型的子类型，可以赋值给任何类型
开启`--strictNullChecks`后，只能赋值给void类型与自己

---

6. Never

是指永远不会返回值的类型，通常作用于函数

```

// 永远退出

function error(message: string): never {
    throw new Error(message);
}

// 永远执行

function infiniteLoop(): never {
    while (true) {
    }
}
```

---
类型推理(Type Inference)
===
没有指定类型时，会有一个推理的过程
比如
```
let x = 3;
```
x会得到number类型。

这种推理会出现在：
1. 初始化变量或者成员
2. 设置参数默认值
3. 确定函数返回类型时

---

类型断言(Type assertions)
===

告诉编译器你知道它是什么类型。目的是将不清楚的类型，清晰化。通常会作用于any类型上。

有两种形式：

1. <类型>变量
```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

2. 变量 as 类型
```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
---
接口(Interfaces)
===
接口是用于规范输入输出的一个约束。

1. interface示例
没有接口时

```
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

这里printLabel要求参数有一个包含label的属性。

```
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

2. 可选择属性(?)

在常规的属性后面加上`?`号，这样这个属性可以不必赋值。

```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```

如果打错了名字，会有错误提示。
```
比如`config.color`打成了`config.clor`

```
    ...
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    ...
```

3. 只读属性

只能初始interface对象，完成无法再修改属性。

```
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

```

> const vs readonly
> const => 变量
> readonly => 属性

4. 过分的类型检查（Excess Property Checks)

对于代码：
```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): void {
    // ...
}

```
调用
```
let mySquare = createSquare({ colour: "red", width: 100 });
```
会报错。因为colour不是color，并不是存在的接口类型。
解决办法：
```
let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
或者
var obj = { colour: "red", width: 100 };
let mySquare = createSquare(obj);

```

5. 函数类型（Function Types）

声明：

```
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```

定义：
```
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
```

只检查函数类型，参数名不检查，即下面的代码仍有效。
```
let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```

6. 可索引类型(Indexable Types)
示例：

```
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
// Bob
```
这里定义了StringArray这个接口，他是一个基于数值的索引，它的返回值是字符串。

除了number外，可以索引的类型还有string。但是不能同时使用数值与字符两种类型，原因是数值都会转化成为字符。
即`100`在对象里会首先转化成`'100'`再获取对象的值。

```
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
interface Okay1 {
    [x: number]: Animal;
}
interface Okay2 {
    [x: string]: Dog;
}
```

7. 类类型（Class Types）

可以在接口的属性里使用类

```
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

或者指定还有类的方法

```
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

8. 接口扩展（Extending Interfaces)

a. 单个扩展
```
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

b. 多个扩展

```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```


9. 混合类型(Hybrid Types)

```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

10. 接口扩展类(Interfaces Extending Classes)

示例：

```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}
```

SelectableControl包含所有Control的属性，包括private属性state;
因为 包含有Control的私有属性，所以SelectableControl只能被Control的子类实现， 即Button类。
而Image类无法实现SelectableControl。

```
class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```

---
类(Classes)
===

1. 访问控制符(public , private, protected)

- 默认public,但推荐显式打出来public，如下：
```
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

- private, 除了类内部使用，其它地方不能使用

```
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
```

- protected, 类内部与子类内部可以使用，其它地方不可使用

```
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

2. 只读标识（Readonly modifier)

你可以对属性设置readonly, readonly属性必须在声明或者创建的时候初始化。

```
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
```
- 参数只读

```
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
```

3. 静态属性(Static Properties)

静态属性只有类才能访问到，对象实例无法访问到。

```
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

4. 抽象类(Abstract Classes)

抽象类必须被继承才能使用，同时必须包含抽象方法。

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
```

```
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type
```

---
范型(Generics)
===
高级主题，范型主要是给那些写底层的库的程序员使用的。
这些库要求不要API要定义的好，并且还尽量通用化。
要求组件能适应当前与未来的变化。
这个时候你可以考虑选择范型。

1. 范型的Hello World程序（Hello World of Generics）
查看下面的代码：

- 处理数值
```
function identity(arg: number): number {
    return arg;
}
```

- 处理所有类型

```
function identity(arg: any): any {
    return arg;
}
```

- 处理所有类型，但仍可以知道数据的类型

```
function identity<T>(arg: T): T {
    return arg;
}
```

调用：
```
let output = identity<string>("myString");
```

2. 使用范型变量(Working with Generic Type Variables)

有时候，我们需要泛型还能提供更多的信息。比如提供长度信息，这时光有泛型本身就会不够。这是时候，我们需要我们将已经有的类型与泛型结合起来。比如跟数组的结合。

```
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```
这样我们就可以获得泛型类型的长度信息。

或者更直观的写，其中Array可以被其它的类型替换。

```
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

3. 泛型类型(Generic Types)

```
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

由于泛型的类型名是可以任意的，所以我们可以将T改成U或者其它的字符

```
let myIdentity: <U>(arg: U) => U = identity;
```

- 可以将泛型类型当成是一个对象的调用类型
```
let myIdentity: {<T>(arg: T): T} = identity;
```

- 可以定义成interface

```
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity: GenericIdentityFn = identity;
```

- 将T定义成是interface级别的

```
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

4. 泛型类(Generic Classes)

- 定义
```
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

```

- 实现number类型

```
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

- 实现字符类型

```
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

5. 泛型限制(Generic Constraints)


- 比如我们需要泛型必须有length属性

```
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
```

- 传入参数

错误：
```
loggingIdentity(3);  // Error, number doesn't have a .length property
```

正确：
```
// 参数是泛型时，类型检测又变宽了
loggingIdentityW({length: 10, value: 3});
```

- 在泛型约束中使用类型参数(Using Type Parameters in Generic Constraints)

```
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```

- 在泛型里使用类类型(Using Class Types in Generics)

示例：

```
function create<T>(c: {new(): T; }): T {
    return new c();
}
```

```
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
```

---
模块
===
1. export

- export一个声明

导出接口声明

```
// Validation.ts
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
```

导出变量与类声明

```
// ZipCodeValidator.ts
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
```

- export一个语句

```
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
```

- 重新导出
```
export * from "./Validation"; // exports interface 'StringValidator'
```

2. import

- 导入一个参数

```
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();
```

- 重命名一个导入

```
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();
```

- 导入全部到一个变量
```
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```

- 只为副作用导入(Import a module for side-effects only)

```
import "./my-module.js";
```

3. 默认导出(Default exports)

每个模块有且只有一个可以默认的导出。默认导出会让引入变的简单。

```
// ZipCodeValidator.ts
export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
```

```
// exe.ts
import validator from "./ZipCodeValidator";

let myValidator = new validator();
```

4. export = 和 import = require()
通常我们不使用export =，如果一旦使用了export =，那么在ts里就必须使用import = require()这种格式调用。

```
// ZipCodeValidator.ts
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator;
```

```
import zip = require("./ZipCodeValidator");

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new zip();

// Show whether each string passed each validator
strings.forEach(s => {
  console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});
```

---
装饰器(Decorators)
===
是一种特殊的声明，可以作用于类，成员方法，访问器(Accessor)，属性，参数等之上的声明。
语法格式
```
@expression
```
其中`expression`必须是函数，并且可以在运行时被调用。

示例：
```
function sealed(target) {
    // do something with 'target' ...
}
```

- 最简单的示例
```
function sealed(target) {
    console.log(target);
    var a = new target();
    a.ok();
}

@sealed
class aa {
    ok() {
        console.log("hello");
    }
}
```

- 装饰器工厂(Decorator Factories)
通常装饰器都是用来批量生产结果的，因为通常我们需要实现工厂化
```
function color(value: string) { // this is the decorator factory
    return function (target) { // this is the decorator
        // do something with 'target' and 'value'...
    }
}
```

- 装饰器组合

单行
```
@f @g x
```

多行
```
@f
@g
x
```

- 装饰器求值顺序(Decorator Evaluation)

1. 实例成员上的Parameter Decorators => Method => Accessor => Property Decorators
2. 静态成员上的Parameter Decorators => Method => Accessor => Property Decorators
3. 构建器(constructor)上的Parameter Decorators
4. 类上的类Decorators


---
各类装饰器
===
1. 类装饰器(Class Decorators)


```
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj['foo']() // 'foo'
```


```
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```
```
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
```

2. 方法装饰器(Method Decorators)
```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

```

3. 访问器装饰器(Accessor Decorators)

```
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

```

4. 属性装饰器(Property Decorators)

```
class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}

import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

```

5. 参数装饰器(Parameter Decorators)
(略)


---












































