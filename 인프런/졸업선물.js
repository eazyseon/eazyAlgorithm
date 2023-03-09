function solution(m, product){
    let answer=0;
    let sortArr = product.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]))
    for(let i=0; i<product.length; i++){
        let money = m-(sortArr[i][0]/2+sortArr[i][1])
        let cnt =1;
        for(let j=0; j<product.length; j++){
            if(j!==i && (sortArr[j][0]+sortArr[j][1])>money)break;
            if(j!==i && (sortArr[j][0]+sortArr[j][1])<=money){
                money-=(sortArr[j][0]+sortArr[j][1])
                cnt++;
            }
        }
        answer=Math.max(answer,cnt)
    }
    return answer;
}