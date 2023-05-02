function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let sum = 0;
    for (let i = 0; i < a - 1; i++) {
        sum += days[i];
    }
    sum += b;
    return week[sum % 7];
}