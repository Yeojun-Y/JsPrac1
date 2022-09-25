'use strict';

const person1 = { name: 'bob', age: 3 };
const person2 = { name: 'boob', age: 4 };
const person3 = { name: 'bobby', age: 5 };

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

const person4 = new Person('bbobb', 10);
console.log(person4);


//6.for..in @@@  for..of

for (key in Person) {
    console.log(key);
}

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

const array1 = [1, 2, 3, 4];
for (let valu of array1) {
    console.log(valu);
}

// 7. cloning
const user = { name: 'jun', age: 20 };
const user2 = user;

const user4 = {};
Object.assign(user4, user);
// 같은 방식
const user5 = Object.assign({}, user);

console.log(user4);
console.log(user5);