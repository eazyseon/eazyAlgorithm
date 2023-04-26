function solution(food) {
    let answer = '';
    for(let i=0; i<food.length; i++){
        let half = Math.floor(food[i]/2)
        if(half>=1){
            for(let j=0; j<half; j++){
                answer+=i
            }
        }
    }
    const reverseAnwer = answer.split('').reverse().join('')
    return answer+0+reverseAnwer
}