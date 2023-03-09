function solution(M, N) {
    if(M===1 && N===1)return 0;

    let mCnt = 0;
    let nCnt = 0;
    //가로가 1 될 때까지
    for(let i=M; i>1; i--){
        mCnt++;
    }
    //세로가 1될때까지
    for(let i=N; i>1; i--){
        nCnt++;
    }
    return mCnt + nCnt*M
}