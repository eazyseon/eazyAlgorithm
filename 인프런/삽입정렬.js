function solution(arr) {
    let answer = arr;
    for(let i=0; i<arr.length; i++){
        let tmp = arr[i], j;
        for(j=i-1; j>=0; j--){
            if(arr[j]>tmp){
                arr[j+1]=arr[j]
            }else
                break;
        }
        arr[j+1]=tmp;
    }
    return answer;
}