function solution(chicken) {
    let answer = 0;
    let coupon = chicken; // 초기 쿠폰 수
    let service = 10; 
    
    while (coupon >= 10) {
        const serviceChicken = Math.floor(coupon / service);
        answer += serviceChicken; // 서비스 치킨 누적
        coupon = serviceChicken + (coupon % service);
    }

    return answer;
}