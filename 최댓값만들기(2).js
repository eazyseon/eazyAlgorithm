function solution(numbers) {
    let answer = 0;
    let sortArr = numbers.sort((a,b)=>b-a)
    let lng = numbers.length;
    answer=sortArr[0]*sortArr[1]>sortArr[lng-1]*sortArr[lng-2]?sortArr[0]*sortArr[1]:sortArr[lng-1]*sortArr[lng-2]
    return answer;
}