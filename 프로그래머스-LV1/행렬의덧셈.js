function solution(arr1, arr2) {
    let answer = [];

    for(let i=0; i<=arr1.length-1; i++){
        let sum = []
        for(let j=0; j<=arr1[0].length-1; j++){
            sum.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(sum)
    }
    return answer;
}