function solution(keyinput, board) {
    var answer = [];
    
    let x = 0;
    let y = 0;
    
    const xBoard = (board[0] - 1) / 2;
    const yBoard = (board[1] - 1) / 2;
    
    const direc = {
        'left': () => { if (x > -xBoard) x--; },
        'right': () => { if (x < xBoard) x++; },
        'up': () => { if (y < yBoard) y++; },
        'down': () => { if (y > -yBoard) y--; },
    };
    
    keyinput.forEach(key => {
        if(direc[key]) {
           direc[key]();
           }
    });
    
    answer = [x,y];
    return answer;
}
    
    