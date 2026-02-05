//Generics
// Generic function that returns the input value
function identity<T>(value: T ): T{
    return value;
}

console.log(identity<string>("Diane"));
console.log(identity<number>(23));

//generic interfaces 
interface Box<T>{
    name: T;
    printAge(): void;
}

class Rectangle implements Box<string>{
    name: string ;
    constructor(name: string){
        this.name = name;
    }
    printAge(): void {
        console.log("This is a box!", this.name)
    }
}

const obj = new Rectangle("Yellow")
obj.printAge();