function solution (meeting){
    let answer = 0;
    meeting.sort((a,b)=>{
        if(a[1]===b[1])return a[0]-b[0];
        else return a[1]-b[1];
    })
    let et=0;
    for(let x of meeting){
        if(x[0]>=et){
            answer++;
            et=x[1]
        }
    }
    return answer;
}