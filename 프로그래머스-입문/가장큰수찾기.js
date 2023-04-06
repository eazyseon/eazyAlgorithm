function solution(array) {
    let answer = [];
    let minNum = 0;

    for(let i=0; i<array.length; i++){
        if(minNum<array[i]){
            minNum = array[i]
            answer = [array[i],i]
        }
    }
    return answer;
}