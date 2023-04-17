function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        let asc = s.charCodeAt(i)
        if (asc >= 65 && asc <= 90) {
            asc += n;
            if (asc > 90) {
                console.log(asc)
                asc -= 26;
            }
        }
        else if (asc >= 97 && asc <= 122) {
            asc += n;
            if (asc > 122) {
                asc -= 26;
            }
        }
        answer += String.fromCharCode(asc);
    }
    return answer;
}
