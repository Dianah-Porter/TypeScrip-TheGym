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


//generic classes 

class Container<T>{
    private data: T;
    constructor(value: T){
        this.data = value;
    }
    getdata(){
        return this.data;
    }
}

const obj3 = new Container<string>('Programming');
console.log(obj3.getdata());

//generic constraints
function logLength<T  extends {length: number}>(item: T): void{
    console.log(item.length)
}

//generics with arrays 
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElement<string>(["a", "b", "c"])); // Output: a
console.log(getFirstElement<number>([10, 20, 30]));    // Output: 10