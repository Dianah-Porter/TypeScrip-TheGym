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
