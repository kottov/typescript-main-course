function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class decoratorPerson {
    constructor() {
        console.log('hi');
    }
}

// Factory
function notLogged(constructorFn: Function) {}

function logging(value: boolean): Function {
    return value ? logged : notLogged;
}

@logging(true)
class decCar {}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class DecoratorPlant {
    name = 'Green plant';
}

let decoPlant = new DecoratorPlant();
(<any>decoPlant).print();

// Method decorator
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }   
}

class DecoProject {
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

let superProject = new DecoProject('Super project');
superProject.calcBudget();
superProject.calcBudget = function() {
    console.log(2000);
}
superProject.calcBudget();

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const superCourse = new Course('Super course');
superCourse.printStudentNumbers('enything', true);
superCourse.printStudentNumbers('enything', false);