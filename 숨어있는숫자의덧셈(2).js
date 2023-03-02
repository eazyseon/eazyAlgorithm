function solution(my_string) {
    let answer = 0;
    let num = '';

    for(let i=0; i<my_string.length; i++){

        if(Number(my_string[i]) || Number(my_string[i])===0){
            num+=my_string[i]

            if(isNaN(Number(my_string[i+1]))){
                answer+=Number(num)
                num=''
            }
        }
    }
    return answer;
}