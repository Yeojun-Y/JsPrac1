'use strict';

//Class declarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const el = new Person('el', 20);
console.log(el.name);
console.log(el.age);

el.speak();


// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1);

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height / 2);
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());