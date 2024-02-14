function solution(today, terms, privacies) {
  let answer = [];
  let termType = {};
  const expire = new Date(today);

  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const chDate = new Date(date);

    chDate.setMonth(chDate.getMonth() + termType[type]);

    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}
