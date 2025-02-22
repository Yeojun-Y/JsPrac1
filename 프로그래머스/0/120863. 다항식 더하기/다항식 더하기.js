function solution(polynomial) {
    let xSum = 0;
    let numSum = 0;
    
    const answer = polynomial.split(' + ');
    
    for(let ans of answer){
        const ans0Str=ans.split('x')[0]; //x계수
        if(ans.includes('x')){ //x항
            if(ans0Str === '') { //계수가 1
                xSum += 1
            }
            xSum += Number(ans0Str);
        }
        else{ //상수항
            numSum += Number(ans0Str);
        }
    }
    let result = '';
    if (xSum > 0) {
        result += (xSum === 1 ? '' : xSum) + 'x';
    }
    if (numSum > 0) {
        result += (result.length > 0 ? ' + ' : '') + numSum; 
    }
    return result;
}