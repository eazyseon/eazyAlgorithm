function pickUp(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order]) {
      const doll = board[i][order];
      board[i][order] = 0;
      return doll;
    }
  }
}

function solution(board, moves) {
  let answer = 0;
  const basket = [];

  moves.forEach((order) => {
    const doll = pickUp(board, order - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return answer;
}

function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];
      if (item === 0) continue;

      if (item === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(item);
      }
      board[i][move - 1] = 0;
      console.log(item);
      break;
    }
  });
  return answer;
}
