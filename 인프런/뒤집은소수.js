function solution(arr){

    function isPrime(num){
        if(num===1)return false;
        for(let i=2; i<=parseInt(num/2); i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }

    let answer =[]
    for (let x of arr){
        let res=0;
        while(x){
            let t=x%10;
            res = res*10 + t;
            x=parseInt(x/10)
        }
        if(isPrime(res)){
            answer.push(res)
        }
    }
    return answer
}