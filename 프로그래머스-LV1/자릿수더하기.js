function solution(n){
    let answer = 0;
    while(n>0){
        answer+=Math.floor(n%10)
        n=n/10
    }
    return answer;
}
