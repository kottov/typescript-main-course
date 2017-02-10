var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this.map[key] = value;
    };
    ;
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    ;
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    ;
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    ;
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('banana', 5);
numberMap.setItem('apple', 6);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', 'john');
stringMap.setItem('age', '35');
stringMap.printMap();
console.log(stringMap.getItem('name'));
stringMap.getItem('name');
