function solution(strings, n) {
    for(let i=strings.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(strings[j][n]===strings[j+1][n]){
                if(strings[j]>strings[j+1]){
                    let tmp = strings[j]
                    strings[j]=strings[j+1]
                    strings[j+1] = tmp
                }else{
                    continue;
                }
            }
            if(strings[j][n]>strings[j+1][n]){
                [strings[j+1],strings[j]]=[strings[j],strings[j+1]]
            }
        }
    }
    return strings;
}