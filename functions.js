function greet(name) {
    console.log("Hello ".concat(name, "!"));
}
var displayPi = function () {
    console.log("PI = 3.14");
};
greet("Dianah Porter");
displayPi();
function addTwo(num1, num2) {
    var sum = num1 + num2;
    console.log("The sum is : ".concat(sum));
}
addTwo(3, 5);
function findSquare(num) {
    return num * num;
}
console.log(findSquare(3));
//arrow functions
var substract = function (num1, num2) { return num1 - num2; };
console.log(substract(10, 5));
