function solution(numbers, direction) {
    var answer = [];
    let index = numbers.length
    let temp;
    if(direction === 'right'){
        temp = numbers[index-1];
        for(let i = 1; i<=index; i++){
            if(index !== i){
                numbers[index-i] = numbers[index-(i+1)];
            }
            else{
                numbers[0] = temp;
            }
        }
        numbers[0] = temp;
        return answer = numbers;
     }
    else {
        temp = numbers[0];
        for(let i = 0; i<index; i++){
            if(i !== index-1){
                numbers[i] = numbers[i+1];
            }
            else {
                numbers[index-1] = temp;
            }
        }
    return answer = numbers;
    }
}
// function solution(numbers, direction) {
//     if(direction === 'right'){
//         numbers.unshift(numbers.pop());
//     }
//     else {
//         numbers.push(numbers.shift());
//     }
//     return numbers;
// }