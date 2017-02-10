var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Exercise 1 - How was your TypeScript Class?
var MyCar = (function () {
    function MyCar(name) {
        this.name = name;
        this._acceleration = 0;
    }
    Object.defineProperty(MyCar.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    MyCar.prototype.honk = function () {
        console.log('Tooooooot!');
    };
    MyCar.prototype.accelerate = function (speed) {
        this._acceleration += speed;
    };
    return MyCar;
}());
var myCar = new MyCar('BMW');
myCar.honk();
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = (function () {
    function BaseObject() {
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var NewPerson = (function () {
    function NewPerson() {
        this._firstName = '';
    }
    Object.defineProperty(NewPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            name.length > 3 ? this._firstName = name : this._firstName = '';
        },
        enumerable: true,
        configurable: true
    });
    return NewPerson;
}());
