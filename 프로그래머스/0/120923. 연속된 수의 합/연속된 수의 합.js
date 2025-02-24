function solution(num, total) {
    var answer = [];
    const avg = total / num;
    const start = Math.ceil(avg - ((num-1) / 2));
    
    for(let i = start; i<start+num; i++){
        answer.push(i)
    }
    return answer;
}
