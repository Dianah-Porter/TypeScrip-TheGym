function greet(name: string): void{
    console.log(`Hello ${name}!` );
}

let displayPi = function (){
    console.log("PI = 3.14");
}
greet("Dianah Porter");
displayPi()


function addTwo(num1: number, num2: number){
    let sum = num1 + num2;
    console.log(`The sum is : ${sum}`);
}
addTwo(3, 5);

function findSquare(num: number) : number{
    return num * num;

}
console.log(findSquare(3));


//arrow functions

let substract = (num1: number, num2: number): number => num1 - num2;
console.log(substract(10, 5));    //output: 5

let multiply = (x: number, y: number) => {
    return x * y;
}

let divide = (x: number, y: number) => {
    x / y;
}
console.log(multiply(9, 5));  // Output: 45
console.log(divide(9, 5));  // Output: undefined