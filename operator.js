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

function log(message) {
    console.log(message);
}
log('Hellllo');
log(1234);

console.log('@@@@@@@@@#@@@9');
//Default Parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('2');

console.log('@@@@@@@@@#@@10');
//Rest Parameters //배열형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('a', 'B', 'c');

console.log('@@@@@@@@@#@@11');
//Rest Parameters //배열형태로 전달
function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
    //혹은
    //args.forEach((arg) => console.log(arg));
}
printAll('ab', 'Bc', 'cD');

console.log('@@@@@@@@@#@@12');
//Local scope 
let globalMessage = 'global';  //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();
console.log('@@@@@@@@@#@@13');
//Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);
console.log(`sum : ${sum(1, 2)}`);
console.log(`sum : ${result}`);

console.log('@@@@@@@@@#@@14');
//Early returnm early exit
//bad example
function upgradeUser(user) {
    if (user.point > 10) {
        //long logic...
    }
}

//good example
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }//빨리 리턴해주고 작업하자
    //long logic...
}
console.log('@@@@@@@@@#@@15');
//callback 
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log("correct");
}
const printNo = function () {
    console.log("no!!!!");
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

console.log('@@@@@@@@@#@@16');
//Arrow function
//always annoymous
const simplePrint1 = function () {
    console.log('simplePrint!');
}; //이런 모양을
const simplePrint2 = () => console.log('simplePrint!!');

///////////////////////////
const add1 = function (a, b) {
    return a + b;
} //이런 모양을 
const add2 = (a, b) => a + b;
//혹은
const add3 = (a, b) => {
    // - - -
    return a + b;
}
////////////////////////////////////////
console.log('@@@@@@@@@#@@17');
//IIFE: immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();