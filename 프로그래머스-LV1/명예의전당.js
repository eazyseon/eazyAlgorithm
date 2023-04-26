function solution(k, score) {
    const honor = [];
    const result = [];
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            honor.push(score[i]);
        }
        else if (score[i] > Math.min(...honor)) {
            honor.sort((a,b)=>b-a)
            honor.pop();
            honor.push(score[i]);
        }
        result.push(Math.min(...honor))
    }
    return result;
}