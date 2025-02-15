function solution(id_pw, db) {
    let answer = -1;
    
    const messages = {
        LOGIN_SUCCESS: "login",
        WRONG_PASSWORD: "wrong pw",
        LOGIN_FAIL: "fail"
    };
    
    db.forEach(data => {
        if (id_pw[0] === data[0]) { // 아이디가 일치
            if (id_pw[1] === data[1]) { // 비밀번호도 일치
                answer = 1; // 로그인 성공
            } else {
                answer = 0; // 비밀번호 불일치
            }
        }
    });
    if (answer === 1) {
        return messages.LOGIN_SUCCESS;
    } else if (answer === 0) {
        return messages.WRONG_PASSWORD;
    } else {
        return messages.LOGIN_FAIL;
    }
}
