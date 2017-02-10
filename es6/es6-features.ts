// string
let myName = 'john';
// myName = 12;

// number
let myAge: number;
// myAge = '54';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// array
let array: number[] = [1, 2, 3];

// tuple
let tuple: [string, number] = ['john', 25];

// enum
enum Color { red, green, blue };
let color = Color.red;

// any
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };

// function return
let returnMyName = (): string => {
    return myName;
};

// function return void
function sayHello(): void {
    console.log('Hello');
}

// function arguments
function multiply(arg1: number, arg2: number) {
    return arg1 * arg2;
}
multiply(1, 2);

// function by itself
let myMultiply: (a: number, b: number) => number;
// myMultiply = returnMyName;
myMultiply = multiply;

// objects
let userData: { name: string, age: number } = {
    name: 'john',
    age: 25
};
// userData = {
//     a: 'john',
//     b: 22
// };

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex: Complex = {
    data: [1, 2, 3],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

let complex2: Complex = {
    data: [1, 2, 3],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealAge: number | string = 27;
myRealAge = '27';
// myRealAge = true;

// check types
let hisName: string = 'john';
if(typeof hisName == 'string') {
    console.log('Hi ' + hisName);
};

// never
function neverReturns(): never {
    throw new Error('An error');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;

// Default parameters
const squad = (arg: number = 2): number => arg * arg;
console.log(squad());

// Spread
const arrayOfNum = [1, 5, 199, -6];
console.log(Math.max(...arrayOfNum));

// Rest
const toArray = (...args: number[]): number[] => {
    return args;
}
console.log(toArray(1, 2, 3, 4, 5));

// destructuring
const hobbies = ['coocking', 'sport'];
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2);

const newUserData = {userName: "John", userAge: 35};
const {userName: newName, userAge} = newUserData;
console.log(newName, userAge);

// Template literals
const userName = 'John';
const greeting = `Heading
Hi I am ${userName}.
This is cool!`;
console.log(greeting);





