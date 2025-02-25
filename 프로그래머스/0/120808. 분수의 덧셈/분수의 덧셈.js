function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    const resultNumer = numer1 * denom2 + numer2 * denom1; 
    const resultDenom = denom1 * denom2; 
    
    const div = gcd(resultNumer,resultDenom);
    
    answer.push(resultNumer/div, resultDenom/div);
    
    return answer;
}