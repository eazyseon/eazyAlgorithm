function solution(N, stages) {
    const answer = [];
    let stagesObj = {};
    let fails = [];

    for (let x of stages) {
        stagesObj[x] = (stagesObj[x] || 0) + 1;
    }

    for (let i = 1; i <= N; i++) {
        let allChallenger = stages.length;
        let stageChallenger = 0;
        for (let j = 1; j <= i - 1; j++) {
            stageChallenger += stagesObj[j] || 0;
        }
        fails.push([i, stagesObj[i] / (allChallenger - stageChallenger) || 0]);
    }
    let sortFails = fails.sort((a, b) => b[1] - a[1]);

    return sortFails.map((el, i) => el[0]);
}