function solution(cipher, code) {
    let answer = '';
    const cipherArr = cipher.split('')
    
    const chooseCipher = cipherArr.filter((arr, index) => {
        return (index+1) % code === 0;
    })
    answer = chooseCipher.join('');
    return answer;
}