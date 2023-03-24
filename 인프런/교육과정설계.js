function solution(need, plan){
    let answer="YES";
    let arr = need.split('');

    for(let x of plan){
        if(arr.includes(x)){
            if(x !== arr.shift())
                return "NO"
        }
    }
    if(arr.length) return "NO";
    return answer;
}