function solution(d, budget) {
    let result = 0
    let i = 0;
    d = d.sort((a, b) => a - b)
    while(result<=budget) {
        result += d[i];
        i++;
    }
    return i-1;
}