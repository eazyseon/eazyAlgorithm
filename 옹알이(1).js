function solution(babbling) {
    let answer = 0;
    const arr = ['aya','ye','woo','ma']
    let word = '';

    for(let i=0; i<babbling.length; i++){
        word = babbling[i]
        for(let j=0; j<arr.length; j++){
            word = word.replaceAll(arr[j],' ')
        }
        if(word.trim().length === 0){
            answer++;
        }
    }
    return answer;
}