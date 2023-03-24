function solution(n, k){
    let answer;
    let arr=Array.from({length:n}, (v, i)=>i+1);
    while(arr.length){
        for(let i=1; i<k; i++) arr.push(arr.shift());
        arr.shift();
        if(arr.length===1) answer=arr.shift();
    }
    return answer;
}