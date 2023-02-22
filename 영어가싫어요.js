function solution(numbers){
    const arrNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    arrNum.forEach((item,i)=>{
        numbers = numbers.split(item).join(String(i))
    })
    return Number(numbers)
}
