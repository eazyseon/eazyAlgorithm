function solution(num) {
    let cnt = 0;
    if(num===1) return 0;

    while(num>=1 && cnt<500){
        if(num===1)return cnt;

        num%2? num=(num*3)+1: num=num/2
        cnt++;
    }

    return -1;
}