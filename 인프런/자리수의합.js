function solution(n, arr){
    let sum = 0;
    let maxN = 0;
    let answer = '';

    for(let i=0; i<n; i++){
        sum=0;
        let miniArr = arr[i].toString()
        for(let j=0; j<miniArr.length; j++){
            sum+=Number(miniArr[j])
        }
        if(sum>maxN){
            maxN=sum
            answer = arr[i]
        }
        else if(sum===maxN){
            answer = arr[i]>answer? arr[i]:answer
        }
    }
    return answer;
}
