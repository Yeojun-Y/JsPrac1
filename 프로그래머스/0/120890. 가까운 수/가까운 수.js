function solution(array, n) {
    let answer = 0;
    let standard = 101;
    for(let i=0; i<array.length; i++){
        if(Math.abs(array[i]-n)<standard){
            standard = Math.abs(array[i]-n);
            answer = array[i];
        } else if(Math.abs(array[i]-n) === standard){
            answer = Math.min(answer, array[i]);
        }
    }
    return answer;
}