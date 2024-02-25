function solution(array) {
    let answer = 0;
    array.forEach(x => {
        let a = x.toString().split(7).length-1;
        answer += a;
    })
    return answer;
}