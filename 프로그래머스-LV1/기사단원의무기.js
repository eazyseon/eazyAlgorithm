function countDivisors(n) {
  let count = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count + 1;
}

function solution(number, limit, power) {
  const divisorList = [];
  for (let i = 1; i <= number; i++) {
    const count = countDivisors(i);
    divisorList.push(count);
  }

  const answer = divisorList.reduce((acc, item) => {
    if (item > limit) {
      acc += power;
    } else {
      acc += item;
    }

    return acc;
  }, 0);

  return answer;
}

solution(10, 3, 2);
