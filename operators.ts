let number: number= 2 + 3;
let product: number = 4 * 3;
let dividend: number = 10;
let result: number = dividend / 2; 
 dividend++;
console.log("dividing" + result);
console.log(dividend)
let num: number = 7;

// Using Addition Assignment
num += 5;
console.log("After += 5:", num);  

// Using Subtraction Assignment
num -= 2;
console.log("After -= 2:", num);  

// Using Multiplication Assignment
num *= 3;
console.log("After *= 3:", num);  

// Using Division Assignment
num /= 2;
console.log("After /= 2:", num);  

// Using Remainder Assignment
num %= 4;
console.log("After %= 4:", num);  

// Using Exponentiation Assignment
num **= 2;
console.log("After **= 2:", num);  

let age: number = 18;   //ternary operator 
let canVote: string = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); 

let greetings = "Hello, TypeScript!";
let typeOfgreetings = typeof greetings; // Returns 'string'

console.log(typeOfgreetings); 