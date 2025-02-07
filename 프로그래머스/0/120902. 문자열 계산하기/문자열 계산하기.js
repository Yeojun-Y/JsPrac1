function solution(my_string) {
    var answer = 0;
    // return answer = eval(my_string); //보안에 위험하다고 함
    
    let currentNum = '';
    let lastOpr = '+';
    for(let char of my_string) {
        if(char >= '0' && char <= '9'){
            currentNum += char
        } else if (['+', '-'].includes(char) || char === ''){
            if(currentNum) {
                if(lastOpr === '+') {
                    answer += parseInt(currentNum);
                } else if ( lastOpr === '-') {
                    answer -= parseInt(currentNum);
                }
            }
            currentNum = '';
            lastOpr = char;
        }
    }
    if(currentNum) {
        if(lastOpr === '+') {
            answer += parseInt(currentNum);
        } else if ( lastOpr === '-') {
            answer -= parseInt(currentNum);
        }
    }
    return answer
}