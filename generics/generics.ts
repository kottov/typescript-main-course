// Simple Generic
const echo = (data: any) => data;

console.log(echo('john'));
console.log(echo(35));
console.log(echo({name: 'john', age: 35}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('john').length);
console.log(betterEcho<number>(35));
console.log(betterEcho({name: 'john', age: 35}));

// Built-in generic types
const testResult: Array<number> = [1, 4.99, -6];
testResult.push(16); // Push of string will rise compilation error

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((elem) => console.log(elem));
}
printAll<string>(['Apple', 'Banana']);

// Generic types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Someting'));

// Generic class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

