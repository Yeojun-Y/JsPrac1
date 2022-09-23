// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//6.logical operators: ||(or), &&(and), !(not)
// ||(or)연산자는 처음 true가 나오면 멈춘다. 

const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('ㅠㅠ');
    }
    return true;
}

//7. Equlity
const StringFive = '5';
const numberFive = 5;

//== loose equality with type conversion
console.log(StringFive == numberFive);
console.log(StringFive != numberFive);
console.log('@@@@@@@@@#@');
//=== strict equality
console.log(StringFive === numberFive);
console.log(StringFive !== numberFive);
console.log('@@@@@@@@@#@@');

//object equality by reference
const el1 = { name: 'el' };
const el2 = { name: 'el' };
const el3 = el1;

console.log(el1 == el2);
console.log(el1 === el2);
console.log(el1 === el3);


console.log('@@@@@@@@@#@@@');
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log('@@@@@@@@@#@@@4');
//condition ? value1 : value2;
const name1 = 'dd';
console.log(name1 === 'ell' ? 'yes' : 'no');

console.log('@@@@@@@@@#@@@5');

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love ya');
        break;
    case 'FireFox':
        console.log('love you');
        break;
    default:
        console.log('same same');
        break;
}
console.log('@@@@@@@@@#@@@6');

let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

console.log('@@@@@@@@@#@@@7');
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for : ${i}`);
}

console.log('@@@@@@@@@#@@@8');
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i : ${i}, j : ${j}`);
    }
}