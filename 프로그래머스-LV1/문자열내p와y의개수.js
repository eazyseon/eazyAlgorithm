function solution(s){
  let obj={}
  s=s.toUpperCase()

  for(let k of s){
    obj[k]= (obj[k]||0)+1
  }

 return obj['P']===obj['Y']? true:false
}