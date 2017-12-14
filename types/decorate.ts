function sealed(target) {
    console.log(target);
    var a = new target();
    a.ok();
    target.aa = 100;
    // do something with 'target' ...
}

@sealed
class aa {
    ok() {
        console.log("hello");
    }
}

// console.log(aa['aa']);
console.log(aa['aa']);

let ab = 100;



