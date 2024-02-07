function solution(array) {
    let sortArray = array.map((value, index) => ({value, index}));
    sortArray.sort((a,b) => b.value- a.value);
    let answer = [sortArray[0].value, sortArray[0].index];
    return answer;
}