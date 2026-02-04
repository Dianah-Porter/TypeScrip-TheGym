var age = 23;
var isAdult = age > 18 && false;
console.log(isAdult);
//Boolean function  Boolean()
var num = 12;
var bool = Boolean(num);
console.log("Boolean() = ", bool); //true
console.log("Typeof = ", typeof bool);
var fa = 0;
var undef = undefined;
console.log(Boolean(fa)); //false   => undefined,'', null, 0, --> false
console.log(Boolean(undef)); //false
//Boolean function 
var a = true;
var bf = new Boolean(true);
console.log(a); //true
console.log(bf); //[Boolean: true]
console.log(typeof a); //boolean
console.log(typeof bf); //object
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var currentDirection = Direction.Up;
console.log("Moving ".concat(currentDirection));
//enums 
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
// Direct member access
console.log("First day of the week:", Day.Sunday); //0
// Index access using a variable,
var dayIndex = Day.Monday;
console.log("Second day of the week:", Day[dayIndex]); //Monday
//void
var logfun = function () {
    console.log("Hello");
};
logfun();
// function showFatalError(): never {
//     throw new Error("A fatal error occurred. Please restart the app.");
// }
// showFatalError()
function keepRunning() {
    while (true) {
        console.log("Still running...");
    }
}
//null
var nums = null;
console.log(typeof nums); // object
console.log(nums); // null
var addition = function (x, y) { return x + y; };
console.log(addition(3, 5));
var carObj = {
    name: 'suzuki',
    year: 2024
};
console.log(carObj.name);
console.log(typeof carObj.year);
