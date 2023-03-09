function solution(cipher, code) {
    let answer = '';
  for(let i=0; i<cipher.length; i++){
    if((i+1)%code===0){
      cipher[i]? answer+=cipher[i] : null
    }
  }
    return answer;
}