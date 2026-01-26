let quantity: number = 35;

if (quantity > 0) {
    console.log("Positive number");
}

else if (quantity < 0) {
    console.log("Negative number");
}
else {
    console.log("Zero");
}

// Output: Positive number


let score: number = 96;

if (score >= 40) {
    console.log("You passed the examination.");
}

let fruits: string[] = ["banana", "pineapple", "Orange"];
for(let fruit of fruits) console.log(fruit);


//while loop 
let num: number = 1;
while(num  < 7){
    console.log(num);
    num++;
}
 //ForEach loop 
let nums: number[] = [11, 22, 23, 34];
function printNumber(arg: number): void{
    console.log(arg)
}
nums.forEach(printNumber);

let students: string[] = ['Jane', 'Samantha', 'Bob'];
function addText(item: string, index: number, arr: string[]){
    arr[index] = 'Hello ' + item;
    
}

students.forEach(addText);
console.log(students);   //[ 'Hello Jane', 'Hello Samantha', 'Hello Bob' ]

students.forEach(elem => console.log(elem));
// Hello Jane
// Hello Samantha
// Hello Bob

while(true){
    // let userInput: string | null = prompt('Enter a number: ');
    let num: number = Number(0);

    if(num === 0) break;
    console.log(num);
}

//break statement
for(let i: number = 1; i < 6; i++){
    if( i === 4) break;
    console.log(`Number ${i}`);
} 

for(let n: number = 1; n < 10; n++){
    // if(n === 3) continue;
    
    if (n > 4 && n < 9) {
    continue;
}
console.log(`Count ${n}`);
}

//Switch...case statement

let dayOfWeek: number = 9;
switch(dayOfWeek){
    case 1:
       console.log('Monday');
       break;
    
    case 2: 
       console.log("Tuesday");
       break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    default: 
        console.log("Out of days no appointment");
}



//simple calculator using switchcase 
let userInput: string | null = prompt("Enter the value of number1: ");
const number1: number = Number(userInput);

userInput = prompt("Enter the value of number2: ");
const number2 = Number(userInput);

const operator: string | null = prompt("Enter an operator ( either +, -, * or / ): ");

let result: number;

switch(operator) {

    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log("Invalid operator");
}