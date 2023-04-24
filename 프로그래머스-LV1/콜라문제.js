function solution(a, b, n) {
    let inputCola = 0;

    while (n >= a) {
        inputCola += Math.floor(n / a)*b;
        n = Math.floor(n/a)*b + n%a
    }

    return inputCola;
}