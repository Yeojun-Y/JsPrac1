function solution(i, j, k) {
    let answer = 0
    for(let h = i; h<=j; h++){
        let str = h.toString();
        let cnt = str.split(k).length -1;
        answer += cnt;
    }
    return answer;
}