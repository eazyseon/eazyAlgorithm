function solution(array, n) {
    var answer = 0;
    let minAbs = 99999999;
    const sortArray = array.sort((a,b)=>a-b)

    for(let i=0; i<sortArray.length; i++){
        const item = sortArray[i];
        if(minAbs > Math.abs(n-item)){
            minAbs = Math.abs(n-item)
            answer=item;
        }
    }
    return  answer;
}