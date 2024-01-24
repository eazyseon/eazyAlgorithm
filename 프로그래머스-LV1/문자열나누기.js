function solution(str) {
  let cntA = 0;
  let cntB = 0;
  let answer = 0;
  let tinyStr = "";

  for (let c of str) {
    if (!tinyStr) {
      tinyStr = c;
    }
    tinyStr === c ? cntA++ : cntB++;
    if (cntA === cntB) {
      answer++;
      cntA = 0;
      cntB = 0;
      tinyStr = "";
    }
  }
  if (tinyStr.length > 0) answer++;
  return answer;
}
