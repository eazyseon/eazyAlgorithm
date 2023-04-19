function solution(array, com) {
    let answer = [];
    for(let i=0; i<com.length; i++){
        let arr = array.slice(com[i][0]-1,com[i][1]).sort((a,b)=>a-b)
        answer.push(arr[com[i][2]-1])
    }

    return answer;
}
