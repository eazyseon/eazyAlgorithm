function solution(price, money, count) {
    let answer = price;
    for(let i=2; i<=count; i++){
        answer+=price*i
    }
    return answer>money?answer-money:0;
}