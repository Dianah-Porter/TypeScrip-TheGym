let name: string = "Diane";   //string
let array: [number, string] = [1,"typescript"]; //turple with a string and a number 
let arr: number[] = [1,2];   //array
let decision: boolean = true;     //boolean
let student: {name: string, age: number, bool: boolean} = {name: "Pineapple", age: 12, bool: true};
let anything: any = "I can be anything!";   //any 
let value: unknown = "Hello, TypeScript"; // Value is unknown
let person: { name: string; age: number; hobbies: string[] } = {
    name: "John",
    age: 30,
    hobbies: ["reading", "cycling"]
};

console.log(`My name is ${name} I am ${student.age} years old! I like swimming`);
