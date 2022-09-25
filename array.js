'use strict';

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];
// 2. 인덱스 위치
const foods = ['🍕', '🌭'];
console.log(foods);
console.log(foods.length);
console.log(foods[0]);
console.log(foods.length - 1);
console.log(foods[foods.length - 1]);

// 3.  
//for문
for (let food of foods) {
    console.log(food);
}
////forEach문
foods.forEach(function (fruits, index) {
    console.log(fruits, index);
})

foods.forEach((fruits, index) => console.log(fruits, index));

// 4. Addition, deletion copy

// push : add an item to the end
foods.push('🍖', '🥩');
console.log(foods);

//pop : remove an item from the end
foods.pop();
console.log(foods);


// unshift : add an item to the beginning
foods.unshift('🎂', '🍲');
console.log(foods);

// shift : remove an item from the beginning
foods.shift();
console.log(foods);
//shift, unshift are slower than pop, push
console.log('@@');

foods.push('🍉', '🥝', '🍒');
console.log(foods);

foods.splice(0, 2);
//인덱스 0번부터 2개 지움
console.log(foods);

foods.splice(1, 1, '🌽', '🫐');
//인덱스 1번부터 1개 지우고 그 자리에 집어넣음
console.log(foods);

//combine two arrays
const toys = ['🎭', '🎪'];
const newfoods = foods.concat(toys);
console.log(newfoods);

//5. Searching
//find the index
console.log(foods);
console.log(foods.indexOf('🍉'));  //인덱스의 위치 (없다면 -1)
console.log(foods.includes('🍉')); //인덱스의 존재여부

//lastIndexof

console.log(foods);
foods.push('🍉');
console.log(foods);
console.log(foods.indexOf('🍉'));
console.log(foods.lastIndexOf('🍉'));

