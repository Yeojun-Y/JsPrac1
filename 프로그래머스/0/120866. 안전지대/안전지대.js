function solution(board) {
    const n = board.length;

    const dangerBoard = board.map(row => [...row]);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) { // 지뢰가 있으면 주변 위험표시
                for (let v = -1; v <= 1; v++) {
                    for (let c = -1; c <= 1; c++) {
                        const ni = i + v;
                        const nj = j + c;

                        // 배열 범위를 벗어나지 않도록 체크
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                            dangerBoard[ni][nj] = 1; // 위험 표시
                        }
                    }
                }
            }
        }
    }
    const answer = dangerBoard.reduce((acc, row) => {
        return acc + row.filter(zero => zero === 0).length; 
    }, 0);

    return answer;
}