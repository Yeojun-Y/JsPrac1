function solution(s) {
    let answer = 0;
    let ctrl = s.split(' ');
    for(let i=0; i<ctrl.length; i++){
        if(ctrl[i] !== 'Z'){
            answer += parseInt(ctrl[i]);
        }
        else{
            answer -= parseInt(ctrl[i-1]);
        }
    }
    return answer;
}