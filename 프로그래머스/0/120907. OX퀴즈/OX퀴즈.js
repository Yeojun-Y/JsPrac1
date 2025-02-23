function solution(quiz) {
    const result = [];
    
    for (let qu of quiz) {
        const [expression, answer] = qu.split(' = '); 
        const [left, operator, right] = expression.split(' '); 
        
        const num1 = Number(left);
        const num2 = Number(right);
        const expectedAnswer = Number(answer);
        
        let checkCal;
        if (operator === '+') {
            checkCal = num1 + num2;
        } else {
            checkCal = num1 - num2;
        }
        
        result.push(checkCal === expectedAnswer ? "O" : "X");
    }
    return result;
}