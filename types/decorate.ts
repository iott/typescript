function sealed(target) {
    console.log(target);
    var a = new target();
    a.ok();
    // do something with 'target' ...
}

@sealed
class aa {
    ok() {
        console.log("hello");
    }
}

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}



