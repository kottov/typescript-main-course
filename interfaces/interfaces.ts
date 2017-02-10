interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function iGreet(person: NamedPerson): void {
    console.log(`Hello ${person.name}`);
}

function changeName(person: NamedPerson, name: string) {
    person.name = name;
}

const iPerson: NamedPerson = {
    name: 'John',
    hasDog: true,
    greet(lastName: string): void {
        console.log(`Hi, I am ${this.name} ${lastName}`);
        
    }
}

// iGreet({name: 'John', age: 27});
changeName(iPerson, 'Jim');
iGreet(iPerson);
iPerson.greet('Snow');

class IPerson implements NamedPerson {
    name: string;
    lastName: string;
    greet(lastName: string): void {
        console.log(`Hi, I am ${this.name} ${lastName}`);
    };
}

const jane = new IPerson();
jane.name = 'Jane';
jane.lastName = 'Doe';
jane.greet(jane.lastName);
iGreet(jane);

// Function type interface

interface DoubleValueFunc {
    (argument: number): number;
}

const doubleFunc: DoubleValueFunc = (value: number) => {
    return value * 2
}

console.log(doubleFunc(2));

// Interface inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    name: 'Jack',
    greet(lastName: string) {
        console.log('Hello');
    }
}

oldPerson.greet;
iGreet(oldPerson);