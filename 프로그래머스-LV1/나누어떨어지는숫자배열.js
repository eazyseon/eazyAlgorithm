function solution(arr, divisor) {
    let filterArr = arr.filter(el=>el%divisor===0).sort((a,b)=>a-b)

    return filterArr.length ? filterArr : [-1]
}