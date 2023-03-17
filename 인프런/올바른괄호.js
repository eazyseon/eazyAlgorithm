function solution(s){
    let left = 0;
    let right = 0;

    for(let x of s){
        if(x === '(') left++
        else right++
    }
    if(left===right)
        return 'yes'
    else return 'no'
}