function solution(a, b) {
    let answer = 0;

    a.forEach((c,i)=>answer+=c*b[i])
    return answer;
}