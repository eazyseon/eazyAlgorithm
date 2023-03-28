function solution(arr){
    let answer = []
    let sortArr = [...arr];
    sortArr.sort((a,b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==sortArr[i])answer.push(i+1)
    }
    return answer;
}