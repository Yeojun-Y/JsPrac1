function solution(age) {
    let answer = '';
    let ageString = age.toString();
    let ageMap = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        '3': 'd',
        '4': 'e',
        '5': 'f',
        '6': 'g',
        '7': 'h',
        '8': 'i',
        '9': 'j',
    }
    for(let i = 0; i < ageString.length; i++){
        if(ageMap[ageString[i]]) {
            answer += ageMap[ageString[i]];
        }
    }
    return answer
}