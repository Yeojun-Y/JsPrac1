'use strict'

//State pending -> fulfilled or rejected
//Producer vs Consumer

// 1. Producer
// when new Promise is created, the exector runs automatically
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(networking, read files는
    //비동기적으로 실행하는 것이 속도저하없어 좋다 )
    console.log('doing somthing...');
    setTimeout(() => {
        resolve('el');
        // reject(new Error('no network'));
    }, 2000)
});

// 2,Consumers: then, catch, finally

promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => { console.log('finally'); });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('ㅁ'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => ee`), 1000);
        setTimeout(() => reject(new Error(`error ${hen} => ㅁ`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fry`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return 'ㅃ';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);