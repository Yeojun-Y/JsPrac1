function solution(my_string, num1, num2) {
    let strArr = my_string.split('');
    let temp = strArr[num1];
    strArr[num1] = strArr[num2];
    strArr[num2] = temp;
    
    let answer = strArr.join(''); 
    return answer;
}