class Person {
    name: string;
    private type: string;
    protected age: number = 35;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    public printAge() {
        console.log(this.age);
    }

    private setType(type: string) {
        this.type = type;
    }
}

const person = new Person('John', 'john');
console.log(person);

// Inheritance
class John extends Person {
    // name = 'John';

    constructor(username: string) {
        super('John', username);
        this.age = 45; 
    }
}

const john = new John('john');
console.log(john);


// Getters and Setters
class Plant {
    private _species: string = 'default';

	public get species(): string  {
		return `${this._species} species`;
	}

	public set species(value: string ) {
		if(value.length > 2) this._species = value;
	}
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);

// Static properties and methods
class Utils {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Utils.PI);
console.log(Utils.calcCircumference(5));

// Abstract classes
abstract class Project {
    name: string = 'Default';
    protected budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget(): number {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string) {
        this.name = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super project');
console.log(newProject);

// Private constructors and readonly
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let instance = OnlyOne.getInstance();
console.log(instance.name);
// instance.name = 'New name';

