function solution(sides) {
    var answer = 0;
    
    let maxSides = Math.max(...sides);
    let minSides = Math.min(...sides);
    
    let upper = maxSides+minSides-1;
    let lower = maxSides-minSides+1;
    
    return answer = upper - lower + 1;
     
}