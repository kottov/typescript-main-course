class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, value: T): void {
        this.map[key] = value;
    };

    getItem(key: string): T {
        return this.map[key];
    };

    clear(): void {
        this.map = {};
    };

    printMap(): void {
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    };
}

const numberMap = new MyMap<number>();
numberMap.setItem('banana', 5);
numberMap.setItem('apple', 6);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'john');
stringMap.setItem('age', '35');
stringMap.printMap();
console.log(stringMap.getItem('name'));
stringMap.getItem('name');