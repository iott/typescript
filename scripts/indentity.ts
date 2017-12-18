function create<T>(c: { new(): T; }): T {
    return new c();
}

class Keeper {
    name: string;
    constructor(name = "keeper") {
        this.name = name;
    }
}
class BeeKeeper extends Keeper {
    hasMask: boolean;
    constructor(name = "beeKeeper") {
        super(name);
        this.name = name;
    }
}

class ZooKeeper extends Keeper {
    nametag: string;
    constructor(name = "zooKeeper") {
        super(name);
        this.name = name;
    }
}

class Animal {
    numLegs: number;
    keeper: Keeper;
    constructor(num: number, keeper: Keeper) {
        this.numLegs = 2;
        this.keeper = keeper;
    }
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}


function createInstance
<A extends Animal,
 B extends Keeper>
 (
     animal: new (num: number, keeper: B) => A,

 num: number, 
 keeper: { new(): B; }
): A {
    return new animal(num, new keeper());
}

console.log(createInstance(Animal, 2, Keeper).numLegs);

console.log(createInstance(Bee, 4, BeeKeeper).keeper);
console.log(createInstance(Lion, 4, ZooKeeper).keeper);