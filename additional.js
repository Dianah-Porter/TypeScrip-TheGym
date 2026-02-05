//Generics
// Generic function that returns the input value
function identity(value) {
    return value;
}
console.log(identity("Diane"));
console.log(identity(23));
var Rectangle = /** @class */ (function () {
    function Rectangle(name) {
        this.name = name;
    }
    Rectangle.prototype.printAge = function () {
        console.log("This is a box!", this.name);
    };
    return Rectangle;
}());
var obj = new Rectangle("Yellow");
obj.printAge();
