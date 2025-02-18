function solution(n) {
    var answer = 0;
    const not3X = Array.from({ length:300 }, (_, index) => index + 1)
        .filter(num => num % 3 !== 0 && !String(num).includes('3'));
    answer = not3X[n-1]
    console.log(not3X)
    return answer;
}