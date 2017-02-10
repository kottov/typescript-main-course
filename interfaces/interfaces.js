function iGreet(person) {
    console.log("Hello " + person.name);
}
function changeName(person, name) {
    person.name = name;
}
var iPerson = {
    name: 'John',
    hasDog: true,
    greet: function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName);
    }
};
// iGreet({name: 'John', age: 27});
changeName(iPerson, 'Jim');
iGreet(iPerson);
iPerson.greet('Snow');
var IPerson = (function () {
    function IPerson() {
    }
    IPerson.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName);
    };
    ;
    return IPerson;
}());
var jane = new IPerson();
jane.name = 'Jane';
jane.lastName = 'Doe';
jane.greet(jane.lastName);
iGreet(jane);
var doubleFunc = function (value) {
    return value * 2;
};
console.log(doubleFunc(2));
var oldPerson = {
    age: 27,
    name: 'Jack',
    greet: function (lastName) {
        console.log('Hello');
    }
};
oldPerson.greet;
iGreet(oldPerson);
