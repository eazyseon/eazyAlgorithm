function solution(left, right) {
    let answer = 0;
    let cnt=1;

    for(let i=left; i<=right; i++){
        for(let j=2; j<=i; j++){
            if(i%j===0) cnt++
        }
        cnt%2? answer-=i : answer+=i
        cnt=1;
    }
    return answer;
}