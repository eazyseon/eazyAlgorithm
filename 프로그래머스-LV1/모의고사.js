function solution(answers) {
    let answer = [];
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let c1 = answers.filter((e, i) => e === a1[i % 5]).length;
    let c2 = answers.filter((e, i) => e === a2[i % 8]).length;
    let c3 = answers.filter((e, i) => e === a3[i % 10]).length;
    let max = Math.max(c1, c2, c3);

    if (c1 === max) {
        answer.push(1);
    }
    if (c2 === max) {
        answer.push(2);
    }
    if (c3 === max) {
        answer.push(3);
    }

    return answer;
}