function solution (arr){
    let answer = arr;
    arr.sort((a,b)=>{
        if(a[0]===b[0])return a[1]-b[1];
        else return a[0]-b[0];
    });
    return answer;
}