function solution(k, m, score) {
    let answer = 0;
    score = score.sort((a, b) => a - b);
    while (score.length >= m) {
        let arr = [];
        for (let i = 0; i <= m - 1; i++) {
            arr.push(score.pop());
        }
        answer += arr.at(-1) * m;
    }
    return answer;
}