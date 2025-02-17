function solution(score) {
    var answer = [];
    const scoreRank = score.map((num) => ((num[0]+num[1])/2));
    
    const rank = scoreRank.map((avg,index) => ({avg, index}));
    
    rank.sort((a,b) => b.avg - a.avg);
    
    for (let i = 0; i < rank.length; i++) {
        if (i > 0 && rank[i].avg === rank[i - 1].avg) {
            answer[rank[i].index] = answer[rank[i - 1].index];
        } else {
            answer[rank[i].index] = i + 1;
        }
    }
    return answer;
}