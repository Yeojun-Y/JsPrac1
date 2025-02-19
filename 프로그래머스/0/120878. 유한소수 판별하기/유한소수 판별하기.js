function gcd(a,b){
    while(b!==0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function solution(a, b) {
    var answer = 0;
    
    const div =gcd(a,b);
    b /= div;
    
    while (b % 2 === 0) {
        b /= 2; 
    }
    while (b % 5 === 0) {
        b /= 5; 
    }
    return b === 1 ? 1 : 2;
}