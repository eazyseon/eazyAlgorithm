function solution(A, B) {
    if(A===B)return 0;
    if(A.length !== B.length)return -1;

    let cnt = 0;
    let arr = A.split('');

    for(let i=0; i<arr.length-1; i++){
        let lastEl = arr.pop()
        arr.unshift(lastEl)
        cnt ++;

        if(arr.join('')===B){
            return cnt;
        }
    }
    return -1;
}