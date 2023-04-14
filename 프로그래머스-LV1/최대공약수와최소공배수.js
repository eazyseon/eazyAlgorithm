function solution(n, m) {
    const answer = [];
    const obj1 = {}
    const obj2 = {}
    let num = 0;

    for(let i=1; i<=n; i++){
        if(n%i===0) obj1[i]=(obj1[i]||0)+1
    }
    for(let i=1; i<=m; i++){
        if(m%i===0) obj2[i]=(obj2[i]||0)+1
    }
    for(let x in obj1){
        if(obj1[x]===obj2[x])
            num=Number(x)
    }
    answer.push(num)
    answer.push(n*m/num)
    return answer;
}