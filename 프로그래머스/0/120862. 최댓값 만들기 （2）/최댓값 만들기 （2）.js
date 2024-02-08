function solution(numbers) {
    let sortNum = [...numbers].sort((a,b) => b-a);
    let answer = Math.max(sortNum[0] * sortNum[1], sortNum[sortNum.length-1] * sortNum[sortNum.length-2])
    return answer;
}