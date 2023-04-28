function solution(X, Y) {
    let answer = '';
    let objX = {};
    let objY = {};
    for (let k of X) {
        objX[k] = (objX[k] || 0) + 1;
    }
    for (let k of Y) {
        objY[k] = (objY[k] || 0) + 1;
    }
    for (let k in objX) {
        if (objY.hasOwnProperty(k)) {
            let min = Math.min(objX[k], objY[k]);
            answer += k.repeat(min);
        }
    }
    if (answer === '') return '-1';
    if (Number(answer) === 0) return '0';

    return answer
        .split('')
        .sort((a, b) => b - a)
        .join('');
}