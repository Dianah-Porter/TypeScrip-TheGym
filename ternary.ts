let age: number = 36;

// Check if the person is an adult
let result: string = (age >= 18) ? "Adult" : "Not Adult";

console.log(result);

// Output: Adult

let a: number = 3;
let res: string = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${res}.`);