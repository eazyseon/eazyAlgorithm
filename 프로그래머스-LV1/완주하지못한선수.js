function solution(participant, completion) {
    let answer = '';
    let objP = {};
    let objC = {};

    for (let x of participant) {
        objP[x] = (objP[x] || 0) + 1;
    }
    for (let x of completion) {
        objC[x] = (objC[x] || 0) + 1;
    }

    for (x in objP) {
        if (!objC.hasOwnProperty(x) || objC[x] !== objP[x]) {
            answer = x;
        }
    }

    return answer;
}