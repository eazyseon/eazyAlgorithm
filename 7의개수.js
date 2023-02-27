function solution(array) {
    let answer = 0;
    let str = array.join('').toString()

    for(let i=0; i<str.length; i++){
        if(Number(str[i])===7){
            answer++;
        }
    }
    return answer;
}