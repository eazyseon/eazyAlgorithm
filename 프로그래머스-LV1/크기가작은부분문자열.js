function solution(t, p) {
    let count = 0;

    for (let i = 0; i <= t.length - p.length; i++) {
        let part = t.slice(i, i+p.length);
        let num = Number(part);

        if (num <= Number(p)) count++
    }
    return count;
}