function solution(sides) {
    let answer = 0;
    let maxN = Math.max(sides[0],sides[1])
    let minN = Math.min(sides[0],sides[1])
    let sumN = sides[0]+sides[1]

    //두 수 보다 큰 경우 - max보다 크고 두 수의 합보다 작은 수 구하기
    for(let i=maxN+1; i<sumN; i++){
        answer++;
    }
    //max가 가장 클 경우 - max보다 작거나 같고 합이 max보다 큰 수
    for(let i=1; i<=maxN; i++){
        if(minN+i>maxN){answer++;}
    }
    return answer;
}