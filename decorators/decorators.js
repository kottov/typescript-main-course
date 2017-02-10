var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var decoratorPerson = (function () {
    function decoratorPerson() {
        console.log('hi');
    }
    return decoratorPerson;
}());
decoratorPerson = __decorate([
    logged
], decoratorPerson);
// Factory
function notLogged(constructorFn) { }
function logging(value) {
    return value ? logged : notLogged;
}
var decCar = (function () {
    function decCar() {
    }
    return decCar;
}());
decCar = __decorate([
    logging(true)
], decCar);
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var DecoratorPlant = (function () {
    function DecoratorPlant() {
        this.name = 'Green plant';
    }
    return DecoratorPlant;
}());
DecoratorPlant = __decorate([
    logging(true),
    printable
], DecoratorPlant);
var decoPlant = new DecoratorPlant();
decoPlant.print();
// Method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var DecoProject = (function () {
    function DecoProject(name) {
        this.projectName = name;
    }
    DecoProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    return DecoProject;
}());
__decorate([
    editable(false)
], DecoProject.prototype, "calcBudget", null);
var superProject = new DecoProject('Super project');
superProject.calcBudget();
superProject.calcBudget = function () {
    console.log(2000);
};
superProject.calcBudget();
// Parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log('target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    return Course;
}());
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
var superCourse = new Course('Super course');
superCourse.printStudentNumbers('enything', true);
superCourse.printStudentNumbers('enything', false);
