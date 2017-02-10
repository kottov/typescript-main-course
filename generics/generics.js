// Simple Generic
var echo = function (data) { return data; };
console.log(echo('john'));
console.log(echo(35));
console.log(echo({ name: 'john', age: 35 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('john').length);
console.log(betterEcho(35));
console.log(betterEcho({ name: 'john', age: 35 }));
// Built-in generic types
var testResult = [1, 4.99, -6];
testResult.push(16); // Push of string will rise compilation error
// Arrays
function printAll(args) {
    args.forEach(function (elem) { return console.log(elem); });
}
printAll(['Apple', 'Banana']);
// Generic types
var echo2 = betterEcho;
console.log(echo2('Someting'));
// Generic class
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
