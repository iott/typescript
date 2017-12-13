class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet(mid) {
        return "Hello, " + mid + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target.greet(), propertyKey, descriptor);
        console.log(target, propertyKey, descriptor);
        console.log(delete target[propertyKey])
        console.log(descriptor.value = function() {console.log("ehll")})
    };
}

console.log(new Greeter1('ssoso'));
console.log(new Greeter1('ssoso').greet('mid'));