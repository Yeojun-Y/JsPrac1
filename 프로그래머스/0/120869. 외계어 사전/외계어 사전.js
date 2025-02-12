function solution(spell, dic) {
    var answer = 2;
    let spellLength = spell.length;
    
    dic.forEach(word => {
        let cnt = 0;
        let wordLength = word.length; 

        
        for (let i = 0; i < spellLength; i++) {
            for (let j = 0; j < wordLength; j++) {
                if (spell[i] === word[j]) {
                    cnt++;
                    break; //중복전에 j루프 벗어나 다음 i로
                }
            }
        }
         if (cnt === spellLength) {
            answer = 1; 
            return; 
        }
    });
    return answer;
}