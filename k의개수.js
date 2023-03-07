function solution(i, j, k) {
    let answer = 0;
    for(let a=i; a<=j; a++){
        const str = a.toString().split(k)
        for(let b=0; b<str.length; b++){
            if(str[b].includes(k)){
                answer++
            }
        }
    }
    return answer;
}