function solution(numlist, n) {
    var answer = [];
    return numlist.sort((a, b) =>{
        const distanceA = Math.abs(a-n);
        const distanceB = Math.abs(b-n);
        if(distanceA === distanceB){
            return b-a;
        }
        return distanceA - distanceB;
    })
}