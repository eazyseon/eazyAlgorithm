function solution(name, yearning, photo) {
    let answer = [];
    let obj = {}


    for(let i=0; i<name.length; i++){
        obj[name[i]] = yearning[i]
    }

    for(let i=0; i<photo.length; i++){
        let num = 0;
        for(let j=0; j<photo[i].length; j++){
            let key = photo[i][j]
            obj[key]? num+=obj[key] :num+=0
        }
        answer.push(num)
    }
    return answer;
}