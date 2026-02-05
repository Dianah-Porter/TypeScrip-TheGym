var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    year: 2024,
};
console.log(carObj.name);
console.log(typeof carObj.year);
var Dog = /** @class */ (function () {
    function Dog(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: ").concat(this.sound));
    };
    return Dog;
}());
var obj = new Dog("Simba", "wu wu wu barking ...");
obj.makeSound();
//type assertion 
var word = 'Hello';
var words = 'Hello';
var Person = /** @class */ (function () {
    function Person(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    Person.prototype.showName = function () {
        console.log("The name is ".concat(this.name, " and is ").concat(this.gender, " years old"));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.showAge = function () {
        console.log("The student age is ".concat(this.age, " years old"));
    };
    return Student;
}(Person));
var ob = new Person("Diane", "Female", 22);
ob.showName();
var obj2 = new Student("Diane", "Female", 32);
obj2.showAge();
