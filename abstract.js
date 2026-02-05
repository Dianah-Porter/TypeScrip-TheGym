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
var Shape2D = /** @class */ (function () {
    function Shape2D() {
    }
    return Shape2D;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this; //to call parent constructor 
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return this.radius * this.radius;
    };
    return Circle;
}(Shape2D));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Shape2D));
var obj1 = new Circle(2);
console.log(obj1.area());
var obj2 = new Rectangle(4, 5);
console.log(obj2.area());
var datae = {
    type: 'email',
    to: 'Dinah',
    subject: 'boxnh'
};
function assertNever(x) {
    throw new Error("Not exist!");
}
function sendNotification(n) {
    switch (n.type) {
        case 'email':
            console.log("email sent ".concat(n.to, ", ").concat(n.subject));
            break;
        case 'sms':
            console.log("sms sent ".concat(n.to, ", ").concat(n.phone));
            break;
        case 'push':
            console.log("push sent ".concat(n.to, ", ").concat(n.deviceId));
            break;
        default:
            assertNever(n);
    }
}
sendNotification(datae);
//question 3
//For example, if given [1, "hello", 2, "world", 3], it should return { strings: ["hello", "world"], numbers: [1, 2, 3] }.
function separateTypes(array) {
    var numbers = array.filter(function (e) { return typeof e === 'number'; });
    var strings = array.filter(function (e) { return typeof e === 'string'; });
    return { numbers: numbers, strings: strings };
}
console.log(separateTypes([1, "hello", 2, "world", 3]));
