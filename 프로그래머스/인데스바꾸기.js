function solution(my_string, num1, num2) {
    var answer = '';
  let str1 = my_string[num1]
  let str2 = my_string[num2]
  let splitStr = my_string.split('')

 for(let i=0; i<2; i++){
  splitStr[num1] = str2
  splitStr[num2] = str1

 }
    return splitStr.join('');
}