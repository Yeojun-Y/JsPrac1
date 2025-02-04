function solution(n) {
    var answer = [];
    let i = 2;
    while(n>=i){
        if(n%i === 0){
            if(answer[answer.length-1] !== i){
                answer.push(i);
            }
            n = n/i;
        }
        else{
            i++;
        }
    }
    return answer;
}