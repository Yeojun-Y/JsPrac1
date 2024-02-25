function solution(emergency) {
    let sortedEm = [...emergency].sort((a,b)=> b-a);
    
    let priority = sortedEm.reduce((prev, curr,index) => {
        prev[curr] = index + 1;
        return prev;
    }, {});
    
    let rePriority = emergency.map(x => priority[x]); 
    return rePriority;
}
