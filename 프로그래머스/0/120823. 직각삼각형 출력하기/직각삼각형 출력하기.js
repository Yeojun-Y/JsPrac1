const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i =0; i<input[0]; i++){
        let tri = '';
        for(let j=0; j<i+1; j++){
            tri += '*';
        }
        console.log(tri);
    }
    // console.log(Number(input[0]));
});