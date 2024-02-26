function solution(my_string) {
    let answer = 0;
    let str = my_string.split(/\D+/).filter(Boolean).map(Number).reduce((acc,num)=> acc + num,0);
    if(str){
        return str
    }
    else{
        console.log('자연수없음')
        return 0;
    }
}