function solution(my_str, n) {
    let answer = [];
    let cnt = 0
    while(cnt<my_str.length){
        answer.push(my_str.substr(cnt,n))
        cnt+=n
    }
    return answer;
}