function solution(numbers, hand) {
  let answer = "";
  let leftHandPosition = "*";
  let rightHandPosition = "#";

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      leftHandPosition = num;
      return;
    }

    if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      rightHandPosition = num;
      return;
    }

    const leftHandDistance = getDistance(leftHandPosition, num);
    const rightHandDistance = getDistance(rightHandPosition, num);

    if (leftHandDistance === rightHandDistance) {
      if (hand === "right") {
        answer += "R";
        rightHandPosition = num;
        return;
      } else {
        answer += "L";
        leftHandPosition = num;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer += "R";
      rightHandPosition = num;
    } else {
      answer += "L";
      leftHandPosition = num;
    }
  });

  return answer;
}

const getDistance = (locatedNumber, target) => {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[target];

  return (
    Math.abs(targetPosition[0] - nowPosition[0]) +
    Math.abs(targetPosition[1] - nowPosition[1])
  );
};
