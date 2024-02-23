function solution(s) {
    let charFre = s.split('').reduce((prev, curr) => {
        if(curr in prev) {
            prev[curr]++;
        } else {
            prev[curr] = 1;
        }
        return prev;
    }, {});
    let answer = Object.keys(charFre).filter(key => charFre[key] < 2).sort().join('');
    return answer;
}