function solution(s1, s2) {
    let answer = 0;
    let freCnt = {};

    for(let val of s1){
        freCnt[val] = (freCnt[val] || 0) +1
    }

    for(let key of s2){
        if(freCnt[key]) answer++;
    }

    return answer;
}