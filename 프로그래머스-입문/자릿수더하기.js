function solution(n) {
    let arr = Array.from(n.toString())
    return arr.reduce((acc,cur)=>acc+Number(cur),0)
}