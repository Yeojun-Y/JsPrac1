function solution(array) {
    var answer = 0;
    let mode = [];
    let modeCnt = 1;
    if(array.length<2){
        return array[0];
    }
    array.sort((a, b) => a - b);
    for(let i=1; i<array.length+1; i++){
        if(array[i] == array[i-1]){
            modeCnt++
        }
        else{
            mode.push([array[i-1],modeCnt]);
            modeCnt=1;
        }
    }
    let maxCnt = 0;
    let result = 0;
    let sameCnt = 0;
    
    for(let i=0; i<mode.length; i++){
        if(mode[i][1] > maxCnt){
            maxCnt = mode[i][1];
            result = mode[i][0];
            sameCnt = 0;
        } else if (mode[i][1] === maxCnt) {
            sameCnt = 1;
        }
    }
    return sameCnt === 1 ? -1 : result;
}