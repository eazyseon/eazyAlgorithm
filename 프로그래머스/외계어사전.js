function solution(spell, dic) {
    let cnt = 0;
    let answer = []


    for(let i=0; i<dic.length; i++){
        cnt = 0;
        for(let j=0; j<spell.length; j++){
            if(dic[i].includes(spell[j])){
                cnt++;
            }
        }
        if(cnt === spell.length){
            answer.push(dic[i])
        }
    }

    return answer.length === 0? 2: 1;
}