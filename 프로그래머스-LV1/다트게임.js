function solution(dartResult) {
  let sentence = [];
  let temp = 0;
  let answer = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    }

    if (dartResult[i] === "S") {
      sentence.push(temp ** 1);
    }
    if (dartResult[i] === "D") {
      sentence.push(temp ** 2);
    }
    if (dartResult[i] === "T") {
      sentence.push(temp ** 3);
    }
    if (dartResult[i] === "*") {
      sentence[sentence.length - 1] = sentence[sentence.length - 1] * 2;
      sentence[sentence.length - 2] = sentence[sentence.length - 2] * 2;
    }

    if (dartResult[i] === "#") {
      sentence[sentence.length - 1] *= -1;
    }
  }

  for (let i = 0; i < sentence.length; i++) {
    answer += Number(sentence[i]);
  }

  return answer;
}
