function solution(A, B) {
    var answer = '';
    if (A === B) return 0;
    
    const length = A.length;

    for (let i = 1; i < length+1; i++) {
        const answer = A.slice(-i) + A.slice(0, length - i);  
        if (answer === B) return i; 
    }
    return -1; 
}