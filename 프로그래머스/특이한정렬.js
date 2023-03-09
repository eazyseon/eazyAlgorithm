function solution(numlist, n) {
    return numlist.sort((a, b) => {
        if (Math.abs(a - n) === Math.abs(b - n)) {
            return a < b ? 1 : -1
        }
        return Math.abs(a - n) - Math.abs(b - n)
    })
}