function solution(s){
    let answer = ''
    let sH = new Map()
    for(let x of s){
        if(sH.has(x)){
            sH.set(x,sH.get(x)+1)
        }
        else{
            sH.set(x,1)
        }
        let max = Number.MIN_SAFE_INTEGER;
        for(let [key,val] of sH){
            max=val;
            answer=key
        }
        return answer;
    }