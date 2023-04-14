function solution(arr){
    let answer = [];
    for(let i=0; i<=arr.length-1; i++){
        if(answer[answer.length-1]!==arr[i]){
            answer.push(arr[i])
        }
    }
    return answer;
}