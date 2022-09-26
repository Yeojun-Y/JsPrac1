//JSON
//1. Object to JSON
//JSON.stringify

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // jump: () => {
    //     console.log(`${this.name} can jump!`);
    // },  rabbit객체에서 jump라는 메소드
    // 객체의 메소드를 화살표 함수로 선언할 경우 this는 전역객체를 가르켜 window가 출력
    // 화살표 함수가 아닌 일반 함수로 선언해야 name에 접근가능
    jump() {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return value;
});
console.log(json);

// console.clear();
//2. JSON to Object
//JSON.parse


json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

rabbit.jump();


console.log(rabbit.birthDate.getDate());  //오늘 날짜 출력
console.log(obj.birthDate.getDate());  //45, 46라인 때문에 출력가능
