var quantity = 35;
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
var score = 96;
if (score >= 40) {
    console.log("You passed the examination.");
}
var fruits = ["banana", "pineapple", "Orange"];
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
//while loop 
var num = 1;
while (num < 7) {
    console.log(num);
    num++;
}
//ForEach loop 
var nums = [11, 22, 23, 34];
function printNumber(arg) {
    console.log(arg);
}
nums.forEach(printNumber);
var students = ['Jane', 'Samantha', 'Bob'];
function addText(item, index, arr) {
    arr[index] = 'Hello ' + item;
}
students.forEach(addText);
console.log(students); //[ 'Hello Jane', 'Hello Samantha', 'Hello Bob' ]
students.forEach(function (elem) { return console.log(elem); });
// Hello Jane
// Hello Samantha
// Hello Bob
while (true) {
    // let userInput: string | null = prompt('Enter a number: ');
    var num_1 = Number(0);
    if (num_1 === 0)
        break;
    console.log(num_1);
}
//break statement
for (var i = 1; i < 6; i++) {
    if (i === 4)
        break;
    console.log("Number ".concat(i));
}
for (var n = 1; n < 10; n++) {
    // if(n === 3) continue;
    if (n > 4 && n < 9) {
        continue;
    }
    console.log("Count ".concat(n));
}
//Switch...case statement
var dayOfWeek = 9;
switch (dayOfWeek) {
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
