function solution(my_string) {
    let answer = [];
    const regexpCoordinates = /\d/g;
    let ans = my_string.match(regexpCoordinates);
    answer = ans.map(x => parseInt(x));
    answer.sort((a,b) => a-b);
    
    return answer;
}

//정규 표현식 \w:단어 문자(알파벳 대소문자,숫자,언더스코어)  \d:숫자 /g:문자열 전체에서 일치하는 모든 패턴
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions