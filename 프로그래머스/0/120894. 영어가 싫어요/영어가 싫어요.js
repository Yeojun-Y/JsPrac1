function solution(numbers) {
    var answer = 0;
    const num = {
        "zero" : '0', "one" : '1', 
        "two" : '2', "three" : '3', 
        "four" : '4', "five" : '5', 
        "six" : '6', "seven" : '7', 
        "eight" : '8', "nine" : '9'
    };
    
    let numSum = '';
    let words = '';
    for(let i =0; i< numbers.length; i++){
        words += numbers[i];
        if(num[words]){
            numSum += num[words];
            words='';
        }
    }
    answer = parseInt(numSum);
    return answer;
}