function solution(str1, str2){
    let answer = 'yes'
    let sH = new Map()
    for(let x of str1){
        if(sH.has(x)){
            sH.set(x,sH.get(x)+1)
        }else{
            sH.set(x,1)
        }
    }
    for(let key of str2){
        if(!sH.has(key) || sH.get(key)===0)
            return 'no';
        sH.set(key,sH.get(key)-1)
    }
    return answer;
}