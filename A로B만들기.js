function solution(before, after) {
    let beforeObj = {}
    let afterObj = {}

    for(let key of before){
        beforeObj[key] = (beforeObj[key]||0)+1
    }
    for(let key of after){
        afterObj[key] = (afterObj[key]||0)+1
    }
    for(let key in beforeObj){
        if(beforeObj[key] !== afterObj[key]){
            return 0;
        }
    }
    return 1;
}