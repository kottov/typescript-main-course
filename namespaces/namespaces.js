// Namespaces compile with ---outFile
/// <reference path="./circleMath.ts" />
/// <reference path="./rectangleMath.ts" />
var CircleMath = MyMath.Circle;
console.log(CircleMath.calculateCircumference(10));
console.log(MyMath.calculateRectangle(10, 2));
