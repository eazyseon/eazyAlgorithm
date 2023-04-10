function solution(n) {
    let splitN=(n+"").split('')

    for(let i=splitN.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(parseInt(splitN[j])<parseInt(splitN[j+1])){
                [splitN[j],splitN[j+1]]=[splitN[j+1],splitN[j]]
            }
        }
    }
    return parseInt(splitN.join(''));
}