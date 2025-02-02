function solution(n) {
    let result = 0;
    let s = 1;
    while(s<=n){
        result++;
        s *= result
    }
    return result-1;
}
