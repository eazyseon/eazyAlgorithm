function solution(a, b) {
    let answer = 0;

    if(a>b){
        let originalB=b;
        b=a;
        a=originalB;
    }

    for(let i=a; i<=b; i++){
        answer+=i
    }
    return answer;
}