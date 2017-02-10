// string
var myName = 'john';
// myName = 12;
// number
var myAge;
// myAge = '54';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// array
var array = [1, 2, 3];
// tuple
var tuple = ['john', 25];
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var color = Color.red;
// any
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
// function return
var returnMyName = function () {
    return myName;
};
// function return void
function sayHello() {
    console.log('Hello');
}
// function arguments
function multiply(arg1, arg2) {
    return arg1 * arg2;
}
multiply(1, 2);
// function by itself
var myMultiply;
// myMultiply = returnMyName;
myMultiply = multiply;
// objects
var userData = {
    name: 'john',
    age: 25
};
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge = 27;
myRealAge = '27';
// myRealAge = true;
// check types
var hisName = 'john';
if (typeof hisName == 'string') {
    console.log('Hi ' + hisName);
}
;
// never
function neverReturns() {
    throw new Error('An error');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12;
// Default parameters
var squad = function (arg) {
    if (arg === void 0) { arg = 2; }
    return arg * arg;
};
console.log(squad());
// Spread
var arrayOfNum = [1, 5, 199, -6];
console.log(Math.max.apply(Math, arrayOfNum));
// Rest
var toArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log(toArray(1, 2, 3, 4, 5));
// destructuring
var hobbies = ['coocking', 'sport'];
var hobbie1 = hobbies[0], hobbie2 = hobbies[1];
console.log(hobbie1, hobbie2);
var newUserData = { userName: "John", userAge: 35 };
var newName = newUserData.userName, userAge = newUserData.userAge;
console.log(newName, userAge);
// Template literals
var userName = 'John';
var greeting = "Heading\nHi I am " + userName + ".\nThis is cool!";
console.log(greeting);
