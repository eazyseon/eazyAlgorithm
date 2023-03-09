function solution(s) {
    var answer = [];
    let splitArr = s.split('').sort()
    let freCounter = {}

    for(let val of splitArr){
        freCounter[val] = (freCounter[val] || 0) + 1
    }

    for(let key in freCounter){
        if(freCounter[key]===1){
            answer.push(key)
        }
    }
    return answer.join('');
}