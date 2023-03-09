function solution(order) {
  let answer = 0;
  let arr = Array.from(String(order))
  const obj = {'3':1,'6':1,'9':1}
  for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]){
      answer++;
    }
  }
    return answer;
}