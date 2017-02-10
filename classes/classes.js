var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 35;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person('John', 'john');
console.log(person);
// Inheritance
var John = (function (_super) {
    __extends(John, _super);
    // name = 'John';
    function John(username) {
        var _this = _super.call(this, 'John', username) || this;
        _this.age = 45;
        return _this;
    }
    return John;
}(Person));
var john = new John('john');
console.log(john);
// Getters and Setters
var Plant = (function () {
    function Plant() {
        this._species = 'default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species + " species";
        },
        set: function (value) {
            if (value.length > 2)
                this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);
// Static properties and methods
var Utils = (function () {
    function Utils() {
    }
    Utils.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    return Utils;
}());
Utils.PI = 3.14;
console.log(Utils.PI);
console.log(Utils.calcCircumference(5));
// Abstract classes
var Project = (function () {
    function Project() {
        this.name = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.name = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super project');
console.log(newProject);
// Private constructors and readonly
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var instance = OnlyOne.getInstance();
console.log(instance.name);
// instance.name = 'New name';
