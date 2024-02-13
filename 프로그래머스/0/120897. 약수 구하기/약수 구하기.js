function solution(n) {
    let answer = [];
    for (let i=0; i*i<=n; i++){
        if(n%i===0){
            answer.push(i);
            if(i*i !== n) {
                answer.push(n/i);
            }
        }
    }
    return answer.sort((a,b) => a-b);
}