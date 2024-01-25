function solution(keymap, targets) {
  let answer = [];
  let cnt = 0;

  const keymapBox = keymap.reduce((acc, cur) => {
    [...cur].forEach((alphabet, index) => {
      acc[alphabet] = acc[alphabet] < index + 1 ? acc[alphabet] : index + 1;
    });
    return acc;
  }, {});

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      cnt += keymapBox[targets[i][j]];
    }
    answer.push(cnt ? cnt : -1);
    cnt = 0;
  }
  return answer;
}
