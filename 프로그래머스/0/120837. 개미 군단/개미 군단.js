function solution(hp) {
    let answer = 0;
    let sum = 0;
    const antsArmy = [5,3,1];
    for(let i=0; i<antsArmy.length; i++){
        let counts = ~~(hp/antsArmy[i]);
        hp %= antsArmy[i];
        sum += counts
    }
    answer = sum
    return answer;
}