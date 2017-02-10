// Exercise 1 - How was your TypeScript Class?
class MyCar {
    private _acceleration: number = 0;
    
    constructor (private readonly name: string) {}

    get acceleration (): number {
        return this._acceleration;
    }

    honk(): void {
        console.log('Tooooooot!');
    }

    accelerate(speed: number): void {
        this._acceleration += speed;
    }
}
let myCar = new MyCar('BMW');
myCar.honk();
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {  
    
    abstract calcSize(): number;
}

class Rectangle extends BaseObject {
    
    constructor(public length: number, public width: number) {
        super();
    }

    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class NewPerson {
    private _firstName: string = '';

    get firstName(): string {
        return this._firstName;
    }

    set firstName(name: string) {
        name.length > 3 ? this._firstName = name : this._firstName = '';
    }
}