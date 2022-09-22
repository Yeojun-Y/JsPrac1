//1. use strict; added in es5; use this for valina Javas
'use strict';
let globalName = 'global name';
{
    let name = 'elle';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);
 // hoistig은 어디에 선언했냐에 상관없이 
 //항상 제일 위로 끌어올려주는 것을 말한다. 
 // var 말고 let을 사용하자

 // 3. constants
 // const 선언 한 후에는 값을 변경할 수 없다.
 