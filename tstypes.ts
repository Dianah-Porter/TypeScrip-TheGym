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
