class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food) {
        if (this.stomach.length < 10)
            this.stomach.push(food);
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`;
    }
}

