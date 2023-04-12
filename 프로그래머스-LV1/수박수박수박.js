function solution(n) {
    let answer = '';
    let cnt = 1;

    while(cnt<=n){
        cnt%2? answer+='수':answer+='박'
        cnt++;
    }
    return answer;
}