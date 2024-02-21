function divisor(n) {
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(n%i===0){
            cnt++;
        }
    }
    if(cnt >= 3){
        return 1;
    }
    else return 0;
}
function solution(n) {
    let answer = 0;
    for (let i=1; i<=n; i++){
        answer += divisor(i)
    }
    return answer
}