function solution(survey, choices) {
  const surveyOrder = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  const surveyScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((n, idx) => {
    const type = n.split("");

    if (choices[idx] < 4) {
      console.log(surveyScore[type[0]]);
      surveyScore[type[0]] += 4 - choices[idx];
    }
    if (choices[idx] > 4) {
      surveyScore[type[1]] += choices[idx] - 4;
    }
  });

  return surveyOrder
    .map(([a, b]) => {
      if (surveyScore[a] < surveyScore[b]) {
        return [b];
      }
      return [a];
    })
    .join("");
}
