function solution(s) {
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) answer.push(-1);
        else {
            answer.push(s.lastIndexOf(s[i],i-1));
        }
    }
    return answer;
}