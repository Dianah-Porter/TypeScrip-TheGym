let age: number = 23;
let isAdult: boolean = age > 18 && false;
console.log(isAdult);

//Boolean function  Boolean()
let num: number = 12;
let bool: boolean = Boolean(num);
console.log("Boolean() = ", bool)    //true
console.log("Typeof = ",typeof bool);

let fa: number = 0
let undef = undefined;
console.log(Boolean(fa))  //false   => undefined,'', null, 0, --> false
console.log(Boolean(undef))  //false

//Boolean function 
let a: boolean = true;
let bf = new Boolean(true);

console.log(a) //true
console.log(bf) //[Boolean: true]
console.log(typeof a) //boolean
console.log(typeof bf) //object

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
const currentDirection = Direction.Up;
console.log(`Moving ${currentDirection}`);


//enums 
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

// Direct member access
console.log("First day of the week:", Day.Sunday);   //0

// Index access using a variable,
let dayIndex = Day.Monday;
console.log("Second day of the week:", Day[dayIndex]); //Monday


//void
const logfun = (): void =>{
    console.log("Hello");
}
logfun();

// function showFatalError(): never {
//     throw new Error("A fatal error occurred. Please restart the app.");

// }
// showFatalError()
function keepRunning(): never{
    while (true) {
        console.log("Still running...");
    }
}

//null
let nums: number | null = null;
console.log(typeof nums);  // object
console.log(nums);  // null

//alias
type Adder = (num1: number,num2: number) => number;
const addition: Adder = (x, y ) => x + y;

console.log(addition(3,5));

//car interface
interface Car {
    name: string;
    year: number;
    color?: string;
}

const carObj: Car = {
    name: 'suzuki',
    year: 2024,
    
}
console.log(carObj.name);
console.log(typeof carObj.year);

//interfaces 
interface Animal{
    name: string;
    sound: string;
    makeSound(): void; 
}

class Dog implements Animal{
    name: string;
    sound: string;

    constructor(name: string, sound: string){
        this.name = name;
        this.sound = sound;
    }
    makeSound(): void {
        console.log(`${this.name} says: ${this.sound}`);
    }
}
const obj = new Dog("Simba", "wu wu wu barking ...");
obj.makeSound()

//type assertion 
let word = 'Hello' as string;
let words = <string>'Hello';

class Person{
    public name: string;
    private gender: string;
    protected age: number;

    constructor(name:string, gender: string, age: number){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    showName(): void{
        console.log(`The name is ${this.name} and is ${this.gender} `)
    }
}

class Student extends Person{
showAge(): void{
    console.log(`The student age is ${this.age} years old`)
}
}

let ob = new Person("Diane", "Female", 22);
ob.showName();

let obj2 = new Student("Diane", "Female", 32);
obj2.showAge();

