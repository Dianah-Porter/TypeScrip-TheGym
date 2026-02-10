abstract class Shape2D{
    abstract area(): number;
}

class Circle extends Shape2D{
    radius: number;
    constructor(radius: number){
        super();   //to call parent constructor 
        this.radius = radius;
    }
    area(){
        return this.radius * this.radius;
    }
}
class Rectangle extends Shape2D{
    width: number;
    length: number;
    constructor(width: number, length: number){
        super();
        this.width = width;
        this.length = length;
    }
    area(){
        return this.width * this.length;
    }
}

const obj1 = new Circle(2);
console.log(obj1.area());

const obj2 = new Rectangle(4,5);
console.log(obj2.area());


//question 2
type ANotification = 
  | { type: 'email'; to: string; subject: string; }
  | { type: 'sms'; to: string; phone: string; }
  | { type: 'push'; to: string; deviceId: string; };

  const datae: ANotification = {
    type: 'email',
    to: 'Dinah',
    subject: 'boxnh'
  };

  function assertNever(x: never): never {
    throw new Error("Not exist!");
}

function sendNotification(n: ANotification): void{
    switch(n.type){
        case 'email':
            console.log(`email sent ${n.to}, ${n.subject}`);
            break;
        case 'sms':
            console.log(`sms sent ${n.to}, ${n.phone}`);  
            break;
        case 'push':
            console.log(`push sent ${n.to}, ${n.deviceId}`);
            break;
        default:
            assertNever(n);

    }
}

sendNotification(datae)

//question 3
//For example, if given [1, "hello", 2, "world", 3], it should return { strings: ["hello", "world"], numbers: [1, 2, 3] }.
function separateTypes(array: (string | number)[]){
    let numbers: number[] = array.filter(e => typeof e === 'number');
    let strings: string[] = array.filter(e => typeof e === 'string');
    return {numbers: numbers, strings: strings}
}
console.log(separateTypes([1, "hello", 2, "world", 3]));


//Questions 4   TypeScript's utility types 

type User = {
    name: string, 
    age: number
}
type PartialUser = Partial<User>

function validateUser(api: unknown){
    if(typeof api === 'object' && api !== null){
        if("name" in api && "age" in api){
            console.log(api.name)
        }
    }
    else{
        throw new Error("Error")
    }
}
console.log(validateUser({name: "Dinah", age: 22 }));

//question 5 mental
interface Config {
  host: string;
  port: number;
  timeout: number;
}
type PartialWithExceptions<T, K extends keyof T> =
  Partial<T> & Pick<T, K>;

type PartialConfig = PartialWithExceptions<Config, 'host'>;

//test the result 
const config1: PartialConfig = {
  host: "localhost"
}; // ✅ correct

const config2: PartialConfig = {
  host: "localhost",
  port: 3000
}; // ✅ correct

//*******************************/
interface Config {
  host: string;
  port: number;
  timeout: number;
}
type A = Partial<Config>;
type B  = Pick<Config, 'host'>;
type C = A & B;

let st: C = {
  host: 'local',
  port: 300
}

console.log(st)

