function solution(num, k) {
    let numArr = String(num).split('')

    for(let i=0; i<numArr.length; i++){
        if(numArr[i]===String(k)){
            return i+1
        }
    }
    return -1
}