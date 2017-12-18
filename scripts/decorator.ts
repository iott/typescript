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
        console.log(target);
        console.log(target.greeting = "World!");
        console.log(propertyKey);
        console.log(descriptor);
        console.log(descriptor.value());
        let cb = descriptor.value;
        descriptor.value = function() {
            console.log('inside greet');
            return "Valued: " + cb();
        }
        console.log(descriptor.value());
        descriptor.enumerable = value;
    };
}

let g = new Greeter('china');
// console.log("inside greet");
console.log(g.greet());