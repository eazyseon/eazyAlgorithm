function solution(s) {
    const numObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    };

    for (let x in numObj) {
        s = s.replaceAll(x, numObj[x]);
    }
    return Number(s);
}