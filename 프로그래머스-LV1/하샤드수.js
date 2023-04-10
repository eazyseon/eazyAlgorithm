function solution(x) {
    let originalX=x
    let num = 0;
    while(x>0){
        num+=Math.floor(x%10)
        x=x/10
    }
    return originalX%num? false : true
}